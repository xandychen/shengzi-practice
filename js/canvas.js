/**
 * HandwritingCanvas - Apple Pencil 手寫畫布模組
 * 支援壓感、傾斜、描紅、臨摹模式
 */
const HandwritingCanvas = {
  /** 預設設定 */
  config: {
    penColor: '#333333',
    penWidth: 6,
    minPenWidth: 2,
    maxPenWidth: 12,
    pressureEnabled: true,
    mode: 'free',       // 'free' | 'trace' | 'copy'
    grid: 'mi',         // 'mi' | 'tian' | 'fang' | 'none'
    gridColor: '#ece4d6',
    templateColor: '#d0c8c0',
    backgroundColor: '#fffef8',
    templateChar: null, // { char, zhuyin }
    cellSize: 300,
    undoStack: [],
    maxUndo: 30
  },

  /** DOM 元素 */
  elements: {
    container: null,
    mainCanvas: null,    // 底層：格線 + 模板字
    drawCanvas: null,    // 上層：手寫
    wrapper: null,
    snapshotCanvas: null // 快取畫布（用於快速 undo，避免 toDataURL 卡頓）
  },

  /** 繪圖狀態 */
  state: {
    isDrawing: false,
    lastX: 0,
    lastY: 0,
    currentStroke: [],
    pointerType: null,   // 'pen' | 'touch' | 'mouse'
    pressure: 0,
    snapshot: null        // 用於 undo
  },

  /** 初始化畫布 */
  init(containerId) {
    const container = document.getElementById(containerId);
    if (!container) {
      console.error('Container not found:', containerId);
      return;
    }
    this.elements.container = container;

    // 建立 wrapper
    const wrapper = document.createElement('div');
    wrapper.className = 'canvas-wrapper';
    wrapper.style.cssText = `
      position: relative;
      display: inline-block;
      touch-action: none;
      -webkit-user-select: none;
      user-select: none;
    `;

    // 底層 canvas（格線 + 模板）
    const mainCanvas = document.createElement('canvas');
    mainCanvas.className = 'hw-main-canvas';
    mainCanvas.style.cssText = 'display: block; position: absolute; top: 0; left: 0;';

    // 上層 canvas（手寫）
    const drawCanvas = document.createElement('canvas');
    drawCanvas.className = 'hw-draw-canvas';
    drawCanvas.style.cssText = 'display: block; position: absolute; top: 0; left: 0; z-index: 2;';

    // 快照 canvas（隱藏，用於快速 undo，不阻塞主線程）
    const snapshotCanvas = document.createElement('canvas');

    wrapper.appendChild(mainCanvas);
    wrapper.appendChild(drawCanvas);
    container.appendChild(wrapper);

    this.elements.mainCanvas = mainCanvas;
    this.elements.drawCanvas = drawCanvas;
    this.elements.wrapper = wrapper;
    this.elements.snapshotCanvas = snapshotCanvas;

    // 綁定事件
    this._bindEvents(drawCanvas);

    // 初始渲染
    this._resize();
    this._renderBackground();

    // 監聽 resize
    window.addEventListener('resize', () => {
      this._resize();
      this._renderBackground();
    });

    return this;
  },

  /** 設定 DPI 自適應 */
  _resize() {
    const dpr = window.devicePixelRatio || 1;

    // 根據 wrapper CSS 寬度動態決定 cellSize（mobile 小一點）
    if (this.elements.wrapper) {
      const wrapperWidth = parseFloat(getComputedStyle(this.elements.wrapper).width);
      this.config.cellSize = Math.round(wrapperWidth - 40);
    }

    const size = this.config.cellSize * dpr;
    const margin = 20 * dpr;
    const fullSize = size + margin * 2;

    [this.elements.mainCanvas, this.elements.drawCanvas, this.elements.snapshotCanvas].forEach(canvas => {
      canvas.width = fullSize;
      canvas.height = fullSize;
    });

    // CSS 尺寸（邏輯像素）
    this.elements.mainCanvas.style.width = (this.config.cellSize + 40) + 'px';
    this.elements.mainCanvas.style.height = (this.config.cellSize + 40) + 'px';
    this.elements.drawCanvas.style.width = (this.config.cellSize + 40) + 'px';
    this.elements.drawCanvas.style.height = (this.config.cellSize + 40) + 'px';

    // 底層：一次性設定 DPI transform
    const mainCtx = this.elements.mainCanvas.getContext('2d');
    mainCtx.setTransform(dpr, 0, 0, dpr, 0, 0);

    // 手寫層：一次性設定 DPI transform，之後 _drawLine 不再改
    const drawCtx = this.elements.drawCanvas.getContext('2d');
    drawCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
  },

  /** 渲染背景（格線 + 模板字） */
  _renderBackground() {
    if (!this.elements.mainCanvas) return;
    const ctx = this.elements.mainCanvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    const size = this.config.cellSize;
    const margin = 20;
    const center = margin + size / 2;

    // 清除
    ctx.save();
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, this.elements.mainCanvas.width, this.elements.mainCanvas.height);
    ctx.restore();

    // 背景色
    ctx.fillStyle = this.config.backgroundColor;
    ctx.fillRect(0, 0, size + margin * 2, size + margin * 2);

    // 練習區外框（極淺，不干擾書寫）
    ctx.strokeStyle = 'rgba(180, 170, 150, 0.25)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.roundRect(margin, margin, size, size, 8);
    ctx.stroke();

    // 畫格線
    this._drawGrid(ctx, margin, size, center);

    // 畫模板字
    if (this.config.templateChar && this.config.mode === 'trace') {
      this._drawTemplate(ctx, center, size);
    }
  },

  /** 畫格線 */
  _drawGrid(ctx, margin, size, center) {
    ctx.strokeStyle = this.config.gridColor;
    ctx.lineWidth = 0.5;
    ctx.setLineDash([4, 8]);

    if (this.config.grid === 'mi') {
      // 米字格：十字 + 叉字
      this._drawGuideLine(ctx, margin, center, size, 'cross');
      this._drawGuideLine(ctx, margin, center, size, 'diag');
    } else if (this.config.grid === 'tian') {
      // 田字格：十字
      this._drawGuideLine(ctx, margin, center, size, 'cross');
    } else if (this.config.grid === 'fang') {
      // 方格：只用外框
    }
    // 'none': 什麼都不加

    ctx.setLineDash([]);
  },

  _drawGuideLine(ctx, margin, center, size, type) {
    ctx.beginPath();
    if (type === 'cross') {
      ctx.moveTo(margin, center); ctx.lineTo(margin + size, center);
      ctx.moveTo(center, margin); ctx.lineTo(center, margin + size);
    } else if (type === 'diag') {
      ctx.moveTo(margin, margin); ctx.lineTo(margin + size, margin + size);
      ctx.moveTo(margin + size, margin); ctx.lineTo(margin, margin + size);
    }
    ctx.stroke();
  },

  /** 畫模板字（描紅） */
  _drawTemplate(ctx, center, size) {
    const char = this.config.templateChar.char;
    const fontSize = size * 0.65;

    ctx.save();
    ctx.fillStyle = this.config.templateColor;
    ctx.font = `${fontSize}px "STKaiti", "KaiTi", "楷体", "DFKai-SB", "BiauKai", "TW-Kai", serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(char, center, center);

    // 如果模式是「描紅」，加深一點讓小朋友看得清楚
    if (this.config.mode === 'trace') {
      ctx.fillStyle = 'rgba(180, 170, 155, 0.55)';
      ctx.fillText(char, center, center);
    }
    ctx.restore();
  },

  /** 綁定事件 */
  _bindEvents(canvas) {
    // pointerdown - 開始畫（僅觸控筆，手指不理）
    canvas.addEventListener('pointerdown', (e) => {
      e.preventDefault();
      if (e.pointerType !== 'pen') return;
      this.state.isDrawing = true;
      this.state.pointerType = e.pointerType;
      this.state.pressure = e.pressure || 0.5;

      // 儲存當前狀態用於 undo
      this._saveSnapshot();

      // 開始新筆劃
      this.state.currentStroke = [];

      const pos = this._getCanvasPos(e);
      this.state.lastX = pos.x;
      this.state.lastY = pos.y;

      this.state.currentStroke.push({ x: pos.x, y: pos.y, pressure: e.pressure || 0.5, type: 'start' });
    });

    // pointermove - 畫線
    canvas.addEventListener('pointermove', (e) => {
      if (!this.state.isDrawing) return;
      e.preventDefault();

      this.state.pressure = e.pressure || 0.5;

      const pos = this._getCanvasPos(e);
      this._drawLine(this.state.lastX, this.state.lastY, pos.x, pos.y, e.pressure);

      this.state.currentStroke.push({ x: pos.x, y: pos.y, pressure: e.pressure || 0.5, type: 'move' });
      this.state.lastX = pos.x;
      this.state.lastY = pos.y;
    });

    // pointerup - 結束畫
    canvas.addEventListener('pointerup', (e) => {
      if (!this.state.isDrawing) return;
      this.state.isDrawing = false;
      this.state.currentStroke.push({ x: this.state.lastX, y: this.state.lastY, pressure: 0, type: 'end' });
    });

    // pointerleave - 筆離開
    canvas.addEventListener('pointerleave', (e) => {
      if (this.state.isDrawing) {
        this.state.isDrawing = false;
      }
    });

    // pointercancel - 取消
    canvas.addEventListener('pointercancel', (e) => {
      this.state.isDrawing = false;
    });

    // 防止 iOS 上的雙擊縮放
    canvas.addEventListener('dblclick', (e) => {
      e.preventDefault();
    });
  },

  /** 獲取 canvas 相對座標 */
  _getCanvasPos(e) {
    const rect = this.elements.drawCanvas.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  },

  /** 畫一條線段 — DPR transform 已在 _resize 設定，不再每幀重設 */
  _drawLine(fromX, fromY, toX, toY, pressure) {
    const ctx = this.elements.drawCanvas.getContext('2d');
    const baseWidth = this.config.penWidth;

    let lineWidth = baseWidth;
    if (this.config.pressureEnabled) {
      const p = pressure !== undefined ? pressure : 0.5;
      lineWidth = baseWidth * (0.4 + p * 1.0);
      lineWidth = Math.max(1, Math.min(baseWidth * 1.5, lineWidth));
    }

    ctx.strokeStyle = this.config.penColor;
    ctx.lineWidth = lineWidth;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    ctx.beginPath();
    ctx.moveTo(fromX, fromY);
    ctx.lineTo(toX, toY);
    ctx.stroke();
  },

  /** 儲存快照（用於 undo）— 使用 getImageData 取代 toDataURL，不編碼 PNG 直接存像素 */
  _saveSnapshot() {
    if (!this.elements.drawCanvas) return;
    const ctx = this.elements.drawCanvas.getContext('2d');
    // 先重設為 identity 才能拿到原始像素
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    const data = ctx.getImageData(0, 0, this.elements.drawCanvas.width, this.elements.drawCanvas.height);
    // 恢復 DPR transform
    const dpr = window.devicePixelRatio || 1;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    this.config.undoStack.push(data);
    if (this.config.undoStack.length > this.config.maxUndo) {
      this.config.undoStack.shift();
    }
  },

  // ====== 公開方法 ======

  /** 復原上一步 */
  undo() {
    if (this.config.undoStack.length === 0) return;
    const data = this.config.undoStack.pop();
    const ctx = this.elements.drawCanvas.getContext('2d');
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.putImageData(data, 0, 0);
    const dpr = window.devicePixelRatio || 1;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  },

  /** 清除手寫 */
  clear() {
    this._saveSnapshot();
    if (!this.elements.drawCanvas) return;
    const ctx = this.elements.drawCanvas.getContext('2d');
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, this.elements.drawCanvas.width, this.elements.drawCanvas.height);
    const dpr = window.devicePixelRatio || 1;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  },

  /** 設定新的練習字 */
  setChar(charData) {
    this.config.templateChar = charData;
    this._resize();
    this._renderBackground();
    this.clear();
  },

  /** 設定練習模式 */
  setMode(mode) {
    this.config.mode = mode;
    this._renderBackground();
    this.clear();
  },

  /** 設定格線 */
  setGrid(grid) {
    this.config.grid = grid;
    this._renderBackground();
  },

  /** 設定筆色 */
  setPenColor(color) {
    this.config.penColor = color;
  },

  /** 設定筆寬 */
  setPenWidth(width) {
    this.config.penWidth = width;
  },

  /** 匯出圖片 (dataURL) */
  exportImage() {
    if (!this.elements.drawCanvas) return null;
    // 合併底層和手寫層
    const combined = document.createElement('canvas');
    const dpr = window.devicePixelRatio || 1;
    const size = this.elements.mainCanvas.width;
    combined.width = size;
    combined.height = size;
    const ctx = combined.getContext('2d');
    ctx.drawImage(this.elements.mainCanvas, 0, 0);
    ctx.drawImage(this.elements.drawCanvas, 0, 0);
    return combined.toDataURL('image/png');
  },

  /** 銷毀 */
  destroy() {
    if (this.elements.wrapper) {
      this.elements.wrapper.remove();
    }
    this.elements = {};
    this.config.undoStack = [];
  },

  /** 計算相似度：極度寬鬆，只用覆蓋率打分 */
  calcSimilarity() {
    if (!this.config.templateChar || !this.elements.drawCanvas || !this.elements.mainCanvas) return 0;

    const dpr = window.devicePixelRatio || 1;
    const size = this.config.cellSize;
    const margin = 20;

    // 1. 建立暫時畫布，畫上「超胖模板」
    const tmpCanvas = document.createElement('canvas');
    tmpCanvas.width = this.elements.mainCanvas.width;
    tmpCanvas.height = this.elements.mainCanvas.height;
    const tctx = tmpCanvas.getContext('2d');
    tctx.scale(dpr, dpr);

    const center = margin + size / 2;
    const ch = this.config.templateChar.char;

    // 三層疊加：正常 + 1.15x + 1.3x，建立極度寬鬆的比對區域
    const baseSize = size * 0.65;
    const fontStr = (s) => `${s}px "STKaiti", "KaiTi", "楷体", "DFKai-SB", "BiauKai", "TW-Kai", serif`;
    tctx.fillStyle = '#000000';
    tctx.textAlign = 'center';
    tctx.textBaseline = 'middle';

    tctx.font = fontStr(baseSize);
    tctx.fillText(ch, center, center);
    tctx.font = fontStr(baseSize * 1.15);
    tctx.fillText(ch, center, center);
    tctx.font = fontStr(baseSize * 1.3);
    tctx.fillText(ch, center, center);

    // 半徑拉到 6px，大量偏移涵蓋各種手寫風格
    for (let r = 1; r <= 6; r++) {
      for (let dx = -r; dx <= r; dx++) {
        for (let dy = -r; dy <= r; dy++) {
          if (dx === 0 && dy === 0) continue;
          tctx.font = fontStr(baseSize);
          tctx.fillText(ch, center + dx, center + dy);
        }
      }
    }

    // 2. 取得手寫層與超胖模板像素
    const drawCtx = this.elements.drawCanvas.getContext('2d');
    const drawData = drawCtx.getImageData(0, 0, this.elements.drawCanvas.width, this.elements.drawCanvas.height);
    const tmplData = tctx.getImageData(0, 0, tmpCanvas.width, tmpCanvas.height);

    // 3. 純覆蓋率計算
    const drawPixels = drawData.data;
    const tmplPixels = tmplData.data;
    let coveredPixels = 0;
    let totalTmpl = 0;

    for (let i = 3; i < drawPixels.length; i += 4) {
      if (tmplPixels[i] > 15) {
        totalTmpl++;
        if (drawPixels[i] > 15) coveredPixels++;
      }
    }

    if (totalTmpl === 0) return 0;

    // 覆蓋率直接當分數，不再扣精度
    const coverage = (coveredPixels / totalTmpl) * 100;

    // 基本分 30，上限 100
    return Math.min(100, Math.max(30, Math.round(coverage)));
  }
};

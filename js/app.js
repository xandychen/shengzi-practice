/**
 * 國小國語生字練習 APP - 主要邏輯
 */
const App = {
  currentGrade: 1,
  currentSemester: '上',
  currentLessonIndex: 0,
  currentCharIndex: 0,
  currentMode: 'trace', // 'trace' | 'copy'

  init() {
    // 初始化手寫畫布
    HandwritingCanvas.init('canvas-container');

    // 載入進度
    this.loadProgress();

    // 渲染首頁：年級、學期、課文列表
    this.renderGradeSelector();
    this.renderSemesterTabs();
    this.renderLessonList();
    this.bindEvents();
  },

  // ====== 頁面切換 ======
  showPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const page = document.getElementById(pageId);
    if (page) page.classList.add('active');

    // 切換到練習頁時重新渲染畫布
    if (pageId === 'practice-page') {
      // 需要等 DOM 顯示後才能正確獲取尺寸
      requestAnimationFrame(() => {
        HandwritingCanvas._resize();
        HandwritingCanvas._renderBackground();
      });
    }
  },

  // ====== 年級選擇器 ======
  renderGradeSelector() {
    const container = document.getElementById('grade-list');
    if (!container) return;
    const grades = CharacterData.getGradeList();
    container.innerHTML = grades.map(g => `
      <button class="grade-btn ${g.grade === this.currentGrade ? 'active' : ''}"
              data-grade="${g.grade}">
        <span class="grade-icon">${['','📗','📘','📙','📕','📓','📔'][g.grade] || '📖'}</span>
        <span class="grade-name">${g.name}</span>
      </button>
    `).join('');
  },

  renderSemesterTabs() {
    const container = document.getElementById('semester-tabs');
    if (!container) return;
    const gradeData = CharacterData.getGradeData(this.currentGrade);
    if (!gradeData) return;
    const semesters = Object.entries(gradeData.semesters);
    container.innerHTML = semesters.map(([k, v]) => `
      <button class="semester-btn ${k === this.currentSemester ? 'active' : ''}"
              data-semester="${k}">${v.name}</button>
    `).join('');
  },

  renderLessonList() {
    const container = document.getElementById('lesson-list');
    if (!container) return;
    const semData = CharacterData.getSemesterData(this.currentGrade, this.currentSemester);
    if (!semData) return;

    const progress = this.getProgress();

    container.innerHTML = semData.lessons.map((les, i) => {
      const totalChars = les.chars.length;
      const completedChars = this._countCompleted(les, progress);
      const pct = totalChars > 0 ? Math.round((completedChars / totalChars) * 100) : 0;
      const isActive = i === this.currentLessonIndex;

      return `
        <div class="lesson-card ${isActive ? 'active' : ''}" data-lesson="${i}">
          <div class="lesson-header">
            <span class="lesson-title">${les.title}</span>
            <span class="lesson-badge">${les.chars.length}字</span>
          </div>
          <div class="lesson-chars">${les.chars.slice(0, 8).map(c => c.char).join(' ')}${les.chars.length > 8 ? '…' : ''}</div>
          <div class="lesson-progress">
            <div class="progress-bar">
              <div class="progress-fill" style="width:${pct}%"></div>
            </div>
            <span class="progress-text">${completedChars}/${totalChars}</span>
          </div>
        </div>
      `;
    }).join('');
  },

  /** 渲染生字清單（練習頁面內的橫向選擇） */
  renderCharList() {
    const container = document.getElementById('char-strip');
    if (!container) return;
    const chars = CharacterData.getLessonChars(this.currentGrade, this.currentSemester, this.currentLessonIndex);
    const progress = this.getProgress();
    const lessonId = this._getLessonId();

    container.innerHTML = chars.map((ch, i) => {
      const charId = `${lessonId}:${ch.char}`;
      const done = progress.completedChars && progress.completedChars.includes(charId);
      return `
        <button class="char-chip ${i === this.currentCharIndex ? 'active' : ''} ${done ? 'done' : ''}"
                data-char="${i}">
          <span class="chip-char">${ch.char}</span>
          ${done ? '<span class="chip-check">✓</span>' : ''}
        </button>
      `;
    }).join('');
  },

  /** 載入當前生字 */
  loadCurrentChar() {
    const chars = CharacterData.getLessonChars(this.currentGrade, this.currentSemester, this.currentLessonIndex);
    if (chars.length === 0) return;
    const charData = chars[this.currentCharIndex];

    // 更新手寫畫布
    HandwritingCanvas.setChar(charData);
    // 同步模式（確保描紅範字首次就顯示）
    HandwritingCanvas.setMode(this.currentMode);

    // 更新顯示
    this.updateCharDisplay(charData);

    // 更新生字清單高亮
    this.renderCharList();

    // 更新課文標題
    this._updateLessonTitle();

    // 進度顯示
    this.updateProgressSummary();
  },

  _updateLessonTitle() {
    const el = document.getElementById('current-lesson-title');
    if (!el) return;
    const semData = CharacterData.getSemesterData(this.currentGrade, this.currentSemester);
    if (!semData || !semData.lessons[this.currentLessonIndex]) return;
    const gradeData = CharacterData.getGradeData(this.currentGrade);
    el.textContent = `${gradeData.name} ${this.currentSemester === '上' ? '上' : '下'}學期 — ${semData.lessons[this.currentLessonIndex].title}`;
  },

  /** 更新生字資訊顯示 */
  updateCharDisplay(charData) {
    const el = document.getElementById('char-info');
    if (!el) return;

    const modeLabels = {
      trace: '描紅練習',
      copy: '自己寫'
    };

    // 取得該字的詞語與造句
    const phraseData = CharacterData.getCharPhrases ? CharacterData.getCharPhrases(charData.char) : null;
    const sentences = phraseData ? (phraseData.sentences || (phraseData.sentence ? [phraseData.sentence] : [])) : [];
    const wordsHtml = phraseData ? `
      <div class="char-phrases">
        <div class="phrases-title">📚 詞語與造句</div>
        <div class="phrase-words">${phraseData.words.map(w => `<span class="phrase-word">${w}</span>`).join('')}</div>
        <div class="phrase-sentences">${sentences.map((s, i) => `<div class="phrase-sentence">${i+1}. ${s}</div>`).join('')}</div>
        <button id="btn-listen-example" class="btn-listen-example">🔊 聽範例</button>
      </div>
    ` : '';

    el.innerHTML = `
      <div class="char-display">
        <div class="char-main">
          <div class="char-big">${charData.char}</div>
          <div class="char-zhuyin">${charData.zhuyin}</div>
          <button id="btn-speak" class="btn-speak">🔊 聽發音</button>
        </div>
        <div class="char-details">
          <div class="char-detail-item">
            <span class="detail-label">部首</span>
            <span class="detail-value">${charData.radical}</span>
          </div>
          <div class="char-detail-item">
            <span class="detail-label">筆畫</span>
            <span class="detail-value">${charData.strokes}畫</span>
          </div>
          <div class="char-detail-item">
            <span class="detail-label">模式</span>
            <span class="detail-value">${modeLabels[this.currentMode]}</span>
          </div>
        </div>
        <div class="char-stroke-order">筆順：${charData.desc}</div>
        ${wordsHtml}
      </div>
    `;

    // 綁定發音按鈕
    document.getElementById('btn-speak')?.addEventListener('click', () => this.speakChar());
    // 綁定聽範例按鈕
    document.getElementById('btn-listen-example')?.addEventListener('click', () => this.speakExample());
  },

  // ====== 模式切換 ======
  setMode(mode) {
    this.currentMode = mode;
    HandwritingCanvas.setMode(mode);
    document.querySelectorAll('.mode-btn').forEach(b => {
      b.classList.toggle('active', b.dataset.mode === mode);
    });

    // 更新資訊顯示
    const chars = CharacterData.getLessonChars(this.currentGrade, this.currentSemester, this.currentLessonIndex);
    if (chars.length > 0) {
      this.updateCharDisplay(chars[this.currentCharIndex]);
    }
  },

  // ====== 進度管理 ======
  _getLessonId() {
    return `G${this.currentGrade}S${this.currentSemester === '上' ? 1 : 2}L${this.currentLessonIndex + 1}`;
  },

  getProgress() {
    try {
      const data = localStorage.getItem('hw_progress');
      return data ? JSON.parse(data) : { completedChars: [], charCounts: {}, streak: 0, lastPractice: null };
    } catch { return { completedChars: [], charCounts: {}, streak: 0, lastPractice: null }; }
  },

  saveProgress() {
    const progress = this.getProgress();
    const charData = CharacterData.getLessonChars(this.currentGrade, this.currentSemester, this.currentLessonIndex)[this.currentCharIndex];
    if (!charData) return;
    const charId = `${this._getLessonId()}:${charData.char}`;

    if (!progress.completedChars.includes(charId)) {
      progress.completedChars.push(charId);
    }

    // 練習計數
    progress.charCounts = progress.charCounts || {};
    progress.charCounts[charId] = (progress.charCounts[charId] || 0) + 1;

    // 今日練習
    const today = new Date().toDateString();
    progress.lastPractice = progress.lastPractice || {};
    progress.lastPractice.date = today;

    localStorage.setItem('hw_progress', JSON.stringify(progress));

    // 更新 UI
    this.renderCharList();
    this.updateProgressSummary();
  },

  loadProgress() {
    this.updateProgressSummary();
  },

  updateProgressSummary() {
    const el = document.getElementById('progress-summary');
    if (!el) return;
    const progress = this.getProgress();
    const completed = progress.completedChars ? progress.completedChars.length : 0;
    const total = CharacterData.getAllChars(this.currentGrade, this.currentSemester).length;
    const pct = total > 0 ? Math.round((completed / total) * 100) : 0;
    el.innerHTML = `已完成 ${completed}/${total} 字 (${pct}%)`;
  },

  _countCompleted(lesson, progress) {
    const lessonId = `G${this.currentGrade}S${this.currentSemester === '上' ? 1 : 2}L${lesson.id.match(/L(\d+)/)?.[1] || '1'}`;
    let count = 0;
    lesson.chars.forEach(ch => {
      const charId = `${lessonId}:${ch.char}`;
      if (progress.completedChars && progress.completedChars.includes(charId)) count++;
    });
    return count;
  },

  // ====== 導航 ======
  nextChar() {
    const chars = CharacterData.getLessonChars(this.currentGrade, this.currentSemester, this.currentLessonIndex);
    if (this.currentCharIndex < chars.length - 1) {
      this.currentCharIndex++;
      this.loadCurrentChar();
    }
  },

  prevChar() {
    if (this.currentCharIndex > 0) {
      this.currentCharIndex--;
      this.loadCurrentChar();
    } else {
      this.showPage('home-page');
    }
  },

  // ====== 事件綁定 ======
  bindEvents() {
    // 年級選擇
    document.getElementById('grade-list')?.addEventListener('click', (e) => {
      const btn = e.target.closest('.grade-btn');
      if (!btn) return;
      this.currentGrade = parseInt(btn.dataset.grade);
      this.currentLessonIndex = 0;
      this.currentCharIndex = 0;
      this.renderGradeSelector();
      this.renderSemesterTabs();
      this.renderLessonList();
    });

    // 學期切換
    document.getElementById('semester-tabs')?.addEventListener('click', (e) => {
      const btn = e.target.closest('.semester-btn');
      if (!btn) return;
      this.currentSemester = btn.dataset.semester;
      this.currentLessonIndex = 0;
      this.currentCharIndex = 0;
      this.renderSemesterTabs();
      this.renderLessonList();
    });

    // 課文選擇
    document.getElementById('lesson-list')?.addEventListener('click', (e) => {
      const card = e.target.closest('.lesson-card');
      if (!card) return;
      this.currentLessonIndex = parseInt(card.dataset.lesson);
      this.currentCharIndex = 0;
      this.renderLessonList();
      this.showPage('practice-page');
      // 延遲載入確保 DOM 已顯示
      requestAnimationFrame(() => {
        this.renderCharList();
        this.loadCurrentChar();
      });
    });

    // 生字點選
    document.getElementById('char-strip')?.addEventListener('click', (e) => {
      const chip = e.target.closest('.char-chip');
      if (!chip) return;
      this.currentCharIndex = parseInt(chip.dataset.char);
      this.loadCurrentChar();
    });

    // 模式切換
    document.querySelectorAll('.mode-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.setMode(btn.dataset.mode);
      });
    });

    // 格線切換
    document.getElementById('grid-type')?.addEventListener('change', (e) => {
      HandwritingCanvas.setGrid(e.target.value);
    });

    // 筆色 (同時監聽 input + change，確保 iOS Safari 即時反應)
    const penColorEl = document.getElementById('pen-color');
    const penColorHandler = (e) => {
      HandwritingCanvas.setPenColor(e.target.value);
    };
    penColorEl?.addEventListener('input', penColorHandler);
    penColorEl?.addEventListener('change', penColorHandler);

    // 筆寬
    document.getElementById('pen-width')?.addEventListener('input', (e) => {
      HandwritingCanvas.setPenWidth(parseInt(e.target.value));
      document.getElementById('pen-width-val').textContent = e.target.value;
    });

    // 清除
    document.getElementById('btn-clear')?.addEventListener('click', () => {
      HandwritingCanvas.clear();
    });

    // 復原
    document.getElementById('btn-undo')?.addEventListener('click', () => {
      HandwritingCanvas.undo();
    });

    // 確認（計算筆順正確率並儲存進度）
    document.getElementById('btn-confirm')?.addEventListener('click', () => {
      const score = HandwritingCanvas.calcSimilarity();
      const resultEl = document.getElementById('similarity-result');
      if (!resultEl) return;

      let stars = '';
      let emoji = '';
      if (score >= 90) { stars = '⭐⭐⭐⭐⭐'; emoji = '🎉'; }
      else if (score >= 70) { stars = '⭐⭐⭐⭐'; emoji = '😊'; }
      else if (score >= 50) { stars = '⭐⭐⭐'; emoji = '👍'; }
      else if (score >= 30) { stars = '⭐⭐'; emoji = '💪'; }
      else { stars = '⭐'; emoji = '📝'; }

      resultEl.innerHTML = `${emoji} 正確率：<strong>${score}%</strong> ${stars}`;
      resultEl.className = 'similarity-result show';

      // 儲存相似度記錄（最近十次）
      this._saveSimilarityScore(score, stars);

      // 確認後計入練習進度
      this._confirmProgress();

      setTimeout(() => resultEl.className = 'similarity-result', 3000);
    });

    // 完成 + 下一個
    document.getElementById('btn-done')?.addEventListener('click', () => {
      this.saveProgress();
      this.nextChar();

      // 如果是最後一字，提示
      const chars = CharacterData.getLessonChars(this.currentGrade, this.currentSemester, this.currentLessonIndex);
      if (this.currentCharIndex >= chars.length - 1) {
        this._showToast('🎉 這課的生字全部練習完囉！好棒！');
      }
    });

    // 返回首頁
    document.getElementById('btn-back')?.addEventListener('click', () => {
      this.showPage('home-page');
      this.renderLessonList(); // 更新進度顯示
    });

    // 分頁導航
    document.querySelectorAll('.nav-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        const page = tab.dataset.page;
        if (page === 'home') this.showPage('home-page');
        else if (page === 'stats') {
          this.renderStatsPage();
          this.showPage('stats-page');
        }
        document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
      });
    });
  },

  // ====== 進度頁 ======
  renderStatsPage() {
    const container = document.getElementById('stats-content');
    if (!container) return;
    const progress = this.getProgress();
    const stats = CharacterData.getStats();

    let html = '<div class="stats-grid">';
    for (const [grade, data] of Object.entries(stats)) {
      const completed = progress.completedChars ? progress.completedChars.filter(id => id.startsWith(`G${grade}`)).length : 0;
      const pct = data.count > 0 ? Math.round((completed / data.count) * 100) : 0;
      html += `
        <div class="stat-card">
          <div class="stat-grade">${data.name}</div>
          <div class="stat-count">${completed}/${data.count}</div>
          <div class="stat-bar">
            <div class="stat-fill" style="width:${pct}%"></div>
          </div>
          <div class="stat-pct">${pct}%</div>
        </div>
      `;
    }
    html += '</div>';

    // 練習記錄
    const practiceCount = progress.charCounts ? Object.values(progress.charCounts).reduce((a, b) => a + b, 0) : 0;
    html += `
      <div class="stats-summary">
        <div class="summary-item">
          <span class="summary-icon">✏️</span>
          <span>總練習次數：<strong>${practiceCount}</strong> 次</span>
        </div>
        <div class="summary-item">
          <span class="summary-icon">✅</span>
          <span>已學會生字：<strong>${progress.completedChars ? progress.completedChars.length : 0}</strong> 個</span>
        </div>
        <div class="summary-item">
          <span class="summary-icon">📅</span>
          <span>上次練習：<strong>${progress.lastPractice?.date || '尚未練習'}</strong></span>
        </div>
      </div>
    `;

    // 最近十次相似度
    if (progress.scores && progress.scores.length > 0) {
      html += '<div class="score-history">';
      html += '<h3 class="score-history-title">📈 最近練習記錄</h3>';
      html += '<div class="score-list">';
      progress.scores.forEach((s, i) => {
        const scoreColor = s.score >= 70 ? 'var(--success)' : s.score >= 40 ? 'var(--warning)' : 'var(--danger)';
        html += `
          <div class="score-item">
            <span class="score-char" style="font-family:var(--font-kai)">${s.char}</span>
            <span class="score-mode">${s.mode}</span>
            <span class="score-val" style="color:${scoreColor}">${s.score}%</span>
            <span class="score-stars">${s.stars}</span>
            <span class="score-time">${s.time}</span>
          </div>
        `;
      });
      html += '</div></div>';
    }

    container.innerHTML = html;
  },

  _showToast(msg) {
    let toast = document.getElementById('toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'toast';
      toast.className = 'toast';
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => { toast.classList.remove('show'); }, 2500);
  },

  /** 儲存相似度記錄（最近十次） */
  _saveSimilarityScore(score, stars) {
    const progress = this.getProgress();
    progress.scores = progress.scores || [];
    const charData = CharacterData.getLessonChars(this.currentGrade, this.currentSemester, this.currentLessonIndex)[this.currentCharIndex];
    const today = new Date();
    const timeStr = `${today.getMonth()+1}/${today.getDate()} ${today.getHours()}:${String(today.getMinutes()).padStart(2,'0')}`;
    progress.scores.unshift({
      char: charData ? charData.char : '?',
      score,
      stars,
      mode: this.currentMode === 'trace' ? '描紅' : '自己寫',
      date: new Date().toDateString(),
      time: timeStr
    });
    // 只保留最近十次
    if (progress.scores.length > 10) progress.scores = progress.scores.slice(0, 10);
    localStorage.setItem('hw_progress', JSON.stringify(progress));
  },

  /** 確認後計入進度（不跳下一個字，只記錄） */
  _confirmProgress() {
    const progress = this.getProgress();
    const charData = CharacterData.getLessonChars(this.currentGrade, this.currentSemester, this.currentLessonIndex)[this.currentCharIndex];
    if (!charData) return;
    const charId = `${this._getLessonId()}:${charData.char}`;

    if (!progress.completedChars.includes(charId)) {
      progress.completedChars.push(charId);
    }
    progress.charCounts = progress.charCounts || {};
    progress.charCounts[charId] = (progress.charCounts[charId] || 0) + 1;

    const today = new Date().toDateString();
    progress.lastPractice = progress.lastPractice || {};
    progress.lastPractice.date = today;

    localStorage.setItem('hw_progress', JSON.stringify(progress));
    this.renderCharList();
    this.updateProgressSummary();
  },

  /** 朗讀生字（Web Speech API） */
  speakChar() {
    const chars = CharacterData.getLessonChars(this.currentGrade, this.currentSemester, this.currentLessonIndex);
    if (chars.length === 0 || !chars[this.currentCharIndex]) return;
    const charData = chars[this.currentCharIndex];

    if (!window.speechSynthesis) {
      this._showToast('你的裝置不支援語音功能');
      return;
    }

    // 取消正在播放的語音
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(charData.char);

    // 嘗試使用中文語音
    const voices = window.speechSynthesis.getVoices();
    const zhVoice = voices.find(v => v.lang.startsWith('zh-TW')) ||
                    voices.find(v => v.lang.startsWith('zh')) ||
                    voices.find(v => v.lang.startsWith('ja'));  // 日文語音唸漢字也不錯
    if (zhVoice) utterance.voice = zhVoice;

    utterance.rate = 0.7;   // 慢一點，小朋友聽得清楚
    utterance.pitch = 1.1;  // 稍微高一點，較親切
    utterance.volume = 0.9;

    window.speechSynthesis.speak(utterance);
    this._showToast(`🔊 聽聽看：「${charData.char}」`);
  },

  /** 朗讀詞語與造句範例（Web Speech API） */
  speakExample() {
    const chars = CharacterData.getLessonChars(this.currentGrade, this.currentSemester, this.currentLessonIndex);
    if (chars.length === 0 || !chars[this.currentCharIndex]) return;
    const charData = chars[this.currentCharIndex];
    const phraseData = CharacterData.getCharPhrases(charData.char);
    if (!phraseData) return;

    if (!window.speechSynthesis) {
      this._showToast('你的裝置不支援語音功能');
      return;
    }

    window.speechSynthesis.cancel();

    const sentences = phraseData.sentences || (phraseData.sentence ? [phraseData.sentence] : []);
    // 組裝朗讀文字：詞語 + 造句
    const textParts = [`「${charData.char}」的詞語有：${phraseData.words.join('、')}。`];
    sentences.forEach((s, i) => {
      textParts.push(`造句${i+1}：${s}`);
    });
    const fullText = textParts.join(' ');

    const utterance = new SpeechSynthesisUtterance(fullText);
    const voices = window.speechSynthesis.getVoices();
    const zhVoice = voices.find(v => v.lang.startsWith('zh-TW')) ||
                    voices.find(v => v.lang.startsWith('zh'));
    if (zhVoice) utterance.voice = zhVoice;
    utterance.rate = 0.75;
    utterance.pitch = 1.0;
    utterance.volume = 0.9;

    // 按鈕狀態回饋
    const btn = document.getElementById('btn-listen-example');
    if (btn) {
      btn.textContent = '🔊 播放中…';
      btn.classList.add('speaking');
      utterance.onend = () => {
        btn.textContent = '🔊 聽範例';
        btn.classList.remove('speaking');
      };
    }

    window.speechSynthesis.speak(utterance);
    this._showToast('🔊 正在朗讀詞語和造句…');
  }
};

// App 啟動
document.addEventListener('DOMContentLoaded', () => App.init());

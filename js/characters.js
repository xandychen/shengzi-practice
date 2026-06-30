/**
 * 台灣國小國語課本生字資料庫
 * 按年級、學期、課文組織
 * 參考康軒/南一/翰林版本常用生字
 */
const CharacterData = {
  grades: {
    1: { name: '一年級', semesters: {
      '上': { name: '上學期', lessons: [
        {
          id: 'G1S1L1',
          title: '第一課 數字好好玩',
          chars: [
            { char: '一', zhuyin: 'ㄧ', radical: '一', strokes: 1, desc: '橫' },
            { char: '二', zhuyin: 'ㄦˋ', radical: '二', strokes: 2, desc: '橫、橫' },
            { char: '三', zhuyin: 'ㄙㄢ', radical: '一', strokes: 3, desc: '橫、橫、橫' },
            { char: '四', zhuyin: 'ㄙˋ', radical: '囗', strokes: 5, desc: '豎、橫折、撇、豎彎、橫' },
            { char: '五', zhuyin: 'ㄨˇ', radical: '二', strokes: 4, desc: '橫、豎、橫折、橫' },
            { char: '六', zhuyin: 'ㄌㄧㄡˋ', radical: '八', strokes: 4, desc: '點、橫、撇、捺' },
            { char: '七', zhuyin: 'ㄑㄧ', radical: '一', strokes: 2, desc: '橫、豎彎鉤' },
            { char: '八', zhuyin: 'ㄅㄚ', radical: '八', strokes: 2, desc: '撇、捺' },
            { char: '九', zhuyin: 'ㄐㄧㄡˇ', radical: '乙', strokes: 2, desc: '撇、橫折彎鉤' },
            { char: '十', zhuyin: 'ㄕˊ', radical: '十', strokes: 2, desc: '橫、豎' }
          ]
        },
        {
          id: 'G1S1L2',
          title: '第二課 上學去',
          chars: [
            { char: '人', zhuyin: 'ㄖㄣˊ', radical: '人', strokes: 2, desc: '撇、捺' },
            { char: '大', zhuyin: 'ㄉㄚˋ', radical: '大', strokes: 3, desc: '橫、撇、捺' },
            { char: '小', zhuyin: 'ㄒㄧㄠˇ', radical: '小', strokes: 3, desc: '豎鉤、點、點' },
            { char: '多', zhuyin: 'ㄉㄨㄛ', radical: '夕', strokes: 6, desc: '撇、橫撇、點、撇、橫撇、點' },
            { char: '少', zhuyin: 'ㄕㄠˇ', radical: '小', strokes: 4, desc: '豎、點、點、撇' },
            { char: '上', zhuyin: 'ㄕㄤˋ', radical: '一', strokes: 3, desc: '豎、橫、橫' },
            { char: '下', zhuyin: 'ㄒㄧㄚˋ', radical: '一', strokes: 3, desc: '橫、豎、點' },
            { char: '左', zhuyin: 'ㄗㄨㄛˇ', radical: '工', strokes: 5, desc: '橫、撇、橫、豎、橫' },
            { char: '右', zhuyin: 'ㄧㄡˋ', radical: '口', strokes: 5, desc: '橫、撇、豎、橫折、橫' }
          ]
        },
        {
          id: 'G1S1L3',
          title: '第三課 大自然',
          chars: [
            { char: '日', zhuyin: 'ㄖˋ', radical: '日', strokes: 4, desc: '豎、橫折、橫、橫' },
            { char: '月', zhuyin: 'ㄩㄝˋ', radical: '月', strokes: 4, desc: '撇、橫折鉤、橫、橫' },
            { char: '水', zhuyin: 'ㄕㄨㄟˇ', radical: '水', strokes: 4, desc: '豎鉤、橫撇、撇、捺' },
            { char: '火', zhuyin: 'ㄏㄨㄛˇ', radical: '火', strokes: 4, desc: '點、撇、撇、捺' },
            { char: '山', zhuyin: 'ㄕㄢ', radical: '山', strokes: 3, desc: '豎、豎折、豎' },
            { char: '石', zhuyin: 'ㄕˊ', radical: '石', strokes: 5, desc: '橫、撇、豎、橫折、橫' },
            { char: '田', zhuyin: 'ㄊㄧㄢˊ', radical: '田', strokes: 5, desc: '豎、橫折、橫、豎、橫' },
            { char: '土', zhuyin: 'ㄊㄨˇ', radical: '土', strokes: 3, desc: '橫、豎、橫' }
          ]
        },
        {
          id: 'G1S1L4',
          title: '第四課 我的身體',
          chars: [
            { char: '口', zhuyin: 'ㄎㄡˇ', radical: '口', strokes: 3, desc: '豎、橫折、橫' },
            { char: '手', zhuyin: 'ㄕㄡˇ', radical: '手', strokes: 4, desc: '撇、橫、橫、豎鉤' },
            { char: '目', zhuyin: 'ㄇㄨˋ', radical: '目', strokes: 5, desc: '豎、橫折、橫、橫、橫' },
            { char: '耳', zhuyin: 'ㄦˇ', radical: '耳', strokes: 6, desc: '橫、豎、豎、橫、橫、橫' },
            { char: '足', zhuyin: 'ㄗㄨˊ', radical: '足', strokes: 7, desc: '豎、橫折、橫、豎、橫、撇、捺' },
            { char: '心', zhuyin: 'ㄒㄧㄣ', radical: '心', strokes: 4, desc: '點、斜鉤、點、點' },
            { char: '頭', zhuyin: 'ㄊㄡˊ', radical: '頁', strokes: 16, desc: '（略）' }
          ]
        },
        {
          id: 'G1S1L5',
          title: '第五課 我們一家人',
          chars: [
            { char: '我', zhuyin: 'ㄨㄛˇ', radical: '戈', strokes: 7, desc: '撇、橫、豎鉤、提、斜鉤、撇、點' },
            { char: '你', zhuyin: 'ㄋㄧˇ', radical: '人', strokes: 7, desc: '撇、豎、撇、橫撇、豎鉤、點、點' },
            { char: '他', zhuyin: 'ㄊㄚ', radical: '人', strokes: 5, desc: '撇、豎、橫折鉤、豎、豎彎鉤' },
            { char: '她', zhuyin: 'ㄊㄚ', radical: '女', strokes: 6, desc: '撇點、撇、橫、橫折鉤、豎、豎彎鉤' },
            { char: '爸', zhuyin: 'ㄅㄚˋ', radical: '父', strokes: 8, desc: '（略）' },
            { char: '媽', zhuyin: 'ㄇㄚ', radical: '女', strokes: 13, desc: '（略）' },
            { char: '哥', zhuyin: 'ㄍㄜ', radical: '口', strokes: 10, desc: '（略）' },
            { char: '弟', zhuyin: 'ㄉㄧˋ', radical: '弓', strokes: 7, desc: '點、撇、橫折、橫、豎折折鉤、豎、撇' },
            { char: '妹', zhuyin: 'ㄇㄟˋ', radical: '女', strokes: 8, desc: '撇點、撇、橫、橫、橫、豎、撇、捺' },
            { char: '家', zhuyin: 'ㄐㄧㄚ', radical: '宀', strokes: 10, desc: '（略）' }
          ]
        },
        {
          id: 'G1S1L6',
          title: '第六課 天氣變變變',
          chars: [
            { char: '天', zhuyin: 'ㄊㄧㄢ', radical: '大', strokes: 4, desc: '橫、橫、撇、捺' },
            { char: '地', zhuyin: 'ㄉㄧˋ', radical: '土', strokes: 6, desc: '橫、豎、提、橫折鉤、豎、豎彎鉤' },
            { char: '花', zhuyin: 'ㄏㄨㄚ', radical: '艸', strokes: 7, desc: '（略）' },
            { char: '草', zhuyin: 'ㄘㄠˇ', radical: '艸', strokes: 9, desc: '（略）' },
            { char: '木', zhuyin: 'ㄇㄨˋ', radical: '木', strokes: 4, desc: '橫、豎、撇、捺' },
            { char: '葉', zhuyin: 'ㄧㄝˋ', radical: '艸', strokes: 12, desc: '（略）' },
            { char: '風', zhuyin: 'ㄈㄥ', radical: '風', strokes: 9, desc: '（略）' },
            { char: '雨', zhuyin: 'ㄩˇ', radical: '雨', strokes: 8, desc: '橫、豎、橫折鉤、豎、點、點、點、點' },
            { char: '雲', zhuyin: 'ㄩㄣˊ', radical: '雨', strokes: 12, desc: '（略）' }
          ]
        },
        {
          id: 'G1S1L7',
          title: '第七課 校園生活',
          chars: [
            { char: '老', zhuyin: 'ㄌㄠˇ', radical: '老', strokes: 6, desc: '橫、豎、橫、撇、撇、豎彎鉤' },
            { char: '師', zhuyin: 'ㄕ', radical: '巾', strokes: 10, desc: '（略）' },
            { char: '學', zhuyin: 'ㄒㄩㄝˊ', radical: '子', strokes: 16, desc: '（略）' },
            { char: '生', zhuyin: 'ㄕㄥ', radical: '生', strokes: 5, desc: '撇、橫、橫、豎、橫' },
            { char: '校', zhuyin: 'ㄒㄧㄠˋ', radical: '木', strokes: 10, desc: '（略）' },
            { char: '書', zhuyin: 'ㄕㄨ', radical: '曰', strokes: 10, desc: '（略）' },
            { char: '包', zhuyin: 'ㄅㄠ', radical: '勹', strokes: 5, desc: '撇、橫折鉤、橫折、橫、豎彎鉤' }
          ]
        },
        {
          id: 'G1S1L8',
          title: '第八課 動物好朋友',
          chars: [
            { char: '牛', zhuyin: 'ㄋㄧㄡˊ', radical: '牛', strokes: 4, desc: '撇、橫、橫、豎' },
            { char: '羊', zhuyin: 'ㄧㄤˊ', radical: '羊', strokes: 6, desc: '點、撇、橫、橫、橫、豎' },
            { char: '馬', zhuyin: 'ㄇㄚˇ', radical: '馬', strokes: 10, desc: '（略）' },
            { char: '鳥', zhuyin: 'ㄋㄧㄠˇ', radical: '鳥', strokes: 11, desc: '（略）' },
            { char: '魚', zhuyin: 'ㄩˊ', radical: '魚', strokes: 11, desc: '（略）' },
            { char: '蟲', zhuyin: 'ㄔㄨㄥˊ', radical: '虫', strokes: 18, desc: '（略）' },
            { char: '狗', zhuyin: 'ㄍㄡˇ', radical: '犬', strokes: 8, desc: '（略）' },
            { char: '貓', zhuyin: 'ㄇㄠ', radical: '豸', strokes: 15, desc: '（略）' }
          ]
        }
      ]},
      '下': { name: '下學期', lessons: [
        {
          id: 'G1S2L1',
          title: '第一課 春天來了',
          chars: [
            { char: '春', zhuyin: 'ㄔㄨㄣ', radical: '日', strokes: 9, desc: '（略）' },
            { char: '夏', zhuyin: 'ㄒㄧㄚˋ', radical: '夊', strokes: 10, desc: '（略）' },
            { char: '秋', zhuyin: 'ㄑㄧㄡ', radical: '禾', strokes: 9, desc: '（略）' },
            { char: '冬', zhuyin: 'ㄉㄨㄥ', radical: '冫', strokes: 5, desc: '撇、橫撇、捺、點、點' },
            { char: '暖', zhuyin: 'ㄋㄨㄢˇ', radical: '日', strokes: 13, desc: '（略）' },
            { char: '開', zhuyin: 'ㄎㄞ', radical: '門', strokes: 12, desc: '（略）' },
            { char: '紅', zhuyin: 'ㄏㄨㄥˊ', radical: '糸', strokes: 9, desc: '（略）' },
            { char: '綠', zhuyin: 'ㄌㄩˋ', radical: '糸', strokes: 14, desc: '（略）' }
          ]
        },
        {
          id: 'G1S2L2',
          title: '第二課 好朋友',
          chars: [
            { char: '朋', zhuyin: 'ㄆㄥˊ', radical: '月', strokes: 8, desc: '（略）' },
            { char: '友', zhuyin: 'ㄧㄡˇ', radical: '又', strokes: 4, desc: '橫、撇、橫撇、捺' },
            { char: '玩', zhuyin: 'ㄨㄢˊ', radical: '玉', strokes: 8, desc: '（略）' },
            { char: '笑', zhuyin: 'ㄒㄧㄠˋ', radical: '竹', strokes: 10, desc: '（略）' },
            { char: '哭', zhuyin: 'ㄎㄨ', radical: '口', strokes: 10, desc: '（略）' },
            { char: '高', zhuyin: 'ㄍㄠ', radical: '高', strokes: 10, desc: '（略）' },
            { char: '興', zhuyin: 'ㄒㄧㄥˋ', radical: '臼', strokes: 16, desc: '（略）' }
          ]
        },
        {
          id: 'G1S2L3',
          title: '第三課 好吃的食物',
          chars: [
            { char: '吃', zhuyin: 'ㄔ', radical: '口', strokes: 6, desc: '（略）' },
            { char: '飯', zhuyin: 'ㄈㄢˋ', radical: '食', strokes: 12, desc: '（略）' },
            { char: '菜', zhuyin: 'ㄘㄞˋ', radical: '艸', strokes: 11, desc: '（略）' },
            { char: '湯', zhuyin: 'ㄊㄤ', radical: '水', strokes: 12, desc: '（略）' },
            { char: '甜', zhuyin: 'ㄊㄧㄢˊ', radical: '甘', strokes: 11, desc: '（略）' },
            { char: '果', zhuyin: 'ㄍㄨㄛˇ', radical: '木', strokes: 8, desc: '（略）' },
            { char: '米', zhuyin: 'ㄇㄧˇ', radical: '米', strokes: 6, desc: '點、撇、橫、豎、撇、捺' }
          ]
        }
      ]}
    }},
    2: { name: '二年級', semesters: {
      '上': { name: '上學期', lessons: [
        {
          id: 'G2S1L1',
          title: '第一課 新學期',
          chars: [
            { char: '新', zhuyin: 'ㄒㄧㄣ', radical: '斤', strokes: 13, desc: '（略）' },
            { char: '期', zhuyin: 'ㄑㄧˊ', radical: '月', strokes: 12, desc: '（略）' },
            { char: '始', zhuyin: 'ㄕˇ', radical: '女', strokes: 8, desc: '（略）' },
            { char: '班', zhuyin: 'ㄅㄢ', radical: '玉', strokes: 10, desc: '（略）' },
            { char: '級', zhuyin: 'ㄐㄧˊ', radical: '糸', strokes: 9, desc: '（略）' },
            { char: '室', zhuyin: 'ㄕˋ', radical: '宀', strokes: 9, desc: '（略）' },
            { char: '桌', zhuyin: 'ㄓㄨㄛ', radical: '木', strokes: 10, desc: '（略）' },
            { char: '椅', zhuyin: 'ㄧˇ', radical: '木', strokes: 12, desc: '（略）' }
          ]
        },
        {
          id: 'G2S1L2',
          title: '第二課 故事時間',
          chars: [
            { char: '故', zhuyin: 'ㄍㄨˋ', radical: '攴', strokes: 9, desc: '（略）' },
            { char: '事', zhuyin: 'ㄕˋ', radical: '亅', strokes: 8, desc: '（略）' },
            { char: '聽', zhuyin: 'ㄊㄧㄥ', radical: '耳', strokes: 22, desc: '（略）' },
            { char: '說', zhuyin: 'ㄕㄨㄛ', radical: '言', strokes: 14, desc: '（略）' },
            { char: '讀', zhuyin: 'ㄉㄨˊ', radical: '言', strokes: 22, desc: '（略）' },
            { char: '寫', zhuyin: 'ㄒㄧㄝˇ', radical: '宀', strokes: 15, desc: '（略）' },
            { char: '畫', zhuyin: 'ㄏㄨㄚˋ', radical: '田', strokes: 12, desc: '（略）' }
          ]
        },
        {
          id: 'G2S1L3',
          title: '第三課 美麗的台灣',
          chars: [
            { char: '台', zhuyin: 'ㄊㄞˊ', radical: '口', strokes: 5, desc: '撇折、點、豎、橫折、橫' },
            { char: '灣', zhuyin: 'ㄨㄢ', radical: '水', strokes: 25, desc: '（略）' },
            { char: '美', zhuyin: 'ㄇㄟˇ', radical: '羊', strokes: 9, desc: '（略）' },
            { char: '島', zhuyin: 'ㄉㄠˇ', radical: '山', strokes: 10, desc: '（略）' },
            { char: '海', zhuyin: 'ㄏㄞˇ', radical: '水', strokes: 10, desc: '（略）' },
            { char: '河', zhuyin: 'ㄏㄜˊ', radical: '水', strokes: 8, desc: '（略）' },
            { char: '森', zhuyin: 'ㄙㄣ', radical: '木', strokes: 12, desc: '（略）' },
            { char: '林', zhuyin: 'ㄌㄧㄣˊ', radical: '木', strokes: 8, desc: '（略）' }
          ]
        }
      ]},
      '下': { name: '下學期', lessons: [
        {
          id: 'G2S2L1',
          title: '第一課 時間的腳步',
          chars: [
            { char: '時', zhuyin: 'ㄕˊ', radical: '日', strokes: 10, desc: '（略）' },
            { char: '間', zhuyin: 'ㄐㄧㄢ', radical: '門', strokes: 12, desc: '（略）' },
            { char: '分', zhuyin: 'ㄈㄣ', radical: '刀', strokes: 4, desc: '撇、捺、橫折鉤、撇' },
            { char: '秒', zhuyin: 'ㄇㄧㄠˇ', radical: '禾', strokes: 9, desc: '（略）' },
            { char: '鐘', zhuyin: 'ㄓㄨㄥ', radical: '金', strokes: 20, desc: '（略）' },
            { char: '早', zhuyin: 'ㄗㄠˇ', radical: '日', strokes: 6, desc: '（略）' },
            { char: '晚', zhuyin: 'ㄨㄢˇ', radical: '日', strokes: 11, desc: '（略）' }
          ]
        },
        {
          id: 'G2S2L2',
          title: '第二課 節日快樂',
          chars: [
            { char: '節', zhuyin: 'ㄐㄧㄝˊ', radical: '竹', strokes: 13, desc: '（略）' },
            { char: '過', zhuyin: 'ㄍㄨㄛˋ', radical: '辵', strokes: 12, desc: '（略）' },
            { char: '年', zhuyin: 'ㄋㄧㄢˊ', radical: '干', strokes: 6, desc: '（略）' },
            { char: '快', zhuyin: 'ㄎㄨㄞˋ', radical: '心', strokes: 7, desc: '點、點、豎、橫折、橫、撇、捺' },
            { char: '樂', zhuyin: 'ㄌㄜˋ', radical: '木', strokes: 15, desc: '（略）' },
            { char: '慶', zhuyin: 'ㄑㄧㄥˋ', radical: '心', strokes: 15, desc: '（略）' },
            { char: '祝', zhuyin: 'ㄓㄨˋ', radical: '示', strokes: 9, desc: '（略）' }
          ]
        }
      ]}
    }},
    3: { name: '三年級', semesters: {
      '上': { name: '上學期', lessons: [
        {
          id: 'G3S1L1',
          title: '第一課 成長的腳步',
          chars: [
            { char: '成', zhuyin: 'ㄔㄥˊ', radical: '戈', strokes: 6, desc: '（略）' },
            { char: '長', zhuyin: 'ㄓㄤˇ', radical: '長', strokes: 8, desc: '（略）' },
            { char: '步', zhuyin: 'ㄅㄨˋ', radical: '止', strokes: 7, desc: '（略）' },
            { char: '記', zhuyin: 'ㄐㄧˋ', radical: '言', strokes: 10, desc: '（略）' },
            { char: '住', zhuyin: 'ㄓㄨˋ', radical: '人', strokes: 7, desc: '（略）' },
            { char: '憶', zhuyin: 'ㄧˋ', radical: '心', strokes: 16, desc: '（略）' },
            { char: '曾', zhuyin: 'ㄘㄥˊ', radical: '曰', strokes: 12, desc: '（略）' },
            { char: '經', zhuyin: 'ㄐㄧㄥ', radical: '糸', strokes: 13, desc: '（略）' }
          ]
        },
        {
          id: 'G3S1L2',
          title: '第二課 大自然探索',
          chars: [
            { char: '探', zhuyin: 'ㄊㄢˋ', radical: '手', strokes: 11, desc: '（略）' },
            { char: '索', zhuyin: 'ㄙㄨㄛˇ', radical: '糸', strokes: 10, desc: '（略）' },
            { char: '察', zhuyin: 'ㄔㄚˊ', radical: '宀', strokes: 14, desc: '（略）' },
            { char: '觀', zhuyin: 'ㄍㄨㄢ', radical: '見', strokes: 24, desc: '（略）' },
            { char: '發', zhuyin: 'ㄈㄚ', radical: '癶', strokes: 12, desc: '（略）' },
            { char: '現', zhuyin: 'ㄒㄧㄢˋ', radical: '玉', strokes: 11, desc: '（略）' },
            { char: '奇', zhuyin: 'ㄑㄧˊ', radical: '大', strokes: 8, desc: '（略）' },
            { char: '妙', zhuyin: 'ㄇㄧㄠˋ', radical: '女', strokes: 7, desc: '（略）' }
          ]
        }
      ]},
      '下': { name: '下學期', lessons: [
        {
          id: 'G3S2L1',
          title: '第一課 科技生活',
          chars: [
            { char: '科', zhuyin: 'ㄎㄜ', radical: '禾', strokes: 9, desc: '（略）' },
            { char: '技', zhuyin: 'ㄐㄧˋ', radical: '手', strokes: 7, desc: '（略）' },
            { char: '電', zhuyin: 'ㄉㄧㄢˋ', radical: '雨', strokes: 13, desc: '（略）' },
            { char: '腦', zhuyin: 'ㄋㄠˇ', radical: '肉', strokes: 10, desc: '（略）' },
            { char: '機', zhuyin: 'ㄐㄧ', radical: '木', strokes: 16, desc: '（略）' },
            { char: '網', zhuyin: 'ㄨㄤˇ', radical: '糸', strokes: 14, desc: '（略）' },
            { char: '路', zhuyin: 'ㄌㄨˋ', radical: '足', strokes: 13, desc: '（略）' }
          ]
        }
      ]}
    }},
    4: { name: '四年級', semesters: {
      '上': { name: '上學期', lessons: [
        {
          id: 'G4S1L1',
          title: '第一課 水陸小高手',
          chars: [
            { char: '煩', zhuyin: 'ㄈㄢˊ', radical: '火', strokes: 13, desc: '（略）' },
            { char: '躍', zhuyin: 'ㄩㄝˋ', radical: '足', strokes: 21, desc: '（略）' },
            { char: '轉', zhuyin: 'ㄓㄨㄢˇ', radical: '車', strokes: 11, desc: '（略）' },
            { char: '螺', zhuyin: 'ㄌㄨㄛˊ', radical: '虫', strokes: 17, desc: '（略）' },
            { char: '陀', zhuyin: 'ㄊㄨㄛˊ', radical: '阜', strokes: 8, desc: '（略）' },
            { char: '緩', zhuyin: 'ㄏㄨㄢˇ', radical: '糸', strokes: 15, desc: '（略）' },
            { char: '邀', zhuyin: 'ㄧㄠ', radical: '辵', strokes: 15, desc: '（略）' }
          ]
        },
        {
          id: 'G4S1L2',
          title: '第二課 放學後',
          chars: [
            { char: '幸', zhuyin: 'ㄒㄧㄥˋ', radical: '干', strokes: 8, desc: '（略）' },
            { char: '暫', zhuyin: 'ㄗㄢˋ', radical: '日', strokes: 15, desc: '（略）' },
            { char: '束', zhuyin: 'ㄕㄨˋ', radical: '木', strokes: 7, desc: '（略）' },
            { char: '捨', zhuyin: 'ㄕㄜˇ', radical: '手', strokes: 11, desc: '（略）' },
            { char: '依', zhuyin: 'ㄧ', radical: '人', strokes: 8, desc: '（略）' },
            { char: '繩', zhuyin: 'ㄕㄥˋ', radical: '糸', strokes: 19, desc: '（略）' },
            { char: '則', zhuyin: 'ㄗㄜˊ', radical: '刀', strokes: 9, desc: '（略）' }
          ]
        },
        {
          id: 'G4S1L3',
          title: '第三課 我的籃球夢',
          chars: [
            { char: '弧', zhuyin: 'ㄍㄨˊ', radical: '弓', strokes: 8, desc: '（略）' },
            { char: '優', zhuyin: 'ㄧㄡ', radical: '人', strokes: 17, desc: '（略）' },
            { char: '喧', zhuyin: 'ㄒㄩㄢ', radical: '口', strokes: 12, desc: '（略）' },
            { char: '秒', zhuyin: 'ㄇㄧㄠˇ', radical: '禾', strokes: 9, desc: '（略）' },
            { char: '彼', zhuyin: 'ㄅㄧˇ', radical: '彳', strokes: 8, desc: '（略）' },
            { char: '揮', zhuyin: 'ㄏㄟ', radical: '手', strokes: 12, desc: '（略）' },
            { char: '曾', zhuyin: 'ㄘㄥˊ', radical: '曰', strokes: 12, desc: '（略）' }
          ]
        },
        {
          id: 'G4S1L4',
          title: '第四課 永遠的馬偕',
          chars: [
            { char: '濃', zhuyin: 'ㄋㄨㄥˊ', radical: '水', strokes: 16, desc: '（略）' },
            { char: '堂', zhuyin: 'ㄊㄤˊ', radical: '土', strokes: 11, desc: '（略）' },
            { char: '宿', zhuyin: 'ㄙㄨˋ', radical: '宀', strokes: 11, desc: '（略）' },
            { char: '捐', zhuyin: 'ㄐㄩㄢ', radical: '手', strokes: 10, desc: '（略）' },
            { char: '嶺', zhuyin: 'ㄌㄧㄥˇ', radical: '山', strokes: 17, desc: '（略）' },
            { char: '翻', zhuyin: 'ㄈㄢ', radical: '羽', strokes: 18, desc: '（略）' },
            { char: '治', zhuyin: 'ㄓˋ', radical: '水', strokes: 8, desc: '（略）' }
          ]
        },
        {
          id: 'G4S1L5',
          title: '第五課 假如給我三天光明',
          chars: [
            { char: '盡', zhuyin: 'ㄐㄧㄣˋ', radical: '皿', strokes: 14, desc: '（略）' },
            { char: '續', zhuyin: 'ㄒㄩˋ', radical: '糸', strokes: 20, desc: '（略）' },
            { char: '適', zhuyin: 'ㄕˋ', radical: '辵', strokes: 15, desc: '（略）' },
            { char: '毯', zhuyin: 'ㄊㄢˇ', radical: '毛', strokes: 12, desc: '（略）' },
            { char: '何', zhuyin: 'ㄏㄜˊ', radical: '人', strokes: 7, desc: '（略）' },
            { char: '蕾', zhuyin: 'ㄌㄟˇ', radical: '艸', strokes: 17, desc: '（略）' },
            { char: '蓓', zhuyin: 'ㄅㄟˋ', radical: '艸', strokes: 14, desc: '（略）' }
          ]
        },
        {
          id: 'G4S1L6',
          title: '第六課 攀登生命的高峰',
          chars: [
            { char: '響', zhuyin: 'ㄒㄧㄤˇ', radical: '音', strokes: 21, desc: '（略）' },
            { char: '谷', zhuyin: 'ㄍㄨˇ', radical: '谷', strokes: 7, desc: '（略）' },
            { char: '訓', zhuyin: 'ㄒㄩㄣˋ', radical: '言', strokes: 10, desc: '（略）' },
            { char: '氣', zhuyin: 'ㄑㄧˋ', radical: '氣', strokes: 10, desc: '（略）' },
            { char: '攀', zhuyin: 'ㄆㄢ', radical: '手', strokes: 19, desc: '（略）' },
            { char: '磨', zhuyin: 'ㄇㄛˋ', radical: '石', strokes: 16, desc: '（略）' },
            { char: '酷', zhuyin: 'ㄎㄨˋ', radical: '酉', strokes: 14, desc: '（略）' }
          ]
        },
        {
          id: 'G4S1L7',
          title: '第七課 美味的一堂課',
          chars: [
            { char: '未', zhuyin: 'ㄨㄟˋ', radical: '木', strokes: 5, desc: '（略）' },
            { char: '醋', zhuyin: 'ㄘㄨˋ', radical: '酉', strokes: 15, desc: '（略）' },
            { char: '壽', zhuyin: 'ㄕㄡˋ', radical: '士', strokes: 14, desc: '（略）' },
            { char: '郁', zhuyin: 'ㄩˋ', radical: '邑', strokes: 9, desc: '（略）' },
            { char: '麵', zhuyin: 'ㄇㄧㄢˋ', radical: '麥', strokes: 20, desc: '（略）' },
            { char: '義', zhuyin: 'ㄧˋ', radical: '羊', strokes: 13, desc: '（略）' },
            { char: '醬', zhuyin: 'ㄐㄧㄤˋ', radical: '酉', strokes: 18, desc: '（略）' }
          ]
        },
        {
          id: 'G4S1L8',
          title: '第八課 建築界的長頸鹿',
          chars: [
            { char: '橋', zhuyin: 'ㄑㄧㄠˊ', radical: '木', strokes: 16, desc: '（略）' },
            { char: '吉', zhuyin: 'ㄐㄧˊ', radical: '口', strokes: 6, desc: '（略）' },
            { char: '訊', zhuyin: 'ㄒㄩㄣˋ', radical: '言', strokes: 10, desc: '（略）' },
            { char: '塔', zhuyin: 'ㄊㄚˇ', radical: '土', strokes: 13, desc: '（略）' },
            { char: '晴', zhuyin: 'ㄑㄧㄥˊ', radical: '日', strokes: 12, desc: '（略）' },
            { char: '京', zhuyin: 'ㄐㄧㄥ', radical: '亠', strokes: 8, desc: '（略）' },
            { char: '震', zhuyin: 'ㄓㄥˋ', radical: '雨', strokes: 15, desc: '（略）' }
          ]
        },
        {
          id: 'G4S1L9',
          title: '第九課 請到我的家鄉來',
          chars: [
            { char: '劃', zhuyin: 'ㄏㄨㄚˋ', radical: '刀', strokes: 6, desc: '（略）' },
            { char: '鬱', zhuyin: 'ㄩˋ', radical: '山', strokes: 29, desc: '（略）' },
            { char: '潮', zhuyin: 'ㄔㄠˊ', radical: '水', strokes: 15, desc: '（略）' },
            { char: '防', zhuyin: 'ㄈㄤˊ', radical: '阜', strokes: 7, desc: '（略）' },
            { char: '堤', zhuyin: 'ㄊㄧ', radical: '土', strokes: 12, desc: '（略）' },
            { char: '窯', zhuyin: 'ㄧㄠˊ', radical: '穴', strokes: 14, desc: '（略）' },
            { char: '勢', zhuyin: 'ㄕˋ', radical: '力', strokes: 13, desc: '（略）' }
          ]
        },
        {
          id: 'G4S1L10',
          title: '第十課 奇幻旋律',
          chars: [
            { char: '遍', zhuyin: 'ㄅㄧㄢˋ', radical: '辵', strokes: 13, desc: '（略）' },
            { char: '富', zhuyin: 'ㄈㄨˋ', radical: '宀', strokes: 12, desc: '（略）' },
            { char: '榮', zhuyin: 'ㄖㄥˊ', radical: '木', strokes: 14, desc: '（略）' },
            { char: '搓', zhuyin: 'ㄘㄨㄛ', radical: '手', strokes: 13, desc: '（略）' },
            { char: '龐', zhuyin: 'ㄆㄤˊ', radical: '广', strokes: 19, desc: '（略）' },
            { char: '困', zhuyin: 'ㄎㄨㄣˋ', radical: '囗', strokes: 7, desc: '（略）' },
            { char: '邁', zhuyin: 'ㄇㄞˋ', radical: '辵', strokes: 17, desc: '（略）' }
          ]
        },
        {
          id: 'G4S1L11',
          title: '第十一課 兔子先生等等我',
          chars: [
            { char: '遲', zhuyin: 'ㄔˊ', radical: '辵', strokes: 16, desc: '（略）' },
            { char: '扇', zhuyin: 'ㄕㄢˋ', radical: '户', strokes: 10, desc: '（略）' },
            { char: '盒', zhuyin: 'ㄏㄜˊ', radical: '皿', strokes: 11, desc: '（略）' },
            { char: '哭', zhuyin: 'ㄎㄨ', radical: '口', strokes: 10, desc: '（略）' },
            { char: '袋', zhuyin: 'ㄉㄞˋ', radical: '衣', strokes: 11, desc: '（略）' },
            { char: '迫', zhuyin: 'ㄆㄛˋ', radical: '辵', strokes: 9, desc: '（略）' },
            { char: '示', zhuyin: 'ㄕˋ', radical: '示', strokes: 5, desc: '（略）' }
          ]
        },
        {
          id: 'G4S1L12',
          title: '第十二課 老鞋匠和小精靈',
          chars: [
            { char: '內', zhuyin: 'ㄋㄟˋ', radical: '入', strokes: 4, desc: '（略）' },
            { char: '蹦', zhuyin: 'ㄅㄥˋ', radical: '足', strokes: 18, desc: '（略）' },
            { char: '踊', zhuyin: 'ㄩㄥˇ', radical: '足', strokes: 17, desc: '（略）' },
            { char: '足', zhuyin: 'ㄗㄨˊ', radical: '足', strokes: 7, desc: '（略）' },
            { char: '噴', zhuyin: 'ㄆㄣ', radical: '口', strokes: 14, desc: '（略）' },
            { char: '鎧', zhuyin: 'ㄎㄟˇ', radical: '金', strokes: 18, desc: '（略）' },
            { char: '靈', zhuyin: 'ㄌㄧㄥˊ', radical: '雨', strokes: 24, desc: '（略）' }
          ]
        }
      ]},
      '下': { name: '下學期', lessons: [] } // 預留
    }}
  },

  // ====== 詞語造句字典（每字三句造句） ======
  _phrases: {
    // 課1：水陸小高手
    '煩': { words: ['煩惱', '麻煩', '心煩'], sentences: ['遇到麻煩的事情不要心煩，慢慢想辦法就好。', '功課太多讓小明覺得很煩惱，不知道該先做哪一科。', '天氣太熱容易讓人心煩，喝杯冰水冷靜一下吧！'] },
    '躍': { words: ['跳躍', '活躍', '飛躍'], sentences: ['小青蛙在荷葉上跳躍，動作好靈活！', '體育課的時候，同學們在操場上跳躍練習跳高。', '看著魚兒躍出水面，大家都開心地拍手。'] },
    '轉': { words: ['轉圈', '轉身', '旋轉'], sentences: ['芭蕾舞者在舞台上優雅地旋轉。', '風車被風吹得不停旋轉，發出呼呼的聲音。', '騎腳踏車轉彎的時候要放慢速度才安全。'] },
    '螺': { words: ['螺旋', '螺絲', '陀螺'], sentences: ['陀螺旋轉的時候會發出嗡嗡的聲音。', '樓梯的扶手有漂亮的螺旋花紋。', '爸爸用螺絲起子把鬆掉的螺絲鎖緊。'] },
    '陀': { words: ['陀螺', '盤陀'], sentences: ['小明轉陀螺給弟弟看，弟弟好開心。', '古早的玩具陀螺，用繩子一拉就會轉個不停。', '夜市裡有人在賣各種顏色鮮豔的陀螺。'] },
    '緩': { words: ['緩慢', '緩和', '延緩'], sentences: ['蝸牛緩慢地爬過菜園的小路。', '跑步跑到最後要緩慢地停下來，才不會跌倒。', '考試延緩了一天，大家有更多時間準備。'] },
    '邀': { words: ['邀請', '邀約', '應邀'], sentences: ['小美邀請同學來家裡參加生日派對。', '老師邀請了一位作家來學校演講。', '接受朋友的邀約出去玩，記得要先問過爸爸媽媽。'] },
    // 課2：放學後
    '幸': { words: ['幸福', '幸運', '幸好'], sentences: ['和家人在一起的時候，我覺得很幸福。', '今天真幸運，撿到十塊錢還找到了遺失的橡皮擦。', '幸好有帶雨傘，不然放學就要淋雨回家了。'] },
    '暫': { words: ['暫時', '短暫', '暫停'], sentences: ['雨下太大了，我們暫時先躲一下。', '暑假雖然短暫，但每天都過得很充實。', '老師說休息時間到了，大家暫停寫字。'] },
    '束': { words: ['結束', '一束', '束縛'], sentences: ['下課鐘響，一天的課程終於結束了。', '媽媽收到一束漂亮的玫瑰花，笑得好開心。', '你不應該被分數束縛，學習的樂趣更重要。'] },
    '捨': { words: ['捨不得', '取捨', '施捨'], sentences: ['畢業的時候，大家都捨不得分開。', '搬家要取捨哪些東西帶走，哪些東西留下。', '小華把舊玩具捐出去施捨給需要的小朋友。'] },
    '依': { words: ['依靠', '依然', '相依'], sentences: ['小狗乖乖地依靠在主人的腳邊。', '過了這麼多年，他依然記得小學老師的名字。', '姊弟倆相依為命，感情非常深厚。'] },
    '繩': { words: ['跳繩', '繩子', '麻繩'], sentences: ['下課的時候，同學們一起在操場跳繩。', '用繩子把書本綁好，才不會散開。', '以前的人用麻繩編織成各種日常用品。'] },
    '則': { words: ['規則', '原則', '否則'], sentences: ['玩遊戲之前要先說好規則才公平。', '誠實是做人的基本原則，不可以說謊。', '早點睡覺，否則明天上課會沒有精神。'] },
    // 課3：我的籃球夢
    '弧': { words: ['弧形', '弧度', '圓弧'], sentences: ['籃球在空中畫出一道美麗的弧線。', '彩虹在天空畫了一個大大的弧形，好漂亮。', '數學課學到如何計算圓弧的長度。'] },
    '優': { words: ['優秀', '優點', '優美'], sentences: ['她的舞姿非常優美，大家都看呆了。', '小明成績優秀，每學期都拿到獎狀。', '每個人的優點都不一樣，要懂得欣賞別人。'] },
    '喧': { words: ['喧嘩', '喧鬧', '喧嚷'], sentences: ['圖書館裡不可以喧嘩，要保持安靜。', '下課時的校園充滿了小朋友喧鬧的笑聲。', '市場裡人來人往，非常喧嚷熱鬧。'] },
    '秒': { words: ['分秒', '秒針', '秒數'], sentences: ['比賽剩下最後十秒，全場都緊張起來。', '時間一分一秒過去，要好好珍惜。', '時鐘的秒針跑得好快，一小時一下子就過去了。'] },
    '彼': { words: ['彼此', '彼岸', '知己知彼'], sentences: ['朋友之間應該彼此信任和互相幫助。', '河的彼岸有一座美麗的小鎮。', '比賽前要先了解對手，所謂知己知彼才能贏。'] },
    '揮': { words: ['揮手', '發揮', '指揮'], sentences: ['他在球場上指揮隊友，發揮團隊精神。', '校門口，媽媽向公車上的我揮手道別。', '音樂課上，老師指揮全班同學一起唱歌。'] },
    '曾': { words: ['曾經', '不曾', '曾祖父'], sentences: ['這裡曾經是一片稻田，現在蓋了大樓。', '我的曾祖父年輕時是一位漁夫。', '這件事情我從來不曾忘記，印象太深刻了。'] },
    // 課4：永遠的馬偕
    '濃': { words: ['濃密', '濃厚', '濃郁'], sentences: ['山上飄來濃濃的霧氣，好像仙境一樣。', '這杯巧克力牛奶聞起來味道好濃郁！', '他們兩個人的友誼非常濃厚，從小一起長大。'] },
    '堂': { words: ['教堂', '課堂', '禮堂'], sentences: ['星期天很多人都會去教堂做禮拜。', '課堂上要專心聽老師講課。', '學校的禮堂可以容納全校師生一起開會。'] },
    '宿': { words: ['宿舍', '住宿', '寄宿'], sentences: ['大學生住在學校宿舍，學習獨立生活。', '我們去旅行時住宿在一個很溫馨的民宿。', '阿明寄宿在阿姨家，因為爸媽出國工作了。'] },
    '捐': { words: ['捐獻', '捐款', '捐贈'], sentences: ['同學們把舊衣服捐給需要的人。', '大家熱心捐款幫助災區的居民重建家園。', '捐贈書籍給偏鄉小學，讓更多小朋友有書看。'] },
    '嶺': { words: ['山嶺', '崇山峻嶺', '海嶺'], sentences: ['登上山嶺之後，可以看到很美的風景。', '台灣中央山脈有許多崇山峻嶺，非常壯觀。', '老鷹在山嶺之間飛翔，尋找食物。'] },
    '翻': { words: ['翻開', '翻滾', '翻身'], sentences: ['弟弟在床上翻來翻去，睡不著覺。', '翻開課本第一頁，我們來讀新的一課。', '小貓咪在地上翻滾玩耍，模樣好可愛。'] },
    '治': { words: ['治療', '治病', '政治'], sentences: ['醫生用愛心治療每一位生病的病人。', '這種藥可以治療感冒，但要按照醫生指示服用。', '多喝水、多休息是治癒小感冒最好的方法。'] },
    // 課5：假如給我三天光明
    '盡': { words: ['盡力', '盡頭', '用盡'], sentences: ['只要你盡力去做，結果一定會很好的。', '走到巷子的盡頭就會看到那家書店。', '就算鉛筆用盡了，我們還有自動鉛筆可以用。'] },
    '續': { words: ['繼續', '連續', '陸續'], sentences: ['休息夠了我們就繼續完成功課吧！', '這幾天連續下雨，操場都溼答答的。', '下課後同學們陸續走出教室去玩耍。'] },
    '適': { words: ['適合', '舒適', '適當'], sentences: ['春天不冷也不熱，是最舒適的季節。', '這本書很適合小學生閱讀，內容簡單有趣。', '玩遊戲要選擇適當的時間，不能影響寫功課。'] },
    '毯': { words: ['毯子', '電毯', '地毯'], sentences: ['冬天的時候蓋著毯子看書最舒服了。', '阿嬤怕冷，睡覺前會先開電毯暖被窩。', '客廳的地毯軟軟的，我們都喜歡坐在地上玩。'] },
    '何': { words: ['如何', '幾何', '任何'], sentences: ['不管是任何事情，都要認真去面對。', '老師教我們如何解決數學問題。', '你有任何問題都可以舉手發問，不用害羞。'] },
    '蕾': { words: ['花蕾', '蓓蕾', '蕾絲'], sentences: ['春天到了，院子裡的花蕾一朵朵綻放。', '媽媽的洋裝上有漂亮的蕾絲花邊。', '含苞待放的花蕾，讓人期待花朵盛開的樣子。'] },
    '蓓': { words: ['蓓蕾'], sentences: ['枝頭上的蓓蕾，含苞待放好可愛。', '春天的花園裡，到處都可以看到小小的蓓蕾。', '老師說我們就像蓓蕾一樣，總有一天會開出美麗的花。'] },
    // 課6：攀登生命的高峰
    '響': { words: ['影響', '響亮', '響應'], sentences: ['老師的話深深影響了我，讓我更努力。', '哥哥的聲音很響亮，在走廊那頭都聽得到。', '全班響應環保活動，每個人帶環保餐具來學校。'] },
    '谷': { words: ['山谷', '谷底', '低谷'], sentences: ['山谷裡傳來小鳥清脆的叫聲。', '站在山頂往下看，山谷顯得好深好深。', '人生不可能永遠在谷底，努力就會往上爬。'] },
    '訓': { words: ['訓練', '教訓', '訓話'], sentences: ['每天都要訓練自己，才會越來越厲害。', '爸爸的教訓我都記在心裡，不會再犯了。', '教練說嚴格的訓練是為了讓我們變得更強。'] },
    '氣': { words: ['天氣', '勇氣', '空氣'], sentences: ['爬山需要很大的勇氣和毅力。', '今天天氣真好，陽光暖暖的，微風涼涼的。', '打開窗戶讓新鮮空氣進來，房間會更舒服。'] },
    '攀': { words: ['攀登', '攀爬', '攀岩'], sentences: ['叔叔喜歡攀登高山，挑戰自己的極限。', '小朋友不可以攀爬欄杆，很危險。', '攀岩是一項需要體力和技巧的運動。'] },
    '磨': { words: ['磨練', '磨擦', '研磨'], sentences: ['困難可以磨練一個人的意志力。', '石頭經過長時間的磨擦，變得又圓又光滑。', '阿嬤把黃豆放進石磨裡研磨成豆漿。'] },
    '酷': { words: ['酷愛', '殘酷', '冷酷'], sentences: ['哥哥酷愛打籃球，每天放學都要練。', '自然界的生存競爭有時候是很殘酷的。', '他戴著墨鏡的樣子看起來好酷！'] },
    // 課7：美味的一堂課
    '未': { words: ['未來', '未必', '未知'], sentences: ['好好學習，未來才會有更多選擇。', '天空有很多雲，但未必會下雨。', '對太空的未知世界，科學家一直充滿好奇。'] },
    '醋': { words: ['米醋', '白醋', '醋溜'], sentences: ['吃水餃的時候沾一點醋，味道更好。', '媽媽做糖醋排骨的時候會加一點白醋提味。', '醋溜魚片酸酸甜甜的，是我最喜歡的菜。'] },
    '壽': { words: ['壽司', '長壽', '壽命'], sentences: ['媽媽做了好吃的壽司給我們當午餐。', '祝阿公生日快樂，健康長壽！', '好好保養身體可以延長壽命，活得健康又快樂。'] },
    '郁': { words: ['濃郁', '郁郁', '馥郁'], sentences: ['花園裡傳來濃郁的花香，真好聞。', '走進麵包店就聞到郁郁的麵包香。', '這杯咖啡味道馥郁，喝一口就讓人精神變好。'] },
    '麵': { words: ['麵包', '麵條', '拉麵'], sentences: ['熱騰騰的麵包出爐，香氣飄滿整間店。', '寒冷的冬天來一碗熱騰騰的拉麵最幸福了。', '媽媽煮的牛肉麵條又Q又彈牙，全家都愛吃。'] },
    '義': { words: ['意義', '公義', '正義'], sentences: ['幫助別人是一件很有意義的事。', '班長很有正義感，會幫被欺負的同學說話。', '做義工讓我的暑假過得特別有意義。'] },
    '醬': { words: ['果醬', '醬油', '辣醬'], sentences: ['阿嬤自己做的草莓果醬最好吃了！', '煎餃沾醬油和辣醬，味道一級棒。', '早餐的吐司塗上花生醬，簡單又美味。'] },
    // 課8：建築界的長頸鹿
    '橋': { words: ['橋樑', '天橋', '橋墩'], sentences: ['這座橋樑連接了河的兩岸，好壯觀。', '過馬路要走天橋或斑馬線比較安全。', '大雨過後，橋墩被河水沖刷得很厲害。'] },
    '吉': { words: ['吉祥', '吉利', '吉兆'], sentences: ['新年到了，大家互相祝福吉祥如意。', '數字六被很多人認為很吉利，代表順利。', '看到彩虹被認為是好吉兆，會帶來幸運。'] },
    '訊': { words: ['訊息', '通訊', '資訊'], sentences: ['手機可以讓我們很快收到朋友傳的訊息。', '網路讓通訊變得很方便，隨時可以跟遠方的人講話。', '電腦課教我們如何在網路上搜尋有用的資訊。'] },
    '塔': { words: ['塔樓', '燈塔', '鐵塔'], sentences: ['夜晚的燈塔照亮海面，指引船隻回家。', '巴黎的艾菲爾鐵塔是世界知名的觀光景點。', '城堡的塔樓上面可以看得很遠很遠。'] },
    '晴': { words: ['晴天', '晴朗', '晴空'], sentences: ['今天天氣晴朗，很適合去公園玩。', '萬里晴空連一朵雲都沒有，太陽好大。', '連續好幾個晴天之後，農夫開始擔心缺水。'] },
    '京': { words: ['京城', '京都', '北京'], sentences: ['中國北京是一座歷史悠久的古城。', '日本的京都有很多古老的寺廟和美麗的櫻花。', '古代的京城就是皇帝居住的地方。'] },
    '震': { words: ['地震', '震動', '震撼'], sentences: ['台灣常常發生地震，要學會保護自己。', '打雷的時候，窗戶玻璃都會震動。', '他的演講內容非常震撼，讓全場觀眾都深受感動。'] },
    // 課9：請到我的家鄉來
    '劃': { words: ['計劃', '劃分', '規劃'], sentences: ['放假前我們可以一起計劃要去哪裡玩。', '操場被劃分成幾個區域，讓不同班級使用。', '這座公園的規劃很用心，有好多好玩的設施。'] },
    '鬱': { words: ['憂鬱', '鬱悶', '鬱金香'], sentences: ['心情鬱悶的時候出去走走會好很多。', '荷蘭的鬱金香花田顏色繽紛，像一幅畫。', '一直下雨的天氣容易讓人感到有點憂鬱。'] },
    '潮': { words: ['潮水', '浪潮', '潮流'], sentences: ['海邊的潮水漲起來，把沙灘淹沒了。', '科技的浪潮改變了我們的生活方式。', '退潮的時候，沙灘上會出現很多貝殼和小螃蟹。'] },
    '防': { words: ['防止', '防護', '預防'], sentences: ['戴口罩可以防止細菌和灰塵跑進嘴裡。', '騎腳踏車要戴護膝做防護，摔倒了才不會受傷。', '多運動、吃得健康可以預防生病。'] },
    '堤': { words: ['堤防', '河堤', '堤岸'], sentences: ['河邊的堤防可以防止大水淹進來。', '傍晚的時候，很多人喜歡沿著河堤散步和騎車。', '颱風來之前，工人忙著加固堤防。'] },
    '窯': { words: ['窯洞', '磚窯', '陶瓷窯'], sentences: ['古老的窯洞裡燒出了美麗的陶瓷。', '鶯歌的陶瓷窯老師傅手藝非常好。', '以前的人住在黃土高原的窯洞裡，冬暖夏涼。'] },
    '勢': { words: ['形勢', '姿勢', '氣勢'], sentences: ['寫字的時候姿勢要端正，才不會近視。', '籃球比賽的形勢對我們班很有利。', '獅子走路氣勢十足，不愧是萬獸之王。'] },
    // 課10：奇幻旋律
    '遍': { words: ['一遍', '普遍', '遍地'], sentences: ['這個故事太精彩了，我想再聽一遍。', '手機在現在已經非常普遍，幾乎每個人都有。', '春天來了，遍地都是盛開的小野花。'] },
    '富': { words: ['豐富', '富貴', '財富'], sentences: ['圖書館裡有豐富的書籍可以借來看。', '這頓晚餐好豐盛，桌上擺滿了各種菜餚。', '健康的身體比任何財富都還要重要。'] },
    '榮': { words: ['光榮', '榮譽', '繁榮'], sentences: ['得到第一名是全班的榮譽，大家都很開心。', '能夠代表學校參加比賽是一件很光榮的事。', '夜市越晚越繁榮，到處都是人潮。'] },
    '搓': { words: ['搓揉', '搓手', '搓湯圓'], sentences: ['冬天搓搓手會讓手變得暖和起來。', '冬至的時候，全家一起搓湯圓真開心。', '洗衣服的時候，領口的地方要特別搓揉才洗得乾淨。'] },
    '龐': { words: ['龐大', '龐雜', '龐然'], sentences: ['這棟大樓的體積好龐大，從很遠就看得到。', '這次活動的準備工作非常龐雜，需要很多人幫忙。', '鯨魚是海洋中體型最龐大的動物。'] },
    '困': { words: ['困難', '困境', '困惑'], sentences: ['遇到困難不要害怕，可以請老師幫忙。', '在困境中還能保持樂觀，是很了不起的事。', '這道數學題讓我很困惑，想了很久還是不會。'] },
    '邁': { words: ['邁進', '邁步', '豪邁'], sentences: ['讓我們一起向著目標大步邁進！', '小寶寶邁出人生的第一步，媽媽好感動。', '這位歌手唱歌的方式非常豪邁，很有力量。'] },
    // 課11：兔子先生等等我
    '遲': { words: ['遲到', '遲早', '延遲'], sentences: ['每天早起才不會遲到，要做守時的好孩子。', '養成好習慣，遲早會看到成果。', '公車因為塞車延遲了，大家都在站牌耐心等待。'] },
    '扇': { words: ['扇子', '電扇', '扇貝'], sentences: ['阿公拿著扇子，一邊搧風一邊講故事。', '夏天的時候電扇和冷氣都不可少。', '海邊的攤販賣著香噴噴的烤扇貝。'] },
    '盒': { words: ['盒子', '便當盒', '禮盒'], sentences: ['媽媽用漂亮的盒子裝了餅乾送給鄰居。', '午餐時間打開便當盒，香味讓人流口水。', '過年的時候親戚送來一個大大的水果禮盒。'] },
    '哭': { words: ['哭泣', '哭聲', '哭笑不得'], sentences: ['妹妹跌倒了在哭，哥哥趕快去安慰她。', '嬰兒的哭聲讓媽媽很緊張，趕快看看是不是餓了。', '弟弟把襪子穿在手上，讓人看了哭笑不得。'] },
    '袋': { words: ['袋子', '口袋', '布袋'], sentences: ['去超市買東西要記得自己帶環保袋。', '大雄的口袋裡總是裝滿了各種奇怪的東西。', '阿嬤用布袋裝著自己種的青菜去菜市場賣。'] },
    '迫': { words: ['迫切', '壓迫', '迫不及待'], sentences: ['弟弟迫不及待地打開了生日禮物。', '偏鄉學校迫切需要有更多的教學資源。', '不要因為壓力而覺得被壓迫，要學會放鬆心情。'] },
    '示': { words: ['表示', '展示', '示範'], sentences: ['老師先做一次示範，大家再跟著練習。', '舉手表示你有問題要問，或是想回答問題。', '美術課的時候，老師展示了很多漂亮的畫作給我們看。'] },
    // 課12：老鞋匠和小精靈
    '內': { words: ['內外', '內容', '內心'], sentences: ['這個故事內容很有趣，我讀了兩遍。', '打掃教室的時候，內外都要掃乾淨。', '雖然外表很平靜，但他的內心其實很緊張。'] },
    '蹦': { words: ['蹦跳', '蹦蹦跳跳', '歡蹦'], sentences: ['小朋友蹦蹦跳跳地跑進教室。', '小兔子在草地上蹦跳，耳朵一甩一甩的。', '聽到明天要去校外教學，全班都歡蹦起來。'] },
    '踊': { words: ['舞蹈', '舞踊', '踴躍'], sentences: ['同學們很踴躍地舉手回答老師的問題。', '文化祭的舞蹈表演非常精彩，獲得很多掌聲。', '這次的義賣活動，家長們都很踴躍參加。'] },
    '足': { words: ['足夠', '滿足', '足跡'], sentences: ['只要足夠努力，一定可以達成目標。', '吃到媽媽煮的菜，讓我感到好滿足。', '沙灘上留下了一排海龜的足跡。'] },
    '噴': { words: ['噴水', '噴灑', '噴泉'], sentences: ['公園裡的噴泉在陽光下閃閃發光。', '園丁叔叔在花圃噴灑農藥，保護花朵不被害蟲咬。', '鯨魚浮上水面噴水，好像在跟我們打招呼。'] },
    '鎧': { words: ['鎧甲', '鐵鎧', '戰鎧'], sentences: ['古代的將軍穿著厚重的鎧甲上戰場。', '博物館裡展示著武士穿的鐵鎧，又重又堅固。', '故事裡的勇者穿上戰鎧，出發去打倒惡龍。'] },
    '靈': { words: ['靈巧', '機靈', '心靈'], sentences: ['小明的雙手很靈巧，摺紙摺得很漂亮。', '松鼠非常機靈，一有風吹草動就躲起來。', '聽音樂可以讓心靈放鬆，忘掉煩惱。'] }
  },

  /** 查詢生字的詞語造句 */
  getCharPhrases(char) {
    return this._phrases[char] || null;
  },
  getGradeData(grade) {
    return this.grades[grade] || null;
  },

  /** 取得所有年級列表 */
  getGradeList() {
    return Object.entries(this.grades).map(([k, v]) => ({
      grade: parseInt(k),
      name: v.name
    }));
  },

  /** 取得年級下某學期的所有課文 */
  getSemesterData(grade, semester) {
    const g = this.grades[grade];
    if (!g) return null;
    return g.semesters[semester] || null;
  },

  /** 取得某課的所有生字 */
  getLessonChars(grade, semester, lessonIndex) {
    const s = this.getSemesterData(grade, semester);
    if (!s) return [];
    const les = s.lessons[lessonIndex];
    return les ? les.chars : [];
  },

  /** 搜尋生字（模糊） */
  searchChar(query) {
    const results = [];
    if (!query) return results;
    for (const [gk, gv] of Object.entries(this.grades)) {
      for (const [sk, sv] of Object.entries(gv.semesters)) {
        sv.lessons.forEach((les, li) => {
          les.chars.forEach((ch, ci) => {
            if (ch.char.includes(query) || ch.zhuyin.includes(query)) {
              results.push({
                char: ch,
                grade: parseInt(gk),
                semester: sk,
                lessonIndex: li,
                lesson: les,
                charIndex: ci
              });
            }
          });
        });
      }
    }
    return results;
  },

  /** 取得全部生字的扁平列表 */
  getAllChars(grade, semester) {
    const chars = [];
    const semData = this.getSemesterData(grade, semester);
    if (!semData) {
      // Return all
      for (const [gk, gv] of Object.entries(this.grades)) {
        for (const [sk, sv] of Object.entries(gv.semesters)) {
          sv.lessons.forEach(les => {
            chars.push(...les.chars);
          });
        }
      }
      return chars;
    }
    semData.lessons.forEach(les => {
      chars.push(...les.chars);
    });
    return chars;
  },

  /** 生字總數統計 */
  getStats() {
    const stats = {};
    for (const [gk, gv] of Object.entries(this.grades)) {
      stats[gk] = { name: gv.name, count: 0, semesters: {} };
      for (const [sk, sv] of Object.entries(gv.semesters)) {
        let count = 0;
        sv.lessons.forEach(les => {
          count += les.chars.length;
        });
        stats[gk].count += count;
        stats[gk].semesters[sk] = count;
      }
    }
    return stats;
  }
};

// Export for module use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CharacterData;
}

// 문장 데이터 구조
// day: 학습 일차
// id: 문장 식별자
// level: 문장 난이도 단계
// isFinal: 최종 문장 여부
// korean: 한국어 번역
// chinese: {
//   hanzi: 한자 배열
//   pinyin: 병음 배열
//

const sentenceData = {
  day1: [
    // 문장1 묶음 (1~5)
    {
      id: 'sentence1',
      level: 1,
      isFinal: false,
      korean: '계획하다',
      chinese: {
        hanzi: ['安排'],
        pinyin: ['ānpái'],
      },
    },
    {
      id: 'sentence1',
      level: 2,
      isFinal: false,
      korean: '있다',
      chinese: {
        hanzi: ['有'],
        pinyin: ['yǒu'],
      },
    },
    {
      id: 'sentence1',
      level: 3,
      isFinal: false,
      korean: '계획이 있다',
      chinese: {
        hanzi: ['有', '安排'],
        pinyin: ['yǒu', 'ānpái'],
      },
    },
    {
      id: 'sentence1',
      level: 4,
      isFinal: false,
      korean: '무슨 계획?',
      chinese: {
        hanzi: ['什么', '安排'],
        pinyin: ['shénme', 'ānpái'],
      },
    },
    {
      id: 'sentence1',
      level: 5,
      isFinal: true,
      korean: '너는 무슨 계획이 있니?',
      chinese: {
        hanzi: ['你', '有', '什么', '安排'],
        pinyin: ['nǐ', 'yǒu', 'shénme', 'ānpái'],
      },
    },

    // 문장2 묶음 (6~7)
    {
      id: 'sentence2',
      level: 1,
      isFinal: false,
      korean: '주말',
      chinese: {
        hanzi: ['周末'],
        pinyin: ['zhōumò'],
      },
    },
    {
      id: 'sentence2',
      level: 2,
      isFinal: true,
      korean: '너는 주말에 무슨 계획이 있니?',
      chinese: {
        hanzi: ['你', '周末', '有', '什么', '安排'],
        pinyin: ['nǐ', 'zhōumò', 'yǒu', 'shénme', 'ānpái'],
      },
    },

    // 문장3 묶음 (8~9)
    {
      id: 'sentence3',
      level: 1,
      isFinal: false,
      korean: '필요하다',
      chinese: {
        hanzi: ['需要'],
        pinyin: ['xūyào'],
      },
    },
    {
      id: 'sentence3',
      level: 2,
      isFinal: true,
      korean: '나는 필요하다',
      chinese: {
        hanzi: ['我', '需要'],
        pinyin: ['wǒ', 'xūyào'],
      },
    },

    // 문장4 묶음 (10~13)
    {
      id: 'sentence4',
      level: 1,
      isFinal: false,
      korean: '도움',
      chinese: {
        hanzi: ['帮助'],
        pinyin: ['bāngzhù'],
      },
    },
    {
      id: 'sentence4',
      level: 2,
      isFinal: false,
      korean: '도움이 필요하다',
      chinese: {
        hanzi: ['需要', '帮助'],
        pinyin: ['xūyào', 'bāngzhù'],
      },
    },
    {
      id: 'sentence4',
      level: 3,
      isFinal: false,
      korean: '나는 도움이 필요하다',
      chinese: {
        hanzi: ['我', '需要', '帮助'],
        pinyin: ['wǒ', 'xūyào', 'bāngzhù'],
      },
    },
    {
      id: 'sentence4',
      level: 4,
      isFinal: true,
      korean: '너는 도움이 필요하니?',
      chinese: {
        hanzi: ['你', '需要', '帮助', '吗'],
        pinyin: ['nǐ', 'xūyào', 'bāngzhù', 'ma'],
      },
    },

    // 문장5 묶음 (14~17)
    {
      id: 'sentence5',
      level: 1,
      isFinal: false,
      korean: '비교하다',
      chinese: {
        hanzi: ['比较'],
        pinyin: ['bǐjiào'],
      },
    },
    {
      id: 'sentence5',
      level: 2,
      isFinal: false,
      korean: '더 좋다',
      chinese: {
        hanzi: ['比较', '好'],
        pinyin: ['bǐjiào', 'hǎo'],
      },
    },
    {
      id: 'sentence5',
      level: 3,
      isFinal: false,
      korean: '어느 것',
      chinese: {
        hanzi: ['哪个'],
        pinyin: ['nǎge'],
      },
    },
    {
      id: 'sentence5',
      level: 4,
      isFinal: true,
      korean: '어느 것이 더 좋아?',
      chinese: {
        hanzi: ['哪个', '比较', '好'],
        pinyin: ['nǎge', 'bǐjiào', 'hǎo'],
      },
    },

    // 문장6 묶음 (18~21)
    {
      id: 'sentence6',
      level: 1,
      isFinal: false,
      korean: '이 두 개의 휴대폰',
      chinese: {
        hanzi: ['这两个', '手机'],
        pinyin: ['zhè liǎng ge', 'shǒujī'],
      },
    },
    {
      id: 'sentence6',
      level: 2,
      isFinal: false,
      korean: '이 두 개의 휴대폰 중 어느 것이 더 좋아?',
      chinese: {
        hanzi: ['这两个', '手机', '哪个', '比较', '好'],
        pinyin: ['zhè liǎng ge', 'shǒujī', 'nǎge', 'bǐjiào', 'hǎo'],
      },
    },
    {
      id: 'sentence6',
      level: 3,
      isFinal: false,
      korean: '너는 생각한다',
      chinese: {
        hanzi: ['你', '觉得'],
        pinyin: ['nǐ', 'juéde'],
      },
    },
    {
      id: 'sentence6',
      level: 4,
      isFinal: true,
      korean: '너는 이 두 개의 휴대폰 중 어느 것이 더 좋다고 생각해?',
      chinese: {
        hanzi: ['你', '觉得', '这两个', '手机', '哪个', '比较', '好'],
        pinyin: [
          'nǐ',
          'juéde',
          'zhè liǎng ge',
          'shǒujī',
          'nǎge',
          'bǐjiào',
          'hǎo',
        ],
      },
    },

    // 문장7 묶음 (22~26)
    {
      id: 'sentence7',
      level: 1,
      isFinal: false,
      korean: '보다',
      chinese: {
        hanzi: ['看'],
        pinyin: ['kàn'],
      },
    },
    {
      id: 'sentence7',
      level: 2,
      isFinal: false,
      korean: '봤다',
      chinese: {
        hanzi: ['看', '了'],
        pinyin: ['kàn', 'le'],
      },
    },
    {
      id: 'sentence7',
      level: 3,
      isFinal: false,
      korean: '안 봤다',
      chinese: {
        hanzi: ['没', '看'],
        pinyin: ['méi', 'kàn'],
      },
    },
    {
      id: 'sentence7',
      level: 4,
      isFinal: false,
      korean: '봤어?',
      chinese: {
        hanzi: ['看', '了', '吗'],
        pinyin: ['kàn', 'le', 'ma'],
      },
    },
    {
      id: 'sentence7',
      level: 5,
      isFinal: true,
      korean: '안 봤어?',
      chinese: {
        hanzi: ['没', '看', '吗'],
        pinyin: ['méi', 'kàn', 'ma'],
      },
    },

    // 문장8 묶음 (27~30)
    {
      id: 'sentence8',
      level: 1,
      isFinal: false,
      korean: '어제 경기',
      chinese: {
        hanzi: ['昨天', '的', '比赛'],
        pinyin: ['zuótiān', 'de', 'bǐsài'],
      },
    },
    {
      id: 'sentence8',
      level: 2,
      isFinal: false,
      korean: '어제 경기를 봤다',
      chinese: {
        hanzi: ['看', '了', '昨天', '的', '比赛'],
        pinyin: ['kàn', 'le', 'zuótiān', 'de', 'bǐsài'],
      },
    },
    {
      id: 'sentence8',
      level: 3,
      isFinal: false,
      korean: '너는 어제 경기를 봤니?',
      chinese: {
        hanzi: ['你', '看', '了', '昨天的', '比赛', '吗'],
        pinyin: ['nǐ', 'kàn', 'le', 'zuótiān', 'de', 'bǐsài', 'ma'],
      },
    },
    {
      id: 'sentence8',
      level: 4,
      isFinal: true,
      korean: '어제 경기, 너는 봤니?',
      chinese: {
        hanzi: ['昨天', '的', '比赛', '，', '你', '看', '了', '吗'],
        pinyin: ['zuótiān', 'de', 'bǐsài', ',', 'nǐ', 'kàn', 'le', 'ma'],
      },
    },

    // 문장9 묶음 (31~34)
    {
      id: 'sentence9',
      level: 1,
      isFinal: false,
      korean: '어디',
      chinese: {
        hanzi: ['哪里'],
        pinyin: ['nǎli'],
      },
    },
    {
      id: 'sentence9',
      level: 2,
      isFinal: false,
      korean: '어디에',
      chinese: {
        hanzi: ['在', '哪里'],
        pinyin: ['zài', 'nǎli'],
      },
    },
    {
      id: 'sentence9',
      level: 3,
      isFinal: false,
      korean: '사다',
      chinese: {
        hanzi: ['买'],
        pinyin: ['mǎi'],
      },
    },
    {
      id: 'sentence9',
      level: 4,
      isFinal: true,
      korean: '어디에서 사?',
      chinese: {
        hanzi: ['在', '哪里', '买'],
        pinyin: ['zài', 'nǎli', 'mǎi'],
      },
    },

    // 문장10 묶음 (35~39)
    {
      id: 'sentence10',
      level: 1,
      isFinal: false,
      korean:
        '과거에 ‘언제’, ’어디서‘, ’누구랑‘, ’어떻게‘를 강조해주는 장치!, Ex) A: 너 어디에서 샀어? B: 다이소에서 샀어 -> ‘다이소’에서 강조!',
      chinese: {
        hanzi: ['是......的'],
        pinyin: ['shì......de'],
      },
    },
    {
      id: 'sentence10',
      level: 2,
      isFinal: false,
      korean: '어디에서 산 거야?',
      chinese: {
        hanzi: ['是', '在', '哪里', '买', '的'],
        pinyin: ['shì', 'zài', 'nǎli', 'mǎi', 'de'],
      },
    },
    {
      id: 'sentence10',
      level: 3,
      isFinal: false,
      korean: '노트북',
      chinese: {
        hanzi: ['笔记本'],
        pinyin: ['bǐjìběn'],
      },
    },
    {
      id: 'sentence10',
      level: 4,
      isFinal: false,
      korean: '너의 노트북',
      chinese: {
        hanzi: ['你', '的', '笔记本'],
        pinyin: ['nǐ', 'de', 'bǐjìběn'],
      },
    },
    {
      id: 'sentence10',
      level: 5,
      isFinal: true,
      korean: '너의 노트북은 어디에서 산 거야?',
      chinese: {
        hanzi: ['你', '的', '笔记本', '是', '在', '哪里', '买', '的'],
        pinyin: ['nǐ', 'de', 'bǐjìběn', 'shì', 'zài', 'nǎli', 'mǎi', 'de'],
      },
    },
  ],

  day2: [
    // 문장11 묶음 (40~44)
    {
      id: 'sentence1',
      level: 1,
      isFinal: false,
      korean: '우유',
      chinese: {
        hanzi: ['牛奶'],
        pinyin: ['niúnǎi'],
      },
    },
    {
      id: 'sentence1',
      level: 2,
      isFinal: false,
      korean: '우유가 있다',
      chinese: {
        hanzi: ['有', '牛奶'],
        pinyin: ['yǒu', 'niúnǎi'],
      },
    },
    {
      id: 'sentence1',
      level: 3,
      isFinal: false,
      korean: '아직',
      chinese: {
        hanzi: ['还'],
        pinyin: ['hái'],
      },
    },
    {
      id: 'sentence1',
      level: 4,
      isFinal: false,
      korean: '아직 있다',
      chinese: {
        hanzi: ['还', '有'],
        pinyin: ['hái', 'yǒu'],
      },
    },
    {
      id: 'sentence1',
      level: 5,
      isFinal: true,
      korean: '우유가 아직 있다',
      chinese: {
        hanzi: ['还', '有', '牛奶'],
        pinyin: ['hái', 'yǒu', 'niúnǎi'],
      },
    },

    // 문장12 묶음 (45~48)
    {
      id: 'sentence2',
      level: 1,
      isFinal: false,
      korean: '냉장고 안에',
      chinese: {
        hanzi: ['冰箱', '里'],
        pinyin: ['bīngxiāng', 'lǐ'],
      },
    },
    {
      id: 'sentence2',
      level: 2,
      isFinal: false,
      korean: '냉장고 안에 우유가 있다',
      chinese: {
        hanzi: ['冰箱', '里', '有', '牛奶'],
        pinyin: ['bīngxiāng', 'lǐ', 'yǒu', 'niúnǎi'],
      },
    },
    {
      id: 'sentence2',
      level: 3,
      isFinal: false,
      korean: '냉장고 안에 우유가 있니?',
      chinese: {
        hanzi: ['冰箱', '里', '有', '牛奶', '吗'],
        pinyin: ['bīngxiāng', 'lǐ', 'yǒu', 'niúnǎi', 'ma'],
      },
    },
    {
      id: 'sentence2',
      level: 4,
      isFinal: true,
      korean: '냉장고 안에 우유가 아직 있니?',
      chinese: {
        hanzi: ['冰箱', '里', '还', '有', '牛奶', '吗'],
        pinyin: ['bīngxiāng', 'lǐ', 'hái', 'yǒu', 'niúnǎi', 'ma'],
      },
    },

    // 문장13 묶음 (49~53)
    {
      id: 'sentence3',
      level: 1,
      isFinal: false,
      korean: '중국어',
      chinese: {
        hanzi: ['汉语'],
        pinyin: ['hànyǔ'],
      },
    },
    {
      id: 'sentence3',
      level: 2,
      isFinal: false,
      korean: '중국어를 말하다',
      chinese: {
        hanzi: ['说', '汉语'],
        pinyin: ['shuō', 'hànyǔ'],
      },
    },
    {
      id: 'sentence3',
      level: 3,
      isFinal: false,
      korean: '할 수 있다',
      chinese: {
        hanzi: ['会'],
        pinyin: ['huì'],
      },
    },
    {
      id: 'sentence3',
      level: 4,
      isFinal: false,
      korean: '중국어를 할 수 있다',
      chinese: {
        hanzi: ['会', '说', '汉语'],
        pinyin: ['huì', 'shuō', 'hànyǔ'],
      },
    },
    {
      id: 'sentence3',
      level: 5,
      isFinal: true,
      korean: '그는 중국어를 할 수 있다',
      chinese: {
        hanzi: ['他', '会', '说', '汉语'],
        pinyin: ['tā', 'huì', 'shuō', 'hànyǔ'],
      },
    },

    // 문장14 묶음 (54~61)
    {
      id: 'sentence4',
      level: 1,
      isFinal: false,
      korean: '~뿐만 아니라',
      chinese: {
        hanzi: ['不但'],
        pinyin: ['bùdàn'],
      },
    },
    {
      id: 'sentence4',
      level: 2,
      isFinal: false,
      korean: '중국어를 할 수 있을 뿐만 아니라',
      chinese: {
        hanzi: ['不但', '会', '说', '汉语'],
        pinyin: ['bùdàn', 'huì', 'shuō', 'hànyǔ'],
      },
    },
    {
      id: 'sentence4',
      level: 3,
      isFinal: false,
      korean: '그는 중국어를 할 수 있을 뿐만 아니라',
      chinese: {
        hanzi: ['他', '不但', '会', '说', '汉语'],
        pinyin: ['tā', 'bùdàn', 'huì', 'shuō', 'hànyǔ'],
      },
    },
    {
      id: 'sentence4',
      level: 4,
      isFinal: false,
      korean: '일본어를 말하다',
      chinese: {
        hanzi: ['说', '日语'],
        pinyin: ['shuō', 'rìyǔ'],
      },
    },
    {
      id: 'sentence4',
      level: 5,
      isFinal: false,
      korean: '일본어를 할 수 있다',
      chinese: {
        hanzi: ['会', '说', '日语'],
        pinyin: ['huì', 'shuō', 'rìyǔ'],
      },
    },
    {
      id: 'sentence4',
      level: 6,
      isFinal: false,
      korean: '~뿐만 아니라, ~도',
      chinese: {
        hanzi: ['不但......', '还'],
        pinyin: ['bùdàn......', 'hái'],
      },
    },
    {
      id: 'sentence4',
      level: 7,
      isFinal: false,
      korean: '~뿐만 아니라, 일본어도 할 수 있다',
      chinese: {
        hanzi: ['不但......', '还', '会', '说', '日语'],
        pinyin: ['bùdàn......', 'hái', 'huì', 'shuō', 'rìyǔ'],
      },
    },
    {
      id: 'sentence4',
      level: 8,
      isFinal: true,
      korean: '그는 중국어를 할 수 있을 뿐만 아니라, 일본어도 할 수 있다',
      chinese: {
        hanzi: [
          '他',
          '不但',
          '会',
          '说',
          '汉语',
          '，',
          '还',
          '会',
          '说',
          '日语',
        ],
        pinyin: [
          'tā',
          'bùdàn',
          'huì',
          'shuō',
          'hànyǔ',
          ',',
          'hái',
          'huì',
          'shuō',
          'rìyǔ',
        ],
      },
    },

    // 문장15 묶음 (62~67)
    {
      id: 'sentence5',
      level: 1,
      isFinal: false,
      korean: '보다',
      chinese: {
        hanzi: ['看'],
        pinyin: ['kàn'],
      },
    },
    {
      id: 'sentence5',
      level: 2,
      isFinal: false,
      korean: '~좀',
      chinese: {
        hanzi: ['一下'],
        pinyin: ['yīxià'],
      },
    },
    {
      id: 'sentence5',
      level: 3,
      isFinal: false,
      korean: '좀 보다',
      chinese: {
        hanzi: ['看', '一下'],
        pinyin: ['kàn', 'yīxià'],
      },
    },
    {
      id: 'sentence5',
      level: 4,
      isFinal: false,
      korean: '메뉴',
      chinese: {
        hanzi: ['菜单'],
        pinyin: ['càidān'],
      },
    },
    {
      id: 'sentence5',
      level: 5,
      isFinal: false,
      korean: '메뉴를 좀 보다',
      chinese: {
        hanzi: ['看', '一下', '菜单'],
        pinyin: ['kàn', 'yīxià', 'càidān'],
      },
    },
    {
      id: 'sentence5',
      level: 6,
      isFinal: true,
      korean: '메뉴를 좀 보자',
      chinese: {
        hanzi: ['来', '看', '一下', '菜单'],
        pinyin: ['lái', 'kàn', 'yīxià', 'càidān'],
      },
    },

    // 문장16 묶음 (68~77)
    {
      id: 'sentence6',
      level: 1,
      isFinal: false,
      korean: '먹다',
      chinese: {
        hanzi: ['吃'],
        pinyin: ['chī'],
      },
    },
    {
      id: 'sentence6',
      level: 2,
      isFinal: false,
      korean: '~하고 싶다',
      chinese: {
        hanzi: ['想'],
        pinyin: ['xiǎng'],
      },
    },
    {
      id: 'sentence6',
      level: 3,
      isFinal: false,
      korean: '먹고 싶다',
      chinese: {
        hanzi: ['想', '吃'],
        pinyin: ['xiǎng', 'chī'],
      },
    },
    {
      id: 'sentence6',
      level: 4,
      isFinal: false,
      korean: '요리를 먹고 싶다',
      chinese: {
        hanzi: ['想', '吃', '菜'],
        pinyin: ['xiǎng', 'chī', 'cài'],
      },
    },
    {
      id: 'sentence6',
      level: 5,
      isFinal: false,
      korean: '어느',
      chinese: {
        hanzi: ['哪'],
        pinyin: ['nǎ'],
      },
    },
    {
      id: 'sentence6',
      level: 6,
      isFinal: false,
      korean: '어떤 것들',
      chinese: {
        hanzi: ['哪些'],
        pinyin: ['nǎxiē'],
      },
    },
    {
      id: 'sentence6',
      level: 7,
      isFinal: false,
      korean: '어떤 요리들',
      chinese: {
        hanzi: ['哪些', '菜'],
        pinyin: ['nǎxiē', 'cài'],
      },
    },
    {
      id: 'sentence6',
      level: 8,
      isFinal: false,
      korean: '어떤 요리들을 먹고 싶어?',
      chinese: {
        hanzi: ['想', '吃', '哪些', '菜'],
        pinyin: ['xiǎng', 'chī', 'nǎxiē', 'cài'],
      },
    },
    {
      id: 'sentence6',
      level: 9,
      isFinal: false,
      korean: '너는 어떤 요리들을 먹고 싶어?',
      chinese: {
        hanzi: ['你', '想', '吃', '哪些', '菜'],
        pinyin: ['nǐ', 'xiǎng', 'chī', 'nǎxiē', 'cài'],
      },
    },
    {
      id: 'sentence6',
      level: 10,
      isFinal: true,
      korean: '메뉴를 좀 보자, 너는 어떤 요리들을 먹고 싶어?',
      chinese: {
        hanzi: [
          '来',
          '看',
          '一下',
          '菜单',
          '，',
          '你',
          '想',
          '吃',
          '哪些',
          '菜',
        ],
        pinyin: [
          'lái',
          'kàn',
          'yīxià',
          'càidān',
          ',',
          'nǐ',
          'xiǎng',
          'chī',
          'nǎxiē',
          'cài',
        ],
      },
    },

    // 문장17 묶음 (78~79)
    {
      id: 'sentence7',
      level: 1,
      isFinal: false,
      korean: '참가하다',
      chinese: {
        hanzi: ['参加'],
        pinyin: ['cānjiā'],
      },
    },
    {
      id: 'sentence7',
      level: 2,
      isFinal: true,
      korean: '너는 참가하니?',
      chinese: {
        hanzi: ['你', '参加', '吗'],
        pinyin: ['nǐ', 'cānjiā', 'ma'],
      },
    },

    // 문장18 묶음 (80~86)
    {
      id: 'sentence8',
      level: 1,
      isFinal: false,
      korean: '활동',
      chinese: {
        hanzi: ['活动'],
        pinyin: ['huódòng'],
      },
    },
    {
      id: 'sentence8',
      level: 2,
      isFinal: false,
      korean: '내일의',
      chinese: {
        hanzi: ['明天的'],
        pinyin: ['míngtiān de'],
      },
    },
    {
      id: 'sentence8',
      level: 3,
      isFinal: false,
      korean: '내일의 활동',
      chinese: {
        hanzi: ['明天的', '活动'],
        pinyin: ['míngtiān de', 'huódòng'],
      },
    },
    {
      id: 'sentence8',
      level: 4,
      isFinal: false,
      korean: '내일의 활동에 참가하다',
      chinese: {
        hanzi: ['参加', '明天的', '活动'],
        pinyin: ['cānjiā', 'míngtiān de', 'huódòng'],
      },
    },
    {
      id: 'sentence8',
      level: 5,
      isFinal: false,
      korean: '내일의 활동에 참가하니?',
      chinese: {
        hanzi: ['参加', '明天的', '活动', '吗'],
        pinyin: ['cānjiā', 'míngtiān de', 'huódòng', 'ma'],
      },
    },
    {
      id: 'sentence8',
      level: 6,
      isFinal: false,
      korean: '너는 내일의 활동에 참가하니?',
      chinese: {
        hanzi: ['你', '参加', '明天的', '活动', '吗'],
        pinyin: ['nǐ', 'cānjiā', 'míngtiān de', 'huódòng', 'ma'],
      },
    },
    {
      id: 'sentence8',
      level: 7,
      isFinal: true,
      korean: '내일의 활동, 너는 참가하니?',
      chinese: {
        hanzi: ['明天的', '活动', '，', '你', '参加', '吗'],
        pinyin: ['míngtiān de', 'huódòng', ',', 'nǐ', 'cānjiā', 'ma'],
      },
    },

    // 문장19 묶음 (87~89)
    {
      id: 'sentence9',
      level: 1,
      isFinal: false,
      korean: '똑똑하다',
      chinese: {
        hanzi: ['聪明'],
        pinyin: ['cōngming'],
      },
    },
    {
      id: 'sentence9',
      level: 2,
      isFinal: false,
      korean: '정말',
      chinese: {
        hanzi: ['真'],
        pinyin: ['zhēn'],
      },
    },
    {
      id: 'sentence9',
      level: 3,
      isFinal: true,
      korean: '정말 똑똑하다',
      chinese: {
        hanzi: ['真', '聪明'],
        pinyin: ['zhēn', 'cōngming'],
      },
    },

    // 문장20 묶음 (90~92)
    {
      id: 'sentence10',
      level: 1,
      isFinal: false,
      korean: '아이',
      chinese: {
        hanzi: ['孩子'],
        pinyin: ['háizi'],
      },
    },
    {
      id: 'sentence10',
      level: 2,
      isFinal: false,
      korean: '너의 아이',
      chinese: {
        hanzi: ['你', '的', '孩子'],
        pinyin: ['nǐ', 'de', 'háizi'],
      },
    },
    {
      id: 'sentence10',
      level: 3,
      isFinal: true,
      korean: '너의 아이는 정말 똑똑하다!',
      chinese: {
        hanzi: ['你', '的', '孩子', '真', '聪明'],
        pinyin: ['nǐ', 'de', 'háizi', 'zhēn', 'cōngming'],
      },
    },
  ],
};

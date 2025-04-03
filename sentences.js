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
const sentences = {
  day3: [
    // 문장1 묶음 (92-94)
    {
      id: 'sentence1',
      level: 1,
      isFinal: false,
      korean: '방',
      chinese: {
        hanzi: ['房间'],
        pinyin: ['fángjiān'],
      },
    },
    {
      id: 'sentence1',
      level: 2,
      isFinal: false,
      korean: '청소하다',
      chinese: {
        hanzi: ['打扫'],
        pinyin: ['dǎsǎo'],
      },
    },
    {
      id: 'sentence1',
      level: 3,
      isFinal: true,
      korean: '방 청소하다',
      chinese: {
        hanzi: ['打扫', '房间'],
        pinyin: ['dǎsǎo', 'fángjiān'],
      },
    },

    // 문장2 묶음 (95-98)
    {
      id: 'sentence2',
      level: 1,
      isFinal: false,
      korean: '오늘',
      chinese: {
        hanzi: ['今天'],
        pinyin: ['jīntiān'],
      },
    },
    {
      id: 'sentence2',
      level: 2,
      isFinal: false,
      korean: '오늘 방 청소하다',
      chinese: {
        hanzi: ['今天', '打扫', '房间'],
        pinyin: ['jīntiān', 'dǎsǎo', 'fángjiān'],
      },
    },
    {
      id: 'sentence2',
      level: 3,
      isFinal: false,
      korean: '오늘 방 청소했다',
      chinese: {
        hanzi: ['今天', '打扫', '房间', '了'],
        pinyin: ['jīntiān', 'dǎsǎo', 'fángjiān', 'le'],
      },
    },
    {
      id: 'sentence2',
      level: 4,
      isFinal: true,
      korean: '너는 오늘 방 청소했니?',
      chinese: {
        hanzi: ['你', '今天', '打扫', '房间', '了', '吗'],
        pinyin: ['nǐ', 'jīntiān', 'dǎsǎo', 'fángjiān', 'le', 'ma'],
      },
    },

    // 문장3 묶음 (99-100)
    {
      id: 'sentence3',
      level: 1,
      isFinal: false,
      korean: '하다',
      chinese: {
        hanzi: ['做'],
        pinyin: ['zuò'],
      },
    },
    {
      id: 'sentence3',
      level: 2,
      isFinal: true,
      korean: '뭐 하니?',
      chinese: {
        hanzi: ['做', '什么'],
        pinyin: ['zuò', 'shénme'],
      },
    },

    // 문장4 묶음 (101-104)
    {
      id: 'sentence4',
      level: 1,
      isFinal: false,
      korean: '계획하다',
      chinese: {
        hanzi: ['打算'],
        pinyin: ['dǎsuàn'],
      },
    },
    {
      id: 'sentence4',
      level: 2,
      isFinal: false,
      korean: '뭐 할 계획이니?',
      chinese: {
        hanzi: ['打算', '做', '什么'],
        pinyin: ['dǎsuàn', 'zuò', 'shénme'],
      },
    },
    {
      id: 'sentence4',
      level: 3,
      isFinal: false,
      korean: '여름방학',
      chinese: {
        hanzi: ['暑假'],
        pinyin: ['shǔjià'],
      },
    },
    {
      id: 'sentence4',
      level: 4,
      isFinal: true,
      korean: '너는 여름방학에 뭐 할 계획이니?',
      chinese: {
        hanzi: ['你', '暑假', '打算', '做', '什么'],
        pinyin: ['nǐ', 'shǔjià', 'dǎsuàn', 'zuò', 'shénme'],
      },
    },

    // 문장5 묶음 (105-107)
    {
      id: 'sentence5',
      level: 1,
      isFinal: false,
      korean: '지하철',
      chinese: {
        hanzi: ['地铁'],
        pinyin: ['dìtiě'],
      },
    },
    {
      id: 'sentence5',
      level: 2,
      isFinal: false,
      korean: '지하철 타다',
      chinese: {
        hanzi: ['坐', '地铁'],
        pinyin: ['zuò', 'dìtiě'],
      },
    },
    {
      id: 'sentence5',
      level: 3,
      isFinal: true,
      korean: '지하철 타니?',
      chinese: {
        hanzi: ['坐', '地铁', '吗'],
        pinyin: ['zuò', 'dìtiě', 'ma'],
      },
    },

    // 문장6 묶음 (108-113)
    {
      id: 'sentence6',
      level: 1,
      isFinal: false,
      korean: '출근하다',
      chinese: {
        hanzi: ['上班'],
        pinyin: ['shàngbān'],
      },
    },
    {
      id: 'sentence6',
      level: 2,
      isFinal: false,
      korean: '출근하러 가다',
      chinese: {
        hanzi: ['去', '上班'],
        pinyin: ['qù', 'shàngbān'],
      },
    },
    {
      id: 'sentence6',
      level: 3,
      isFinal: false,
      korean: '어떻게 출근하니?',
      chinese: {
        hanzi: ['怎么', '去', '上班'],
        pinyin: ['zěnme', 'qù', 'shàngbān'],
      },
    },
    {
      id: 'sentence6',
      level: 4,
      isFinal: false,
      korean: '매일',
      chinese: {
        hanzi: ['每天'],
        pinyin: ['měitiān'],
      },
    },
    {
      id: 'sentence6',
      level: 5,
      isFinal: false,
      korean: '너는 매일 어떻게 출근하니?',
      chinese: {
        hanzi: ['你', '每天', '怎么', '去', '上班'],
        pinyin: ['nǐ', 'měitiān', 'zěnme', 'qù', 'shàngbān'],
      },
    },
    {
      id: 'sentence6',
      level: 6,
      isFinal: true,
      korean: '너는 매일 어떻게 출근하니? 지하철 타니?',
      chinese: {
        hanzi: ['你', '每天', '怎么', '去', '上班', '？', '坐', '地铁', '吗'],
        pinyin: [
          'nǐ',
          'měitiān',
          'zěnme',
          'qù',
          'shàngbān',
          '?',
          'zuò',
          'dìtiě',
          'ma',
        ],
      },
    },

    // 문장7 묶음 (114-121)
    {
      id: 'sentence7',
      level: 1,
      isFinal: false,
      korean: '받다',
      chinese: {
        hanzi: ['收到'],
        pinyin: ['shōudào'],
      },
    },
    {
      id: 'sentence7',
      level: 2,
      isFinal: false,
      korean: '이메일',
      chinese: {
        hanzi: ['电子邮件'],
        pinyin: ['diànzǐ yóujiàn'],
      },
    },
    {
      id: 'sentence7',
      level: 3,
      isFinal: false,
      korean: '이메일을 받다',
      chinese: {
        hanzi: ['收到', '电子邮件'],
        pinyin: ['shōudào', 'diànzǐ yóujiàn'],
      },
    },
    {
      id: 'sentence7',
      level: 4,
      isFinal: false,
      korean: '이메일을 받았다',
      chinese: {
        hanzi: ['收到', '电子邮件', '了'],
        pinyin: ['shōudào', 'diànzǐ yóujiàn', 'le'],
      },
    },
    {
      id: 'sentence7',
      level: 5,
      isFinal: false,
      korean: '받지 못했다',
      chinese: {
        hanzi: ['没收到'],
        pinyin: ['méi shōudào'],
      },
    },
    {
      id: 'sentence7',
      level: 6,
      isFinal: false,
      korean: '이메일을 받지 못했다',
      chinese: {
        hanzi: ['没收到', '电子邮件'],
        pinyin: ['méi shōudào', 'diànzǐ yóujiàn'],
      },
    },
    {
      id: 'sentence7',
      level: 7,
      isFinal: false,
      korean: '내 이메일',
      chinese: {
        hanzi: ['我的', '电子邮件'],
        pinyin: ['wǒde', 'diànzǐ yóujiàn'],
      },
    },
    {
      id: 'sentence7',
      level: 8,
      isFinal: true,
      korean: '너는 내 이메일을 받았니?',
      chinese: {
        hanzi: ['你', '收到', '我的', '电子邮件', '了', '吗'],
        pinyin: ['nǐ', 'shōudào', 'wǒde', 'diànzǐ yóujiàn', 'le', 'ma'],
      },
    },

    // 문장8 묶음 (122-126)
    {
      id: 'sentence8',
      level: 1,
      isFinal: false,
      korean: '동물원',
      chinese: {
        hanzi: ['动物园'],
        pinyin: ['dòngwùyuán'],
      },
    },
    {
      id: 'sentence8',
      level: 2,
      isFinal: false,
      korean: '동물원에 가다',
      chinese: {
        hanzi: ['去', '动物园'],
        pinyin: ['qù', 'dòngwùyuán'],
      },
    },
    {
      id: 'sentence8',
      level: 3,
      isFinal: false,
      korean: '동물원에 가자',
      chinese: {
        hanzi: ['去', '动物园', '吧'],
        pinyin: ['qù', 'dòngwùyuán', 'ba'],
      },
    },
    {
      id: 'sentence8',
      level: 4,
      isFinal: false,
      korean: '주말',
      chinese: {
        hanzi: ['周末'],
        pinyin: ['zhōumò'],
      },
    },
    {
      id: 'sentence8',
      level: 5,
      isFinal: true,
      korean: '주말에 우리 동물원에 가자!',
      chinese: {
        hanzi: ['周末', '我们', '去', '动物园', '吧', '！'],
        pinyin: ['zhōumò', 'wǒmen', 'qù', 'dòngwùyuán', 'ba', '!'],
      },
    },

    // 문장9 묶음 (127-128)
    {
      id: 'sentence9',
      level: 1,
      isFinal: false,
      korean: '운동하다',
      chinese: {
        hanzi: ['锻炼'],
        pinyin: ['duànliàn'],
      },
    },
    {
      id: 'sentence9',
      level: 2,
      isFinal: true,
      korean: '운동 좀 하다',
      chinese: {
        hanzi: ['锻炼', '锻炼'],
        pinyin: ['duànliàn', 'duànliàn'],
      },
    },

    // 문장10 묶음 (129-131)
    {
      id: 'sentence10',
      level: 1,
      isFinal: false,
      korean: '매일',
      chinese: {
        hanzi: ['每天'],
        pinyin: ['měitiān'],
      },
    },
    {
      id: 'sentence10',
      level: 2,
      isFinal: false,
      korean: '매일 운동하다',
      chinese: {
        hanzi: ['每天', '锻炼'],
        pinyin: ['měitiān', 'duànliàn'],
      },
    },
    {
      id: 'sentence10',
      level: 3,
      isFinal: true,
      korean: '너는 매일 운동하니?',
      chinese: {
        hanzi: ['你', '每天', '锻炼', '吗'],
        pinyin: ['nǐ', 'měitiān', 'duànliàn', 'ma'],
      },
    },
  ],

  day4: [
    // 문장1 묶음 (132-134)
    {
      id: 'sentence1',
      level: 1,
      isFinal: false,
      korean: '교통',
      chinese: {
        hanzi: ['交通'],
        pinyin: ['jiāotōng'],
      },
    },
    {
      id: 'sentence1',
      level: 2,
      isFinal: false,
      korean: '편리하다',
      chinese: {
        hanzi: ['方便'],
        pinyin: ['fāngbiàn'],
      },
    },
    {
      id: 'sentence1',
      level: 3,
      isFinal: true,
      korean: '교통이 매우 편리하다',
      chinese: {
        hanzi: ['交通', '很', '方便'],
        pinyin: ['jiāotōng', 'hěn', 'fāngbiàn'],
      },
    },

    // 문장2 묶음 (135-136)
    {
      id: 'sentence2',
      level: 1,
      isFinal: false,
      korean: '여기',
      chinese: {
        hanzi: ['这里'],
        pinyin: ['zhèlǐ'],
      },
    },
    {
      id: 'sentence2',
      level: 2,
      isFinal: true,
      korean: '여기는 교통이 편리하니?',
      chinese: {
        hanzi: ['这里', '交通', '方便', '吗'],
        pinyin: ['zhèlǐ', 'jiāotōng', 'fāngbiàn', 'ma'],
      },
    },

    // 문장3 묶음 (137-139)
    {
      id: 'sentence3',
      level: 1,
      isFinal: false,
      korean: 'A에 B가 있다',
      chinese: {
        hanzi: ['A有B'],
        pinyin: ['A yǒu B'],
      },
    },
    {
      id: 'sentence3',
      level: 2,
      isFinal: false,
      korean: '슈퍼마켓',
      chinese: {
        hanzi: ['超市'],
        pinyin: ['chāoshì'],
      },
    },
    {
      id: 'sentence3',
      level: 3,
      isFinal: true,
      korean: '슈퍼마켓이 있다',
      chinese: {
        hanzi: ['有', '超市'],
        pinyin: ['yǒu', 'chāoshì'],
      },
    },

    // 문장4 묶음 (140-142)
    {
      id: 'sentence4',
      level: 1,
      isFinal: false,
      korean: '근처',
      chinese: {
        hanzi: ['附近'],
        pinyin: ['fùjìn'],
      },
    },
    {
      id: 'sentence4',
      level: 2,
      isFinal: false,
      korean: '이 근처',
      chinese: {
        hanzi: ['这', '附近'],
        pinyin: ['zhè', 'fùjìn'],
      },
    },
    {
      id: 'sentence4',
      level: 3,
      isFinal: true,
      korean: '이 근처에 슈퍼마켓이 있니?',
      chinese: {
        hanzi: ['这', '附近', '有', '超市', '吗'],
        pinyin: ['zhè', 'fùjìn', 'yǒu', 'chāoshì', 'ma'],
      },
    },

    // 문장5 묶음 (143-144)
    {
      id: 'sentence5',
      level: 1,
      isFinal: false,
      korean: '어떻게 됐니?',
      chinese: {
        hanzi: ['怎么了'],
        pinyin: ['zěnme le'],
      },
    },
    {
      id: 'sentence5',
      level: 2,
      isFinal: true,
      korean: '너 어떻게 됐니?',
      chinese: {
        hanzi: ['你', '怎么了'],
        pinyin: ['nǐ', 'zěnme le'],
      },
    },

    // 문장6 묶음 (145-147)
    {
      id: 'sentence6',
      level: 1,
      isFinal: false,
      korean: '감기에 걸리다',
      chinese: {
        hanzi: ['感冒'],
        pinyin: ['gǎnmào'],
      },
    },
    {
      id: 'sentence6',
      level: 2,
      isFinal: false,
      korean: '감기에 걸렸니?',
      chinese: {
        hanzi: ['感冒', '了', '吗'],
        pinyin: ['gǎnmào', 'le', 'ma'],
      },
    },
    {
      id: 'sentence6',
      level: 3,
      isFinal: true,
      korean: '너 어떻게 됐니? 감기에 걸렸니?',
      chinese: {
        hanzi: ['你', '怎么了', '？', '感冒', '了', '吗'],
        pinyin: ['nǐ', 'zěnme le', '?', 'gǎnmào', 'le', 'ma'],
      },
    },

    // 문장7 묶음 (148-150)
    {
      id: 'sentence7',
      level: 1,
      isFinal: false,
      korean: '공원',
      chinese: {
        hanzi: ['公园'],
        pinyin: ['gōngyuán'],
      },
    },
    {
      id: 'sentence7',
      level: 2,
      isFinal: false,
      korean: '공원에 가다',
      chinese: {
        hanzi: ['去', '公园'],
        pinyin: ['qù', 'gōngyuán'],
      },
    },
    {
      id: 'sentence7',
      level: 3,
      isFinal: true,
      korean: '공원에 가자!',
      chinese: {
        hanzi: ['去', '公园', '吧', '！'],
        pinyin: ['qù', 'gōngyuán', 'ba', '!'],
      },
    },

    // 문장8 묶음 (151-155)
    {
      id: 'sentence8',
      level: 1,
      isFinal: false,
      korean: '산책하다',
      chinese: {
        hanzi: ['散步'],
        pinyin: ['sànbù'],
      },
    },
    {
      id: 'sentence8',
      level: 2,
      isFinal: false,
      korean: '산책하러 가다',
      chinese: {
        hanzi: ['去', '散步'],
        pinyin: ['qù', 'sànbù'],
      },
    },
    {
      id: 'sentence8',
      level: 3,
      isFinal: false,
      korean: '공원에서 산책하다',
      chinese: {
        hanzi: ['去', '公园', '散步'],
        pinyin: ['qù', 'gōngyuán', 'sànbù'],
      },
    },
    {
      id: 'sentence8',
      level: 4,
      isFinal: false,
      korean: '공원에서 산책하자!',
      chinese: {
        hanzi: ['去', '公园', '散步', '吧', '！'],
        pinyin: ['qù', 'gōngyuán', 'sànbù', 'ba', '!'],
      },
    },
    {
      id: 'sentence8',
      level: 5,
      isFinal: true,
      korean: '우리 공원에서 산책하자!',
      chinese: {
        hanzi: ['我们', '去', '公园', '散步', '吧', '！'],
        pinyin: ['wǒmen', 'qù', 'gōngyuán', 'sànbù', 'ba', '!'],
      },
    },

    // 문장9 묶음 (156-162)
    {
      id: 'sentence9',
      level: 1,
      isFinal: false,
      korean: '신경쓰다',
      chinese: {
        hanzi: ['关心'],
        pinyin: ['guānxīn'],
      },
    },
    {
      id: 'sentence9',
      level: 2,
      isFinal: false,
      korean: '나를 신경쓰다',
      chinese: {
        hanzi: ['关心', '我'],
        pinyin: ['guānxīn', 'wǒ'],
      },
    },
    {
      id: 'sentence9',
      level: 3,
      isFinal: false,
      korean: '나를 많이 신경쓰다',
      chinese: {
        hanzi: ['很', '关心', '我'],
        pinyin: ['hěn', 'guānxīn', 'wǒ'],
      },
    },
    {
      id: 'sentence9',
      level: 4,
      isFinal: false,
      korean: '항상',
      chinese: {
        hanzi: ['总是'],
        pinyin: ['zǒngshì'],
      },
    },
    {
      id: 'sentence9',
      level: 5,
      isFinal: false,
      korean: '항상 나를 많이 신경써준다',
      chinese: {
        hanzi: ['总是', '很', '关心', '我'],
        pinyin: ['zǒngshì', 'hěn', 'guānxīn', 'wǒ'],
      },
    },
    {
      id: 'sentence9',
      level: 6,
      isFinal: false,
      korean: '이 선생님',
      chinese: {
        hanzi: ['李老师'],
        pinyin: ['Lǐ lǎoshī'],
      },
    },
    {
      id: 'sentence9',
      level: 7,
      isFinal: true,
      korean: '이 선생님은 항상 나를 많이 신경써주신다.',
      chinese: {
        hanzi: ['李老师', '总是', '很', '关心', '我'],
        pinyin: ['Lǐ lǎoshī', 'zǒngshì', 'hěn', 'guānxīn', 'wǒ'],
      },
    },

    // 문장10 묶음 (163-169)
    {
      id: 'sentence10',
      level: 1,
      isFinal: false,
      korean: 'A가 B에 있다',
      chinese: {
        hanzi: ['A在B'],
        pinyin: ['A zài B'],
      },
    },
    {
      id: 'sentence10',
      level: 2,
      isFinal: false,
      korean: '집에 있다',
      chinese: {
        hanzi: ['在', '家'],
        pinyin: ['zài', 'jiā'],
      },
    },
    {
      id: 'sentence10',
      level: 3,
      isFinal: false,
      korean: '혼자',
      chinese: {
        hanzi: ['一个人'],
        pinyin: ['yí gè rén'],
      },
    },
    {
      id: 'sentence10',
      level: 4,
      isFinal: false,
      korean: '혼자 집에 있다',
      chinese: {
        hanzi: ['一个人', '在', '家'],
        pinyin: ['yí gè rén', 'zài', 'jiā'],
      },
    },
    {
      id: 'sentence10',
      level: 5,
      isFinal: false,
      korean: '무섭다',
      chinese: {
        hanzi: ['害怕'],
        pinyin: ['hàipà'],
      },
    },
    {
      id: 'sentence10',
      level: 6,
      isFinal: false,
      korean: '혼자 집에 있는 것이 무섭다',
      chinese: {
        hanzi: ['害怕', '一个人', '在', '家'],
        pinyin: ['hàipà', 'yí gè rén', 'zài', 'jiā'],
      },
    },
    {
      id: 'sentence10',
      level: 7,
      isFinal: true,
      korean: '너는 혼자 집에 있는 것이 무섭니?',
      chinese: {
        hanzi: ['你', '害怕', '一个人', '在', '家', '吗'],
        pinyin: ['nǐ', 'hàipà', 'yí gè rén', 'zài', 'jiā', 'ma'],
      },
    },
  ],

  day5: [
    // 문장1 묶음 (170-174)
    {
      id: 'sentence1',
      level: 1,
      isFinal: false,
      korean: '선택하다',
      chinese: {
        hanzi: ['选择'],
        pinyin: ['xuǎnzé'],
      },
    },
    {
      id: 'sentence1',
      level: 2,
      isFinal: false,
      korean: '일',
      chinese: {
        hanzi: ['工作'],
        pinyin: ['gōngzuò'],
      },
    },
    {
      id: 'sentence1',
      level: 3,
      isFinal: false,
      korean: '일을 선택하다',
      chinese: {
        hanzi: ['选择', '工作'],
        pinyin: ['xuǎnzé', 'gōngzuò'],
      },
    },
    {
      id: 'sentence1',
      level: 4,
      isFinal: false,
      korean: '이 일',
      chinese: {
        hanzi: ['这个', '工作'],
        pinyin: ['zhège', 'gōngzuò'],
      },
    },
    {
      id: 'sentence1',
      level: 5,
      isFinal: true,
      korean: '이 일을 선택하다',
      chinese: {
        hanzi: ['选择', '这个', '工作'],
        pinyin: ['xuǎnzé', 'zhège', 'gōngzuò'],
      },
    },

    // 문장2 묶음 (175-177)
    {
      id: 'sentence2',
      level: 1,
      isFinal: false,
      korean: '후회하다',
      chinese: {
        hanzi: ['后悔'],
        pinyin: ['hòuhuǐ'],
      },
    },
    {
      id: 'sentence2',
      level: 2,
      isFinal: false,
      korean: '이 일을 선택한 것을 후회하다',
      chinese: {
        hanzi: ['后悔', '选择', '这个', '工作'],
        pinyin: ['hòuhuǐ', 'xuǎnzé', 'zhège', 'gōngzuò'],
      },
    },
    {
      id: 'sentence2',
      level: 3,
      isFinal: true,
      korean: '너는 이 일을 선택한 것을 후회하니?',
      chinese: {
        hanzi: ['你', '后悔', '选择', '这个', '工作', '吗'],
        pinyin: ['nǐ', 'hòuhuǐ', 'xuǎnzé', 'zhège', 'gōngzuò', 'ma'],
      },
    },

    // 문장3 묶음 (178-182)
    {
      id: 'sentence3',
      level: 1,
      isFinal: false,
      korean: '환경',
      chinese: {
        hanzi: ['环境'],
        pinyin: ['huánjìng'],
      },
    },
    {
      id: 'sentence3',
      level: 2,
      isFinal: false,
      korean: '여기',
      chinese: {
        hanzi: ['这里'],
        pinyin: ['zhèlǐ'],
      },
    },
    {
      id: 'sentence3',
      level: 3,
      isFinal: false,
      korean: '여기의 환경',
      chinese: {
        hanzi: ['这里的', '环境'],
        pinyin: ['zhèlǐ de', 'huánjìng'],
      },
    },
    {
      id: 'sentence3',
      level: 4,
      isFinal: false,
      korean: '괜찮다',
      chinese: {
        hanzi: ['不错'],
        pinyin: ['bùcuò'],
      },
    },
    {
      id: 'sentence3',
      level: 5,
      isFinal: true,
      korean: '여기의 환경은 괜찮다',
      chinese: {
        hanzi: ['这里的', '环境', '不错'],
        pinyin: ['zhèlǐ de', 'huánjìng', 'bùcuò'],
      },
    },

    // 문장4 묶음 (183-185)
    {
      id: 'sentence4',
      level: 1,
      isFinal: false,
      korean: '정말',
      chinese: {
        hanzi: ['真'],
        pinyin: ['zhēn'],
      },
    },
    {
      id: 'sentence4',
      level: 2,
      isFinal: false,
      korean: '정말 괜찮다',
      chinese: {
        hanzi: ['真', '不错'],
        pinyin: ['zhēn', 'bùcuò'],
      },
    },
    {
      id: 'sentence4',
      level: 3,
      isFinal: true,
      korean: '여기의 환경은 정말 괜찮다.',
      chinese: {
        hanzi: ['这里的', '环境', '真', '不错'],
        pinyin: ['zhèlǐ de', 'huánjìng', 'zhēn', 'bùcuò'],
      },
    },

    // 문장5 묶음 (186-189)
    {
      id: 'sentence5',
      level: 1,
      isFinal: false,
      korean: '활동하다',
      chinese: {
        hanzi: ['活动'],
        pinyin: ['huódòng'],
      },
    },
    {
      id: 'sentence5',
      level: 2,
      isFinal: false,
      korean: '활동 좀 하다',
      chinese: {
        hanzi: ['活动', '活动'],
        pinyin: ['huódòng', 'huódòng'],
      },
    },
    {
      id: 'sentence5',
      level: 3,
      isFinal: false,
      korean: '일어나다',
      chinese: {
        hanzi: ['起来'],
        pinyin: ['qǐlai'],
      },
    },
    {
      id: 'sentence5',
      level: 4,
      isFinal: true,
      korean: '일어나서 활동 좀 하자.',
      chinese: {
        hanzi: ['起来', '活动', '活动'],
        pinyin: ['qǐlai', 'huódòng', 'huódòng'],
      },
    },

    // 문장6 묶음 (190-191)
    {
      id: 'sentence6',
      level: 1,
      isFinal: false,
      korean: '간단하다',
      chinese: {
        hanzi: ['简单'],
        pinyin: ['jiǎndān'],
      },
    },
    {
      id: 'sentence6',
      level: 2,
      isFinal: true,
      korean: '이건 매우 간단하다',
      chinese: {
        hanzi: ['这个', '很', '简单'],
        pinyin: ['zhège', 'hěn', 'jiǎndān'],
      },
    },

    // 문장7 묶음 (192-194)
    {
      id: 'sentence7',
      level: 1,
      isFinal: false,
      korean: '가지',
      chinese: {
        hanzi: ['道'],
        pinyin: ['dào'],
      },
    },
    {
      id: 'sentence7',
      level: 2,
      isFinal: false,
      korean: '이 요리',
      chinese: {
        hanzi: ['这', '道', '菜'],
        pinyin: ['zhè', 'dào', 'cài'],
      },
    },
    {
      id: 'sentence7',
      level: 3,
      isFinal: true,
      korean: '이 요리는 매우 간단하다.',
      chinese: {
        hanzi: ['这', '道', '菜', '很', '简单'],
        pinyin: ['zhè', 'dào', 'cài', 'hěn', 'jiǎndān'],
      },
    },

    // 문장8 묶음 (195-197)
    {
      id: 'sentence8',
      level: 1,
      isFinal: false,
      korean: '검사하다',
      chinese: {
        hanzi: ['检查'],
        pinyin: ['jiǎnchá'],
      },
    },
    {
      id: 'sentence8',
      level: 2,
      isFinal: false,
      korean: '숙제',
      chinese: {
        hanzi: ['作业'],
        pinyin: ['zuòyè'],
      },
    },
    {
      id: 'sentence8',
      level: 3,
      isFinal: true,
      korean: '숙제를 검사하다',
      chinese: {
        hanzi: ['检查', '作业'],
        pinyin: ['jiǎnchá', 'zuòyè'],
      },
    },

    // 문장9 묶음 (198-200)
    {
      id: 'sentence9',
      level: 1,
      isFinal: false,
      korean: '검사를 마치다',
      chinese: {
        hanzi: ['检查', '完'],
        pinyin: ['jiǎnchá', 'wán'],
      },
    },
    {
      id: 'sentence9',
      level: 2,
      isFinal: false,
      korean: '숙제 검사를 마쳤다',
      chinese: {
        hanzi: ['检查', '完', '作业', '了'],
        pinyin: ['jiǎnchá', 'wán', 'zuòyè', 'le'],
      },
    },
    {
      id: 'sentence9',
      level: 3,
      isFinal: true,
      korean: '너는 숙제 검사를 마쳤니?',
      chinese: {
        hanzi: ['你', '检查', '完', '作业', '了', '吗'],
        pinyin: ['nǐ', 'jiǎnchá', 'wán', 'zuòyè', 'le', 'ma'],
      },
    },

    // 문장10 묶음 (201-206)
    {
      id: 'sentence10',
      level: 1,
      isFinal: false,
      korean: '중요하다',
      chinese: {
        hanzi: ['重要'],
        pinyin: ['zhòngyào'],
      },
    },
    {
      id: 'sentence10',
      level: 2,
      isFinal: false,
      korean: '매우 중요하다',
      chinese: {
        hanzi: ['很', '重要'],
        pinyin: ['hěn', 'zhòngyào'],
      },
    },
    {
      id: 'sentence10',
      level: 3,
      isFinal: false,
      korean: '가장',
      chinese: {
        hanzi: ['最'],
        pinyin: ['zuì'],
      },
    },
    {
      id: 'sentence10',
      level: 4,
      isFinal: false,
      korean: '가장 중요하다',
      chinese: {
        hanzi: ['最', '重要'],
        pinyin: ['zuì', 'zhòngyào'],
      },
    },
    {
      id: 'sentence10',
      level: 5,
      isFinal: false,
      korean: '건강',
      chinese: {
        hanzi: ['健康'],
        pinyin: ['jiànkāng'],
      },
    },
    {
      id: 'sentence10',
      level: 6,
      isFinal: true,
      korean: '건강이 가장 중요하다.',
      chinese: {
        hanzi: ['健康', '最', '重要'],
        pinyin: ['jiànkāng', 'zuì', 'zhòngyào'],
      },
    },
  ],

  day6: [
    // 문장1 묶음 (207-209)
    {
      id: 'sentence1',
      level: 1,
      isFinal: false,
      korean: '긴장하다',
      chinese: {
        hanzi: ['紧张'],
        pinyin: ['jǐnzhāng'],
      },
    },
    {
      id: 'sentence1',
      level: 2,
      isFinal: false,
      korean: '~할 것이다',
      chinese: {
        hanzi: ['会'],
        pinyin: ['huì'],
      },
    },
    {
      id: 'sentence1',
      level: 3,
      isFinal: true,
      korean: '긴장할 것이니?',
      chinese: {
        hanzi: ['会', '紧张', '吗'],
        pinyin: ['huì', 'jǐnzhāng', 'ma'],
      },
    },

    // 문장2 묶음 (210-213)
    {
      id: 'sentence2',
      level: 1,
      isFinal: false,
      korean: '시험',
      chinese: {
        hanzi: ['考试'],
        pinyin: ['kǎoshì'],
      },
    },
    {
      id: 'sentence2',
      level: 2,
      isFinal: false,
      korean: '전',
      chinese: {
        hanzi: ['前'],
        pinyin: ['qián'],
      },
    },
    {
      id: 'sentence2',
      level: 3,
      isFinal: false,
      korean: '시험 전',
      chinese: {
        hanzi: ['考试', '前'],
        pinyin: ['kǎoshì', 'qián'],
      },
    },
    {
      id: 'sentence2',
      level: 4,
      isFinal: true,
      korean: '너는 시험 전에 긴장하니?',
      chinese: {
        hanzi: ['你', '考试', '前', '会', '紧张', '吗'],
        pinyin: ['nǐ', 'kǎoshì', 'qián', 'huì', 'jǐnzhāng', 'ma'],
      },
    },

    // 문장3 묶음 (214-217)
    {
      id: 'sentence3',
      level: 1,
      isFinal: false,
      korean: '지나다',
      chinese: {
        hanzi: ['经过'],
        pinyin: ['jīngguò'],
      },
    },
    {
      id: 'sentence3',
      level: 2,
      isFinal: false,
      korean: '여기',
      chinese: {
        hanzi: ['这里'],
        pinyin: ['zhèlǐ'],
      },
    },
    {
      id: 'sentence3',
      level: 3,
      isFinal: false,
      korean: '여기를 지나다',
      chinese: {
        hanzi: ['经过', '这里'],
        pinyin: ['jīngguò', 'zhèlǐ'],
      },
    },
    {
      id: 'sentence3',
      level: 4,
      isFinal: true,
      korean: '여기를 지나니?',
      chinese: {
        hanzi: ['经过', '这里', '吗'],
        pinyin: ['jīngguò', 'zhèlǐ', 'ma'],
      },
    },

    // 문장4 묶음 (218-220)
    {
      id: 'sentence4',
      level: 1,
      isFinal: false,
      korean: '매일 다',
      chinese: {
        hanzi: ['每天', '都'],
        pinyin: ['měitiān', 'dōu'],
      },
    },
    {
      id: 'sentence4',
      level: 2,
      isFinal: false,
      korean: '너는 매일 다',
      chinese: {
        hanzi: ['你', '每天', '都'],
        pinyin: ['nǐ', 'měitiān', 'dōu'],
      },
    },
    {
      id: 'sentence4',
      level: 3,
      isFinal: true,
      korean: '너는 매일 다 여기를 지나니?',
      chinese: {
        hanzi: ['你', '每天', '都', '经过', '这里', '吗'],
        pinyin: ['nǐ', 'měitiān', 'dōu', 'jīngguò', 'zhèlǐ', 'ma'],
      },
    },

    // 문장5 묶음 (221-224)
    {
      id: 'sentence5',
      level: 1,
      isFinal: false,
      korean: '사무실',
      chinese: {
        hanzi: ['办公室'],
        pinyin: ['bàngōngshì'],
      },
    },
    {
      id: 'sentence5',
      level: 2,
      isFinal: false,
      korean: 'A가 B에 있다',
      chinese: {
        hanzi: ['A在B'],
        pinyin: ['A zài B'],
      },
    },
    {
      id: 'sentence5',
      level: 3,
      isFinal: false,
      korean: '사무실에 있다',
      chinese: {
        hanzi: ['在', '办公室'],
        pinyin: ['zài', 'bàngōngshì'],
      },
    },
    {
      id: 'sentence5',
      level: 4,
      isFinal: true,
      korean: '나는 사무실에 있다',
      chinese: {
        hanzi: ['我', '在', '办公室'],
        pinyin: ['wǒ', 'zài', 'bàngōngshì'],
      },
    },

    // 문장6 묶음 (225-226)
    {
      id: 'sentence6',
      level: 1,
      isFinal: false,
      korean: '매니저',
      chinese: {
        hanzi: ['经理'],
        pinyin: ['jīnglǐ'],
      },
    },
    {
      id: 'sentence6',
      level: 2,
      isFinal: true,
      korean: '매니저가 사무실에 있나요?',
      chinese: {
        hanzi: ['经理', '在', '办公室', '吗'],
        pinyin: ['jīnglǐ', 'zài', 'bàngōngshì', 'ma'],
      },
    },

    // 문장7 묶음 (227-234)
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
      korean: '좀 보다',
      chinese: {
        hanzi: ['看', '看'],
        pinyin: ['kàn', 'kàn'],
      },
    },
    {
      id: 'sentence7',
      level: 3,
      isFinal: false,
      korean: '주다',
      chinese: {
        hanzi: ['给'],
        pinyin: ['gěi'],
      },
    },
    {
      id: 'sentence7',
      level: 4,
      isFinal: false,
      korean: '너에게 주다',
      chinese: {
        hanzi: ['给', '你'],
        pinyin: ['gěi', 'nǐ'],
      },
    },
    {
      id: 'sentence7',
      level: 5,
      isFinal: false,
      korean: '너에게 보여주다',
      chinese: {
        hanzi: ['给', '你', '看', '看'],
        pinyin: ['gěi', 'nǐ', 'kàn', 'kàn'],
      },
    },
    {
      id: 'sentence7',
      level: 6,
      isFinal: false,
      korean: '거울',
      chinese: {
        hanzi: ['镜子'],
        pinyin: ['jìngzi'],
      },
    },
    {
      id: 'sentence7',
      level: 7,
      isFinal: false,
      korean: '너에게 거울을 주다',
      chinese: {
        hanzi: ['给', '你', '镜子'],
        pinyin: ['gěi', 'nǐ', 'jìngzi'],
      },
    },
    {
      id: 'sentence7',
      level: 8,
      isFinal: true,
      korean: '너에게 거울을 보여주마',
      chinese: {
        hanzi: ['给', '你', '镜子', '看', '看'],
        pinyin: ['gěi', 'nǐ', 'jìngzi', 'kàn', 'kàn'],
      },
    },

    // 문장8 묶음 (235-242)
    {
      id: 'sentence8',
      level: 1,
      isFinal: false,
      korean: '물건',
      chinese: {
        hanzi: ['东西'],
        pinyin: ['dōngxi'],
      },
    },
    {
      id: 'sentence8',
      level: 2,
      isFinal: false,
      korean: 'A에 B가 있다',
      chinese: {
        hanzi: ['A有B'],
        pinyin: ['A yǒu B'],
      },
    },
    {
      id: 'sentence8',
      level: 3,
      isFinal: false,
      korean: '물건이 있다',
      chinese: {
        hanzi: ['有', '东西'],
        pinyin: ['yǒu', 'dōngxi'],
      },
    },
    {
      id: 'sentence8',
      level: 4,
      isFinal: false,
      korean: '이빨에',
      chinese: {
        hanzi: ['牙上'],
        pinyin: ['yá shàng'],
      },
    },
    {
      id: 'sentence8',
      level: 5,
      isFinal: false,
      korean: '네 이빨에',
      chinese: {
        hanzi: ['你', '牙上'],
        pinyin: ['nǐ', 'yá shàng'],
      },
    },
    {
      id: 'sentence8',
      level: 6,
      isFinal: false,
      korean: '네 이빨에 뭐가 있다.',
      chinese: {
        hanzi: ['你', '牙上', '有', '东西'],
        pinyin: ['nǐ', 'yá shàng', 'yǒu', 'dōngxi'],
      },
    },
    {
      id: 'sentence8',
      level: 7,
      isFinal: false,
      korean: '아',
      chinese: {
        hanzi: ['啊'],
        pinyin: ['ā'],
      },
    },
    {
      id: 'sentence8',
      level: 8,
      isFinal: true,
      korean: '아? 네 이빨에 뭐가 있어. 거울을 봐봐.',
      chinese: {
        hanzi: [
          '啊',
          '？',
          '你',
          '牙上',
          '有',
          '东西',
          '。',
          '给',
          '你',
          '镜子',
          '看',
          '看',
        ],
        pinyin: [
          'ā',
          '?',
          'nǐ',
          'yá shàng',
          'yǒu',
          'dōngxi',
          '.',
          'gěi',
          'nǐ',
          'jìngzi',
          'kàn',
          'kàn',
        ],
      },
    },

    // 문장9 묶음 (243-244)
    {
      id: 'sentence9',
      level: 1,
      isFinal: false,
      korean: '떠나다',
      chinese: {
        hanzi: ['离开'],
        pinyin: ['líkāi'],
      },
    },
    {
      id: 'sentence9',
      level: 2,
      isFinal: true,
      korean: '너는 떠나니?',
      chinese: {
        hanzi: ['你', '离开', '吗'],
        pinyin: ['nǐ', 'líkāi', 'ma'],
      },
    },

    // 문장10 묶음 (245-247)
    {
      id: 'sentence10',
      level: 1,
      isFinal: false,
      korean: '언제',
      chinese: {
        hanzi: ['什么时候'],
        pinyin: ['shénme shíhou'],
      },
    },
    {
      id: 'sentence10',
      level: 2,
      isFinal: false,
      korean: '언제 떠나?',
      chinese: {
        hanzi: ['什么时候', '离开'],
        pinyin: ['shénme shíhou', 'líkāi'],
      },
    },
    {
      id: 'sentence10',
      level: 3,
      isFinal: true,
      korean: '너는 언제 떠나니?',
      chinese: {
        hanzi: ['你', '什么时候', '离开'],
        pinyin: ['nǐ', 'shénme shíhou', 'líkāi'],
      },
    },
  ],

  day7: [
    // 문장1 묶음 (248-251)
    {
      id: 'sentence1',
      level: 1,
      isFinal: false,
      korean: '예의 바르다',
      chinese: {
        hanzi: ['礼貌'],
        pinyin: ['lǐmào'],
      },
    },
    {
      id: 'sentence1',
      level: 2,
      isFinal: false,
      korean: '예의가 있다',
      chinese: {
        hanzi: ['有', '礼貌'],
        pinyin: ['yǒu', 'lǐmào'],
      },
    },
    {
      id: 'sentence1',
      level: 3,
      isFinal: false,
      korean: '그는 예의가 있다',
      chinese: {
        hanzi: ['他', '有', '礼貌'],
        pinyin: ['tā', 'yǒu', 'lǐmào'],
      },
    },
    {
      id: 'sentence1',
      level: 4,
      isFinal: true,
      korean: '그는 매우 예의 바르다.',
      chinese: {
        hanzi: ['他', '很', '有', '礼貌'],
        pinyin: ['tā', 'hěn', 'yǒu', 'lǐmào'],
      },
    },

    // 문장2 묶음 (252-255)
    {
      id: 'sentence2',
      level: 1,
      isFinal: false,
      korean: '사람에게',
      chinese: {
        hanzi: ['对人'],
        pinyin: ['duì rén'],
      },
    },
    {
      id: 'sentence2',
      level: 2,
      isFinal: false,
      korean: '사람에게 예의가 있다',
      chinese: {
        hanzi: ['对人', '有', '礼貌'],
        pinyin: ['duì rén', 'yǒu', 'lǐmào'],
      },
    },
    {
      id: 'sentence2',
      level: 3,
      isFinal: false,
      korean: '사람에게 매우 예의 바르다',
      chinese: {
        hanzi: ['对人', '很', '有', '礼貌'],
        pinyin: ['duì rén', 'hěn', 'yǒu', 'lǐmào'],
      },
    },
    {
      id: 'sentence2',
      level: 4,
      isFinal: true,
      korean: '그는 사람에게 매우 예의 바르다.',
      chinese: {
        hanzi: ['他', '对人', '很', '有', '礼貌'],
        pinyin: ['tā', 'duì rén', 'hěn', 'yǒu', 'lǐmào'],
      },
    },

    // 문장3 묶음 (256-258)
    {
      id: 'sentence3',
      level: 1,
      isFinal: false,
      korean: '흥미',
      chinese: {
        hanzi: ['兴趣'],
        pinyin: ['xìngqù'],
      },
    },
    {
      id: 'sentence3',
      level: 2,
      isFinal: false,
      korean: '흥미를 느끼다',
      chinese: {
        hanzi: ['感', '兴趣'],
        pinyin: ['gǎn', 'xìngqù'],
      },
    },
    {
      id: 'sentence3',
      level: 3,
      isFinal: true,
      korean: '매우 흥미를 느끼다',
      chinese: {
        hanzi: ['很', '感', '兴趣'],
        pinyin: ['hěn', 'gǎn', 'xìngqù'],
      },
    },

    // 문장4 묶음 (259-262)
    {
      id: 'sentence4',
      level: 1,
      isFinal: false,
      korean: '~에 흥미를 느끼다',
      chinese: {
        hanzi: ['对', '…', '感', '兴趣'],
        pinyin: ['duì', '...', 'gǎn', 'xìngqù'],
      },
    },
    {
      id: 'sentence4',
      level: 2,
      isFinal: false,
      korean: '역사',
      chinese: {
        hanzi: ['历史'],
        pinyin: ['lìshǐ'],
      },
    },
    {
      id: 'sentence4',
      level: 3,
      isFinal: false,
      korean: '역사에 흥미를 느끼다',
      chinese: {
        hanzi: ['对', '历史', '感', '兴趣'],
        pinyin: ['duì', 'lìshǐ', 'gǎn', 'xìngqù'],
      },
    },
    {
      id: 'sentence4',
      level: 4,
      isFinal: true,
      korean: '너는 역사에 흥미가 있니?',
      chinese: {
        hanzi: ['你', '对', '历史', '感', '兴趣', '吗'],
        pinyin: ['nǐ', 'duì', 'lìshǐ', 'gǎn', 'xìngqù', 'ma'],
      },
    },

    // 문장5 묶음 (263-266)
    {
      id: 'sentence5',
      level: 1,
      isFinal: false,
      korean: '질문',
      chinese: {
        hanzi: ['问题'],
        pinyin: ['wèntí'],
      },
    },
    {
      id: 'sentence5',
      level: 2,
      isFinal: false,
      korean: '다른',
      chinese: {
        hanzi: ['另外'],
        pinyin: ['lìngwài'],
      },
    },
    {
      id: 'sentence5',
      level: 3,
      isFinal: false,
      korean: '다른 질문',
      chinese: {
        hanzi: ['另外的', '问题'],
        pinyin: ['lìngwài de', 'wèntí'],
      },
    },
    {
      id: 'sentence5',
      level: 4,
      isFinal: true,
      korean: '다른 질문이 있다',
      chinese: {
        hanzi: ['有', '另外的', '问题'],
        pinyin: ['yǒu', 'lìngwài de', 'wèntí'],
      },
    },

    // 문장6 묶음 (267-270)
    {
      id: 'sentence6',
      level: 1,
      isFinal: false,
      korean: '또',
      chinese: {
        hanzi: ['还'],
        pinyin: ['hái'],
      },
    },
    {
      id: 'sentence6',
      level: 2,
      isFinal: false,
      korean: '또 있다',
      chinese: {
        hanzi: ['还', '有'],
        pinyin: ['hái', 'yǒu'],
      },
    },
    {
      id: 'sentence6',
      level: 3,
      isFinal: false,
      korean: '또 다른 질문이 있다',
      chinese: {
        hanzi: ['还', '有', '另外的', '问题'],
        pinyin: ['hái', 'yǒu', 'lìngwài de', 'wèntí'],
      },
    },
    {
      id: 'sentence6',
      level: 4,
      isFinal: true,
      korean: '너는 또 다른 질문이 있니?',
      chinese: {
        hanzi: ['你', '还', '有', '另外的', '问题', '吗'],
        pinyin: ['nǐ', 'hái', 'yǒu', 'lìngwài de', 'wèntí', 'ma'],
      },
    },

    // 문장7 묶음 (271-273)
    {
      id: 'sentence7',
      level: 1,
      isFinal: false,
      korean: '여행',
      chinese: {
        hanzi: ['旅行'],
        pinyin: ['lǚxíng'],
      },
    },
    {
      id: 'sentence7',
      level: 2,
      isFinal: false,
      korean: '여행 가다',
      chinese: {
        hanzi: ['去', '旅行'],
        pinyin: ['qù', 'lǚxíng'],
      },
    },
    {
      id: 'sentence7',
      level: 3,
      isFinal: true,
      korean: '여행 가니?',
      chinese: {
        hanzi: ['去', '旅行', '吗'],
        pinyin: ['qù', 'lǚxíng', 'ma'],
      },
    },

    // 문장8 묶음 (274-278)
    {
      id: 'sentence8',
      level: 1,
      isFinal: false,
      korean: '계획하다',
      chinese: {
        hanzi: ['打算'],
        pinyin: ['dǎsuàn'],
      },
    },
    {
      id: 'sentence8',
      level: 2,
      isFinal: false,
      korean: '여행 갈 계획이니?',
      chinese: {
        hanzi: ['打算', '去', '旅行', '吗'],
        pinyin: ['dǎsuàn', 'qù', 'lǚxíng', 'ma'],
      },
    },
    {
      id: 'sentence8',
      level: 3,
      isFinal: false,
      korean: '휴가',
      chinese: {
        hanzi: ['假期'],
        pinyin: ['jiàqī'],
      },
    },
    {
      id: 'sentence8',
      level: 4,
      isFinal: false,
      korean: '휴가에 여행 갈 계획이니?',
      chinese: {
        hanzi: ['假期', '打算', '去', '旅行', '吗'],
        pinyin: ['jiàqī', 'dǎsuàn', 'qù', 'lǚxíng', 'ma'],
      },
    },
    {
      id: 'sentence8',
      level: 5,
      isFinal: true,
      korean: '너는 휴가에 여행 갈 계획이니?',
      chinese: {
        hanzi: ['你', '假期', '打算', '去', '旅行', '吗'],
        pinyin: ['nǐ', 'jiàqī', 'dǎsuàn', 'qù', 'lǚxíng', 'ma'],
      },
    },

    // 문장9 묶음 (279-281)
    {
      id: 'sentence9',
      level: 1,
      isFinal: false,
      korean: '어디',
      chinese: {
        hanzi: ['哪里'],
        pinyin: ['nǎlǐ'],
      },
    },
    {
      id: 'sentence9',
      level: 2,
      isFinal: false,
      korean: '어디에 있니?',
      chinese: {
        hanzi: ['在', '哪里'],
        pinyin: ['zài', 'nǎlǐ'],
      },
    },
    {
      id: 'sentence9',
      level: 3,
      isFinal: true,
      korean: '그는 어디에 있니?',
      chinese: {
        hanzi: ['他', '在', '哪里'],
        pinyin: ['tā', 'zài', 'nǎlǐ'],
      },
    },

    // 문장10 묶음 (282-283)
    {
      id: 'sentence10',
      level: 1,
      isFinal: false,
      korean: '수건',
      chinese: {
        hanzi: ['毛巾'],
        pinyin: ['máojīn'],
      },
    },
    {
      id: 'sentence10',
      level: 2,
      isFinal: true,
      korean: '수건이 어디에 있니?',
      chinese: {
        hanzi: ['毛巾', '在', '哪里'],
        pinyin: ['máojīn', 'zài', 'nǎlǐ'],
      },
    },
  ],

  day8: [
    // 문장1 묶음 (284-287)
    {
      id: 'sentence1',
      level: 1,
      isFinal: false,
      korean: '목적',
      chinese: {
        hanzi: ['目的'],
        pinyin: ['mùdì'],
      },
    },
    {
      id: 'sentence1',
      level: 2,
      isFinal: false,
      korean: '무엇',
      chinese: {
        hanzi: ['什么'],
        pinyin: ['shénme'],
      },
    },
    {
      id: 'sentence1',
      level: 3,
      isFinal: false,
      korean: '~이다',
      chinese: {
        hanzi: ['是'],
        pinyin: ['shì'],
      },
    },
    {
      id: 'sentence1',
      level: 4,
      isFinal: true,
      korean: '목적이 무엇이니?',
      chinese: {
        hanzi: ['目的', '是', '什么'],
        pinyin: ['mùdì', 'shì', 'shénme'],
      },
    },

    // 문장2 묶음 (288-295)
    {
      id: 'sentence2',
      level: 1,
      isFinal: false,
      korean: '오다',
      chinese: {
        hanzi: ['来'],
        pinyin: ['lái'],
      },
    },
    {
      id: 'sentence2',
      level: 2,
      isFinal: false,
      korean: '여기',
      chinese: {
        hanzi: ['这里'],
        pinyin: ['zhèlǐ'],
      },
    },
    {
      id: 'sentence2',
      level: 3,
      isFinal: false,
      korean: '여기의',
      chinese: {
        hanzi: ['这里的'],
        pinyin: ['zhèlǐ de'],
      },
    },
    {
      id: 'sentence2',
      level: 4,
      isFinal: false,
      korean: '여기에 오다',
      chinese: {
        hanzi: ['来', '这里'],
        pinyin: ['lái', 'zhèlǐ'],
      },
    },
    {
      id: 'sentence2',
      level: 5,
      isFinal: false,
      korean: '여기에 온',
      chinese: {
        hanzi: ['来', '这里的'],
        pinyin: ['lái', 'zhèlǐ de'],
      },
    },
    {
      id: 'sentence2',
      level: 6,
      isFinal: false,
      korean: '너는 여기에 온',
      chinese: {
        hanzi: ['你', '来', '这里的'],
        pinyin: ['nǐ', 'lái', 'zhèlǐ de'],
      },
    },
    {
      id: 'sentence2',
      level: 7,
      isFinal: false,
      korean: '너는 여기에 온 목적',
      chinese: {
        hanzi: ['你', '来', '这里的', '目的'],
        pinyin: ['nǐ', 'lái', 'zhèlǐ de', 'mùdì'],
      },
    },
    {
      id: 'sentence2',
      level: 8,
      isFinal: true,
      korean: '너는 여기에 온 목적이 무엇이니?',
      chinese: {
        hanzi: ['你', '来', '这里的', '目的', '是', '什么'],
        pinyin: ['nǐ', 'lái', 'zhèlǐ de', 'mùdì', 'shì', 'shénme'],
      },
    },

    // 문장3 묶음 (296-298)
    {
      id: 'sentence3',
      level: 1,
      isFinal: false,
      korean: '등산하다',
      chinese: {
        hanzi: ['爬山'],
        pinyin: ['páshān'],
      },
    },
    {
      id: 'sentence3',
      level: 2,
      isFinal: false,
      korean: '등산하러 가다',
      chinese: {
        hanzi: ['去', '爬山'],
        pinyin: ['qù', 'páshān'],
      },
    },
    {
      id: 'sentence3',
      level: 3,
      isFinal: true,
      korean: '주말에 등산하러 가다',
      chinese: {
        hanzi: ['周末', '去', '爬山'],
        pinyin: ['zhōumò', 'qù', 'páshān'],
      },
    },

    // 문장4 묶음 (299-301)
    {
      id: 'sentence4',
      level: 1,
      isFinal: false,
      korean: '~하자',
      chinese: {
        hanzi: ['吧'],
        pinyin: ['ba'],
      },
    },
    {
      id: 'sentence4',
      level: 2,
      isFinal: false,
      korean: '주말에 등산하러 가자!',
      chinese: {
        hanzi: ['周末', '去', '爬山', '吧', '！'],
        pinyin: ['zhōumò', 'qù', 'páshān', 'ba', '!'],
      },
    },
    {
      id: 'sentence4',
      level: 3,
      isFinal: true,
      korean: '주말에 우리 등산하러 가자!',
      chinese: {
        hanzi: ['周末', '我们', '去', '爬山', '吧', '！'],
        pinyin: ['zhōumò', 'wǒmen', 'qù', 'páshān', 'ba', '!'],
      },
    },

    // 문장5 묶음 (302-304)
    {
      id: 'sentence5',
      level: 1,
      isFinal: false,
      korean: '좋아하다',
      chinese: {
        hanzi: ['喜欢'],
        pinyin: ['xǐhuan'],
      },
    },
    // 문장5 묶음 (302-304) 이어서...
    {
      id: 'sentence5',
      level: 2,
      isFinal: false,
      korean: '나는 좋아한다',
      chinese: {
        hanzi: ['我', '喜欢'],
        pinyin: ['wǒ', 'xǐhuan'],
      },
    },
    {
      id: 'sentence5',
      level: 3,
      isFinal: true,
      korean: '너는 좋아하니?',
      chinese: {
        hanzi: ['你', '喜欢', '吗'],
        pinyin: ['nǐ', 'xǐhuan', 'ma'],
      },
    },

    // 문장6 묶음 (305-308)
    {
      id: 'sentence6',
      level: 1,
      isFinal: false,
      korean: '포도',
      chinese: {
        hanzi: ['葡萄'],
        pinyin: ['pútao'],
      },
    },
    {
      id: 'sentence6',
      level: 2,
      isFinal: false,
      korean: '포도 먹다',
      chinese: {
        hanzi: ['吃', '葡萄'],
        pinyin: ['chī', 'pútao'],
      },
    },
    {
      id: 'sentence6',
      level: 3,
      isFinal: false,
      korean: '포도 먹는 것을 좋아하다',
      chinese: {
        hanzi: ['喜欢', '吃', '葡萄'],
        pinyin: ['xǐhuan', 'chī', 'pútao'],
      },
    },
    {
      id: 'sentence6',
      level: 4,
      isFinal: true,
      korean: '너는 포도 먹는 것을 좋아하니?',
      chinese: {
        hanzi: ['你', '喜欢', '吃', '葡萄', '吗'],
        pinyin: ['nǐ', 'xǐhuan', 'chī', 'pútao', 'ma'],
      },
    },

    // 문장7 묶음 (309-316)
    {
      id: 'sentence7',
      level: 1,
      isFinal: false,
      korean: '질문',
      chinese: {
        hanzi: ['问题'],
        pinyin: ['wèntí'],
      },
    },
    {
      id: 'sentence7',
      level: 2,
      isFinal: false,
      korean: '다른',
      chinese: {
        hanzi: ['其他'],
        pinyin: ['qítā'],
      },
    },
    {
      id: 'sentence7',
      level: 3,
      isFinal: false,
      korean: '다른 질문',
      chinese: {
        hanzi: ['其他', '问题'],
        pinyin: ['qítā', 'wèntí'],
      },
    },
    {
      id: 'sentence7',
      level: 4,
      isFinal: false,
      korean: '다른 질문이 있다',
      chinese: {
        hanzi: ['有', '其他', '问题'],
        pinyin: ['yǒu', 'qítā', 'wèntí'],
      },
    },
    {
      id: 'sentence7',
      level: 5,
      isFinal: false,
      korean: '또',
      chinese: {
        hanzi: ['还'],
        pinyin: ['hái'],
      },
    },
    {
      id: 'sentence7',
      level: 6,
      isFinal: false,
      korean: '또 있다',
      chinese: {
        hanzi: ['还', '有'],
        pinyin: ['hái', 'yǒu'],
      },
    },
    {
      id: 'sentence7',
      level: 7,
      isFinal: false,
      korean: '또 다른 질문이 있다',
      chinese: {
        hanzi: ['还', '有', '其他', '问题'],
        pinyin: ['hái', 'yǒu', 'qítā', 'wèntí'],
      },
    },
    {
      id: 'sentence7',
      level: 8,
      isFinal: true,
      korean: '너는 또 다른 질문이 있니?',
      chinese: {
        hanzi: ['你', '还', '有', '其他', '问题', '吗'],
        pinyin: ['nǐ', 'hái', 'yǒu', 'qítā', 'wèntí', 'ma'],
      },
    },

    // 문장8 묶음 (317-322)
    {
      id: 'sentence8',
      level: 1,
      isFinal: false,
      korean: '이상하다',
      chinese: {
        hanzi: ['奇怪'],
        pinyin: ['qíguài'],
      },
    },
    {
      id: 'sentence8',
      level: 2,
      isFinal: false,
      korean: '매우 이상하다',
      chinese: {
        hanzi: ['很', '奇怪'],
        pinyin: ['hěn', 'qíguài'],
      },
    },
    {
      id: 'sentence8',
      level: 3,
      isFinal: false,
      korean: '정말 이상하다',
      chinese: {
        hanzi: ['真', '奇怪'],
        pinyin: ['zhēn', 'qíguài'],
      },
    },
    {
      id: 'sentence8',
      level: 4,
      isFinal: false,
      korean: '오늘',
      chinese: {
        hanzi: ['今天'],
        pinyin: ['jīntiān'],
      },
    },
    {
      id: 'sentence8',
      level: 5,
      isFinal: false,
      korean: '오늘은 매우 이상하다.',
      chinese: {
        hanzi: ['今天', '很', '奇怪'],
        pinyin: ['jīntiān', 'hěn', 'qíguài'],
      },
    },
    {
      id: 'sentence8',
      level: 6,
      isFinal: true,
      korean: '그는 오늘 매우 이상하다.',
      chinese: {
        hanzi: ['他', '今天', '很', '奇怪'],
        pinyin: ['tā', 'jīntiān', 'hěn', 'qíguài'],
      },
    },

    // 문장9 묶음 (323-328)
    {
      id: 'sentence9',
      level: 1,
      isFinal: false,
      korean: '말하다',
      chinese: {
        hanzi: ['说'],
        pinyin: ['shuō'],
      },
    },
    {
      id: 'sentence9',
      level: 2,
      isFinal: false,
      korean: '명확하다',
      chinese: {
        hanzi: ['清楚'],
        pinyin: ['qīngchu'],
      },
    },
    {
      id: 'sentence9',
      level: 3,
      isFinal: false,
      korean: '명확하게 말하다',
      chinese: {
        hanzi: ['说', '清楚'],
        pinyin: ['shuō', 'qīngchu'],
      },
    },
    {
      id: 'sentence9',
      level: 4,
      isFinal: false,
      korean: '조금',
      chinese: {
        hanzi: ['一点'],
        pinyin: ['yìdiǎn'],
      },
    },
    {
      id: 'sentence9',
      level: 5,
      isFinal: false,
      korean: '조금 더 명확하게 말하다',
      chinese: {
        hanzi: ['说', '清楚', '一点'],
        pinyin: ['shuō', 'qīngchu', 'yìdiǎn'],
      },
    },
    {
      id: 'sentence9',
      level: 6,
      isFinal: true,
      korean: '좀 더 명확하게 말해줘.',
      chinese: {
        hanzi: ['你', '说', '清楚', '一点'],
        pinyin: ['nǐ', 'shuō', 'qīngchu', 'yìdiǎn'],
      },
    },

    // 문장10 묶음 (329-332)
    {
      id: 'sentence10',
      level: 1,
      isFinal: false,
      korean: '비가 오다',
      chinese: {
        hanzi: ['下雨'],
        pinyin: ['xiàyǔ'],
      },
    },
    {
      id: 'sentence10',
      level: 2,
      isFinal: false,
      korean: '오늘',
      chinese: {
        hanzi: ['今天'],
        pinyin: ['jīntiān'],
      },
    },
    {
      id: 'sentence10',
      level: 3,
      isFinal: false,
      korean: '오늘 비가 온다',
      chinese: {
        hanzi: ['今天', '下雨'],
        pinyin: ['jīntiān', 'xiàyǔ'],
      },
    },
    {
      id: 'sentence10',
      level: 4,
      isFinal: true,
      korean: '오늘 비가 오는데, 우리 갈까?',
      chinese: {
        hanzi: ['今天', '下雨', '，', '我们', '去', '吗'],
        pinyin: ['jīntiān', 'xiàyǔ', ',', 'wǒmen', 'qù', 'ma'],
      },
    },
  ],

  day9: [
    // 문장1 묶음 (333-339)
    {
      id: 'sentence1',
      level: 1,
      isFinal: false,
      korean: '만약',
      chinese: {
        hanzi: ['如果'],
        pinyin: ['rúguǒ'],
      },
    },
    {
      id: 'sentence1',
      level: 2,
      isFinal: false,
      korean: '만약 비가 온다면',
      chinese: {
        hanzi: ['如果', '下雨'],
        pinyin: ['rúguǒ', 'xiàyǔ'],
      },
    },
    {
      id: 'sentence1',
      level: 3,
      isFinal: false,
      korean: '또',
      chinese: {
        hanzi: ['还'],
        pinyin: ['hái'],
      },
    },
    {
      id: 'sentence1',
      level: 4,
      isFinal: false,
      korean: '또 가다',
      chinese: {
        hanzi: ['还', '去'],
        pinyin: ['hái', 'qù'],
      },
    },
    {
      id: 'sentence1',
      level: 5,
      isFinal: false,
      korean: '또 갈까?',
      chinese: {
        hanzi: ['还', '去', '吗'],
        pinyin: ['hái', 'qù', 'ma'],
      },
    },
    {
      id: 'sentence1',
      level: 6,
      isFinal: false,
      korean: '우리 또 갈까?',
      chinese: {
        hanzi: ['我们', '还', '去', '吗'],
        pinyin: ['wǒmen', 'hái', 'qù', 'ma'],
      },
    },
    {
      id: 'sentence1',
      level: 7,
      isFinal: true,
      korean: '만약 비가 온다면, 우리 또 갈까?',
      chinese: {
        hanzi: ['如果', '下雨', '，', '我们', '还', '去', '吗'],
        pinyin: ['rúguǒ', 'xiàyǔ', ',', 'wǒmen', 'hái', 'qù', 'ma'],
      },
    },

    // 문장2 묶음 (340-347)
    {
      id: 'sentence2',
      level: 1,
      isFinal: false,
      korean: '화나다',
      chinese: {
        hanzi: ['生气'],
        pinyin: ['shēngqì'],
      },
    },
    {
      id: 'sentence2',
      level: 2,
      isFinal: false,
      korean: '화났다',
      chinese: {
        hanzi: ['生气', '了'],
        pinyin: ['shēngqì', 'le'],
      },
    },
    {
      id: 'sentence2',
      level: 3,
      isFinal: false,
      korean: '매우 화났다',
      chinese: {
        hanzi: ['很', '生气'],
        pinyin: ['hěn', 'shēngqì'],
      },
    },
    {
      id: 'sentence2',
      level: 4,
      isFinal: false,
      korean: '정말로',
      chinese: {
        hanzi: ['真的'],
        pinyin: ['zhēn de'],
      },
    },
    {
      id: 'sentence2',
      level: 5,
      isFinal: false,
      korean: '정말로 매우 화났다',
      chinese: {
        hanzi: ['真的', '很', '生气'],
        pinyin: ['zhēn de', 'hěn', 'shēngqì'],
      },
    },
    {
      id: 'sentence2',
      level: 6,
      isFinal: false,
      korean: '왜',
      chinese: {
        hanzi: ['为什么'],
        pinyin: ['wèishénme'],
      },
    },
    {
      id: 'sentence2',
      level: 7,
      isFinal: false,
      korean: '왜 화났니?',
      chinese: {
        hanzi: ['为什么', '生气', '了'],
        pinyin: ['wèishénme', 'shēngqì', 'le'],
      },
    },
    {
      id: 'sentence2',
      level: 8,
      isFinal: true,
      korean: '너는 왜 화났니?',
      chinese: {
        hanzi: ['你', '为什么', '生气', '了'],
        pinyin: ['nǐ', 'wèishénme', 'shēngqì', 'le'],
      },
    },

    // 문장3 묶음 (348-354)
    {
      id: 'sentence3',
      level: 1,
      isFinal: false,
      korean: '세계 여행',
      chinese: {
        hanzi: ['世界', '旅行'],
        pinyin: ['shìjiè', 'lǚxíng'],
      },
    },
    {
      id: 'sentence3',
      level: 2,
      isFinal: false,
      korean: '가다',
      chinese: {
        hanzi: ['去'],
        pinyin: ['qù'],
      },
    },
    {
      id: 'sentence3',
      level: 3,
      isFinal: false,
      korean: '세계 여행을 가다',
      chinese: {
        hanzi: ['去', '世界', '旅行'],
        pinyin: ['qù', 'shìjiè', 'lǚxíng'],
      },
    },
    {
      id: 'sentence3',
      level: 4,
      isFinal: false,
      korean: '~하고 싶다',
      chinese: {
        hanzi: ['想'],
        pinyin: ['xiǎng'],
      },
    },
    {
      id: 'sentence3',
      level: 5,
      isFinal: false,
      korean: '가고 싶다',
      chinese: {
        hanzi: ['想', '去'],
        pinyin: ['xiǎng', 'qù'],
      },
    },
    {
      id: 'sentence3',
      level: 6,
      isFinal: false,
      korean: '세계 여행을 가고 싶다',
      chinese: {
        hanzi: ['想', '去', '世界', '旅行'],
        pinyin: ['xiǎng', 'qù', 'shìjiè', 'lǚxíng'],
      },
    },
    {
      id: 'sentence3',
      level: 7,
      isFinal: true,
      korean: '너는 세계 여행을 가고 싶니?',
      chinese: {
        hanzi: ['你', '想', '去', '世界', '旅行', '吗'],
        pinyin: ['nǐ', 'xiǎng', 'qù', 'shìjiè', 'lǚxíng', 'ma'],
      },
    },

    // 문장4 묶음 (355-362)
    {
      id: 'sentence4',
      level: 1,
      isFinal: false,
      korean: '맛있다',
      chinese: {
        hanzi: ['好吃'],
        pinyin: ['hǎochī'],
      },
    },
    {
      id: 'sentence4',
      level: 2,
      isFinal: false,
      korean: '특별히',
      chinese: {
        hanzi: ['特别'],
        pinyin: ['tèbié'],
      },
    },
    {
      id: 'sentence4',
      level: 3,
      isFinal: false,
      korean: '특별히 맛있다',
      chinese: {
        hanzi: ['特别', '好吃'],
        pinyin: ['tèbié', 'hǎochī'],
      },
    },
    {
      id: 'sentence4',
      level: 4,
      isFinal: false,
      korean: '요리',
      chinese: {
        hanzi: ['菜'],
        pinyin: ['cài'],
      },
    },
    {
      id: 'sentence4',
      level: 5,
      isFinal: false,
      korean: '오늘',
      chinese: {
        hanzi: ['今天'],
        pinyin: ['jīntiān'],
      },
    },
    {
      id: 'sentence4',
      level: 6,
      isFinal: false,
      korean: '오늘의',
      chinese: {
        hanzi: ['今天的'],
        pinyin: ['jīntiān de'],
      },
    },
    {
      id: 'sentence4',
      level: 7,
      isFinal: false,
      korean: '오늘의 요리',
      chinese: {
        hanzi: ['今天的', '菜'],
        pinyin: ['jīntiān de', 'cài'],
      },
    },
    {
      id: 'sentence4',
      level: 8,
      isFinal: true,
      korean: '오늘의 요리는 특별히 맛있다.',
      chinese: {
        hanzi: ['今天的', '菜', '特别', '好吃'],
        pinyin: ['jīntiān de', 'cài', 'tèbié', 'hǎochī'],
      },
    },

    // 문장5 묶음 (363-367)
    {
      id: 'sentence5',
      level: 1,
      isFinal: false,
      korean: '동의하다',
      chinese: {
        hanzi: ['同意'],
        pinyin: ['tóngyì'],
      },
    },
    {
      id: 'sentence5',
      level: 2,
      isFinal: false,
      korean: '너는 동의하니?',
      chinese: {
        hanzi: ['你', '同意', '吗'],
        pinyin: ['nǐ', 'tóngyì', 'ma'],
      },
    },
    {
      id: 'sentence5',
      level: 3,
      isFinal: false,
      korean: '의견',
      chinese: {
        hanzi: ['意见'],
        pinyin: ['yìjiàn'],
      },
    },
    {
      id: 'sentence5',
      level: 4,
      isFinal: false,
      korean: '내 의견',
      chinese: {
        hanzi: ['我的', '意见'],
        pinyin: ['wǒde', 'yìjiàn'],
      },
    },
    {
      id: 'sentence5',
      level: 5,
      isFinal: true,
      korean: '너는 내 의견에 동의하니?',
      chinese: {
        hanzi: ['你', '同意', '我的', '意见', '吗'],
        pinyin: ['nǐ', 'tóngyì', 'wǒde', 'yìjiàn', 'ma'],
      },
    },

    // 문장6 묶음 (368-374)
    {
      id: 'sentence6',
      level: 1,
      isFinal: false,
      korean: '중요하다',
      chinese: {
        hanzi: ['重要'],
        pinyin: ['zhòngyào'],
      },
    },
    {
      id: 'sentence6',
      level: 2,
      isFinal: false,
      korean: '가장 중요하다',
      chinese: {
        hanzi: ['最', '重要'],
        pinyin: ['zuì', 'zhòngyào'],
      },
    },
    {
      id: 'sentence6',
      level: 3,
      isFinal: false,
      korean: '무엇',
      chinese: {
        hanzi: ['什么'],
        pinyin: ['shénme'],
      },
    },
    {
      id: 'sentence6',
      level: 4,
      isFinal: false,
      korean: '무엇이 가장 중요하니?',
      chinese: {
        hanzi: ['什么', '最', '重要'],
        pinyin: ['shénme', 'zuì', 'zhòngyào'],
      },
    },
    {
      id: 'sentence6',
      level: 5,
      isFinal: false,
      korean: '생각하다',
      chinese: {
        hanzi: ['觉得'],
        pinyin: ['juéde'],
      },
    },
    {
      id: 'sentence6',
      level: 6,
      isFinal: false,
      korean: '너는 생각하다',
      chinese: {
        hanzi: ['你', '觉得'],
        pinyin: ['nǐ', 'juéde'],
      },
    },
    {
      id: 'sentence6',
      level: 7,
      isFinal: true,
      korean: '너는 무엇이 가장 중요하다고 생각하니?',
      chinese: {
        hanzi: ['你', '觉得', '什么', '最', '重要'],
        pinyin: ['nǐ', 'juéde', 'shénme', 'zuì', 'zhòngyào'],
      },
    },

    // 문장7 묶음 (375-382)
    {
      id: 'sentence7',
      level: 1,
      isFinal: false,
      korean: '확신하다',
      chinese: {
        hanzi: ['确定'],
        pinyin: ['quèdìng'],
      },
    },
    {
      id: 'sentence7',
      level: 2,
      isFinal: false,
      korean: '확신하니?',
      chinese: {
        hanzi: ['确定', '吗'],
        pinyin: ['quèdìng', 'ma'],
      },
    },
    {
      id: 'sentence7',
      level: 3,
      isFinal: false,
      korean: '너는 확신하니?',
      chinese: {
        hanzi: ['你', '确定', '吗'],
        pinyin: ['nǐ', 'quèdìng', 'ma'],
      },
    },
    {
      id: 'sentence7',
      level: 4,
      isFinal: false,
      korean: '가다',
      chinese: {
        hanzi: ['去'],
        pinyin: ['qù'],
      },
    },
    {
      id: 'sentence7',
      level: 5,
      isFinal: false,
      korean: '가고 싶다',
      chinese: {
        hanzi: ['想', '去'],
        pinyin: ['xiǎng', 'qù'],
      },
    },
    {
      id: 'sentence7',
      level: 6,
      isFinal: false,
      korean: '가고 싶은지',
      chinese: {
        hanzi: ['想', '去', '不', '想', '去'],
        pinyin: ['xiǎng', 'qù', 'bù', 'xiǎng', 'qù'],
      },
    },
    {
      id: 'sentence7',
      level: 7,
      isFinal: false,
      korean: '가고 싶은지 확신하니?',
      chinese: {
        hanzi: ['确定', '想', '去', '吗'],
        pinyin: ['quèdìng', 'xiǎng', 'qù', 'ma'],
      },
    },
    {
      id: 'sentence7',
      level: 8,
      isFinal: true,
      korean: '너는 가고 싶은지 확신하니?',
      chinese: {
        hanzi: ['你', '确定', '想', '去', '吗'],
        pinyin: ['nǐ', 'quèdìng', 'xiǎng', 'qù', 'ma'],
      },
    },

    // 문장8 묶음 (383-389)
    {
      id: 'sentence8',
      level: 1,
      isFinal: false,
      korean: '원래',
      chinese: {
        hanzi: ['原来'],
        pinyin: ['yuánlái'],
      },
    },
    {
      id: 'sentence8',
      level: 2,
      isFinal: false,
      korean: '원래 그렇다',
      chinese: {
        hanzi: ['原来', '是', '这样'],
        pinyin: ['yuánlái', 'shì', 'zhèyàng'],
      },
    },
    {
      id: 'sentence8',
      level: 3,
      isFinal: false,
      korean: '알다',
      chinese: {
        hanzi: ['知道'],
        pinyin: ['zhīdào'],
      },
    },
    {
      id: 'sentence8',
      level: 4,
      isFinal: false,
      korean: '알게 되다',
      chinese: {
        hanzi: ['知道', '了'],
        pinyin: ['zhīdào', 'le'],
      },
    },
    {
      id: 'sentence8',
      level: 5,
      isFinal: false,
      korean: '이제 알게 되다',
      chinese: {
        hanzi: ['现在', '知道', '了'],
        pinyin: ['xiànzài', 'zhīdào', 'le'],
      },
    },
    {
      id: 'sentence8',
      level: 6,
      isFinal: false,
      korean: '이제야 알게 되다',
      chinese: {
        hanzi: ['现在', '才', '知道'],
        pinyin: ['xiànzài', 'cái', 'zhīdào'],
      },
    },
    {
      id: 'sentence8',
      level: 7,
      isFinal: true,
      korean: '아, 원래 그렇구나. 이제야 알게 됐어.',
      chinese: {
        hanzi: ['哦', '，', '原来', '是', '这样', '。', '现在', '才', '知道'],
        pinyin: [
          'ò',
          ',',
          'yuánlái',
          'shì',
          'zhèyàng',
          '.',
          'xiànzài',
          'cái',
          'zhīdào',
        ],
      },
    },

    // 문장9 묶음 (390-396)
    {
      id: 'sentence9',
      level: 1,
      isFinal: false,
      korean: '인사하다',
      chinese: {
        hanzi: ['打招呼'],
        pinyin: ['dǎ zhāohu'],
      },
    },
    {
      id: 'sentence9',
      level: 2,
      isFinal: false,
      korean: '인사 안 하다',
      chinese: {
        hanzi: ['不', '打招呼'],
        pinyin: ['bù', 'dǎ zhāohu'],
      },
    },
    {
      id: 'sentence9',
      level: 3,
      isFinal: false,
      korean: '왜',
      chinese: {
        hanzi: ['为什么'],
        pinyin: ['wèishénme'],
      },
    },
    {
      id: 'sentence9',
      level: 4,
      isFinal: false,
      korean: '왜 인사 안 하니?',
      chinese: {
        hanzi: ['为什么', '不', '打招呼'],
        pinyin: ['wèishénme', 'bù', 'dǎ zhāohu'],
      },
    },
    {
      id: 'sentence9',
      level: 5,
      isFinal: false,
      korean: '만나다',
      chinese: {
        hanzi: ['见面'],
        pinyin: ['jiànmiàn'],
      },
    },
    {
      id: 'sentence9',
      level: 6,
      isFinal: false,
      korean: '만날 때',
      chinese: {
        hanzi: ['见面', '的', '时候'],
        pinyin: ['jiànmiàn', 'de', 'shíhou'],
      },
    },
    {
      id: 'sentence9',
      level: 7,
      isFinal: true,
      korean: '만날 때 왜 인사 안 하니?',
      chinese: {
        hanzi: ['见面', '的', '时候', '，', '为什么', '不', '打招呼'],
        pinyin: [
          'jiànmiàn',
          'de',
          'shíhou',
          ',',
          'wèishénme',
          'bù',
          'dǎ zhāohu',
        ],
      },
    },

    // 문장10 묶음 (397-404)
    {
      id: 'sentence10',
      level: 1,
      isFinal: false,
      korean: '같이',
      chinese: {
        hanzi: ['一起'],
        pinyin: ['yìqǐ'],
      },
    },
    {
      id: 'sentence10',
      level: 2,
      isFinal: false,
      korean: '가다',
      chinese: {
        hanzi: ['去'],
        pinyin: ['qù'],
      },
    },
    {
      id: 'sentence10',
      level: 3,
      isFinal: false,
      korean: '같이 가다',
      chinese: {
        hanzi: ['一起', '去'],
        pinyin: ['yìqǐ', 'qù'],
      },
    },
    {
      id: 'sentence10',
      level: 4,
      isFinal: false,
      korean: '~할까?',
      chinese: {
        hanzi: ['吧'],
        pinyin: ['ba'],
      },
    },
    {
      id: 'sentence10',
      level: 5,
      isFinal: false,
      korean: '같이 갈까?',
      chinese: {
        hanzi: ['一起', '去', '吧'],
        pinyin: ['yìqǐ', 'qù', 'ba'],
      },
    },
    {
      id: 'sentence10',
      level: 6,
      isFinal: false,
      korean: '내일',
      chinese: {
        hanzi: ['明天'],
        pinyin: ['míngtiān'],
      },
    },
    {
      id: 'sentence10',
      level: 7,
      isFinal: false,
      korean: '내일 같이 갈까?',
      chinese: {
        hanzi: ['明天', '一起', '去', '吧'],
        pinyin: ['míngtiān', 'yìqǐ', 'qù', 'ba'],
      },
    },
    {
      id: 'sentence10',
      level: 8,
      isFinal: true,
      korean: '내일 우리 같이 갈까?',
      chinese: {
        hanzi: ['明天', '我们', '一起', '去', '吧'],
        pinyin: ['míngtiān', 'wǒmen', 'yìqǐ', 'qù', 'ba'],
      },
    },
  ],

  day10: [
    // 문장1 묶음 (405-411)
    {
      id: 'sentence1',
      level: 1,
      isFinal: false,
      korean: '관심이 있다',
      chinese: {
        hanzi: ['有', '兴趣'],
        pinyin: ['yǒu', 'xìngqù'],
      },
    },
    {
      id: 'sentence1',
      level: 2,
      isFinal: false,
      korean: '이것',
      chinese: {
        hanzi: ['这个'],
        pinyin: ['zhège'],
      },
    },
    {
      id: 'sentence1',
      level: 3,
      isFinal: false,
      korean: '이것에 관심이 있다',
      chinese: {
        hanzi: ['对', '这个', '有', '兴趣'],
        pinyin: ['duì', 'zhège', 'yǒu', 'xìngqù'],
      },
    },
    {
      id: 'sentence1',
      level: 4,
      isFinal: false,
      korean: '너는 이것에 관심이 있니?',
      chinese: {
        hanzi: ['你', '对', '这个', '有', '兴趣', '吗'],
        pinyin: ['nǐ', 'duì', 'zhège', 'yǒu', 'xìngqù', 'ma'],
      },
    },
    {
      id: 'sentence1',
      level: 5,
      isFinal: false,
      korean: '아니다',
      chinese: {
        hanzi: ['不是'],
        pinyin: ['bùshì'],
      },
    },
    {
      id: 'sentence1',
      level: 6,
      isFinal: false,
      korean: '그것',
      chinese: {
        hanzi: ['那个'],
        pinyin: ['nàge'],
      },
    },
    {
      id: 'sentence1',
      level: 7,
      isFinal: true,
      korean: '아니, 나는 그것에 관심이 있어.',
      chinese: {
        hanzi: ['不是', '，', '我', '对', '那个', '有', '兴趣'],
        pinyin: ['bùshì', ',', 'wǒ', 'duì', 'nàge', 'yǒu', 'xìngqù'],
      },
    },

    // 문장2 묶음 (412-419)
    {
      id: 'sentence2',
      level: 1,
      isFinal: false,
      korean: '이유',
      chinese: {
        hanzi: ['理由'],
        pinyin: ['lǐyóu'],
      },
    },
    {
      id: 'sentence2',
      level: 2,
      isFinal: false,
      korean: '무슨 이유',
      chinese: {
        hanzi: ['什么', '理由'],
        pinyin: ['shénme', 'lǐyóu'],
      },
    },
    // 문장2 묶음 (412-419) 이어서...
    {
      id: 'sentence2',
      level: 3,
      isFinal: false,
      korean: '알다',
      chinese: {
        hanzi: ['知道'],
        pinyin: ['zhīdào'],
      },
    },
    {
      id: 'sentence2',
      level: 4,
      isFinal: false,
      korean: '이유를 알다',
      chinese: {
        hanzi: ['知道', '理由'],
        pinyin: ['zhīdào', 'lǐyóu'],
      },
    },
    {
      id: 'sentence2',
      level: 5,
      isFinal: false,
      korean: '이유를 알고 싶다',
      chinese: {
        hanzi: ['想', '知道', '理由'],
        pinyin: ['xiǎng', 'zhīdào', 'lǐyóu'],
      },
    },
    {
      id: 'sentence2',
      level: 6,
      isFinal: false,
      korean: '나는 이유를 알고 싶다',
      chinese: {
        hanzi: ['我', '想', '知道', '理由'],
        pinyin: ['wǒ', 'xiǎng', 'zhīdào', 'lǐyóu'],
      },
    },
    {
      id: 'sentence2',
      level: 7,
      isFinal: false,
      korean: '나는 무슨 이유인지 알고 싶다',
      chinese: {
        hanzi: ['我', '想', '知道', '是', '什么', '理由'],
        pinyin: ['wǒ', 'xiǎng', 'zhīdào', 'shì', 'shénme', 'lǐyóu'],
      },
    },
    {
      id: 'sentence2',
      level: 8,
      isFinal: true,
      korean: '나는 네가 가지 않는 이유를 알고 싶다',
      chinese: {
        hanzi: ['我', '想', '知道', '你', '不', '去', '的', '理由'],
        pinyin: ['wǒ', 'xiǎng', 'zhīdào', 'nǐ', 'bù', 'qù', 'de', 'lǐyóu'],
      },
    },

    // 문장3 묶음 (420-427)
    {
      id: 'sentence3',
      level: 1,
      isFinal: false,
      korean: '걱정하다',
      chinese: {
        hanzi: ['担心'],
        pinyin: ['dānxīn'],
      },
    },
    {
      id: 'sentence3',
      level: 2,
      isFinal: false,
      korean: '걱정하지 마',
      chinese: {
        hanzi: ['不要', '担心'],
        pinyin: ['bùyào', 'dānxīn'],
      },
    },
    {
      id: 'sentence3',
      level: 3,
      isFinal: false,
      korean: '할 수 있다',
      chinese: {
        hanzi: ['可以'],
        pinyin: ['kěyǐ'],
      },
    },
    {
      id: 'sentence3',
      level: 4,
      isFinal: false,
      korean: '할 수 있어',
      chinese: {
        hanzi: ['你', '可以'],
        pinyin: ['nǐ', 'kěyǐ'],
      },
    },
    {
      id: 'sentence3',
      level: 5,
      isFinal: false,
      korean: '너는 할 수 있어',
      chinese: {
        hanzi: ['你', '可以'],
        pinyin: ['nǐ', 'kěyǐ'],
      },
    },
    {
      id: 'sentence3',
      level: 6,
      isFinal: false,
      korean: '확신하다',
      chinese: {
        hanzi: ['确定'],
        pinyin: ['quèdìng'],
      },
    },
    {
      id: 'sentence3',
      level: 7,
      isFinal: false,
      korean: '나는 확신해',
      chinese: {
        hanzi: ['我', '确定'],
        pinyin: ['wǒ', 'quèdìng'],
      },
    },
    {
      id: 'sentence3',
      level: 8,
      isFinal: true,
      korean: '걱정하지 마, 너는 할 수 있어. 나는 확신해.',
      chinese: {
        hanzi: ['不要', '担心', '，', '你', '可以', '。', '我', '确定'],
        pinyin: ['bùyào', 'dānxīn', ',', 'nǐ', 'kěyǐ', '.', 'wǒ', 'quèdìng'],
      },
    },

    // 문장4 묶음 (428-435)
    {
      id: 'sentence4',
      level: 1,
      isFinal: false,
      korean: '좋아하다',
      chinese: {
        hanzi: ['喜欢'],
        pinyin: ['xǐhuan'],
      },
    },
    {
      id: 'sentence4',
      level: 2,
      isFinal: false,
      korean: '나는 좋아한다',
      chinese: {
        hanzi: ['我', '喜欢'],
        pinyin: ['wǒ', 'xǐhuan'],
      },
    },
    {
      id: 'sentence4',
      level: 3,
      isFinal: false,
      korean: '너를',
      chinese: {
        hanzi: ['你'],
        pinyin: ['nǐ'],
      },
    },
    {
      id: 'sentence4',
      level: 4,
      isFinal: false,
      korean: '나는 너를 좋아해',
      chinese: {
        hanzi: ['我', '喜欢', '你'],
        pinyin: ['wǒ', 'xǐhuan', 'nǐ'],
      },
    },
    {
      id: 'sentence4',
      level: 5,
      isFinal: false,
      korean: '생각하다',
      chinese: {
        hanzi: ['想'],
        pinyin: ['xiǎng'],
      },
    },
    {
      id: 'sentence4',
      level: 6,
      isFinal: false,
      korean: '나는 생각한다',
      chinese: {
        hanzi: ['我', '想'],
        pinyin: ['wǒ', 'xiǎng'],
      },
    },
    {
      id: 'sentence4',
      level: 7,
      isFinal: false,
      korean: '나는 네가 좋다고 생각해',
      chinese: {
        hanzi: ['我', '想', '我', '喜欢', '你'],
        pinyin: ['wǒ', 'xiǎng', 'wǒ', 'xǐhuan', 'nǐ'],
      },
    },
    {
      id: 'sentence4',
      level: 8,
      isFinal: true,
      korean: '나는 너를 좋아해, 나는 네가 좋다고 생각해',
      chinese: {
        hanzi: ['我', '喜欢', '你', '，', '我', '想', '我', '喜欢', '你'],
        pinyin: [
          'wǒ',
          'xǐhuan',
          'nǐ',
          ',',
          'wǒ',
          'xiǎng',
          'wǒ',
          'xǐhuan',
          'nǐ',
        ],
      },
    },

    // 문장5 묶음 (436-442)
    {
      id: 'sentence5',
      level: 1,
      isFinal: false,
      korean: '발음',
      chinese: {
        hanzi: ['发音'],
        pinyin: ['fāyīn'],
      },
    },
    {
      id: 'sentence5',
      level: 2,
      isFinal: false,
      korean: '발음하다',
      chinese: {
        hanzi: ['发', '音'],
        pinyin: ['fā', 'yīn'],
      },
    },
    {
      id: 'sentence5',
      level: 3,
      isFinal: false,
      korean: '정확하다',
      chinese: {
        hanzi: ['准确'],
        pinyin: ['zhǔnquè'],
      },
    },
    {
      id: 'sentence5',
      level: 4,
      isFinal: false,
      korean: '정확하게 발음하다',
      chinese: {
        hanzi: ['准确', '发音'],
        pinyin: ['zhǔnquè', 'fāyīn'],
      },
    },
    {
      id: 'sentence5',
      level: 5,
      isFinal: false,
      korean: '이 단어',
      chinese: {
        hanzi: ['这个', '词'],
        pinyin: ['zhège', 'cí'],
      },
    },
    {
      id: 'sentence5',
      level: 6,
      isFinal: false,
      korean: '이 단어를 발음하다',
      chinese: {
        hanzi: ['发', '这个', '词', '的', '音'],
        pinyin: ['fā', 'zhège', 'cí', 'de', 'yīn'],
      },
    },
    {
      id: 'sentence5',
      level: 7,
      isFinal: true,
      korean: '이 단어를 정확하게 발음하는 방법이 뭐니?',
      chinese: {
        hanzi: ['怎么', '准确', '发', '这个', '词', '的', '音'],
        pinyin: ['zěnme', 'zhǔnquè', 'fā', 'zhège', 'cí', 'de', 'yīn'],
      },
    },

    // 문장6 묶음 (443-450)
    {
      id: 'sentence6',
      level: 1,
      isFinal: false,
      korean: '괜찮다',
      chinese: {
        hanzi: ['没关系'],
        pinyin: ['méiguānxi'],
      },
    },
    {
      id: 'sentence6',
      level: 2,
      isFinal: false,
      korean: '괜찮아',
      chinese: {
        hanzi: ['没关系'],
        pinyin: ['méiguānxi'],
      },
    },
    {
      id: 'sentence6',
      level: 3,
      isFinal: false,
      korean: '걱정하다',
      chinese: {
        hanzi: ['担心'],
        pinyin: ['dānxīn'],
      },
    },
    {
      id: 'sentence6',
      level: 4,
      isFinal: false,
      korean: '걱정하지 마',
      chinese: {
        hanzi: ['不要', '担心'],
        pinyin: ['bùyào', 'dānxīn'],
      },
    },
    {
      id: 'sentence6',
      level: 5,
      isFinal: false,
      korean: '실수하다',
      chinese: {
        hanzi: ['犯错'],
        pinyin: ['fàncuò'],
      },
    },
    {
      id: 'sentence6',
      level: 6,
      isFinal: false,
      korean: '실수해도',
      chinese: {
        hanzi: ['犯错', '也'],
        pinyin: ['fàncuò', 'yě'],
      },
    },
    {
      id: 'sentence6',
      level: 7,
      isFinal: false,
      korean: '실수해도 괜찮아',
      chinese: {
        hanzi: ['犯错', '也', '没关系'],
        pinyin: ['fàncuò', 'yě', 'méiguānxi'],
      },
    },
    {
      id: 'sentence6',
      level: 8,
      isFinal: true,
      korean: '괜찮아, 걱정하지 마. 실수해도 괜찮아.',
      chinese: {
        hanzi: ['没关系', '，', '不要', '担心', '。', '犯错', '也', '没关系'],
        pinyin: [
          'méiguānxi',
          ',',
          'bùyào',
          'dānxīn',
          '.',
          'fàncuò',
          'yě',
          'méiguānxi',
        ],
      },
    },

    // 문장7 묶음 (451-458)
    {
      id: 'sentence7',
      level: 1,
      isFinal: false,
      korean: '연락하다',
      chinese: {
        hanzi: ['联系'],
        pinyin: ['liánxì'],
      },
    },
    {
      id: 'sentence7',
      level: 2,
      isFinal: false,
      korean: '연락해 주다',
      chinese: {
        hanzi: ['联系', '一下'],
        pinyin: ['liánxì', 'yíxià'],
      },
    },
    {
      id: 'sentence7',
      level: 3,
      isFinal: false,
      korean: '나에게 연락해 주다',
      chinese: {
        hanzi: ['联系', '我', '一下'],
        pinyin: ['liánxì', 'wǒ', 'yíxià'],
      },
    },
    {
      id: 'sentence7',
      level: 4,
      isFinal: false,
      korean: '나중에',
      chinese: {
        hanzi: ['过', '一会儿'],
        pinyin: ['guò', 'yíhuìr'],
      },
    },
    {
      id: 'sentence7',
      level: 5,
      isFinal: false,
      korean: '나중에 나에게 연락해 줘',
      chinese: {
        hanzi: ['过', '一会儿', '联系', '我', '一下'],
        pinyin: ['guò', 'yíhuìr', 'liánxì', 'wǒ', 'yíxià'],
      },
    },
    {
      id: 'sentence7',
      level: 6,
      isFinal: false,
      korean: '시간',
      chinese: {
        hanzi: ['时间'],
        pinyin: ['shíjiān'],
      },
    },
    {
      id: 'sentence7',
      level: 7,
      isFinal: false,
      korean: '시간이 있다',
      chinese: {
        hanzi: ['有', '时间'],
        pinyin: ['yǒu', 'shíjiān'],
      },
    },
    {
      id: 'sentence7',
      level: 8,
      isFinal: true,
      korean: '시간이 있을 때 나중에 나에게 연락해 줘.',
      chinese: {
        hanzi: [
          '有',
          '时间',
          '的',
          '时候',
          '，',
          '过',
          '一会儿',
          '联系',
          '我',
          '一下',
        ],
        pinyin: [
          'yǒu',
          'shíjiān',
          'de',
          'shíhou',
          ',',
          'guò',
          'yíhuìr',
          'liánxì',
          'wǒ',
          'yíxià',
        ],
      },
    },

    // 문장8 묶음 (459-465)
    {
      id: 'sentence8',
      level: 1,
      isFinal: false,
      korean: '배우다',
      chinese: {
        hanzi: ['学习'],
        pinyin: ['xuéxí'],
      },
    },
    {
      id: 'sentence8',
      level: 2,
      isFinal: false,
      korean: '언어를 배우다',
      chinese: {
        hanzi: ['学习', '语言'],
        pinyin: ['xuéxí', 'yǔyán'],
      },
    },
    {
      id: 'sentence8',
      level: 3,
      isFinal: false,
      korean: '새로운 언어를 배우다',
      chinese: {
        hanzi: ['学习', '新', '语言'],
        pinyin: ['xuéxí', 'xīn', 'yǔyán'],
      },
    },
    {
      id: 'sentence8',
      level: 4,
      isFinal: false,
      korean: '즐겁다',
      chinese: {
        hanzi: ['快乐'],
        pinyin: ['kuàilè'],
      },
    },
    {
      id: 'sentence8',
      level: 5,
      isFinal: false,
      korean: '즐거운 일',
      chinese: {
        hanzi: ['快乐', '的', '事情'],
        pinyin: ['kuàilè', 'de', 'shìqing'],
      },
    },
    {
      id: 'sentence8',
      level: 6,
      isFinal: false,
      korean: '배우는 것은 즐거운 일이다',
      chinese: {
        hanzi: ['学习', '是', '快乐', '的', '事情'],
        pinyin: ['xuéxí', 'shì', 'kuàilè', 'de', 'shìqing'],
      },
    },
    {
      id: 'sentence8',
      level: 7,
      isFinal: true,
      korean: '새로운 언어를 배우는 것은 즐거운 일이다.',
      chinese: {
        hanzi: ['学习', '新', '语言', '是', '快乐', '的', '事情'],
        pinyin: ['xuéxí', 'xīn', 'yǔyán', 'shì', 'kuàilè', 'de', 'shìqing'],
      },
    },

    // 문장9 묶음 (466-471)
    {
      id: 'sentence9',
      level: 1,
      isFinal: false,
      korean: '멀다',
      chinese: {
        hanzi: ['远'],
        pinyin: ['yuǎn'],
      },
    },
    {
      id: 'sentence9',
      level: 2,
      isFinal: false,
      korean: '얼마나 멀까?',
      chinese: {
        hanzi: ['多', '远'],
        pinyin: ['duō', 'yuǎn'],
      },
    },
    {
      id: 'sentence9',
      level: 3,
      isFinal: false,
      korean: '여기서',
      chinese: {
        hanzi: ['从', '这里'],
        pinyin: ['cóng', 'zhèlǐ'],
      },
    },
    {
      id: 'sentence9',
      level: 4,
      isFinal: false,
      korean: '공항',
      chinese: {
        hanzi: ['机场'],
        pinyin: ['jīchǎng'],
      },
    },
    {
      id: 'sentence9',
      level: 5,
      isFinal: false,
      korean: '공항까지',
      chinese: {
        hanzi: ['到', '机场'],
        pinyin: ['dào', 'jīchǎng'],
      },
    },
    {
      id: 'sentence9',
      level: 6,
      isFinal: true,
      korean: '여기서 공항까지 얼마나 멀까?',
      chinese: {
        hanzi: ['从', '这里', '到', '机场', '多', '远'],
        pinyin: ['cóng', 'zhèlǐ', 'dào', 'jīchǎng', 'duō', 'yuǎn'],
      },
    },

    // 문장10 묶음 (472-480)
    {
      id: 'sentence10',
      level: 1,
      isFinal: false,
      korean: '점심',
      chinese: {
        hanzi: ['午饭'],
        pinyin: ['wǔfàn'],
      },
    },
    {
      id: 'sentence10',
      level: 2,
      isFinal: false,
      korean: '먹다',
      chinese: {
        hanzi: ['吃'],
        pinyin: ['chī'],
      },
    },
    {
      id: 'sentence10',
      level: 3,
      isFinal: false,
      korean: '점심 먹다',
      chinese: {
        hanzi: ['吃', '午饭'],
        pinyin: ['chī', 'wǔfàn'],
      },
    },
    {
      id: 'sentence10',
      level: 4,
      isFinal: false,
      korean: '같이',
      chinese: {
        hanzi: ['一起'],
        pinyin: ['yìqǐ'],
      },
    },
    {
      id: 'sentence10',
      level: 5,
      isFinal: false,
      korean: '같이 점심 먹다',
      chinese: {
        hanzi: ['一起', '吃', '午饭'],
        pinyin: ['yìqǐ', 'chī', 'wǔfàn'],
      },
    },
    {
      id: 'sentence10',
      level: 6,
      isFinal: false,
      korean: '내일',
      chinese: {
        hanzi: ['明天'],
        pinyin: ['míngtiān'],
      },
    },
    {
      id: 'sentence10',
      level: 7,
      isFinal: false,
      korean: '내일 같이 점심 먹다',
      chinese: {
        hanzi: ['明天', '一起', '吃', '午饭'],
        pinyin: ['míngtiān', 'yìqǐ', 'chī', 'wǔfàn'],
      },
    },
    {
      id: 'sentence10',
      level: 8,
      isFinal: false,
      korean: '시간이 있다',
      chinese: {
        hanzi: ['有', '时间'],
        pinyin: ['yǒu', 'shíjiān'],
      },
    },
    {
      id: 'sentence10',
      level: 9,
      isFinal: true,
      korean: '내일 시간 있으면 같이 점심 먹을래?',
      chinese: {
        hanzi: ['明天', '有', '时间', '的话', '，', '一起', '吃', '午饭', '吗'],
        pinyin: [
          'míngtiān',
          'yǒu',
          'shíjiān',
          'dehuà',
          ',',
          'yìqǐ',
          'chī',
          'wǔfàn',
          'ma',
        ],
      },
    },
  ],
};

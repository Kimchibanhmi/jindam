// 문장 데이터 구조
// day: 학습 일차
// id: 문장 식별자
// level: 문장 난이도 단계
// isFinal: 최종 문장 여부
// korean: 한국어 번역
// chinese: {
//   hanzi: 한자 배열
//   pinyin: 병음 배열
// }

const sentenceData = {
  day1: [
    {
      id: 'sentence1',
      level: 1,
      isFinal: false,
      korean: '도서관',
      chinese: {
        hanzi: ['图书馆'],
        pinyin: ['túshūguǎn'],
      },
    },
    {
      id: 'sentence1',
      level: 2,
      isFinal: false,
      korean: '나는 간다',
      chinese: {
        hanzi: ['我', '去'],
        pinyin: ['wǒ', 'qù'],
      },
    },
    {
      id: 'sentence1',
      level: 3,
      isFinal: true,
      korean: '나는 도서관에 간다',
      chinese: {
        hanzi: ['我', '去', '图', '书', '馆'],
        pinyin: ['wǒ', 'qù', 'tú', 'shū', 'guǎn'],
      },
    },
    {
      id: 'sentence2',
      level: 1,
      isFinal: false,
      korean: '밥을 먹다',
      chinese: {
        hanzi: ['吃', '饭'],
        pinyin: ['chī', 'fàn'],
      },
    },
    {
      id: 'sentence2',
      level: 2,
      isFinal: true,
      korean: '나는 밥을 먹는다',
      chinese: {
        hanzi: ['我', '吃', '饭'],
        pinyin: ['wǒ', 'chī', 'fàn'],
      },
    },
    {
      id: 'sentence3',
      level: 1,
      isFinal: false,
      korean: '학교에서',
      chinese: {
        hanzi: ['在', '学', '校'],
        pinyin: ['zài', 'xué', 'xiào'],
      },
    },
    {
      id: 'sentence3',
      level: 2,
      isFinal: true,
      korean: '나는 학교에서 공부한다',
      chinese: {
        hanzi: ['我', '在', '学', '校', '学', '习'],
        pinyin: ['wǒ', 'zài', 'xué', 'xiào', 'xué', 'xí'],
      },
    },
    {
      id: 'sentence4',
      level: 1,
      isFinal: false,
      korean: '친구를 만나다',
      chinese: {
        hanzi: ['见', '朋', '友'],
        pinyin: ['jiàn', 'péng', 'yǒu'],
      },
    },
    {
      id: 'sentence4',
      level: 2,
      isFinal: true,
      korean: '나는 친구를 만난다',
      chinese: {
        hanzi: ['我', '见', '朋', '友'],
        pinyin: ['wǒ', 'jiàn', 'péng', 'yǒu'],
      },
    },
    {
      id: 'sentence5',
      level: 1,
      isFinal: false,
      korean: '좋아하다',
      chinese: {
        hanzi: ['喜', '欢'],
        pinyin: ['xǐ', 'huān'],
      },
    },
    {
      id: 'sentence5',
      level: 2,
      isFinal: true,
      korean: '나는 중국어를 좋아한다',
      chinese: {
        hanzi: ['我', '喜', '欢', '中', '文'],
        pinyin: ['wǒ', 'xǐ', 'huān', 'zhōng', 'wén'],
      },
    },
    {
      id: 'sentence6',
      level: 1,
      isFinal: false,
      korean: '책을 읽다',
      chinese: {
        hanzi: ['看', '书'],
        pinyin: ['kàn', 'shū'],
      },
    },
    {
      id: 'sentence6',
      level: 2,
      isFinal: true,
      korean: '나는 책을 읽는다',
      chinese: {
        hanzi: ['我', '看', '书'],
        pinyin: ['wǒ', 'kàn', 'shū'],
      },
    },
    {
      id: 'sentence7',
      level: 1,
      isFinal: false,
      korean: '영화를 보다',
      chinese: {
        hanzi: ['看', '电', '影'],
        pinyin: ['kàn', 'diàn', 'yǐng'],
      },
    },
    {
      id: 'sentence7',
      level: 2,
      isFinal: true,
      korean: '나는 영화를 본다',
      chinese: {
        hanzi: ['我', '看', '电', '影'],
        pinyin: ['wǒ', 'kàn', 'diàn', 'yǐng'],
      },
    },
    {
      id: 'sentence8',
      level: 1,
      isFinal: false,
      korean: '음악을 듣다',
      chinese: {
        hanzi: ['听', '音', '乐'],
        pinyin: ['tīng', 'yīn', 'yuè'],
      },
    },
    {
      id: 'sentence8',
      level: 2,
      isFinal: true,
      korean: '나는 음악을 듣는다',
      chinese: {
        hanzi: ['我', '听', '音', '乐'],
        pinyin: ['wǒ', 'tīng', 'yīn', 'yuè'],
      },
    },
    {
      id: 'sentence9',
      level: 1,
      isFinal: false,
      korean: '커피를 마시다',
      chinese: {
        hanzi: ['喝', '咖', '啡'],
        pinyin: ['hē', 'kā', 'fēi'],
      },
    },
    {
      id: 'sentence9',
      level: 2,
      isFinal: true,
      korean: '나는 커피를 마신다',
      chinese: {
        hanzi: ['我', '喝', '咖', '啡'],
        pinyin: ['wǒ', 'hē', 'kā', 'fēi'],
      },
    },
    {
      id: 'sentence10',
      level: 1,
      isFinal: false,
      korean: '쇼핑하다',
      chinese: {
        hanzi: ['购', '物'],
        pinyin: ['gòu', 'wù'],
      },
    },
    {
      id: 'sentence10',
      level: 2,
      isFinal: true,
      korean: '나는 쇼핑한다',
      chinese: {
        hanzi: ['我', '购', '物'],
        pinyin: ['wǒ', 'gòu', 'wù'],
      },
    },
  ],

  // 다른 Day들은 비슷한 형식으로 추가할 수 있습니다
  day2: [
    // day2 문장들...
  ],
};

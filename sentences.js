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
        hanzi: ['我', '去', '图书馆'],
        pinyin: ['wǒ', 'qù', 'túshūguǎn'],
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
        hanzi: ['我', '在', '学校', '学习'],
        pinyin: ['wǒ', 'zài', 'xuéxiào', 'xuéxí'],
      },
    },
  ],
};

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
      level: 3,
      isFinal: true,
      korean: '나는 등산하러 갈 예정이다.',
      chinese: {
        hanzi: ['我', '打算', '去', '爬山'],
        pinyin: ['wǒ', 'dǎsuàn', 'qù', 'páshān'],
      },
    },
    {
      id: 'sentence2',
      level: 3,
      isFinal: true,
      korean: '고마워요, 제가 혼자 할 수 있어요.',
      chinese: {
        hanzi: ['谢谢', '我', '自己', '可以'],
        pinyin: ['xièxie', 'wǒ', 'zìjǐ', 'kěyǐ'],
      },
    },
    {
      id: 'sentence3',
      level: 3,
      isFinal: true,
      korean: '저는 이게 더 좋은 것 같아요.',
      chinese: {
        hanzi: ['我', '觉得', '这个', '比较', '好'],
        pinyin: ['wǒ', 'juéde', 'zhège', 'bǐjiào', 'hǎo'],
      },
    },
    {
      id: 'sentence4',
      level: 3,
      isFinal: true,
      korean: '봤어요, 정말 너무 멋졌어요!',
      chinese: {
        hanzi: ['看了', '真是', '太', '精彩了'],
        pinyin: ['kànle', 'zhēnshì', 'tài', 'jīngcǎile'],
      },
    },
    {
      id: 'sentence5',
      level: 3,
      isFinal: true,
      korean: 'JD에서 샀어요. (=징둥)',
      chinese: {
        hanzi: ['在', '京东', '买的'],
        pinyin: ['zài', 'jīngdōng', 'mǎide'],
      },
    },
    {
      id: 'sentence6',
      level: 3,
      isFinal: true,
      korean: '없어요, 마시고 싶으면 사러 가야 해요.',
      chinese: {
        hanzi: ['没有了', '想', '喝的话', '得', '去', '买'],
        pinyin: ['méiyǒule', 'xiǎng', 'hēdehuà', 'děi', 'qù', 'mǎi'],
      },
    },
    {
      id: 'sentence7',
      level: 3,
      isFinal: true,
      korean: '정말 대단해요!',
      chinese: {
        hanzi: ['真', '厉害'],
        pinyin: ['zhēn', 'lìhài'],
      },
    },
    {
      id: 'sentence8',
      level: 3,
      isFinal: true,
      korean: '와, 다 맛있어 보여요.',
      chinese: {
        hanzi: ['哇', '看起来', '都', '很', '好吃'],
        pinyin: ['wa', 'kànqǐlái', 'dōu', 'hěn', 'hǎochī'],
      },
    },
    {
      id: 'sentence9',
      level: 3,
      isFinal: true,
      korean: '참가해요, 이미 신청했어요.',
      chinese: {
        hanzi: ['参加', '我', '已经', '报名了'],
        pinyin: ['cānjiā', 'wǒ', 'yǐjīng', 'bàomíngle'],
      },
    },
    {
      id: 'sentence10',
      level: 3,
      isFinal: true,
      korean: '고마워요, 그는 열심히 공부해요.',
      chinese: {
        hanzi: ['谢谢', '他', '学习', '很', '努力'],
        pinyin: ['xièxie', 'tā', 'xuéxí', 'hěn', 'nǔlì'],
      },
    },
  ],

  day2: [
    {
      id: 'sentence1',
      level: 3,
      isFinal: true,
      korean: '청소했어요, 지금 아주 깨끗해요.',
      chinese: {
        hanzi: ['打扫了', '现在', '很', '干净'],
        pinyin: ['dǎsǎole', 'xiànzài', 'hěn', 'gānjìng'],
      },
    },
    {
      id: 'sentence2',
      level: 3,
      isFinal: true,
      korean: '나는 여행 갈 예정이에요.',
      chinese: {
        hanzi: ['我', '打算', '去', '旅行'],
        pinyin: ['wǒ', 'dǎsuàn', 'qù', 'lǚxíng'],
      },
    },
    {
      id: 'sentence3',
      level: 3,
      isFinal: true,
      korean: '저는 지하철을 타고 가요.',
      chinese: {
        hanzi: ['我', '坐', '地铁', '去'],
        pinyin: ['wǒ', 'zuò', 'dìtiě', 'qù'],
      },
    },
    {
      id: 'sentence4',
      level: 3,
      isFinal: true,
      korean: '받았어요, 그런데 지금 일이 있어서 조금 있다가 답장할게요.',
      chinese: {
        hanzi: ['收到了', '但是', '我', '现在', '有事', '一会', '回', '你'],
        pinyin: [
          'shōudàole',
          'dànshì',
          'wǒ',
          'xiànzài',
          'yǒushì',
          'yīhuì',
          'huí',
          'nǐ',
        ],
      },
    },
    {
      id: 'sentence5',
      level: 3,
      isFinal: true,
      korean: '좋아요, 오랜만에 가는 거네요.',
      chinese: {
        hanzi: ['好啊', '我', '很久', '没去了'],
        pinyin: ['hǎoa', 'wǒ', 'hěnjiǔ', 'méiqùle'],
      },
    },
    {
      id: 'sentence6',
      level: 3,
      isFinal: true,
      korean: '네, 저는 매일 아침 조깅해요.',
      chinese: {
        hanzi: ['是的', '我', '每天', '早上', '跑步'],
        pinyin: ['shìde', 'wǒ', 'měitiān', 'zǎoshang', 'pǎobù'],
      },
    },
    {
      id: 'sentence7',
      level: 3,
      isFinal: true,
      korean: '아주 편리해요, 지하철역에서 가까워요.',
      chinese: {
        hanzi: ['很', '方便', '离', '地铁站', '很', '近'],
        pinyin: ['hěn', 'fāngbiàn', 'lí', 'dìtiězhàn', 'hěn', 'jìn'],
      },
    },
    {
      id: 'sentence8',
      level: 3,
      isFinal: true,
      korean: '있어요, 바로 앞에 있어요.',
      chinese: {
        hanzi: ['有', '就', '在', '前面'],
        pinyin: ['yǒu', 'jiù', 'zài', 'qiánmiàn'],
      },
    },
    {
      id: 'sentence9',
      level: 3,
      isFinal: true,
      korean: '감기에 걸려서 좀 불편해요.',
      chinese: {
        hanzi: ['我', '感冒了', '有点', '不舒服'],
        pinyin: ['wǒ', 'gǎnmàole', 'yǒudiǎn', 'bùshūfu'],
      },
    },
    {
      id: 'sentence10',
      level: 3,
      isFinal: true,
      korean: '좋아요, 날씨가 아주 좋아요.',
      chinese: {
        hanzi: ['好啊', '天气', '很', '好'],
        pinyin: ['hǎoa', 'tiānqì', 'hěn', 'hǎo'],
      },
    },
  ],

  day3: [
    {
      id: 'sentence1',
      level: 3,
      isFinal: true,
      korean: '응응, 우리 다 알아볼 수 있어요.',
      chinese: {
        hanzi: ['嗯嗯', '我们', '都', '看得出来'],
        pinyin: ['ènèn', 'wǒmen', 'dōu', 'kàndechūlái'],
      },
    },
    {
      id: 'sentence2',
      level: 3,
      isFinal: true,
      korean: '조금 무서워요.',
      chinese: {
        hanzi: ['有点', '害怕'],
        pinyin: ['yǒudiǎn', 'hàipà'],
      },
    },
    {
      id: 'sentence3',
      level: 3,
      isFinal: true,
      korean: '후회하지 않아요, 저는 아주 좋아해요.',
      chinese: {
        hanzi: ['不', '后悔', '我', '很', '喜欢'],
        pinyin: ['bù', 'hòuhuǐ', 'wǒ', 'hěn', 'xǐhuan'],
      },
    },
    {
      id: 'sentence4',
      level: 3,
      isFinal: true,
      korean: '맞아요, 아주 조용해요.',
      chinese: {
        hanzi: ['是啊', '很', '安静'],
        pinyin: ['shìa', 'hěn', 'ānjìng'],
      },
    },
    {
      id: 'sentence5',
      level: 3,
      isFinal: true,
      korean: '일어나서 몸을 좀 움직이세요.',
      chinese: {
        hanzi: ['起来', '活动', '活动'],
        pinyin: ['qǐlái', 'huódòng', 'huódòng'],
      },
    },
    {
      id: 'sentence6',
      level: 3,
      isFinal: true,
      korean: '맞아요, 저는 다 할 수 있어요.',
      chinese: {
        hanzi: ['是啊', '我', '都', '会', '做'],
        pinyin: ['shìa', 'wǒ', 'dōu', 'huì', 'zuò'],
      },
    },
    {
      id: 'sentence7',
      level: 3,
      isFinal: true,
      korean: '검사했어요, 문제없어요.',
      chinese: {
        hanzi: ['检查了', '没有', '问题'],
        pinyin: ['jiǎnchále', 'méiyǒu', 'wèntí'],
      },
    },
    {
      id: 'sentence8',
      level: 3,
      isFinal: true,
      korean: '맞아요, 건강이 제일 중요해요.',
      chinese: {
        hanzi: ['没错', '身体', '是', '革命', '的', '本钱'],
        pinyin: ['méicuò', 'shēntǐ', 'shì', 'gémìng', 'de', 'běnqián'],
      },
    },
    {
      id: 'sentence9',
      level: 3,
      isFinal: true,
      korean: '네, 저는 매번 긴장돼요.',
      chinese: {
        hanzi: ['会', '我', '每次', '都', '很', '紧张'],
        pinyin: ['huì', 'wǒ', 'měicì', 'dōu', 'hěn', 'jǐnzhāng'],
      },
    },
    {
      id: 'sentence10',
      level: 3,
      isFinal: true,
      korean: '맞아요, 출근할 때 지나가요.',
      chinese: {
        hanzi: ['对', '我', '上班', '的', '时候', '会', '路过'],
        pinyin: ['duì', 'wǒ', 'shàngbān', 'de', 'shíhou', 'huì', 'lùguò'],
      },
    },
  ],

  day4: [
    {
      id: 'sentence1',
      level: 3,
      isFinal: true,
      korean: '없어요, 나갔어요.',
      chinese: {
        hanzi: ['不在', '他', '出去了'],
        pinyin: ['bùzài', 'tā', 'chūqùle'],
      },
    },
    {
      id: 'sentence2',
      level: 3,
      isFinal: true,
      korean: '아이구, 고마워요!',
      chinese: {
        hanzi: ['哎呀', '谢谢'],
        pinyin: ['āiya', 'xièxie'],
      },
    },
    {
      id: 'sentence3',
      level: 3,
      isFinal: true,
      korean: '내일 아침이요.',
      chinese: {
        hanzi: ['明天', '早上'],
        pinyin: ['míngtiān', 'zǎoshang'],
      },
    },
    {
      id: 'sentence4',
      level: 3,
      isFinal: true,
      korean: '맞아요, 모두가 그를 좋아해요.',
      chinese: {
        hanzi: ['是啊', '大家', '都', '喜欢', '他'],
        pinyin: ['shìa', 'dàjiā', 'dōu', 'xǐhuan', 'tā'],
      },
    },
    {
      id: 'sentence5',
      level: 3,
      isFinal: true,
      korean: '관심 있어요, 저는 역사책을 자주 봐요.',
      chinese: {
        hanzi: ['感兴趣', '我', '经常', '看', '历史书'],
        pinyin: ['gǎnxìngqù', 'wǒ', 'jīngcháng', 'kàn', 'lìshǐshū'],
      },
    },
    {
      id: 'sentence6',
      level: 3,
      isFinal: true,
      korean: '없어요, 감사합니다.',
      chinese: {
        hanzi: ['没有了', '谢谢'],
        pinyin: ['méiyǒule', 'xièxie'],
      },
    },
    {
      id: 'sentence7',
      level: 3,
      isFinal: true,
      korean: '네, 저는 운남(윈난)에 갈 예정이에요.',
      chinese: {
        hanzi: ['是的', '我', '打算', '去', '云南'],
        pinyin: ['shìde', 'wǒ', 'dǎsuàn', 'qù', 'yúnnán'],
      },
    },
    {
      id: 'sentence8',
      level: 3,
      isFinal: true,
      korean: '욕실 안에 있어요.',
      chinese: {
        hanzi: ['在', '浴室', '里'],
        pinyin: ['zài', 'yùshì', 'lǐ'],
      },
    },
    {
      id: 'sentence9',
      level: 3,
      isFinal: true,
      korean: '저는 중국어를 배우러 왔어요.',
      chinese: {
        hanzi: ['我', '来', '学习', '中文'],
        pinyin: ['wǒ', 'lái', 'xuéxí', 'zhōngwén'],
      },
    },
    {
      id: 'sentence10',
      level: 3,
      isFinal: true,
      korean: '좋아요, 오랜만에 운동하네요.',
      chinese: {
        hanzi: ['好啊', '我', '很久', '没', '运动', '了'],
        pinyin: ['hǎoa', 'wǒ', 'hěnjiǔ', 'méi', 'yùndòng', 'le'],
      },
    },
  ],

  day5: [
    {
      id: 'sentence1',
      level: 3,
      isFinal: true,
      korean: '좋아해요, 특히 청록색을요.',
      chinese: {
        hanzi: ['喜欢', '特别是', '青色', '的'],
        pinyin: ['xǐhuan', 'tèbiéshì', 'qīngsè', 'de'],
      },
    },
    {
      id: 'sentence2',
      level: 3,
      isFinal: true,
      korean: '없어요, 감사합니다.',
      chinese: {
        hanzi: ['没有了', '谢谢'],
        pinyin: ['méiyǒule', 'xièxie'],
      },
    },
    {
      id: 'sentence3',
      level: 3,
      isFinal: true,
      korean: '맞아요, 그는 평소에는 이러지 않아요.',
      chinese: {
        hanzi: ['是啊', '他', '平时', '不', '这样'],
        pinyin: ['shìa', 'tā', 'píngshí', 'bù', 'zhèyàng'],
      },
    },
    {
      id: 'sentence4',
      level: 3,
      isFinal: true,
      korean: '알겠어요, 다시 한 번 설명할게요.',
      chinese: {
        hanzi: ['好的', '我', '再', '解释', '一遍'],
        pinyin: ['hǎode', 'wǒ', 'zài', 'jiěshì', 'yībiàn'],
      },
    },
    {
      id: 'sentence5',
      level: 3,
      isFinal: true,
      korean: '만약 비가 오면, 우리는 가지 않을 거예요.',
      chinese: {
        hanzi: ['如果', '下雨', '我们', '就', '不', '去', '了'],
        pinyin: ['rúguǒ', 'xiàyǔ', 'wǒmen', 'jiù', 'bù', 'qù', 'le'],
      },
    },
    {
      id: 'sentence6',
      level: 3,
      isFinal: true,
      korean: '그가 늦었기 때문이에요.',
      chinese: {
        hanzi: ['因为', '他', '迟到', '了'],
        pinyin: ['yīnwèi', 'tā', 'chídào', 'le'],
      },
    },
    {
      id: 'sentence7',
      level: 3,
      isFinal: true,
      korean: '가고 싶어요, 저는 여러 나라에 가고 싶어요.',
      chinese: {
        hanzi: ['想', '我', '想', '去', '很多', '国家'],
        pinyin: ['xiǎng', 'wǒ', 'xiǎng', 'qù', 'hěnduō', 'guójiā'],
      },
    },
    {
      id: 'sentence8',
      level: 3,
      isFinal: true,
      korean: '맞아요, 요리사가 정말 솜씨가 좋아요.',
      chinese: {
        hanzi: ['是啊', '厨师', '手艺', '真', '好'],
        pinyin: ['shìa', 'chúshī', 'shǒuyì', 'zhēn', 'hǎo'],
      },
    },
    {
      id: 'sentence9',
      level: 3,
      isFinal: true,
      korean: '동의해요, 당신 말이 맞는 것 같아요.',
      chinese: {
        hanzi: ['同意', '我', '觉得', '你', '说得', '对'],
        pinyin: ['tóngyì', 'wǒ', 'juéde', 'nǐ', 'shuōde', 'duì'],
      },
    },
    {
      id: 'sentence10',
      level: 3,
      isFinal: true,
      korean: '저는 건강이 가장 중요하다고 생각해요.',
      chinese: {
        hanzi: ['我', '觉得', '健康', '最', '重要'],
        pinyin: ['wǒ', 'juéde', 'jiànkāng', 'zuì', 'zhòngyào'],
      },
    },
  ],
};

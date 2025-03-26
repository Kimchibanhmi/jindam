document.addEventListener('DOMContentLoaded', function () {
  // 필요한 DOM 요소들
  const introPopup = document.getElementById('intro-popup');
  const startGameBtn = document.getElementById('start-game');
  const daySelection = document.getElementById('day-selection');
  const dayButtons = document.querySelector('.day-buttons');
  const gameArea = document.getElementById('game-area');
  const reviewPopup = document.getElementById('review-popup');
  const reviewSentences = document.getElementById('review-sentences');
  const finishReviewBtn = document.getElementById('finish-review');

  const koreanSentence = document.getElementById('korean-sentence');
  const availableCards = document.getElementById('available-cards');
  const placedCards = document.getElementById('placed-cards');
  const checkButton = document.getElementById('check-button');
  const nextButton = document.getElementById('next-button');
  const resultMessage = document.getElementById('result-message');
  const currentDaySpan = document.getElementById('current-day');
  const sentenceCountSpan = document.getElementById('sentence-count');
  const progressBar = document.querySelector('.progress');
  const timeLeft = document.getElementById('time-left');

  // 게임 상태 변수
  let currentDay = 1;
  let currentSentenceIndex = 0;
  let currentLevelIndex = 0;
  let currentSentences = [];
  let currentLevels = [];
  let completedSentences = 0;
  let timer;
  let timeRemaining = 20;
  let selectedCards = [];

  // Day 버튼 생성
  function createDayButtons() {
    for (let i = 1; i <= 10; i++) {
      const button = document.createElement('button');
      button.classList.add('day-button');
      button.textContent = `Day ${i}`;
      button.dataset.day = i;

      // Day 1만 활성화
      if (i > 1) {
        button.disabled = true;
      }

      button.addEventListener('click', function () {
        const day = parseInt(this.dataset.day);
        startDay(day);
      });

      dayButtons.appendChild(button);
    }
  }

  // 게임 시작
  function startDay(day) {
    currentDay = day;
    currentDaySpan.textContent = `Day ${day}`;

    // 현재 Day의 문장들 가져오기
    const dayKey = `day${day}`;
    if (sentenceData[dayKey]) {
      prepareSentences(sentenceData[dayKey]);
      daySelection.classList.add('hidden');
      gameArea.classList.remove('hidden');
      loadSentence();
    } else {
      alert('해당 Day의 데이터가 없습니다.');
    }
  }

  // 문장 준비
  function prepareSentences(sentences) {
    currentSentences = [];
    const sentenceMap = {};

    // 문장들을 ID로 그룹화
    sentences.forEach((sentence) => {
      if (!sentenceMap[sentence.id]) {
        sentenceMap[sentence.id] = [];
      }
      sentenceMap[sentence.id].push(sentence);
    });

    // ID 별로 레벨 순으로 정렬하여 currentSentences에 추가
    Object.keys(sentenceMap).forEach((id) => {
      const sentenceLevels = sentenceMap[id].sort((a, b) => a.level - b.level);
      currentSentences.push(sentenceLevels);
    });

    currentSentenceIndex = 0;
    currentLevelIndex = 0;
    completedSentences = 0;
    updateProgress();
  }

  // 문장 로드
  function loadSentence() {
    if (currentSentenceIndex < currentSentences.length) {
      currentLevels = currentSentences[currentSentenceIndex];

      if (currentLevelIndex < currentLevels.length) {
        const sentence = currentLevels[currentLevelIndex];
        koreanSentence.textContent = sentence.korean;
        sentenceCountSpan.textContent = `문장 ${currentSentenceIndex + 1}/${
          currentSentences.length
        }`;

        // 카드 생성
        createCards(sentence);

        // 타이머 시작
        resetTimer();
        startTimer();
      }
    } else {
      // 모든 문장 완료
      showReviewPopup();
    }
  }

  // 카드 생성
  function createCards(sentence) {
    // 기존 카드 제거
    availableCards.innerHTML = '';
    placedCards.innerHTML = '';
    selectedCards = [];

    // 카드 요소 생성하기
    const hanziArray = [...sentence.chinese.hanzi];
    const pinyinArray = [...sentence.chinese.pinyin];

    // 랜덤 섞기
    shuffleArray(hanziArray, pinyinArray);

    // 카드 생성
    hanziArray.forEach((hanzi, index) => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.dataset.index = index;

      const hanziSpan = document.createElement('span');
      hanziSpan.classList.add('hanzi');
      hanziSpan.textContent = hanzi;

      const pinyinSpan = document.createElement('span');
      pinyinSpan.classList.add('pinyin');
      pinyinSpan.textContent = pinyinArray[index];

      card.appendChild(hanziSpan);
      card.appendChild(pinyinSpan);

      // 카드 클릭 이벤트
      card.addEventListener('click', function () {
        const cardIndex = parseInt(this.dataset.index);
        if (this.parentElement === availableCards) {
          // 카드를 선택 영역으로 이동
          placedCards.appendChild(this);
          selectedCards.push({
            hanzi: hanzi,
            pinyin: pinyinArray[cardIndex],
            index: cardIndex,
          });
        } else {
          // 카드를 다시 사용 가능 영역으로 이동
          availableCards.appendChild(this);
          const selectedIndex = selectedCards.findIndex(
            (card) => card.index === cardIndex
          );
          if (selectedIndex !== -1) {
            selectedCards.splice(selectedIndex, 1);
          }
        }
      });

      availableCards.appendChild(card);
    });
  }

  // 배열 섞기 (병음과 한자를 함께 섞음)
  function shuffleArray(hanziArray, pinyinArray) {
    for (let i = hanziArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [hanziArray[i], hanziArray[j]] = [hanziArray[j], hanziArray[i]];
      [pinyinArray[i], pinyinArray[j]] = [pinyinArray[j], pinyinArray[i]];
    }
  }

  // 타이머 시작
  function startTimer() {
    timeRemaining = 20;
    timeLeft.textContent = timeRemaining;

    timer = setInterval(function () {
      timeRemaining--;
      timeLeft.textContent = timeRemaining;

      if (timeRemaining <= 0) {
        clearInterval(timer);
        // 시간 초과 시 현재 레벨 다시 시작
        resetCurrentLevel();
      }
    }, 1000);
  }

  // 타이머 초기화
  function resetTimer() {
    clearInterval(timer);
    timeRemaining = 20;
    timeLeft.textContent = timeRemaining;
  }

  // 현재 레벨 다시 시작
  function resetCurrentLevel() {
    const sentence = currentLevels[currentLevelIndex];
    createCards(sentence);
    resetTimer();
    startTimer();
  }

  // 정답 확인
  function checkAnswer() {
    const sentence = currentLevels[currentLevelIndex];
    const correctHanzi = sentence.chinese.hanzi;

    // 선택한 카드 한자 배열
    const selectedHanzi = selectedCards.map((card) => card.hanzi);

    // 정답 확인
    if (arraysEqual(selectedHanzi, correctHanzi)) {
      clearInterval(timer);
      resultMessage.classList.remove('hidden');
      checkButton.classList.add('hidden');
      nextButton.classList.remove('hidden');

      // 현재 레벨이 최종 레벨인지 확인
      if (sentence.isFinal) {
        completedSentences++;
        updateProgress();
      }
    } else {
      alert('틀렸습니다. 다시 시도해보세요.');
      resetCurrentLevel();
    }
  }

  // 배열 비교
  function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) return false;
    }
    return true;
  }

  // 다음 문제로
  function nextQuestion() {
    resultMessage.classList.add('hidden');
    checkButton.classList.remove('hidden');
    nextButton.classList.add('hidden');

    // 다음 레벨 또는 다음 문장으로
    if (currentLevelIndex < currentLevels.length - 1) {
      currentLevelIndex++;
      loadSentence();
    } else {
      currentLevelIndex = 0;
      currentSentenceIndex++;
      loadSentence();
    }
  }

  // 진행 상황 업데이트
  function updateProgress() {
    const percent = (completedSentences / currentSentences.length) * 100;
    progressBar.style.width = `${percent}%`;
  }

  // 복습 팝업 표시
  function showReviewPopup() {
    gameArea.classList.add('hidden');
    reviewPopup.classList.remove('hidden');

    // 복습할 문장 추가
    reviewSentences.innerHTML = '';

    currentSentences.forEach((sentenceLevels, index) => {
      // 최종 레벨 문장만 가져오기
      const finalSentence = sentenceLevels.find((level) => level.isFinal);

      if (finalSentence) {
        const reviewItem = document.createElement('div');
        reviewItem.classList.add('review-item');

        const chineseText = document.createElement('div');
        chineseText.classList.add('chinese');
        chineseText.textContent = finalSentence.chinese.hanzi.join('');

        const koreanText = document.createElement('div');
        koreanText.textContent = finalSentence.korean;

        reviewItem.appendChild(chineseText);
        reviewItem.appendChild(koreanText);
        reviewSentences.appendChild(reviewItem);
      }
    });
  }

  // 이벤트 리스너 설정
  startGameBtn.addEventListener('click', function () {
    introPopup.classList.add('hidden');
    daySelection.classList.remove('hidden');
  });

  checkButton.addEventListener('click', checkAnswer);
  nextButton.addEventListener('click', nextQuestion);

  finishReviewBtn.addEventListener('click', function () {
    reviewPopup.classList.add('hidden');
    daySelection.classList.remove('hidden');

    // 다음 Day 활성화 (실제로는 다음날 자정에 활성화해야 함)
    // 여기서는 데모를 위해 바로 활성화
    if (currentDay < 10) {
      const nextDayBtn = document.querySelector(
        `.day-button[data-day="${currentDay + 1}"]`
      );
      if (nextDayBtn) {
        nextDayBtn.disabled = false;
      }
    }
  });

  // 게임 초기화
  createDayButtons();
});

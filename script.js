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
    // 이미 실행 중인 타이머가 있으면 초기화
    if (timer !== null) {
      clearInterval(timer);
    }

    timeRemaining = 20;
    timeLeft.textContent = timeRemaining;

    timer = setInterval(function () {
      timeRemaining--;
      timeLeft.textContent = timeRemaining;

      if (timeRemaining <= 0) {
        clearInterval(timer);
        timer = null; // 타이머 변수 초기화

        // 정답 확인 중이거나 다음 문제 버튼이 보이면 타이머 동작 중지
        if (!nextButton.classList.contains('hidden')) {
          return; // 아무 작업도 하지 않음
        }

        // 시간 초과 시 현재 레벨 다시 시작
        resetCurrentLevel();
      }
    }, 1000);
  }

  // 타이머 초기화
  function resetTimer() {
    if (timer !== null) {
      clearInterval(timer);
      timer = null;
    }
    timeRemaining = 20;
    timeLeft.textContent = timeRemaining;
  }

  // 현재 레벨 다시 시작
  function resetCurrentLevel() {
    // 다음 문제 버튼이 표시되어 있으면 리셋하지 않음
    if (!nextButton.classList.contains('hidden')) {
      return;
    }

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
      // 정답일 경우 - 메시지 없이 바로 다음으로 진행
      clearInterval(timer); // 타이머 중지

      // 현재 레벨이 최종 레벨인지 확인
      if (sentence.isFinal) {
        completedSentences++;
      }

      // 다음 단계 또는 다음 문장으로 진행
      if (currentLevelIndex < currentLevels.length - 1) {
        currentLevelIndex++;
        loadSentence();
      } else {
        currentLevelIndex = 0;
        currentSentenceIndex++;
        loadSentence();
      }
    } else {
      // 오답일 경우 - 메시지 없이 화면만 흔들림
      const gameArea = document.getElementById('game-area');
      gameArea.classList.add('shake');

      // 애니메이션 종료 후 클래스 제거
      setTimeout(function () {
        gameArea.classList.remove('shake');
        resetCurrentLevel(); // 현재 레벨 리셋
      }, 800); // 0.8초 후 제거 (애니메이션 길이와 맞춤)
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

    // 복습할 문장 추가
    reviewSentences.innerHTML = '';

    currentSentences.forEach((sentenceLevels, index) => {
      // 최종 레벨 문장만 가져오기
      const finalSentence = sentenceLevels.find((level) => level.isFinal);

      if (finalSentence) {
        const reviewItem = document.createElement('div');
        reviewItem.classList.add('review-item');

        // 한자 텍스트
        const chineseText = document.createElement('div');
        chineseText.classList.add('chinese');
        chineseText.textContent = finalSentence.chinese.hanzi.join('');

        // 병음 텍스트 추가
        const pinyinText = document.createElement('div');
        pinyinText.classList.add('pinyin');
        pinyinText.textContent = finalSentence.chinese.pinyin.join(' ');

        // 한국어 텍스트
        const koreanText = document.createElement('div');
        koreanText.classList.add('korean');
        koreanText.textContent = finalSentence.korean;

        // 요소 추가
        reviewItem.appendChild(chineseText);
        reviewItem.appendChild(pinyinText); // 병음 요소 추가
        reviewItem.appendChild(koreanText);

        reviewSentences.appendChild(reviewItem);
      }
    });

    reviewPopup.classList.remove('hidden');
  }

  // 이벤트 리스너 설정
  startGameBtn.addEventListener('click', function () {
    introPopup.classList.add('hidden');
    daySelection.classList.remove('hidden');
  });

  checkButton.addEventListener('click', checkAnswer);
  nextButton.addEventListener('click', nextQuestion);

  finishReviewBtn.addEventListener('click', function () {
    // Day 완료 기록
    completeDay(currentDay);

    // 복습 팝업 숨기고 Day 선택 화면 표시
    reviewPopup.classList.add('hidden');
    daySelection.classList.remove('hidden');

    // Day 버튼 상태 업데이트
    updateAllDayButtons();
  });

  // 날짜 유틸리티 함수
  function getTodayDateString() {
    const now = new Date();
    return `${now.getFullYear()}-${(now.getMonth() + 1).toString().padStart(2, '0')}-${now.getDate().toString().padStart(2, '0')}`;
  }

  function getTomorrowMidnight() {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    return tomorrow;
  }

  // Day 해금 상태 관리 함수들
  function unlockDay(day) {
    // 이미 해금된 Day는 다시 확인하지 않음
    if (isDayUnlocked(day)) {
      return;
    }

    // Day 해금 상태 로컬 스토리지에 저장
    localStorage.setItem(`jindam_day${day}_unlocked`, 'true');
    console.log(`Day ${day} 영구 해금됨`);

    // Day 버튼 활성화
    updateDayButtonState(day);
  }

  function isDayUnlocked(day) {
    // Day 1은 항상 해금됨
    if (day === 1) return true;

    // 로컬 스토리지에서 해금 상태 확인
    return localStorage.getItem(`jindam_day${day}_unlocked`) === 'true';
  }

  function updateDayButtonState(day) {
    const dayButton = document.querySelector(`.day-button[data-day="${day}"]`);
    if (dayButton) {
      const isUnlocked = isDayUnlocked(day);
      dayButton.disabled = !isUnlocked;

      if (isUnlocked) {
        console.log(`Day ${day} 버튼 활성화됨`);
      }
    }
  }

  function updateAllDayButtons() {
    for (let i = 1; i <= 10; i++) {
      updateDayButtonState(i);
    }
  }

  // Day 완료 처리 수정
  function completeDay(day) {
    // 현재 Day 완료 기록
    const completionData = {
      day: day,
      completedAt: new Date().toISOString(),
      nextDayAvailableAt: getTomorrowMidnight().toISOString(),
    };

    localStorage.setItem(
      `jindam_day${day}_completed`,
      JSON.stringify(completionData)
    );
    console.log(`Day ${day} 완료 저장됨`);

    // 중요: 다음 Day 해금 (다음날 자정에 활성화됨)
    checkAndUnlockNextDay(day);
  }

  // 다음 Day 자정 체크 및 해금
  function checkAndUnlockNextDay(completedDay) {
    if (completedDay >= 10) return; // Day 10이 마지막

    const nextDay = completedDay + 1;

    // 이미 해금되었으면 체크 불필요
    if (isDayUnlocked(nextDay)) {
      return;
    }

    const completionDataStr = localStorage.getItem(
      `jindam_day${completedDay}_completed`
    );
    if (!completionDataStr) return;

    const completionData = JSON.parse(completionDataStr);
    const nextDayAvailableAt = new Date(completionData.nextDayAvailableAt);
    const now = new Date();

    // 다음날 자정이 지났으면 해금
    if (now >= nextDayAvailableAt) {
      unlockDay(nextDay);
    } else {
      // 자정까지 대기 설정
      const timeToWait = nextDayAvailableAt.getTime() - now.getTime();
      console.log(
        `Day ${nextDay} 해금까지 ${Math.floor(
          timeToWait / (1000 * 60 * 60)
        )}시간 ${Math.floor(
          (timeToWait % (1000 * 60 * 60)) / (1000 * 60)
        )}분 남음`
      );

      // 자정에 체크하도록 타이머 설정 (실제 앱에서는 더 복잡한 방식으로 구현해야 함)
      setTimeout(function () {
        unlockDay(nextDay);
        updateAllDayButtons();
      }, timeToWait);
    }
  }

  // 게임 초기화
  createDayButtons();

  // 현재 시간 체크하여 해금 가능한 Day 확인
  for (let i = 1; i < 10; i++) {
    if (isDayUnlocked(i)) {
      // 이미 해금된 Day의 다음 Day도 조건 충족 시 해금
      checkAndUnlockNextDay(i);
    }
  }

  // 모든 Day 버튼 상태 업데이트
  updateAllDayButtons();

  // 결과 메시지 요소 항상 숨김 처리
  if (resultMessage) {
    resultMessage.classList.add('hidden');
    // 메시지 요소 참조 제거하거나 비활성화
    resultMessage.style.display = 'none';
  }
});

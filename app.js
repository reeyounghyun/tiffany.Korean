document.addEventListener("DOMContentLoaded", function() {
  const navbar = document.getElementById("navbar");
  const logo = document.getElementById("logo");

  if (!navbar || !logo) {
    console.error('Navbar or logo element not found');
    return;
  }

  function handleScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 50) {
      navbar.classList.add('scrolled');
      logo.classList.add('hidden');
    } else {
      navbar.classList.remove('scrolled');
      logo.classList.remove('hidden');
    }
  }

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // Initialize on page load
});
//handleScroll end

// productSlider stert 슬라이드
document.addEventListener('DOMContentLoaded', () => {
  const nextBtn = document.getElementById('nextBtn');
  const prevBtn = document.getElementById('prevBtn');
  const slider = document.getElementById('slider');
  const paginationLineFill = document.querySelector('.pagination-line-fill');
  const slides = slider.children;
  const slidesToShow = 5;
  let currentIndex = slidesToShow;
  let autoplayInterval;
  
  const totalSlides = slides.length;

  // 클론 슬라이드 추가
  function cloneSlides() {
    const originalSlides = Array.from(slides).slice(0, totalSlides); // 클론을 제외한 원본 슬라이드만 처리
    for (let i = 0; i < slidesToShow; i++) {
      const firstClone = originalSlides[i].cloneNode(true);
      firstClone.classList.add('clone');
      slider.appendChild(firstClone);
  
      const lastClone = originalSlides[totalSlides - 1 - i].cloneNode(true);
      lastClone.classList.add('clone');
      slider.insertBefore(lastClone, slider.firstChild);
    }
  }
  

  // 슬라이더 초기 위치 설정
  function setInitialPosition() {
    const slideWidth = 100 / slidesToShow;
    slider.style.transform = `translateX(-${currentIndex * slideWidth}%)`;
  }

  // 페이지네이션 업데이트
  function updatePagination() {
    let actualIndex = currentIndex - slidesToShow;
    if (actualIndex >= totalSlides) actualIndex = 0; // 클론을 넘어간 경우 다시 처음으로
    if (actualIndex < 0) actualIndex = totalSlides - 1; // 클론을 넘어간 경우 마지막 슬라이드로
    const percentage = (actualIndex / (totalSlides - 1)) * 100; // 슬라이드 수를 기반으로 백분율 계산
    paginationLineFill.style.width = `${percentage}%`;
  }
  

  // 슬라이더 위치 업데이트
  function updateSliderPosition(animate = true) {
    if (!animate) {
      slider.style.transition = 'none';
    } else {
      slider.style.transition = 'transform 1s ease-in-out';
    }

    const slideWidth = 100 / slidesToShow;
    slider.style.transform = `translateX(-${currentIndex * slideWidth}%)`;
    updatePagination();
  }

  // 다음 슬라이드로 이동
  function moveToNextSlide() {
    currentIndex++;
    updateSliderPosition();
  }

  // 이전 슬라이드로 이동
  function moveToPrevSlide() {
    currentIndex--;
    updateSliderPosition();
  }

  // 슬라이더 전환 완료 후 위치 조정
  function handleTransitionEnd() {
    // 현재 슬라이드 인덱스가 총 슬라이드 수를 넘었을 때
    if (currentIndex >= totalSlides + slidesToShow) {
      currentIndex = slidesToShow;
      updateSliderPosition(false); // 애니메이션 없이 바로 위치 조정
    }
    
    // 현재 슬라이드 인덱스가 0보다 작을 때 (이전 슬라이드로 돌아갈 때)
    if (currentIndex < slidesToShow) {
      currentIndex = totalSlides + slidesToShow - 1;
      updateSliderPosition(false); // 애니메이션 없이 바로 위치 조정
    }
  }
  

  // 자동 재생 시작
  function startAutoplay() {
    autoplayInterval = setInterval(moveToNextSlide, 5000);
  }

  // 자동 재생 중지
  function stopAutoplay() {
    clearInterval(autoplayInterval);
  }

  // 이벤트 리스너 등록
  function addEventListeners() {
    nextBtn.addEventListener('click', () => {
      moveToNextSlide();
      stopAutoplay();
      setTimeout(startAutoplay, 5000);
    });

    prevBtn.addEventListener('click', () => {
      moveToPrevSlide();
      stopAutoplay();
      setTimeout(startAutoplay, 5000);
    });

    slider.addEventListener('transitionend', handleTransitionEnd);
  }

  // 초기화 함수
  function init() {
    cloneSlides();
    setInitialPosition();
    updateSliderPosition();
    addEventListeners();
    startAutoplay();
  }

  init();
});


// productItemSlider 슬라이드2
document.addEventListener('DOMContentLoaded', () => {
  const nextBtn = document.getElementById('nextItemBtn');
  const prevBtn = document.getElementById('prevItemBtn');
  const slider = document.getElementById('sliItemder'); // HTML의 ID와 일치
  const slides = slider.children;
  const slidesToShow = 3; // 동시에 3개의 슬라이드를 표시
  let currentIndex = slidesToShow;
  let autoplayInterval;
  
  const totalSlides = slides.length;

  // 클론 슬라이드 추가
  function cloneSlides() {
    const originalSlides = Array.from(slides).slice(0, totalSlides); // 클론을 제외한 원본 슬라이드만
    for (let i = 0; i < slidesToShow; i++) {
      const firstClone = originalSlides[i].cloneNode(true);
      firstClone.classList.add('clone');
      slider.appendChild(firstClone);
  
      const lastClone = originalSlides[totalSlides - 1 - i].cloneNode(true);
      lastClone.classList.add('clone');
      slider.insertBefore(lastClone, slider.firstChild);
    }
  }

  // 슬라이더 초기 위치 설정
  function setInitialPosition() {
    const slideWidth = 100 / slidesToShow; // 슬라이드의 너비 계산
    slider.style.transform = `translateX(-${currentIndex * slideWidth}%)`;
  }

  // 페이지 인디케이터 요소 선택 (선택 사항)
  const paginationDots = document.querySelectorAll('.pagination-dots .dot');

  // 페이지네이션 업데이트 (선택 사항)
  function updatePagination() {
    let actualIndex = currentIndex - slidesToShow;
    if (actualIndex >= totalSlides) actualIndex = 0;
    if (actualIndex < 0) actualIndex = totalSlides - 1;
    
    // 모든 점을 비활성화
    paginationDots.forEach(dot => dot.classList.remove('active'));
    
    // 현재 점 활성화
    if (paginationDots[actualIndex]) {
      paginationDots[actualIndex].classList.add('active');
    }
  }

  // 슬라이더 위치 업데이트 (애니메이션 적용 여부 선택)
  function updateSliderPosition(animate = true) {
    if (!animate) {
      slider.style.transition = 'none';
    } else {
      slider.style.transition = 'transform 1s ease-in-out';
    }

    const slideWidth = 100 / slidesToShow;
    slider.style.transform = `translateX(-${currentIndex * slideWidth}%)`;
    updatePagination();
  }

  // 슬라이드를 다음으로 이동
  function moveToNextSlide() {
    if (currentIndex >= totalSlides + slidesToShow) return;
    currentIndex++;
    updateSliderPosition();
  }

  // 슬라이드를 이전으로 이동
  function moveToPrevSlide() {
    if (currentIndex <= 0) return;
    currentIndex--;
    updateSliderPosition();
  }

  // 슬라이더 전환 완료 후 위치 조정
  function handleTransitionEnd() {
    if (currentIndex >= totalSlides + slidesToShow) {
      currentIndex = slidesToShow;
      updateSliderPosition(false); // 애니메이션 없이 위치 조정
    }
    
    if (currentIndex < slidesToShow) {
      currentIndex = totalSlides + slidesToShow - 1;
      updateSliderPosition(false); // 애니메이션 없이 위치 조정
    }
  }

  // 자동 재생 시작
  function startAutoplay() {
    autoplayInterval = setInterval(() => {
      moveToNextSlide();
    }, 5000); // 5초 간격
  }

  // 자동 재생 중지
  function stopAutoplay() {
    clearInterval(autoplayInterval);
  }

  // 이벤트 리스너 등록
  function addEventListeners() {
    nextBtn.addEventListener('click', () => {
      moveToNextSlide();
      stopAutoplay();
      setTimeout(startAutoplay, 5000);
    });

    prevBtn.addEventListener('click', () => {
      moveToPrevSlide();
      stopAutoplay();
      setTimeout(startAutoplay, 5000);
    });

    slider.addEventListener('transitionend', handleTransitionEnd);
  }

  // 초기화 함수
  function init() {
    cloneSlides();
    setInitialPosition();
    updateSliderPosition();
    addEventListeners();
    startAutoplay();
  }

  init();
});
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

// productSlider start 슬라이드
document.addEventListener('DOMContentLoaded', () => {
  // 슬라이더 1 초기화 함수
  function initSlider1() {
    const nextBtn = document.getElementById('nextBtn'); // HTML의 ID와 일치시킴
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
      const originalSlides = Array.from(slides).slice(0, totalSlides);
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
      if (actualIndex >= totalSlides) actualIndex = 0;
      if (actualIndex < 0) actualIndex = totalSlides - 1;
      const percentage = (actualIndex / (totalSlides - 1)) * 100;
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
      if (currentIndex >= totalSlides + slidesToShow) {
        currentIndex = slidesToShow;
        updateSliderPosition(false);
      }
      if (currentIndex < slidesToShow) {
        currentIndex = totalSlides + slidesToShow - 1;
        updateSliderPosition(false);
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

    init(); // 슬라이더 1 초기화
  }

  // 슬라이더 2 초기화 함수
  function initSlider2() {
    const nextBtn = document.getElementById('nextBtn2'); // 슬라이더 2의 고유한 ID
    const prevBtn = document.getElementById('prevBtn2');
    const slider = document.getElementById('slider2');
    const slides = slider.children;
    const slidesToShow = 1; // 한 번에 보여줄 슬라이드 수를 1로 설정
    let currentIndex = slidesToShow;
    let autoplayInterval;

    const totalSlides = slides.length;

    // 클론 슬라이드 추가
    function cloneSlides() {
      const originalSlides = Array.from(slides).slice(0, totalSlides);
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

    // 슬라이더 위치 업데이트
    function updateSliderPosition(animate = true) {
      if (!animate) {
        slider.style.transition = 'none';
      } else {
        slider.style.transition = 'transform 1s ease-in-out';
      }
      const slideWidth = 100 / slidesToShow;
      slider.style.transform = `translateX(-${currentIndex * slideWidth}%)`;
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
      if (currentIndex >= totalSlides + slidesToShow) {
        currentIndex = slidesToShow;
        updateSliderPosition(false);
      }
      if (currentIndex < slidesToShow) {
        currentIndex = totalSlides + slidesToShow - 1;
        updateSliderPosition(false);
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

    init(); // 슬라이더 2 초기화
  }

  // 슬라이더 초기화 함수 호출
  initSlider1();
  initSlider2();
});

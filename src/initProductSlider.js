function initProductSlider() {
  var swiper = new Swiper(".productItemSlider2", {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 45,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".nextItemBtn",
      prevEl: ".prevItemBtn",
    },
  });
}
initProductSlider(); // 슬라이더 초기화 호출
let lastScrollTop = 0; // 이전 스크롤 위치를 저장할 변수

window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  const logo = document.getElementById("logo");
  const menu = document.getElementById("menu");
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // 스크롤을 내릴 때 (메뉴 숨기기, 로고 숨기기)
    navbar.classList.remove("bg-white", "shadow-lg");
    logo.style.display = "none"; // 로고 숨기기
    menu.classList.add("hidden"); // 메뉴 숨기기
  } else {
    // 스크롤을 올릴 때 (메뉴 보이기, 로고는 숨기기)
    navbar.classList.add("bg-white", "shadow-lg");
    logo.style.display = "none"; // 로고는 계속 숨기기
    menu.classList.remove("hidden"); // 메뉴 보이기
  }

  lastScrollTop = scrollTop; // 현재 스크롤 위치를 저장
});

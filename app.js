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

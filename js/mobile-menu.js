(() => {
  const refs = {
    openMenuBtn: document.querySelector(".menu__open-btn"),
    closeMenuBtn: document.querySelector(".menu__close-btn"),
    menu: document.querySelector(".mob-menu"),
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle("is-hidden");
  }
})();

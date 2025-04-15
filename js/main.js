new Swiper('.swiper', {
  navigation: {
    prevEl: '.custom-prev',
    nextEl: '.custom-next',
  },
  centeredSlides: true,
  initialSlide: 1,
  loop: true,
  breakpoints: {
    900: {
      slidesPerView: 2.18,
      centeredSlides: false,
    },
    700: {
      slidesPerView: 2,
    },
    600: {
      slidesPerView: 'auto',
    },
  },
});

const burgerMenu = document.querySelector('.burger-menu');
const dropDown = document.querySelector('.dropdown-menu');
const menuImg = document.querySelector('.burger-menu-img');

burgerMenu.addEventListener('click', () => {
  dropDown.classList.toggle('active');
  burgerMenu.classList.toggle('active');
})
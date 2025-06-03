import Swiper from 'swiper';
import 'swiper/css/bundle';

let charactersSwiper;

charactersSwiper = new Swiper('.characters-swiper-container', {
  direction: 'horizontal',
  loop: false,
  grabCursor: true,
  slidesPerView: 1,
  initialSlide: 0,
  spaceBetween: 20,
  grabCursor: true,
  allowTouchMove: true,
  speed: 500,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    1440: {
      slidesPerView: 4,
      grabCursor: false,
      disableOnInteraction: true,
    },
  },
  on: {
    init: () => {
      document
        .querySelector('.characters-swiper-container')
        .classList.add('show');
    },
  },
});

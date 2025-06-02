import Swiper from 'swiper';
import 'swiper/css/bundle';

const charactersLeftArrow = document.getElementById('charactersLeftArrow');
const charactersRightArrow = document.getElementById('charactersRightArrow');

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
    },
  },
  on: {
    init: () => {
      document
        .querySelector('.characters-swiper-container')
        .classList.add('show');
    },
    slideChange: function () {
      updateCharactersArrows(this);
    },
  },
});

updateCharactersArrows(charactersSwiper);

function updateCharactersArrows(swiper) {
  charactersLeftArrow.disabled = swiper.isBeginning;
  charactersRightArrow.disabled = swiper.isEnd;
}

charactersLeftArrow.addEventListener('click', () => {
  charactersSwiper.slidePrev();
});

charactersRightArrow.addEventListener('click', () => {
  charactersSwiper.slideNext();
});

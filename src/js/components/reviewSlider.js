import Swiper, { Navigation, Pagination } from 'swiper';
import _vars from "../_vars";

Swiper.use([Navigation, Pagination]);

if(window.innerWidth < 769) {
  _vars.reviewSlider.classList.add('swiper');
  _vars.reviewSlider.querySelector('.review__cards-wrapper').classList.add('swiper-wrapper');
  _vars.reviewSlider.querySelectorAll('.review__card').forEach(el=>{el.classList.add('swiper-slide')});

  const swiper = new Swiper(_vars.reviewSlider, {
    slidesPerView: '2',
    spaceBetween: 20,

    breakpoints: {
      520: {
        slidesPerView: '2',
        spaceBetween: 20,
      },
      320: {
        slidesPerView: '1',
      }
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
  });
} else {
  _vars.reviewSlider.classList.remove('swiper');
  _vars.reviewSlider.querySelector('.review__cards-wrapper').classList.remove('swiper-wrapper');
  _vars.reviewSlider.querySelectorAll('.review__card').forEach(el=>{el.classList.remove('swiper-slide')});
}

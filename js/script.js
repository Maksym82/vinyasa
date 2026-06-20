document.addEventListener(
  'DOMContentLoaded',
  function () {
    const swiperBanner = new Swiper('.swiper-banner', {
      speed: 700,
      spaceBetween: 10,
      navigation: {
        prevEl: '.swiper-banner .swiper-button-prev',
        nextEl: '.swiper-banner .swiper-button-next',
      },
      pagination: {
        el: '.swiper-banner .swiper-pagination',
        clickable: true,
      },
    });
  },
  false,
);

document.addEventListener(
  'DOMContentLoaded',
  function () {
    // Banner START
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
    // Banner END

    // Gallery START

    // init Masonry
    var $grid = $('.grid').masonry({
      itemSelector: '.grid-item',
      columnWidth: '.grid-sizer',
      percentPosition: true,
      gutter: 20,
    });
    $grid.imagesLoaded().progress(function () {
      $grid.masonry('layout');
    });
    $('.magnific-image').magnificPopup({
      type: 'image',
      mainClass: 'mfp-with-zoom',
      zoom: {
        enabled: true,

        duration: 500,
        easing: 'ease-in-out',

        opener: function (openerElement) {
          return openerElement.is('img')
            ? openerElement
            : openerElement.find('img');
        },
      },
    });
    // Gallery END
  },
  false,
);

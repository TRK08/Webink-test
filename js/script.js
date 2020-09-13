new WOW().init();

// var mySwiper = new Swiper('.swiper-container', {
//   // Optional parameters
//   slidesPerView: 2,
//   direction: 'horizontal',
//   loop: true,

//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },

// })

// let mySwiper = new Swiper('.swiper-container', {
//   slidesPerView: 2,
//   spaceBetwen: 30,
//   loop: true,
//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },

// })

var swiper = new Swiper('.swiper-container', {
  slidesPerView: 2,
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    991: {
      slidesPerView: 2,
      spaceBetwen: 0,
    }
  }
});



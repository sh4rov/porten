const swiperParams = {
  slidesPerView: 1,
  loop: true,

  // autoplay: {
  //   delay: 3000,
  // },

  breakpoints: {
    540: {
      slidesPerView: 2,
      loop: true,
    },

    700: {
      slidesPerView: 2,
      loop: true,
    },

    768: {
      slidesPerView: 3,
      loop: true,
    },

    1200: {
      slidesPerView: 3,
      loop: true,
    }
  }
}

const mySwiper = new Swiper('.swiper-container', swiperParams)
(() => {

const swiperParams = {
  slidesPerView: 1,
  loop: true,

  autoplay: {
    delay: 3000,
  },

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

const menuIcon = document.querySelector('.js-menu-icon')
const menuClose = document.querySelector('.js-close-icon')
const body = document.body

menuIcon.addEventListener('click', () => {
  menuIcon.classList.add('is-active')
  body.classList.add('lock')
})

menuClose.addEventListener('click', () => {
  menuIcon.classList.remove('is-active')
  body.classList.remove('lock')
} )


const header = document.querySelector('.header')
const hideHeader = 'header_hide'
const lastScrollTop = 0


// удаляем модификатор .header_hide
function delHideClass() {
  header.classList.remove(hideHeader)
}

// Скрываем часть хедера.
function hiddenTopLine() {
  let scrollTop = window.scrollY = document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    header.classList.add(hideHeader)
  } else {
    delHideClass()
  }
}

// Если ширина окна больше 480px, то выполняем функцию hiddenTopLine
function handleEvent() {
  if (window.innerWidth > 480) {
    hiddenTopLine()
  }
  else if(window.innerWidth < 481) {
    delHideClass()
  }
}

// При скроле выполняем функцию handleEvent
window.addEventListener('scroll', handleEvent)

})()
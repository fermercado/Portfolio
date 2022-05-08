function headerScroll () {
  const headerCont = document.querySelector('.header-container')
const headerImg = document.querySelector('.header-img')
const buttonTop = document.querySelector('.button-top')
const bodyBorder = document.querySelector('body')
const menuNav = document.querySelectorAll('.menu-nav')
const buttonHamburguer = document.querySelector('#hamburguer-button')
const animationScrollNav = 'activeNav'



  const windowTop = window.pageYOffset
  if(windowTop > 1) {
    
    bodyBorder.classList.add(animationScrollNav)
    buttonTop.classList.add(animationScrollNav)
    headerImg.classList.add(animationScrollNav)
    headerCont.classList.add(animationScrollNav)
    buttonHamburguer.classList.add(animationScrollNav)

    menuNav.forEach((menu)=> {
      menu.classList.add(animationScrollNav)
    })

  
  
}  else {

  bodyBorder.classList.remove(animationScrollNav)
  buttonTop.classList.remove(animationScrollNav)
  headerImg.classList.remove(animationScrollNav)
  headerCont.classList.remove(animationScrollNav)
  buttonHamburguer.classList.remove(animationScrollNav)
  menuNav.forEach((menu)=> {
    menu.classList.remove(animationScrollNav)
  })
}}


function initAnimationScroll() {
  const sections = document.querySelectorAll('.js-scroll')

  if (sections.length) {
    const windowMetade = window.innerHeight * 0.7
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top
        const isSectionVisible = sectionTop - windowMetade < 0
        if (isSectionVisible) {
          section.classList.add('activeScroll')

        }else {
             section.classList.remove('activeScroll')
        } 
        
      })
    }
  }
 

  window.addEventListener('scroll', function() {
    headerScroll()
    initAnimationScroll()
  })

const menuItens = document.querySelectorAll('.header-nav a')
menuItens.forEach(item => {
  item.addEventListener('click', scrollClick)
})

function scrollClick(event) {
  event.preventDefault()
  const element = event.target
  const id = element.getAttribute('href')
  const section = document.querySelector(id).offsetTop;

  window.scroll({
    top: section - 80,
    behavior: 'smooth'
  })



}

function buttonHamburguer () {
  const btnMobile = document.querySelector('#btn-mobile')
  btnMobile.addEventListener('click', () => {
    const menu = document.querySelector('.header-container')
    const body = document.querySelector('body')
    const headerImg = document.querySelector('.header-img')
    const buttonTop = document.querySelector('.button-top')
    const menuNav = document.querySelectorAll('.menu-nav')
    const separator = document.querySelectorAll('.separator')

    menu.classList.toggle('mobileMenu')
    buttonTop.classList.toggle('mobileMenu')
    body.classList.toggle('mobileMenu')
    headerImg.classList.toggle('mobileMenu')
    menuNav.forEach((menu)=> {
      menu.classList.toggle('mobileMenu')
    })
    separator.forEach((div)=> {
      div.classList.toggle('mobileMenu')
    })

  })
}

buttonHamburguer()


 
  function clickClose () {
    const clickButton = document.querySelectorAll('.header-nav a')
clickButton.forEach(item => {
  item.addEventListener('click', function () {
    const bla = document.querySelectorAll('.mobileMenu')
    bla.forEach(item => {
      item.classList.remove('mobileMenu')
    })

  })
  
})
    

  }

 clickClose()
  
function slideProjectsDesktop () {
  const slides = document.querySelectorAll('[data-js="carousel"]')
  const nextButton = document.querySelector('[data-js="button-next-item"]')
  const prevButton = document.querySelector('[data-js="button-prev-item"]')
  
  let currentSlidesIndex = 0
  
  nextButton.addEventListener('click', () => {
    if (currentSlidesIndex === slides.length - 1) {
      currentSlidesIndex = 0
    } else {
      currentSlidesIndex++
    }
  
    slides.forEach(slide => {
      slide.classList.remove('visible')
      
    })
  
    slides[currentSlidesIndex].classList.add('visible')
    slides[currentSlidesIndex].classList.add('entrada')
    slides[currentSlidesIndex].classList.remove('saida')
  })
  prevButton.addEventListener('click', () => {
    if (currentSlidesIndex === 0) {
      currentSlidesIndex = slides.length - 1
    } else {
      currentSlidesIndex--
    }
  
    slides.forEach(slide => {
      slide.classList.remove('visible')
      
    })
  
    slides[currentSlidesIndex].classList.add('visible')
    slides[currentSlidesIndex].classList.add('saida')
    slides[currentSlidesIndex].classList.remove('entrada')
  })

}

slideProjectsDesktop()

// function slideProjectsMobile () {
//   const slides = document.querySelectorAll('[data-js="slide"]')
//   const nextButton2 = document.querySelector('[data-js="button-next-item"]')
//   const prevButton2 = document.querySelector('[data-js="button-prev-item"]')
  
//   let currentSlidesIndex = 0
  
//   nextButton2.addEventListener('click', () => {
//     if (currentSlidesIndex === slides.length - 1) {
//       currentSlidesIndex = 0
//     } else {
//       currentSlidesIndex++
//     }
  
//     slides.forEach(slide => {
//       slide.classList.remove('visibleMobile')
      
//     })
  
//     slides[currentSlidesIndex].classList.add('visibleMobile')
//     slides[currentSlidesIndex].classList.add('entrada')
//     slides[currentSlidesIndex].classList.remove('saida')
//   })
//   prevButton2.addEventListener('click', () => {
//     if (currentSlidesIndex === 0) {
//       currentSlidesIndex = slides.length - 1
//     } else {
//       currentSlidesIndex--
//     }
  
//     slides.forEach(slide => {
//       slide.classList.remove('visibleMobile')
      
//     })
  
//     slides[currentSlidesIndex].classList.add('visibleMobile')
//     slides[currentSlidesIndex].classList.add('saida')
//     slides[currentSlidesIndex].classList.remove('entrada')
//   })

// }

// slideProjectsMobile()






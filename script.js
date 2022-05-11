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
  
} 
}


function initAnimationScroll() {
  const sections = document.querySelectorAll('.js-scroll')

  if (sections.length) {
    const windowMetade = window.innerHeight * 0.85
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

 
    function slideButton () {
      const vai = document.querySelector('.buttonNext')
      vai.addEventListener('click', () =>{
         const slide = document.querySelector('.visibleHidden')
     
         slide.scrollBy(50,0)
        
        
      })
      const volta = document.querySelector('.buttonPrev')
      volta.addEventListener('click', () =>{
         const slide = document.querySelector('.visibleHidden')
        
     
         slide.scrollBy(-1,0)
     
       
      })
     
     

    }
    slideButton()




    function carouselProjects () {
      projectJson.forEach((item) => {
       
        let projectItem = document
          .querySelector('.slide')
          .cloneNode(true)
    
          projectItem.querySelector('.img-slide img').src = item.img
          projectItem.querySelector('.tittle-slide').innerHTML = item.tittle
  
  
        document.querySelector('.visibleHidden').append(projectItem)
        
      })
  
  
     }
  
     carouselProjects()
  
     function contentProjects () {
      projectJson.forEach((item) => {
        let projectShow = document
        .querySelector('.projetcs-show')
        .cloneNode(true)
  
        projectShow.querySelector('.projects-show-img img').src = item.img
        projectShow.querySelector('.projects-show-text h6').innerHTML = item.tittle
        projectShow.querySelector('.projects-show-text p').innerHTML = item.description
        projectShow.querySelector('.button-deploy a').href = item.deploy
        projectShow.querySelector('.button-git a').href = item.github
        
       
         
       document.querySelector('.projects-show-container').append(projectShow)
        
        
      })
  
     }
     contentProjects()

     function navigationSlides() {
      const tabMenu = document.querySelectorAll('.slide')
      const tabContent = document.querySelectorAll('.projetcs-show')
    
      if (tabMenu.length && tabContent.length) {
        tabContent[1].classList.add('active-content')
    
        function activeTab(index) {
          tabContent.forEach(section => {
            section.classList.remove('active-content')
          })
          tabContent[index].classList.add('active-content')
        }
    
        tabMenu.forEach((itemMenu, index) => {
          itemMenu.addEventListener('click', () => {
            activeTab(index)
          })
        })
      }
    }
    navigationSlides()


    function animationText () {

      const tittle = document.querySelector('h2')

    function typeWriter (element) {
      const textArray = element.innerHTML.split('')
      element.innerHTML = ''
      textArray.forEach((item, index)=> {
        setTimeout(() => {
          element.innerHTML += item

        }, 85 * index)

      })
    }

    typeWriter(tittle)


    }

    animationText()

    

    

  const buttomMobileDescripiton = document.querySelectorAll('.arrow-tittle')

  function accordionDescription () {
    buttomMobileDescripiton.forEach((item)=> {
      item.addEventListener('click', () => {
        const description = document.querySelectorAll('.mobile-description')
        const iconArrow = document.querySelectorAll('.iconArrow')
        description.forEach((item) => {
          item.classList.toggle('active-description')
        })
        iconArrow.forEach((item) => {
          item.classList.toggle('active-description')
        })
        
      })
      
      })
     
      
    }


  accordionDescription()
    
  
 

 
  



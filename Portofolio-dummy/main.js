// SHOW MENU
const showMenu = (toggleId,navId)=>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);
    
    if (toggle && nav){
        toggle.addEventListener('click',()=>{
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle','nav-menu')

// remove menu mobile
const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.removed('show-menu')
}
navLink.forEach(n => n.addEventListener('click',linkAction))

// Scroll Section active link
const sections = document.querySelectorAll('section[id]')

function scrollActive (){
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const  sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){

            document.querySelector('nav__menu a[href*=' +sectionId +']').classList.add('active-link')
        }else{
            document.querySelector('nav__menu a[href*=' +sectionId +']').classList.remove('active-link')

        }
})
}
window.addEventListener('scroll',scrollActive)

//  change background Header
function scrollHeader(){
    const header =document.getElementById('header')
    if(this.scrollY >= 200) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll',scrollHeader)

//  show scroll on top
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top')
    if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll',scrollTop)

// MixItUp Filter Portfolio
const mixer = mixitup('.portfolio__container', {
    selectors: {
        target: '.portfolio__content'
    },
    animation: {
        duration: 400
    }
});

// Link Active Portfolio
const linkPortfolio = document.querySelectorAll('.portfolio__item')

function activePortfolio(){
    if(linkPortfolio){
        linkPortfolio.forEach(l=>l.classList.remove('active-portfolio'))
        this.classList.add('active-portfolio')
    }
}
linkPortfolio.forEach(l=>l.addEventListener('click',activePortfolio))

// Swiper carousel
const swiper = new Swiper('.testimonial__container', {
    spaceBetween: 16,
    loop: true,
    garbCursor: true,
  
    // pagination
    pagination: {
      el: '.swiper-pagination',
      clickAble: true,
    },

    breakpoints:{
        640:{
            slidesPerView: 2,
        },
        1024:{
            slidesPerView: 3,
        }
    }
  });

// GSAP ANIMATION
gsap.from('.home__img', {opacity: 0, duration: 2, delay: .5, x:80})
gsap.from('.home__data', {opacity: 0, duration: 2, delay: .8, y:25})
gsap.from('.home__greeting, .home__name, .home__profession, .home__button', {opacity: 0, duration: 2, delay: 1, y:25, ease:'expo.out', stagger:.2  })
gsap.from('.nav__logo, nav__toggle', {opacity: 0, duration: 2, delay: 1.5, y:25, ease:'expo.out', stagger:.2  })
gsap.from('.nav__item', {opacity: 0, duration: 2, delay: 1.8, y:25, ease:'expo.out', stagger:.2  })
gsap.from('.home__social-icon', {opacity: 0, duration: 2, delay: 2.3, y:25, ease:'expo.out', stagger:.2  })
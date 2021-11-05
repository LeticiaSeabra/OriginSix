/* abre e fecha o menu quando clicar no hamburguer e no x */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* quando clicar em um item do menu, esconder menu */
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}


/* mudar o header da página quando der scroll */

function changeHeaderWhenScroll() {
  const header = document.querySelector('#header')
  const navHeight = header.offsetHeight

  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
      } else {
    header.classList.remove('scroll')
      }
}


/* TESTIMONIALS CARROSEL SLIDER SWIPER*/

const swiper = new Swiper('.swiper-container',{
slidesPerView: 1,
pagination: {
  el:'.swiper-pagination'
},
mousewheel: true,
keyboard: true,
breakpoints: {
  767: {
    slidesPerView: 3,
    setWrapperSize: true
  }
}
})

/* SCROLLREVEAL - MOSTRAR ELEMENTOS QUANDO DER SCROLL NA PÁGINA (IR APARECENDO)*/

const scrollReveal = ScrollReveal ({
origin: 'top',
distance: '30px',
duration: 700,
reset: true,
})

scrollReveal.reveal(`
#home .image, #home .text,
#about .image, #about .text,
#services header, #services .card,
#testimonials header, #testimonials .testimonials,
#contact .text, #contact .links
footer .brand, footer .social
`, { interval: 100 })

/* botton back to top */



function backToTop(){
  const backToTopButton = document.querySelector('.back-to-top')

  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}
window.addEventListener('scroll', function () {
  
})

/* Menu aivo conforme a seçao visível na página */
const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {

  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4
/* offset significa deslocamento e é do eixo Y, além de pegar o deslocamento eu coloquei o + para dividir a minha janela em 8 (o numero que eu coloquei) e multipliquei */

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id') /* vai pegar todas as seções com id (#) */
    /* agora estou configurando que o meu site vai ter aquela barra lá em cima sempre, mesmo quando rolar, é aquela box que esta no plano de cima (das camadas) que mostra o meu menu, com isto, quando eu estiver rolando a página ele vai colorir a seçao que eu estiver */
    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']') 
        .classList.remove('active')
    }
  }
}

/* WHEN SCROLL */

window.addEventListener('scroll', function(){
  changeHeaderWhenScroll()
  backToTop()
})



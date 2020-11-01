import '../css/normalization.css'
import '../css/styles.css'
import '@glidejs/glide/dist/css/glide.core.min.css'
import Glide from '@glidejs/glide'
import lightCommas from '../img/svg/quote-icon.svg'
import darkCommas from '../img/svg/quote-icon-dark.svg'
import moonIcon from '../img/svg/moon-icon.svg'
import sunIcon from '../img/svg/sun-icon.svg'



// video player

const turnOnVideoCircle = document.querySelector('.video__start-circle')
const turnOnVideoTriangle = document.querySelector('.video__start-triangle')
const video = document.querySelector('.iframe__video')
video.style.display = 'none'

turnOnVideoCircle.onclick = function() {
    video.style.display = 'block'
    turnOnVideoCircle.style.display = 'none'
    turnOnVideoTriangle.style.display = 'none'
}

turnOnVideoTriangle.onclick = function() {
    video.style.display = 'block'
    turnOnVideoCircle.style.display = 'none'
    turnOnVideoTriangle.style.display = 'none'
}

// video-player


// slider


const config = {
    type: "carousel",
    perView: 1.7,
}

new Glide('.glide', config).mount()

const leftArrow = document.querySelector('.glide__arrow--left')
const leftArrowSvg = document.querySelector('.slider__left-arrow')
const rightArrow = document.querySelector('.glide__arrow--right')
const rightArrowSvg = document.querySelector('.slider__right-arrow')
const counter = document.querySelector('.slider__review-number')

rightArrow.onclick = function() {
    leftArrow.disabled = false
    leftArrowSvg.classList.add("arrow__enabled")
    leftArrowSvg.classList.remove("arrow__disabled")
    console.log(counter.innerHTML[0])
    let number = Number(counter.innerHTML[0])
    number += 1
    if (number === 4) {
        rightArrow.disabled = true
        rightArrowSvg.classList.remove("arrow__enabled")
        rightArrowSvg.classList.add("arrow__disabled")
    }
   
    
    counter.innerHTML = number.toString() + '/'

    
    
}


leftArrow.onclick = function() {
    rightArrow.disabled = false
    rightArrowSvg.classList.add("arrow__enabled")
    rightArrowSvg.classList.remove("arrow__disabled")
    console.log(counter.innerHTML[0])
    let number = Number(counter.innerHTML[0])
    
    number -= 1
    if (number  === 1) {
        leftArrow.disabled = true
        leftArrowSvg.classList.remove("arrow__enabled")
        leftArrowSvg.classList.add("arrow__disabled")
    }
   
    counter.innerHTML = number.toString() + '/'
    
}


const darkMode = document.querySelector('.header__dark')
console.log(darkMode)

window.addEventListener('click', function(event) {
    console.log(event.target)
})

let dark = false
const quoteIcon = document.querySelector('.quote__icon')
const modeIcon = document.querySelector('.header__dark-pic')
darkMode.onclick = function() {
    document.body.classList.toggle('theme-is-black')
    dark = !dark
    if (dark) {
        quoteIcon.src = darkCommas  
        modeIcon.src = sunIcon
    } else {
        quoteIcon.src = lightCommas 
        modeIcon.src = moonIcon 
    }
}






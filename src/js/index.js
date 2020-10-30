import '../css/normalization.css'
import '../css/styles.css'
import '@glidejs/glide/dist/css/glide.core.min.css'
import Glide from '@glidejs/glide'

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

const leftArrow = document.querySelector('.slider__left-arrow')
const rightArrow = document.querySelector('.slider__right-arrow')
const counter = document.querySelector('.slider__review-number')

rightArrow.onclick = function() {
    console.log(counter.innerHTML[0])
    let number = Number(counter.innerHTML[0])
    
    if (number === 4) {
        number = 1
    }
    else {
        number += 1
    }
    counter.innerHTML = number.toString() + '/'
    
}


leftArrow.onclick = function() {
    console.log(counter.innerHTML[0])
    let number = Number(counter.innerHTML[0])
    
    if (number === 1) {
        number = 4
    }
    else {
        number -= 1
    }
    counter.innerHTML = number.toString() + '/'
    
}

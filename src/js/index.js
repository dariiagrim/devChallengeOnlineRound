import '../css/normalization.css'
import '../css/styles.css'

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


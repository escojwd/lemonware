import {init as initNav} from './nav.js';
import Carousel from './Carousel.js';

initNav();


const carouselElements = document.querySelectorAll('.carousel');
const carousels = [];

carouselElements.forEach(element => {
    carousels.push(new Carousel(element));
});

const toggleCarousels = () => {
    if(window.innerWidth < 1024) {
        carousels.forEach(carousel => carousel.spin())
    } else {
        carousels.forEach(carousel => carousel.stop()) 
    }
}

toggleCarousels();

window.addEventListener('resize', () => {
    toggleCarousels();
});
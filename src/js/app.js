import {init as initNav} from './nav.js';
import Carousel from './Carousel.js';

initNav();

const carouselElements = document.querySelectorAll('.carousel');

carouselElements.forEach(element => {
    const carousel = new Carousel(element);
    carousel.spin();
});
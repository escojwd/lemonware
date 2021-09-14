export default class Carousel {
    /**
     * 
     * @param {HTMLElement} element 
     */
    constructor(element) {
        this.element = element;
        this.dots = this.element.querySelector('.carousel-dots').children[0].children;
        this.count = 0;
        this.itemsContainer = this.element.querySelector('.carousel-items');
        this.itemsContainer.prepend(this.itemsContainer.children[this.itemsContainer.children.length - 1]);
        this.itemsContainer.style.left = '-100vw'; 
        element.querySelector('.arrow-left').addEventListener('click', () => this.slidePrev());
        element.querySelector('.arrow-right').addEventListener('click', () => this.slideNext());
        this.dots[0].parentElement.addEventListener('click', e => this.goToSlide(e));
    }

    slide(forward = true) {
        return new Promise(resolve => {
            if(forward) {
                this.itemsContainer.style.left = '0vw';
                this.itemsContainer.style.transition = 'none';
                const firstItem = this.itemsContainer.children[0];
                this.itemsContainer.appendChild(firstItem);
                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        this.itemsContainer.style.transition = 'left 1s';
                        this.itemsContainer.style.left = '-100vw';
                        this.count++;
                        if(this.count >= this.itemsContainer.children.length) {
                            this.count = 0;
                        }
                        this.selectDot();
                        resolve();
                    })
                });
            } else {
                this.itemsContainer.style.left = '-200vw';
                this.itemsContainer.style.transition = 'none';
        
                const lastItem = this.itemsContainer.children[this.itemsContainer.children.length - 1];
                this.itemsContainer.prepend(lastItem);
                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        this.itemsContainer.style.transition = 'left 1s';
                        this.itemsContainer.style.left = '-100vw';
                        this.count--;
                        if(this.count <= -1) {
                            this.count = this.itemsContainer.children.length - 1;
                        }
                        this.selectDot();
                        resolve();
                    })
                });
            }
        });
    }

    slideNext() {
        this.slide();
        if(this.interval) {
            clearInterval(this.interval);
            this.spin();
        }
    }

    slidePrev() {
        this.slide(false);
        if(this.interval) {
            clearInterval(this.interval);
            this.spin();
        }
    }

    goToSlide(e) {
        if(e.target.nodeName === 'SPAN'){
            const listItems = e.target.parentElement.parentElement.children;
            if(listItems[this.count] === e.target.parentElement) {
                return;
            }
            this.slide().then(() => this.goToSlide(e));
        }
        if(this.interval) {
            clearInterval(this.interval);
            this.spin();
        }
    }

    selectDot() {
        const selectedDot = this.dots[0].parentElement.querySelector('.bg-focused').parentElement;
        if(selectedDot) {
            selectedDot.children[0].classList.remove('bg-focused');
            selectedDot.children[0].classList.add('bg-line-color');
        }
        this.dots[this.count].children[0].classList.remove('bg-line-color');
        this.dots[this.count].children[0].classList.add('bg-focused');
    }

    spin(forward = true) {
        this.interval = setInterval(() => this.slide(forward), 2000);
    }

    stop() {
        clearInterval(this.interval);
    }
}

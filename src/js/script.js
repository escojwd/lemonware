const open = document.querySelector('.open');
const close = document.querySelector('.close');
const burgerMenu = document.querySelector('.burger-menu');
const body = document.querySelector('body');


open.addEventListener('click', () => {
    body.classList.add('overflow-hidden');
    burgerMenu.style.top = '0vh';
    window.scrollTo(0, 0);
});

close.addEventListener('click', () => {
    body.classList.remove('overflow-hidden');
    burgerMenu.style.top = '-100%';
})

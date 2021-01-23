const menu_btn = document.querySelector('.menu');
const nav = document.querySelector('.nav');

const toggleNavigation = event => {
    nav.classList.toggle('active');
}

menu_btn.addEventListener('click', toggleNavigation)
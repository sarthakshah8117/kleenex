(() => {

const burger = document.querySelector('.burgerMenu');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');
const barImage = document.querySelector('.burgerMenu img');

function openMenu()
{
    // Toggle Nav
    nav.classList.toggle('activateLink');
    barImage.classList.toggle('rotateBurger');
}


burger.addEventListener('click',openMenu);

})();

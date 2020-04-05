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

//  PRODUCT PAGE - Scroll Text Appear effect function

function  scrollAppear()
{
  var appearCon = document.querySelector(".appearCon");
  var contentPosition = appearCon.getBoundingClientRect().top;
  var screenPosition = window.innerHeight / 1.5;

  if(contentPosition < screenPosition)
  {
    appearCon.classList.add("appearText");
  }
}

function  scrollAppear()
{
  var appearCon = document.querySelector(".appearCon");
  var contentPosition = appearCon.getBoundingClientRect().top;
  var screenPosition = window.innerHeight / 1.5;

  if(contentPosition < screenPosition)
  {
    appearCon.classList.add("appearText");
  }
}

function  scrollAppearA()
{
  var appearCon = document.querySelector(".appearConA");
  var contentPosition = appearCon.getBoundingClientRect().top;
  var screenPosition = window.innerHeight / 1.5;

  if(contentPosition < screenPosition)
  {
    appearCon.classList.add("appearText");
  }
}
//  PRODUCT PAGE - Scroll Text Appear effect function


burger.addEventListener('click',openMenu);
window.addEventListener('scroll', scrollAppear);
window.addEventListener('scroll', scrollAppearA);

})();

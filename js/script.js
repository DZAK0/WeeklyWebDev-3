const barDiv = document.querySelector('.js-navigation__bars')
const navigationIcons = document.querySelectorAll('.navigation__icon')
const navigationList = document.querySelector('.navigation__list')
const links = document.querySelectorAll('.link__navigation')
let fromTop = document.querySelector('.navigation').offsetHeight;

window.onresize = function () {
  (window.innerWidth >= 576) ? fromTop = 100: fromTop = 50;
};

const toggleClass = function () {
  navigationIcons.forEach((icon) => {
    icon.classList.toggle('navigation__icon--off')
  })
  navigationList.classList.toggle('navigation__list--active');
}

barDiv.addEventListener('click', toggleClass)

links.forEach((link) => {
  link.addEventListener('click', function () {
    event.preventDefault();
    let scrollTo = (this).getAttribute('href')
    let offset = (document.querySelector(scrollTo).offsetTop) - fromTop
    $('body, html').animate({
      scrollTop: offset
    }, 2000)
    toggleClass();
  })
})
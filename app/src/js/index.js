import $ from 'jquery';

(() => {
  const menuIcon = document.querySelector('.header-menu-icon');
  const contactIcon = document.querySelector('.header-contact-icon');
  const CLOSE = 'close-button';

  function NavOn() {
    const headerNavigation = document.querySelector('.header-navigation');
    const menuIconLine = document.querySelectorAll('.menu-icon-line');

    headerNavigation.classList.toggle('nav-on');
    menuIconLine.forEach((line) => line.classList.toggle(CLOSE));
  }

  function contactOn() {
    const headerNavigation = document.querySelector('.header-contact-items');

    headerNavigation.classList.toggle('contact-on');
    contactIcon.classList.toggle(CLOSE);

    const hasCloseButton = contactIcon.classList.contains(CLOSE);

    if (!hasCloseButton) {
      document.body.style.backgroundColor = 'white';
    } else {
      document.body.style.backgroundColor = '#D7E9EE';
    }

  }

  menuIcon.addEventListener('click', NavOn);
  contactIcon.addEventListener('click', contactOn);

})();
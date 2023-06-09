const menumobile = document.querySelector('#menumobile');
const menubutton = document.querySelector('.menu');
const closemenu = document.querySelector('.closemenu');

const clickHandler = () => {
  // eslint-disable-next-line no-restricted-globals
  if (event.target !== menumobile && !event.target.classList.contains('spanline1') && !event.target.classList.contains('menu') && !menumobile.classList.contains('dnone')) {
    menumobile.classList.toggle('dnone');
    closemenu.classList.toggle('dnone');
    menubutton.classList.toggle('dnone');
    document.removeEventListener('click', clickHandler);
  }
};

menubutton.addEventListener('click', () => {
  if (menumobile.classList.contains('dnone')) {
    menumobile.classList.toggle('dnone');
    document.addEventListener('click', clickHandler);
    closemenu.classList.toggle('dnone');
    menubutton.classList.toggle('dnone');
  }
});
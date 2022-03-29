const drawerElement = document.querySelector('.drawer');
const burgerElement = document.querySelector('.burger');

burgerElement.addEventListener('click', () => {
  burgerElement.classList.toggle('burger_active');
  drawerElement.classList.toggle('drawer_active');
});

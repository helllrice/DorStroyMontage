const collapsableElements = document.querySelectorAll('.list-item.list-item_collapsable');

collapsableElements.forEach((element) => {
  element.addEventListener('click', () => {
    const submenuElement = element.querySelector('.menu__sub-list');
    submenuElement.classList.toggle('menu__sub-list_active');
  });
});

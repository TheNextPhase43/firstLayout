// Подключил файлы без .min, чтобы можно было нормально разобрать содержимое в браузере.

'use strict';

const headerMenu = document.querySelector(`.header__menu`);

window.addEventListener(`scroll`, () => {
    if (!headerMenu.classList.contains(`_scrolled`) && window.scrollY != 0) {
        headerMenu.classList.add(`_scrolled`);
    } else if (window.scrollY === 0) {
        headerMenu.classList.remove(`_scrolled`);
    }
});
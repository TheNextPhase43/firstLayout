'use strict';

function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
    if (support == true) {
        document.querySelector('body').classList.add('webp');
    } else {
        document.querySelector('body').classList.add('no-webp');
    }
});

const headerMenuList = document.querySelector(`.menu-header__list`);
const headerMenuButton = document.querySelector(`.header__burger`);

headerMenuButton.addEventListener(`click`, () => {
    document.body.classList.toggle(`_locked`);
    headerMenuList.classList.toggle(`_active`);
    headerMenuButton.classList.toggle(`_active`);
});

const headerMenuLinks = document.querySelectorAll(`.menu-header__link[data-goto]`);

headerMenuLinks.forEach(headerMenuLink => {
    headerMenuLink.addEventListener(`click`, onMenuLinkClick);
});

function onMenuLinkClick(e) {
    if (headerMenuList.classList.contains(`_active`)) {
        document.body.classList.remove(`_locked`);
        headerMenuList.classList.remove(`_active`);
        headerMenuButton.classList.remove(`_active`);
    }

    const clickedMenuLink = e.target;

    if (clickedMenuLink.dataset.goto && document.querySelector(clickedMenuLink.dataset.goto)) {
        const gotoBlock = document.querySelector(clickedMenuLink.dataset.goto);                // Отнимаем лишь от хедер-меню, а не от всего хедера!
        const gotoBlockValue = gotoBlock.getBoundingClientRect().top + window.scrollY - document.querySelector(`.header__menu`).offsetHeight;

        window.scrollTo({
            top: gotoBlockValue,
            behavior: `smooth`,
        });
        e.preventDefault();
    }
}
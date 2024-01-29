'use strict';

// Из headerContent перетянуть элемент headerSwitcher в headerMenuList
// при переходе на мобильную версию, и обратно при переходе на пк.
const headerContent = document.querySelector(`.body-header__content`);
let headerSwitcherEl = document.createElement(`ul`);
headerSwitcherEl.className = `body-header__switcher`;
headerSwitcherEl.innerHTML = `<li>RU</li><li class="_line">|</li><li class="_active">ENG</li>`;
// Дочерние элементы хедер-меню и хедер-контент
let headerMenuListChildrens = headerMenuList.children;
let headerContentChildrens = headerContent.children;

window.onload = () => {
    // Определить стартовое положение headerSwitcher
    if (document.documentElement.clientWidth >= 769) {
        headerContent.append(headerSwitcherEl);
    } else {
        headerMenuList.append(headerSwitcherEl);
    }
};

window.addEventListener('resize', () => {
    // Переход на пк версию
    // Идёт проверка не достигнута ли нужная нам ширина, и является ли последний дочерний элемент хедер-листа переключателем языка
    if (document.documentElement.clientWidth >= 769 && headerMenuListChildrens[headerMenuListChildrens.length - 1].className === `body-header__switcher`) {
        headerMenuList.removeChild(headerSwitcherEl);
        headerContent.appendChild(headerSwitcherEl);
    }
    // Переход на мобайл версию
    // Идёт проверка не достигнута ли нужная нам ширина, и является ли последний дочерний элемент хедер-контента переключателем языка
    else if (document.documentElement.clientWidth <= 768 && headerContentChildrens[headerContentChildrens.length - 1].className === `body-header__switcher`) {
        headerContent.removeChild(headerSwitcherEl);
        headerMenuList.appendChild(headerSwitcherEl);
    }
});

// languageSwitcherEl = document.querySelector(`.body-header__switcher`);
const languageSwitcherButtons = headerSwitcherEl.children;

headerSwitcherEl.addEventListener(`click`, e => {
    if (!e.target.classList.contains(`_active`) && !e.target.classList.contains(`_line`)) {
        for (let i = 0; i < languageSwitcherButtons.length; i++) // не используется forEach потому
            languageSwitcherButtons[i].classList.remove(`_active`); // что это HTMLCollection
        e.target.classList.add(`_active`);
    };
});
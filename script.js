//открывать-закрывать модальное окно нажатием на кнопку и на внешнюю область
// отключить скролл, если окно открыто
//закрытие окна клавишей Esc

let btn = document.querySelector('.hero-btn');
let modalContainer = document.querySelector('.modal-container');
let closeButton = document.querySelector('.modal-close');
let body = document.body;

const openModal = () => {
    modalContainer.classList.add('is-open');
    body.classList.add('lock-scroll');
}

const closeModal = () => {
    modalContainer.classList.remove('is-open');
    body.classList.remove('lock-scroll');
}

const isModalOpened = () => {
    return modalContainer.classList.contains('is-open');
}

modalContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-container')) {
        closeModal();
    }
})

btn.addEventListener('click', () => {
    openModal();
    window.addEventListener('keydown', (e) => {
        if (e.key == 'Escape' && isModalOpened()) {
            closeModal();
        }
    })
});

closeButton.addEventListener('click', () => {
    closeModal();
});

//Бургер-меню
let burger = document.querySelector('.menu-burger');
let menu = document.querySelector('.header-list');

let toggleBurgerMenu = function() {
    menu.classList.toggle('header-list-active');
    burger.classList.toggle('menu-burger-active');
};

document.querySelectorAll('.header-list-item').forEach(function(item) {
    item.addEventListener('click', function(){
        toggleBurgerMenu();
    });
})

burger.addEventListener('click', function() {
    toggleBurgerMenu();
});


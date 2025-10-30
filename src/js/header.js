const body = document.body;
let isMobileActive = false;

function toggleMobileMenu() {
    isMobileActive = !isMobileActive;
    body.classList.toggle("no-scroll");

    // Обновляем состояние мобильного меню
    const mobileMenu = document.querySelector('.header__head-mobile');
    const mobileButton = document.querySelector('.header__btn-mobile-header');

    if (mobileMenu) {
        mobileMenu.classList.toggle('active', isMobileActive);
    }

    if (mobileButton) {
        mobileButton.classList.toggle('active', isMobileActive);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const mobileButton = document.querySelector('.header__btn-mobile-header');
    if (mobileButton) {
        mobileButton.addEventListener('click', toggleMobileMenu);
    }
});
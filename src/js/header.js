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


function smoothScrollTo(target, duration = 1500, offset = 100) {
    const targetPosition = target.offsetTop - offset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function easeInOutQuad(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}


document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            if (targetElement.getAttribute("id") == "hero"){
                smoothScrollTo(targetElement, 1500, 0);
            }
            else{
                smoothScrollTo(targetElement, 1500, 100);
            }
        }
    });
});

document.querySelector('.header__head-mobile').querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function(e) {
        toggleMobileMenu();
    })
})
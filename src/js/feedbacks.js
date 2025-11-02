const reviews = document.querySelector(".feedbacks__reviews--items");
const diplomasItems = reviews.querySelectorAll('.feedbacks__review-block');

const diplomasBtnNext = document.querySelector('.feedbacks__nav--btn_next');
const diplomasBtnBack = document.querySelector('.feedbacks__nav--btn_back');

const diplomasContainer = reviews.querySelector('.feedbacks__reviews');

let currentIndex = 0;
const itemWidth = diplomasItems[0].offsetWidth + 24;

function next() {
    const maxIndex = diplomasItems.length - 1;
    if (currentIndex < maxIndex) {
        currentIndex++;
        diplomasContainer.scrollTo({
            left: currentIndex * itemWidth,
            behavior: 'smooth'
        });
    }
}

function back() {
    if (currentIndex > 0) {
        currentIndex--;
        diplomasContainer.scrollTo({
            left: currentIndex * itemWidth,
            behavior: 'smooth'
        });
    }
}

diplomasBtnNext.addEventListener('click', next);
diplomasBtnBack.addEventListener('click', back);
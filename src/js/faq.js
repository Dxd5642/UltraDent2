const questions = document.querySelectorAll('.faq__question');
questions.forEach(item => {
    item.querySelector('.faq__question--btn').addEventListener('click', ()=>{
        item.classList.toggle('active');
    })
});
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animateActive');
        } else {//Появляется один раз
            //   entry.target.classList.remove('animateActive');
        }
    });
}, {
    threshold: 0.2
});

document.querySelectorAll('.animateOnScroll').forEach(el => {
    observer.observe(el);
});
export function animationDown(){
    const jaw1 = document.querySelectorAll('.hero__img-jaw--item')[0];
    const jaw2 = document.querySelectorAll('.hero__img-jaw--item')[1];

    jaw1.style = 'animation: jaw_down 0.4s linear 0.4s both;';
    jaw2.style = 'animation: jaw_down 0.4s linear 0.8s both;';
}

export function animationPulse(){
    const jaw1 = document.querySelectorAll('.hero__img-jaw--item')[0];

    jaw1.style = 'animation: jaw_pulse 6s ease-in-out infinite;';
}


export function animationStart(){
    animationDown();
    setTimeout(animationPulse, 5000);
}


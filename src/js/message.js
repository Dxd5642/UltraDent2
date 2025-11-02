export default function toggleBackblur(
    message='Мы получили вашу заявку и позвоним в течении 15 минут, чтобы уточнить детали'
){
    const backblur = document.querySelector(".backblur");
    const body = document.querySelector("body");
    const messgae = document.querySelector(".message");
    messgae.querySelector("p").innerHTML = message;

    backblur.classList.toggle("active");
    body.classList.toggle("no-scroll");
    messgae.classList.toggle("active");
}

const btnAnswer = document.querySelector(".message__btn_answer");
const btnClose = document.querySelector(".message__btn-close");

btnAnswer.addEventListener('click', toggleBackblur)
btnClose.addEventListener('click', toggleBackblur)
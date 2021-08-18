const btnMenu = document.querySelector('.header__nav .header__btn');

function btnMudarCor() {
    const nav = document.querySelector('.header__nav')
    nav.classList.toggle('active')
}


btnMenu.addEventListener('click', btnMudarCor)
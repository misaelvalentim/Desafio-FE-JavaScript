const btnMenu = document.querySelector('.header__nav .btn--menu');

function btnMudarCor() {
    const nav = document.querySelector('.header__nav')
    nav.classList.toggle('active')
    if (toggle) {
        nav.style.transition = 'all 5s';
    }
}

btnMenu.addEventListener('click', btnMudarCor)
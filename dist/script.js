const btnMenu = document.querySelector('nav button');

function btnMudarCor() {
    const nav = document.querySelector('.header--nav')
    nav.classList.toggle('active')
    if (toggle) {
        nav.style.transition = 'all 5s';
    }
}

btnMenu.addEventListener('click', btnMudarCor)
const accordionContainer = document.querySelectorAll('.collapse .collapse__container');

accordionContainer.forEach((element) => {
    element.addEventListener('click', accordionOpen)
})
    
function accordionOpen() {
    accordionContainer.forEach((removeClass) => {
        removeClass.classList.remove('collapse__opened')
    })
    this.classList.toggle('collapse__opened');
}
const accordionContainer = document.querySelectorAll('.collapse .collapse__container');

accordionContainer.forEach((element) => {
    element.addEventListener('click', accordionOpen)
        element.addEventListener('mouseleave', accordionClosed);
})
    
function accordionOpen() {
    this.classList.toggle('collapse__opened');
    this.style.transition = "height 5s ease-in-out";
}
function accordionClosed() {
    this.classList.remove('collapse__opened');
}
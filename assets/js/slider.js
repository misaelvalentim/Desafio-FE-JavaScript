const slide_wrapper = document.querySelectorAll('.slider-wrapper'),
    slide_paragraphs = document.querySelectorAll('.slider__item__text'),
    slide_headings = document.querySelectorAll('.slider__item__author');
let time = 5000;

console.log(slide_wrapper.forEach((item) => {
    console.log(item.hasChildNodes());
}))



// dots.forEach((element) => {
//     element.addEventListener('click', classActive);

// })

// function classActive() {
//     dots.forEach((removeClass) => {
//         removeClass.classList.remove('active')
//     })
    
//     this.classList.add('active')

//     changeImage();
// }

// const images = document.querySelectorAll('.slider-content img');

// function changeImage() {
// }

// window.addEventListener('load', slide1);

/*

1 - Criar um uma função *slider init)
 - Ela vai contar quantos filhos o slide-wrapper tem e salvar em uma variavel
 - Fazer um modulo 3 (%3) e contar quantas bolinhas teria
 - Fazer um floor para arredondar o número para cima.
 
 
 De tempo em tempos, usar o setInterval para dar display none or flex de três em três filhos.

*/
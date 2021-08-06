const point = document.querySelectorAll('.point-box .point')

point.forEach((element) => {
    element.addEventListener('click', classActive);

})

function classActive() {
    point.forEach((removeClass) => {
        removeClass.classList.remove('active')
    })
    
    this.classList.add('active')
    
    changeImage();
}

const images = document.querySelectorAll('.slider-content img');

function changeImage() {
    if (point[4].classList.contains('active')) {
        images[0].setAttribute('src', '/assets/images/woman8.jpg');
        images[1].setAttribute('src', 'assets/images/woman9.jpg');
        images[2].setAttribute('src', 'assets/images/man8.jpg');
    } else if (point[3].classList.contains('active')) {
            images[0].setAttribute('src', '/assets/images/man7.jpg');
            images[1].setAttribute('src', 'assets/images/woman6.jpg');
            images[2].setAttribute('src', 'assets/images/man6.jpg')
    } else if (point[2].classList.contains('active')) {
        images[0].setAttribute('src', '/assets/images/woman5.jpg');
        images[1].setAttribute('src', 'assets/images/man4.jpg');
        images[2].setAttribute('src', 'assets/images/man3.jpg')
    } else if (point[1].classList.contains('active')) {
        images[0].setAttribute('src', '/assets/images/woman4.jpg');
        images[1].setAttribute('src', 'assets/images/woman3.jpg');
        images[2].setAttribute('src', 'assets/images/man1.jpg')
    } else {
        images[0].setAttribute('src', '/assets/images/woman1.jpg');
        images[1].setAttribute('src', '/assets/images/woman2.jpg');
        images[2].setAttribute('src', '/assets/images/man5.jpeg');
    }
}

let time = 5000;
const text = document.querySelectorAll('.slider-content__text');
const h3 = document.querySelectorAll('.slider-content__author');

window.addEventListener('load', slide1);

function slide1() {
    images[0].setAttribute('src', '/assets/images/woman1.jpg');
    images[1].setAttribute('src', '/assets/images/woman2.jpg');
    images[2].setAttribute('src', '/assets/images/man5.jpeg');
    text.forEach(() => {
        setTimeout(() => {

            text[0].innerHTML = "Testando este texto para ver se combina certinho Testando este texto para ver se combina certinho Testando este texto para ver "
            text[1].innerHTML = "The world is a dangerous place to live; not because the people who are evil, but because of the people who don't do anything about it"
            text[2].innerHTML = "Testando este texto para ver se combina certinho Testando este texto para ver se combina certinho Testando este texto para ver"
            h3[0].innerHTML = "Santhy"
            h3[1].innerHTML = "Samantha"
            h3[2].innerHTML = "George"
        }, time)
    })
    setTimeout("slide2()", time)

}
function slide2() {
        images[0].setAttribute('src', '/assets/images/woman4.jpg');
    images[1].setAttribute('src', 'assets/images/woman3.jpg');
    images[2].setAttribute('src', 'assets/images/man1.jpg');
    text.forEach(() => {
        setTimeout(() => {
            h3[0].innerHTML = "Joy"
            h3[1].innerHTML = "Sam"
            h3[2].innerHTML = "John"
            text[0].innerHTML = "Texto ao contrario para mostrar que eu mudei de texto nesta transição Texto ao contrario para mostrar que eu mudei de texto nesta transição"
        text[1].innerHTML = "Texto ao contrario para mostrar que eu mudei de texto nesta transição Texto ao contrario para mostrar que eu mudei de texto nesta transição"
        text[2].innerHTML = "Texto ao contrario para mostrar que eu mudei de texto nesta transiçãoTexto ao contrario para mostrar que eu mudei de texto nesta transição"
        }, time)
    });
    setTimeout("slide3()", time)
}
function slide3() {
    images[0].setAttribute('src', '/assets/images/woman5.jpg');
    images[1].setAttribute('src', 'assets/images/man4.jpg');
    images[2].setAttribute('src', 'assets/images/man3.jpg')
    setTimeout(() => {
        text[0].innerHTML = "Mudando de texto em 3 2 1... Mudando de texto em 3 2 1...  Mudando de texto em 3 2 1...  Mudando de texto em 3 2 1... "
    text[1].innerHTML = "Mudando de texto em 3 2 1...  Mudando de texto em 3 2 1... Mudando de texto em 3 2 1... Mudando de texto em 3 2 1... "
    text[2].innerHTML = "Mudando de texto em 3 2 1... Mudando de texto em 3 2 1... Mudando de texto em 3 2 1... Mudando de texto em 3 2 1... "
    h3[0].innerHTML = "Spencer"
        h3[1].innerHTML = "July"
        h3[2].innerHTML = "Peter"
    }, time);
    setTimeout("slide4()", time);
    
}
function slide4() {
    images[0].setAttribute('src', '/assets/images/man7.jpg');
    images[1].setAttribute('src', 'assets/images/woman6.jpg');
    images[2].setAttribute('src', 'assets/images/man6.jpg');
    setTimeout(() => {
        text[0].innerHTML = "Este é minha última transição Este é minha última transição Este é minha última transição Este é minha última transição "
        text[1].innerHTML = "Este é minha última transição Este é minha última transição Este é minha última transição Este é minha última transição "
        text[2].innerHTML = "Este é minha última transição Este é minha última transição Este é minha última transição Este é minha última transição "

        h3[0].innerHTML = "Alyssa"
        h3[1].innerHTML = "Amanda"
        h3[2].innerHTML = "Raphael"
    }, time);

    setTimeout("slide5()", time)
    
}
function slide5() {
    images[0].setAttribute('src', '/assets/images/woman8.jpg');
    images[1].setAttribute('src', 'assets/images/woman9.jpg');
    images[2].setAttribute('src', 'assets/images/man8.jpg');
    setTimeout(() => {
        text[0].innerHTML = "Art is the only serious thing in the world. And the artist is the only person who is never serious"
        text[1].innerHTML = "The world is a dangerous place to live; not because the people who are evil, but because of the people who don't do anything about it"
        text[2].innerHTML = "Polo is by far the most amazing template out thereI literally could not be happier that I chose to buy this template!"

        h3[0].innerHTML = "Ana"
        h3[1].innerHTML = "Jhenny"
        h3[2].innerHTML = "John"
    }, time)
    setTimeout("slide1()", time);
}

/*

1 - Criar um uma função *slider init)
 - Ela vai contar quantos filhos o slide-wrapper tem e salvar em uma variavel
 - Fazer um modulo 3 (%3) e contar quantas bolinhas teria
 - Fazer um floor para arredondar o número para cima.
 
 
 De tempo em tempos, usar o setInterval para dar display none or flex de três em três filhos.

*/
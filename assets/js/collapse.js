const plus = document.querySelector('.collapse-content-1 .plus'),
    plus2 = document.querySelector('.collapse-content-2 .plus'),
    plus3 = document.querySelector('.collapse-content-3 .plus');

plus.addEventListener('click', function() {
    const subHeading = document.querySelector('.collapse-content-1 .collapse__subHeading');
    const text = document.querySelector('.collapse-content-1 .collapse__text');
    plus.classList.toggle('active');
   if (plus.classList.contains('active') === true) {
       this.setAttribute('src', 'assets/images/minus.svg');
       subHeading.innerHTML = 'Lorem ipsum is the craziest text ever';
       text.innerHTML = 'Lorem ipsum is the best text that developers use, because its really easy to use and really good to make tests. Lorem ipsum is the best text that developers use. Lorem ipsum is the best text that developers use.';
} else {
    this.setAttribute('src', 'assets/images/plus.svg'); 
    text.innerHTML = '';
    subHeading.innerHTML = '';
   }
});

plus2.addEventListener('click', function() {
    const subHeading = document.querySelector('.collapse-content-2 .collapse__subHeading');
    const text = document.querySelector('.collapse-content-2 .collapse__text');
    plus2.classList.toggle('active');
   if (plus2.classList.contains('active') === true) {
       this.setAttribute('src', 'assets/images/minus.svg');
       subHeading.innerHTML = 'Lorem ipsum is the craziest text ever';
       text.innerHTML = 'Lorem ipsum is the best text that developers use, because its really easy to use and really good to make tests. Lorem ipsum is the best text that developers use. Lorem ipsum is the best text that developers use.';
} else {
    this.setAttribute('src', 'assets/images/plus.svg'); 
    text.innerHTML = '';
    subHeading.innerHTML = '';
   }
});

plus3.addEventListener('click', function() {
    const subHeading = document.querySelector('.collapse-content-3 .collapse__subHeading');
    const text = document.querySelector('.collapse-content-3 .collapse__text');
    plus3.classList.toggle('active');
   if (plus3.classList.contains('active') === true) {
       this.setAttribute('src', 'assets/images/minus.svg');
       subHeading.innerHTML = 'Lorem ipsum is the craziest text ever';
       text.innerHTML = 'Lorem ipsum is the best text that developers use, because its really easy to use and really good to make tests. Lorem ipsum is the best text that developers use. Lorem ipsum is the best text that developers use.';
} else {
    this.setAttribute('src', 'assets/images/plus.svg'); 
    text.innerHTML = '';
    subHeading.innerHTML = '';
   }
});



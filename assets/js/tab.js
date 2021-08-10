const tabHeadings = document.querySelectorAll('.tab-section__headings p');

tabHeadings.forEach((item) => {
    item.addEventListener('click', function() {
        tabHeadings.forEach((removeClass) => {
          removeClass.classList.remove('active')
         })
         this.classList.add('active');
    })
    if (item[3]) {
        this.style.borderTop = "transparent";
    }
})
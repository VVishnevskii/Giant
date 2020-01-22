let blockPrice = document.querySelectorAll('.prices__block');
let titlePrice = document.querySelectorAll('.prices__price');
let btnPrice = document.querySelectorAll('.prices__buy-now');

console.log(blockPrice);

for (let i = 0; i < blockPrice.length; i++) {
    blockPrice[i].addEventListener('mouseover', function() {
        blockPrice[i].classList.add('prices__block--active');
        titlePrice[i].classList.add('prices__price--active');
        btnPrice[i].classList.add('prices__buy-now--active');
    })
    
    blockPrice[i].addEventListener('mouseout', function() {
        blockPrice[i].classList.remove('prices__block--active');
        titlePrice[i].classList.remove('prices__price--active');
        btnPrice[i].classList.remove('prices__buy-now--active');
    })
}


let buttonPageHeader = document.querySelector('.main-nav__close-btn');
let buttonPageHeaderInner = document.querySelector('.main-nav__list-inner');

buttonPageHeader.addEventListener('click', function() {
    buttonPageHeader.classList.toggle('main-nav__close-btn--active');
    buttonPageHeaderInner.classList.remove('main-nav__list-inner-hidden');
})
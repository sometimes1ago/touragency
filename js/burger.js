/* console.log($('.first-item'));
console.log($('.first-item'));
$(document).ready(function() {
    $('.burger-opener').click(function(event) {
        $('.burger').toggleClass('active');
        $('.burger-opener').toggleClass('burger-active');
        $('.first-item').toggleCLass('animated-item__first');
        $('.second-item').toggleCLass('animated-item__second');
        $('.thrid-item').toggleCLass('animated-item__thrid');
        $('.fourth-item').toggleCLass('animated-item__fourth');
        $('.fifth-item').toggleCLass('animated-item__fifth');
        $('.tour').toggleClass('hided');
    });
}); */

function openAndAnimate() {
    let opener = document.querySelector('.burger-opener');
    opener.addEventListener('click', ()=>{
        let burger = document.querySelector('.burger').classList.toggle('active');
        let burgerOpener = document.querySelector('.burger-opener').classList.toggle('burger-active');
        let firstItem = document.querySelector('.first-item').classList.toggle('animated-item__first');
        let secondItem = document.querySelector('.second-item').classList.toggle('animated-item__second');
        let thridItem = document.querySelector('.thrid-item').classList.toggle('animated-item__thrid');
        let fourthItem = document.querySelector('.fourth-item').classList.toggle('animated-item__fourth');
        let fifthItem = document.querySelector('.fifth-item').classList.toggle('animated-item__fifth');
        let tour = document.querySelector('.tour').classList.toggle('hided');
    });
}

openAndAnimate();
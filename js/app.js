let hamburger = document.querySelector('.hamburger i');
let menu = document.querySelector('.main ul');
let body = document.querySelector('body')

hamburger.addEventListener('click', abrirCerrarMenu);

function abrirCerrarMenu(){
    menu.classList.toggle('show');
    body.classList.toggle('scroll')
    hamburger.classList.toggle('fa-times')
}
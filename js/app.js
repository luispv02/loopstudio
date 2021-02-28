let hamburger = document.querySelector('.hamburger i');
let menu = document.querySelector('.main ul');
let body = document.querySelector('body')

hamburger.addEventListener('click', () => {
    menu.classList.toggle('show');
    body.classList.toggle('scroll')
    hamburger.classList.toggle('fa-times')
});


/**
let ubicacionPrincipal = window.pageYOffset;//Ubicacion Principal
console.log(ubicacionPrincipal)

window.addEventListener('scroll', () => {
    let ubicacionScroll = window.pageYOffset;//Ubicacion que se hace con el scroll
    console.log(ubicacionScroll)
    
    //Si la ubicacion principal es mayor o igual  a la del scroll. La ubicacion cambia dependiendo de en que parte de la pagina nos encontremos
    
    if(ubicacionPrincipal >= ubicacionScroll){
        document.querySelector('.header-flex').style.marginTop = '0';
        document.querySelector('.header-flex').style.zIndex = '100';
    }else{
        document.querySelector('.header-flex').style.marginTop = '-100%';
    }
    
    ubicacionPrincipal = ubicacionScroll;
})
**/

//para abrir side MENU
let abrir = document.getElementById('menu-logo');
let nav = document.getElementById('menu');

abrir.addEventListener('click', function() {
    nav.classList.toggle('active')
} )


//para cerrar side MENU
let cerrar = document.getElementById('menu-logo-cerrar');

cerrar.addEventListener('click', function () {
    nav.classList.toggle('active');
})


//para abrir CATEGORIA
let opened = document.getElementById('menu-categoria');
let categoria = document.getElementById('menu3');

opened.addEventListener('click', function() {
    categoria.classList.toggle('active2')
} )





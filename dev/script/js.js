/******************************** Burger Menu ******************************/ 

var burger = document.querySelector('.btn-menu');
var mynav = document.querySelector('.black-sidebar');
var mylink = document.querySelector('.nav-links');
var overlay = document.querySelector('.overlay-sidebar');
var btnmenu = document.querySelector('.btn-menu');
var btnxmark = document.querySelector('.btn-xmark')

/* ouvrir la fênetre */

burger.addEventListener('click', hasClick);

    function hasClick() {
        mynav.classList.toggle("active");
        mylink.classList.toggle("active");
        overlay.classList.toggle("active");
        btnmenu.classList.toggle("active");
        btnxmark.classList.toggle("active");
    }
    
/*fermer la fenêtre */

overlay.addEventListener('click', hasClick2);

function hasClick2 () {
    mynav.classList.remove("active");
    mylink.classList.remove("active");
    overlay.classList.remove("active");
    btnmenu.classList.remove("active");
    btnxmark.classList.remove("active");
}


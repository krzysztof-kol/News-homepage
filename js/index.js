let isMenuActive = false;

let menuMobile = document.querySelector(".mobile__menu");
let menuToggler = document.querySelector(".menu__toggler");
let blackTransparency = document.querySelector(".black__transparency");

function openMenu() {
    if (isMenuActive === false)  {
        menuMobile.classList.add('active');
        menuToggler.classList.add('active');
        blackTransparency.classList.add('active');
        isMenuActive = true;
    } 

   else {
        menuMobile.classList.remove('active');
        menuToggler.classList.remove('active');
        blackTransparency.classList.remove('active');
        isMenuActive = false;
    }
}




menuToggler.addEventListener('click', openMenu);

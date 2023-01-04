let hamburgerMenu = document.querySelector('[data-menu]');
let menuNav = document.querySelector('[data-nav]');
let menuLogo = document.querySelector('[data-logo]');
let menuAside = document.querySelector('[data-aside]');
let htmlBody = document.querySelector('[data-body]');
let menuLinks = document.querySelectorAll('[data-link]');

hamburgerMenu.addEventListener('click', menuState);

function menuState() {
    if(menuNav.classList.contains('-active')){
        menuNav.classList.remove('-active');
        menuLogo.classList.remove('-hide');
        htmlBody.classList.remove('-scroll');
        menuAside.classList.remove('-activeAside');
        menuLinks.forEach(link => {
            link.classList.remove('-margin');
        })
        return;
    }
    menuLogo.classList.add('-hide');
    htmlBody.classList.add('-scroll');
    menuAside.classList.add('-activeAside');
    menuNav.classList.add('-active');
    menuLinks.forEach(link => {
        link.classList.add('-margin');
    })
}
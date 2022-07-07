const menu = document.querySelector("#mobile-menu")
const menuLinks = document.querySelector(".navbar_menu")
const body = document.querySelector("body")

//DISPLAY MOBILE MENU
const mobileMenu = () => {
    menu.classList.toggle("is-active")
    menuLinks.classList.toggle("active")
    body.classList.toggle("active")
}

menu.addEventListener("click", mobileMenu)
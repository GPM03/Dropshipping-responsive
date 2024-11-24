const navButton = document.querySelector(".nav__button");
const navUl = document.querySelector(".nav__ul");
const closeAnimation = document.querySelector(".svg-close-animation");
const openAnimation = document.querySelector(".svg-open-animation");
const body = document.body;

document.addEventListener("click", e => {
    if (navButton.contains(e.target) && !navUl.classList.contains("show")) {
        navUl.classList.add("show");
        openAnimation.beginElement();
    } else if (!navUl.contains(e.target) && navUl.classList.contains("show")) {
        navUl.classList.remove("show");
        closeAnimation.beginElement();
    }
});
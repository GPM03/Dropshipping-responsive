const navButton = document.querySelector(".nav__button");
const navUl = document.querySelector(".nav__ul");
const test1 = document.querySelector(".svg-close-animation");
const test2 = document.querySelector(".svg-open-animation");
const body = document.body;

document.addEventListener("click", e => {
    if (navButton.contains(e.target) && !navUl.classList.contains("show")) {
        navUl.classList.add("show");
        test2.beginElement();
    } else if (!navUl.contains(e.target) && navUl.classList.contains("show")) {
        navUl.classList.remove("show");
        test1.beginElement();
    }
});
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");

const navElems = [overlay , navOpenBtn , navClosedBtn];

for (let i=0; i < navElems.length; i++) {
    navElems[i].addEventListener("click" , function () {
        nav.bar.classList.toggle("active");
        overlay.classList.toggle("active");
    });
}

 
const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
    if (this.window.scrollY >= 80) {
        header.classList.add("active");
        goTopBtn.classList.add("active");
    } else {
        header.classList.remove("active");
        goTopBtn.classList.remove("active");
    }
});
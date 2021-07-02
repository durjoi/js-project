const toggle = document.querySelector(".nav-toggle");

const navbar = document.querySelector(".nav");


toggle.addEventListener("click", function () {
    console.log(navbar.classList.contains('show'));
    if(navbar.classList.contains('show')) {
        navbar.classList.remove('show');
    } else {
        navbar.classList.add('show');
    }
});
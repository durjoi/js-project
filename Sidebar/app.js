const sidebar = document.querySelector('.sidebar');
const toggle = document.querySelector('.sidebar-toggle');

const close = document.querySelector('.times-btn');

toggle.addEventListener("click", function () {
    if(sidebar.classList.contains('show')) {
        sidebar.classList.remove('show');
    } else {
        sidebar.classList.add('show');
    }
});

close.addEventListener("click", function() {
    sidebar.classList.remove('show');
});
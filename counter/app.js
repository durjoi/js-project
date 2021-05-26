let count = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn) {
    btn.addEventListener("click", function(e) {
        const style = e.currentTarget.classList;
        if(style.contains("decrease")) {
            count--;
        }
        else if(style.contains("increase")) {
            count++;
        }
        else if(style.contains("reset")) {
            count = 0;
        }

        if(count < 0) {
            value.style.color = "#f00";
        }
        else if(count > 0) {
            value.style.color = "#0f0";
        } 
        else if(count == 0) {
            value.style.color = "#222";
        }

        value.textContent = count;
    });
});
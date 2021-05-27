const reviews = [
    {
        id: 1,
        name: "John Eric",
        title: "software developer",
        img: "profile1.jpg",
        review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia provident magni non ipsam voluptate omnis eligendi ab exercitationem quod quidem iste, sequi asperiores vero, saepe ut odio tempore accusamus vel." 
    },
    {
        id: 2,
        name: "Susan Smith",
        title: "web developer",
        img: "profile3.jpg",
        review: "Lorem ipsum dolor sit, a provident magni non ipsam voluptate omnis eligendi ab exercitationem quod quidem iste, sequi asperiores vero, saepe ut odio tempore accusamus vel." 
    },
    {
        id: 3,
        name: "Jonathan Huge",
        title: "UX/UI Designer",
        img: "profile2.jpg",
        review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia  amet consectetur adipisicing elit. Mollitia  provident magnre accusamus vel." 
    },
    {
        id: 4,
        name: "Sara jones",
        title: "digital marketer",
        img: "profile2.jpg",
        review: "adipisicing elit. Mollitia provident magni non ipsam voluptate omnis  Lorem ipsum elit. Mollitia provident magni non ipsam voluptate omnis eligendi ab exercitationem quod quidem iste, sequi asperiores vero, saepe ut odio tempore accusamus vel." 
    },
];


const img = document.getElementById("img");
const author = document.getElementById("name");
const title = document.getElementById("title");
const review = document.getElementById("review");

const prevBtn = document.querySelector(".preview-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let currentItem = 3;

window.addEventListener("DOMContentLoaded", function() {
    showPerson();
});

function showPerson() {
    const item = reviews[currentItem];

    img.src = item.img;
    author.textContent = item.name;
    title.textContent = item.title;
    review.textContent = item.review;
}

prevBtn.addEventListener("click", function() {
    if(currentItem == 0) {
        currentItem = reviews.length - 1;
    } else {
        currentItem--;
    }

    showPerson();
    
});

nextBtn.addEventListener("click", function() {
    if(currentItem == reviews.length - 1) {
        currentItem = 0;
    } else {
        currentItem++;
    }

    showPerson();
    
});

randomBtn.addEventListener("click", function(){
    currentItem = getRandomNumber();

    showPerson();
})

function getRandomNumber() {
    return Math.floor(Math.random() * reviews.length);
}

const cards = ["AT", "2T", "3T", "4T", "5T", "6T", "7T", "8T", "9T", "10T", "JT", "QT", "KT", "AW", "2W", "3W", "4W", "5W", "6W", "7W", "8W", "9W", "10W", "JW", "QW", "KW", "AS", "2S", "3S", "4S", "5S", "6S", "7S", "8S", "9S", "10S", "JS", "QS", "KS", "AD", "2D", "3D", "4D", "5D", "6D", "7D", "8D", "9D", "10D", "JD", "QD", "KD"];

const cardOne = document.querySelector(".card-one");
const cardTwo = document.querySelector(".card-two");
let scoreCardOne = document.querySelector(".score-left");
let scoreCardTwo = document.querySelector(".score-right");

scoreCardOne.textContent = 0;
scoreCardTwo.textContent = 0;

// let chosenCardOne = cards[Math.ceil(Math.random()*52)-1];
// let chosenCardTwo = cards[Math.ceil(Math.random()*52)-1];

function render() {
    let chosenCardOne = cards[Math.ceil(Math.random()*52)-1];
    if(chosenCardOne.charAt(chosenCardOne.length-1)=="S") {
        cardOne.innerHTML = chosenCardOne.substring(0, chosenCardOne.length-1) + '<i class="fas fa-heart"></i>';
    } else if(chosenCardOne.charAt(chosenCardOne.length-1)=="D") {
        cardOne.innerHTML = chosenCardOne.substring(0, chosenCardOne.length-1) + '<i class="fas fa-square"></i>';
    } else if(chosenCardOne.charAt(chosenCardOne.length-1)=="W") {
        cardOne.innerHTML = chosenCardOne.substring(0, chosenCardOne.length-1) + '<i class="far fa-heart"></i>';
    } else {
        cardOne.innerHTML = chosenCardOne.substring(0, chosenCardOne.length-1) + '<i class="fab fa-canadian-maple-leaf"></i>'
    };
    let chosenCardTwo = cards[Math.ceil(Math.random()*52)-1];
    if(chosenCardTwo.charAt(chosenCardTwo.length-1)=="S") {
        cardTwo.innerHTML = chosenCardTwo.substring(0, chosenCardTwo.length-1) + '<i class="fas fa-heart"></i>';
    } else if(chosenCardTwo.charAt(chosenCardTwo.length-1)=="D") {
        cardTwo.innerHTML = chosenCardTwo.substring(0, chosenCardTwo.length-1) + '<i class="fas fa-square"></i>';}
        else if(chosenCardTwo.charAt(chosenCardTwo.length-1)=="W") {
        cardTwo.innerHTML = chosenCardTwo.substring(0, chosenCardTwo.length-1) + '<i class="far fa-heart"></i>';
    } else {
        cardTwo.innerHTML = chosenCardTwo.substring(0, chosenCardTwo.length-1) + '<i class="fab fa-canadian-maple-leaf"></i>'
    };
    valueSetter(chosenCardOne, chosenCardTwo);
}

function valueSetter(one, two) {
    chosenCardOne = one;
    chosenCardTwo = two;
    if(chosenCardOne.includes("A")) {
        chosenCardOne = 14;
    } else if (chosenCardOne.includes("K")) {
        chosenCardOne = 13;
    } else if (chosenCardOne.includes("Q")) {
        chosenCardOne = 12;
    } else if (chosenCardOne.includes("J")) {
        chosenCardOne = 11;
    } else {
        chosenCardOne = chosenCardOne.substring(0, chosenCardOne.length-1);
    }
    if(chosenCardTwo.includes("A")) {
        chosenCardTwo = 14;
    } else if (chosenCardTwo.includes("K")) {
        chosenCardTwo = 13;
    } else if (chosenCardTwo.includes("Q")) {
        chosenCardTwo = 12;
    } else if (chosenCardTwo.includes("J")) {
        chosenCardTwo = 11;
    } else {
        chosenCardTwo = chosenCardTwo.substring(0, chosenCardTwo.length-1);
    }
    scoreCounter(chosenCardOne, chosenCardTwo);
}

function scoreCounter(one, two) {
    chosenCardOne = one;
    chosenCardTwo = two;
    if(+chosenCardOne>+chosenCardTwo) {
        scoreCardOne.textContent++;
    } else if (chosenCardOne<chosenCardTwo) {
        scoreCardTwo.textContent++
    }
}

window.addEventListener("keydown", (e) => {
    if(e.keyCode === 32) {
        render();
    }
})
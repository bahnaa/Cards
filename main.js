const cards = ["AT", "2T", "3T", "4T", "5T", "6T", "7T", "8T", "9T", "10T", "JT", "QT", "KT", "AW", "2W", "3W", "4W", "5W", "6W", "7W", "8W", "9W", "10W", "JW", "QW", "KW", "AS", "2S", "3S", "4S", "5S", "6S", "7S", "8S", "9S", "10S", "JS", "QS", "KS", "AD", "2D", "3D", "4D", "5D", "6D", "7D", "8D", "9D", "10D", "JD", "QD", "KD"];

const cardOne = document.querySelector(".card-one");
const cardTwo = document.querySelector(".card-two");
let scoreCardOne = document.querySelector(".score-left");
let scoreCardTwo = document.querySelector(".score-right");
const playAgainBtn = document.querySelector(".repeat-game");

scoreCardOne.textContent = 0;
scoreCardTwo.textContent = 0;

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
        scoreCardOne.style.transform="scale(1.3)";
        scoreCardTwo.style.transform="scale(1)";
        checkWinner();
    } else if (+chosenCardOne<+chosenCardTwo) {
        scoreCardTwo.textContent++
        scoreCardOne.style.transform="scale(1)";
        scoreCardTwo.style.transform="scale(1.3)";
        checkWinner();
    }
}

function checkWinner() {
    if(+scoreCardOne.textContent===10 ) {
            window.removeEventListener("keydown", spaceStartHandler);
            cardOne.style.boxShadow = "2px 2px 5px 0.5px green";
            cardOne.style.border = "3px solid green";
            cardOne.style.transform = "translateY(-32px) scale(1.2)";
            cardOne.style.transition = "1s";
            playAgainBtn.classList.add("visible");
            cardOne.classList.add("winner")
            return;
        }
    if(+scoreCardTwo.textContent===10) {
            window.removeEventListener("keydown", spaceStartHandler);
            cardTwo.style.boxShadow = "2px 2px 5px 0.5px green";
            cardTwo.style.border = "3px solid green";
            cardTwo.style.transform = "translateY(-32px) scale(1.2)";
            cardTwo.style.transition = "1s";
            playAgainBtn.classList.add("visible");
            cardTwo.classList.add("winner")
            return;
        }
}

function spaceStartHandler(e) {
    if(e.keyCode === 32) {
        render();
    }
}

window.addEventListener("keydown", spaceStartHandler);
playAgainBtn.addEventListener("click", () => {
    location.reload();
});
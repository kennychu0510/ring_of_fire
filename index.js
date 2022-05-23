const drawBtn = document.querySelector("#draw");
const card = document.querySelector("#card");
const cardImg = document.querySelector("#card img");
const cardCount = document.querySelector("#card-count span");
const CARDS = [0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10, 11, 11, 11, 11, 12, 12, 12, 12, 13, 13, 13, 13];
console.log();
let shuffledCARDS = CARDS.sort((a, b) => 0.5 - Math.random());
console.log(shuffledCARDS);
drawBtn.addEventListener("click", () => {
    let card;
    if (shuffledCARDS.length === 0) {
        cardImg.src = "beer.png";
        return;
    }
    if (Math.random() > 0.5) {
        card = shuffledCARDS.pop();
    } else {
        card = shuffledCARDS.shift();
    }
    cardImg.src = `cards/${card}.jpeg`;
    cardCount.textContent = shuffledCARDS.length;
});

const drinker = document.querySelector("#drinker");
const crazy = document.querySelector("#crazy");
const toilet = document.querySelector(".toilet");
const toiletOwner = toilet.querySelector(".toilet-owner");
const joker = document.querySelector(".joker");
const jokerOwner = joker.querySelector(".joker-owner");

drinker.addEventListener("click", () => {
    drinker.querySelector("td:last-child").textContent = window.prompt("陪酒員", "");
});

crazy.addEventListener("click", () => {
    crazy.querySelector("td:last-child").textContent = window.prompt("痴線佬", "");
});

toilet.querySelector("img").addEventListener("click", () => {
    toiletOwner.textContent = window.prompt("🚽", toiletOwner.textContent);
});

joker.querySelector("img").addEventListener("click", () => {
    jokerOwner.textContent = window.prompt("🃏", jokerOwner.textContent);
});

console.log("Page loaded!")

// Tekst die wordt verandert
const header = document.querySelector("h1")
const subText = document.querySelector("h2")

// Knoppen die waardes aanpassen
const plusKnop = document.querySelector("#plus")
const minKnop = document.querySelector("#min")
const mysteryKnop = document.querySelector("#mystery")

// Beginnend getal
let getal = 0

// Verhoogt het getal met 1
function verhoogGetal() {
    getal = getal + 1
    header.textContent = getal
}

// Verlaagt het getal met 1
function verlaagGetal() {
    getal = getal - 1
    header.textContent = getal
}

// Geheime nummer tussen 1 en 5
function mysteryGetal() {
    let randomNumber = Math.random() * 5 + 1
    randomNumber = Math.round(randomNumber)
    getal = getal + randomNumber
    header.textContent = getal
    subText.textContent = randomNumber
}

// Event listeners die op de "click" event "x-Getal" uitvoeren
plusKnop.addEventListener("click", verhoogGetal)
minKnop.addEventListener("click", verlaagGetal)
mysteryKnop.addEventListener("click", mysteryGetal)
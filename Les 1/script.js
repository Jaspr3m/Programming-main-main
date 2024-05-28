console.log("Hallo Wereld!")

// Maak variabelen aan
const button = document.querySelector("button")
let bericht = "Hello world!"
let kop = document.querySelector("h1")

// Controlevraag: Waarom kun je voor deze button const gebruiken i.p.v. let?
// Antwoord: De button wil je één VASTE waarde toelaten, i.p.v. dat je het continu wilt veranderen.
// Je wilt bijvoorbeeld dat het 1 waarde heeft.

function veranderKop() {
    console.log("Click.")
    kop.textContent = bericht
}

button.addEventListener("click", veranderKop)
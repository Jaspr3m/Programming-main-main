console.log("Page loaded!")

// KNOPPEN ----------
// Knoppen die bestaan
const thinCrustKnop = document.querySelector("button#thin-crust-button")
const thickCrustKnop = document.querySelector("button#thick-crust-button")

// Img's die van de overview moeten veranderen
const crustImg = document.querySelector("img#crust-img")

// FUNCTIONS ----------
// Function die ervoor zorgt dat de thick crust naar thin verandert
function selecteerThinCrust() {
    console.log("selecteerThinCrust()")
    // crustImg.classList.add("disable");
    document.getElementById("crust-img").src = "img/thin-crust.png";
}

function selecteerThickCrust() {
    console.log("selecteerThickCrust()")
    // crustImg.classList.remove("disable");
    document.getElementById("crust-img").src = "img/thick-crust.png";
}

thinCrustKnop.addEventListener("click", selecteerThinCrust)
thickCrustKnop.addEventListener("click", selecteerThickCrust)




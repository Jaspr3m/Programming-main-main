
console.log("Pagina ingeladen!")

function rekensomUitvoeren(som, naam) {
    somTekst = document.querySelector("h2")
    somTekst.textContent = som + ". Goed gedaan, " + naam + "!"
 }

rekensomUitvoeren(4*4, "Jasprem")
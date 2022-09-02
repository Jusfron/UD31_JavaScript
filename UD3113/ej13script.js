const elP = document.getElementsByTagName("p");
const el2Taula = document.getElementsByClassName("2par");

for(let i = 0; i < elP.length; i++){
    elP[i].addEventListener("click", avisPar, false);
}
for(let i = 0; i < el2Taula.length; i++){
    el2Taula[i].addEventListener("click", avis2Taula, false);
}

function avisPar(){
    alert("Ep! Has clicat a un paragraf!");
}

function avis2Taula(){
    alert("C-Com!?!? Tambe has clicat a un paragraf de la segona taula!");
}
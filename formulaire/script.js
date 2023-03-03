
let button = document.querySelector(".button");
let form = document.querySelector("form");

function isEmpty(){
let prenom = document.querySelector(".inputprenom").value;
let nom = document.querySelector(".nom").value;
let selection = document.querySelector(".selection").value;
let description = document.querySelector(".description").value;

    if(!prenom) {
         alert( "Le champ Prenom est vide!" );}
    if(!nom) {
        alert( "Le champ nom est vide!" );}
    if(!description) {
        alert( "Le champ description est vide!" );}
}
    
function isString(){
    let prenom = document.querySelector(".inputprenom").value
    let devilregex = /\d/g;
    let nom = document.querySelector(".nom").value;
    let selection = document.querySelector(".selection").value;
    let description = document.querySelector(".description").value;
    
        if(prenom.match(devilregex)){console.log(prenom)
            alert("LES VALEURS NUMERIQUE NE SONT PAS AUTORISéES DANS PRENOM");
        }

        if(nom.match(devilregex)){

                alert("LES VALEURS NUMERIQUE NE SONT PAS AUTORISéES DANS NOM");}
             
        if(description.match(devilregex)){
                alert("LES VALEURS NUMERIQUE NE SONT PAS AUTORISéES DANS DESCRIPTION");}
}

form = document.querySelector("form");

form.addEventListener("submit",function(event){
    event.preventDefault();
});

form.addEventListener("submit",function(){
    let fiche = document.querySelector("section");
    let prenom = document.querySelector(".inputprenom").value
    let devilregex = /\d/g;
    let nom = document.querySelector(".nom").value;
    let selection = document.querySelector(".selection").value;
    let description = document.querySelector(".description").value;
    section.innerHTML =`<p>${prenom}</p>`;
    console.log("prenom")
});

      
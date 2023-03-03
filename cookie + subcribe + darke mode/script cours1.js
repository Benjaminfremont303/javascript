document.write("bonjour les gens");
window.alert("bonjour les gens");
console.log("bonjour les gens");
let boite = "un truc";
let valeur = "nom", valeur1 = "nom1", valeur3 = "valeur";
document.write(boite);
document.write(valeur);
boite = "deux truc"

let prenom = "benjamin", nom = "moi", age = "très vieux", profession = "full stack web", permisdeconduire = "2015", hobbie = "javascript";
document.write("prenom:"+ prenom +" "+ "<br>" + "nom:" + nom + "age" + age  );

let nbr = 22, nbr2 = 47, nbr3 = 13;
let r = nbr + nbr2 + nbr3;
let taxe = 0.2 * r;
console.log( taxe + r);
let nomvar ;

function bonjour(nomvar, nom){
    document.write("bonjour" + nomvar + nom);
}

bonjour("");
window.confirm("nbifkjhfikoejhfiejifjosqejfolemjflmfjellorem");
prompt(nbr);

function display(){

    let prenom = prompt("prenom et nom");

    let nom = prompt("prenom et nom");

    document.write(prenom + nom);
}

function add (){
    let nbr1c = prompt("le premier nombre");
    let nbr1 = parseInt(nbr1c);

    let op = prompt("opérateur");

    let nbr2c = prompt("le deuxieme nombre");
    let nbr2 = parseInt(nbr2c);

    let r = nbr1  + nbr2;
     document.write("resultat"+ (nbr1 + op + nbr2) );

}


function age(){
    let age = prompt("ton age ?");
if (age == 18){
    document.write("tu peux rentrer dans le bar");
}
else if(age <= 17){
    document.write("tu ne peux pas renter dans le bar");
}
else{
    document.write("tu es vieux");
}
 age >= 30 ? document.write("tu es foutu") : document.write("ça va tu as le temps.");

}

function gage(){

    let gage = prompt("bleu, vert rouge, orange ?");
switch(gage){
    case "bleu":
    document.write("aujourd'hui la chance sera avec toi");
    break;

    case "vert":
        document.write("tu tomberas sur quelqu'un de plus grand que toi aujourd'hui");
        break;

        case "rouge":
            document.write("si la somme des lettres de ton premon est premier ne joue pas au loto");
            break;
            case "orange":
                document.write("tu vas rencontrer une personne en sortant de chez toi");
                break;
                default:
                    document.write("je ne sais pas j'ai pas compris");
}


}
function factorielle (){

let r = prompt("valeur?");


        for (j=1; j<=r; j++){
            let valeur = r * j;
           
    
}document.write(valeur);
}
let superpersonne = [1,2,3,5,6,9,4,7,5,1,5,4,5,4,5,4,52,5,4,5,5,54];

for(i=0; i<superpersonne.length; i++){
    if (i <= 3){
    superpersonne[i] = "coucou";
    }document.write();

}
let superpersonne2 = ["un", "deux", "trois", "quatre", "cinq" ];


for(superpersonne22 of superpersonne2){
    document.write(superpersonne2);
   let i = 0;
document.write(superpersonne2);
}

let voyages = new Map();
console.log(typeof voyages);
voyages.set("France", "Calas");
voyages.set("USA", "LA");
voyages.set("UK", "London");
voyages.set("Italie", "Rome");
console.log(voyages.size);

let eleves = new Set();
eleves.add("yacine","dupont");
eleves.add("julien");

for (eleve of eleves){
document.write(eleve)}

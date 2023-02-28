# javascript
les tableaux map

let voyages = new Map();
console.log(typeof voyages);
voyages.set("France", "Calas");
voyages.set("USA", "LA");
voyages.set("UK", "London");
voyages.set("Italie", "Rome");
console.log(voyages.size);
------------------------------------------------------------
les tableaux set 

let eleves = new Set();
eleves.add("yacine","dupont");
eleves.add("julien");

for (eleve of eleves){
document.write(eleve)}
-------------------------------------------------------------
les tableaux classique 

let tableau = [1,2,3,5,6,9,4,7,5,1,5,4,5,4,5,4,52,5,4,5,5,54];

for(i=0; i<tableau.length; i++){
 document.write(tableau);
}
---------------------------------------------------------------
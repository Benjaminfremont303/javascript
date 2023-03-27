let searchappear = document.querySelector("form");
let loupe = document.querySelector(".loupe");
let search = document.querySelector("input");
let aff = document.querySelector(".afficher");
let appear = document.querySelector(".appear");
let cross = document.querySelector(".cross")


loupe.addEventListener("click",function(){
    searchappear.classList.toggle('form2');
    appear.classList.toggle("appear2");
    cross.classList.toggle("cross2")
});
cross.addEventListener("click", function(){
    appear.classList.toggle("appear");
});
function Legumes(id,nom,description,saison){
    this.id = id;
    this.nom = nom;
    this.description = description;
    this.saison = saison;
}

let bettrave = new Legumes("1","bettrave", "decription","hiver");
let ail = new Legumes("2","ail", "decription","hiver");
let Cardon = new Legumes ("3","Cardon","description","hiver");

let data = [bettrave,ail,Cardon];
    // prevent.preventDefault();

search.addEventListener("keyup", function (){
    find(search, data);
});

function find(search, data){ 
document.querySelector(".afficher").innerHTML = ``;
if (search.value.length > 2){

        for (d of data) {

        if(d.nom.includes(search.value) || (d.saison.includes(search.value)) ){
                    aff.innerHTML += `<p>${d.nom} <br> ${d.description} <br> ${d.saison}</p>`;
                }
        }
    }
}

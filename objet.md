let personne ={
        prenom: "paul",
        age: 32,
        sePresenter: function(){
            return this.prenom +"a"+this.age+"ans";
        }
}
console.log(personne.sePresenter())

-----------------------------------------
function Personne(nom, prenom, age ,profession){
    this.nom = nom;
    this.prenom = prenom;
    this.age = age;
    this.profession = profession;
}
function Personne3(){
    this.nom = prompt("ton nom");
    this.prenom = prompt("ton prenom");
    this.age = prompt("ton age");
    this.pro = prompt("ta profession");
 new Personne("votre nom :"+nom+"votre prenom"+prenom+"votre age"+age+"votre profession :"+pro);

document.write("votre nom :"+nom+"votre prenom"+prenom+"votre age"+age+"votre profession :"+pro);

}
-------------------------------------------
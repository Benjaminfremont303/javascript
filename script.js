// let personne ={
// //         prenom: "paul",
// //         age: 32,
// //         sePresenter: function(){
// //             return this.prenom +"a"+this.age+"ans";
// //         }
// // }
// // console.log(personne.sePresenter());

// function Personne(nom, prenom, age ,profession){
//     this.nom = nom;
//     this.prenom = prenom;
//     this.age = age;
//     this.profession = profession;
// }

// let personne1 = new Personne("dupont", "lajoie", 30, "developpeur");
// let personne2 = new Personne("Martin", "Marie", 25, "designer");



// let superpersonne = [personne1, personne2];

// for (let i = 0; i<superpersonne.length; i++ ){
//     document.write("age:"+superpersonne[i].age) ;
// }
// function Personne3(){
//     this.nom = prompt("ton nom");
//     this.prenom = prompt("ton prenom");
//     this.age = prompt("ton age");
//     this.pro = prompt("ta profession");
//  new Personne("votre nom :"+nom+"votre prenom"+prenom+"votre age"+age+"votre profession :"+pro);

// document.write("votre nom :"+nom+"votre prenom"+prenom+"votre age"+age+"votre profession :"+pro);

// }

// let superpersonne = [Personne3];
// for (let i = 0; i<superpersonne.length; i++ ){
//     document.write("votre nom :"+superpersonne.nom+"votre prenom"+superpersonne[i].prenom+"votre age+"+superpersonne[i].age+"votre profession :"+superpersonne[i].profession);

// }


// let test = "test";
// document.write(test.charAt('2'));
let cookie = document.querySelector(".cookies");
console.log(cookie)

let buttons = document.getElementById("button");
console.log(buttons);
    

buttons.addEventListener("click",function(){
//    cookie.style.opacity="0";
cookie.classList.toggle("divchange");
})
let texte = document.querySelector("p");

buttons.addEventListener("click",function(){
 texte.innerText="frkflrlle";
})

let abo = document.querySelector(".abo");
let imga = document.querySelector(".fa-circle-up");
let control = document.querySelector(".soleil");
let body = document.querySelector("body");

abo.addEventListener("click",function(){
    abo.classList.toggle("divchange3");
    imga.classList.toggle("divchange2");
})
control.addEventListener("click",function(){
    control.classList.toggle("soleil2");   
    body.classList.toggle("soleil2");
 })

 abo.addEventListener("click",function(){
 let text = document.querySelector(".abo");
 if(text.value =="abonnez-vous"){
       text.value ="Merci";
    }
 else if(text.value =="Merci"){
       text.value ="abonnez-vous";
    }
 });

 


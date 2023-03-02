
// let multi = (number1, number2) => console.log (number1 * number2);
// multi(4,5);

// // const element = document.getElementById('element');
// // element.addEventListener('mousemove', () => console.log("element survole"));
// let boite = document.querySelector("body");
// let lien = document.createElement("a");
// boite.appendChild(lien);

// lien.innerText="lien";
// lien.style.color="grey";





 
//     // let nav = document.createElement("nav");
//     // let menu1 = document.createElement("ul");
//     // let sousmenu = document.createElement("li");

//     // boite.append(nav);
//     // nav.appendChild(menu1);
//     // menu1.appendChild(sousmenu);
//     // sousmenu.innerText="blabla";
//     let head = document.querySelector("header");

    
// const menu0 = "menu1";
// const menu2 = "menu2";
// head.style.display="flex";

//     head.innerHTML =`<ul>
//     <li><p><a href="">${menu0}</a></p></li>
//     <li><p><a href="">${menu2}</a></p></li>
//     <li><p><a href="">${menu0}</a></p></li>
//     <li><p><a href="">${menu2}</a></p></li>
//     <li><p><a href="">${menu0}</a></p></li>
//   </ul>
//   <ul>
//   <li><p><a href="">${menu0}</a></p></li>
//     <li><p><a href="">${menu2}</a></p></li>
//     <li><p><a href="">${menu0}</a></p></li>
//     <li><p><a href="">${menu2}</a></p></li>
//     <li><p><a href="">${menu0}</a></p></li>
//   </ul>
//   <ul>
//   <li><p><a href="">${menu0}</a></p></li>
//     <li><p><a href="">${menu2}</a></p></li>
//     <li><p><a href="">${menu0}</a></p></li>
//     <li><p><a href="">${menu2}</a></p></li>
//     <li><p><a href="">${menu0}</a></p></li>
//   </ul> `


// const titre = "Voici le produit super";
// const description = "voici la description";
// const prix = "68 euros";
// const  disponibilité = "c'est dispo";

// boite.innerHTML += `<article>
// <h1> ${titre}</h1>
//     <p> ${description}</p>
//     <p> ${prix}</p>
//     <p> ${disponibilité}</p>
// </article>`

const msg = "pour connaitre la suite il faut avoir un compte prenium et etre née un jour impair";
const accepter = "accepter";

let boite = `
<div class="cadre">
<p>${msg}</p>
<button type="submit">${accepter}</button>
</div>
`;
let header = document.querySelector("header");



 header.innerHTML = boite;

let button = document.querySelector("button");
    button.addEventListener("click",function(){

             header.style.display="none";
    });

    document.addEventListener("scroll", function(){
        if (scrollTo = 400 ){
            header.style.display="block";
        }; 

    }); 

let link = document.querySelector('.link');
let burger = document.querySelector('.burger');
let nav = document.querySelector('nav');
let ul = document.querySelector('ul');

link.addEventListener('click', function() {
  nav.classList.toggle('open');
  ul.classList.toggle('open');
})


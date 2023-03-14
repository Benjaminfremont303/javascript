let screen = document.querySelector(".screen");
let playerc = document.querySelector(".playercentre");
let playerg = document.querySelector(".playergauche");
playerg.style.display = "none";
let playerd = document.querySelector(".playerdroite");

let drop1 = document.querySelector(".drop1");
let drop2 = document.querySelector(".drop2");
let drop3 = document.querySelector(".drop3");
let drop4 = document.querySelector(".drop4");
let drop5 = document.querySelector(".drop5");


let rise1 = document.querySelector(".rise1");
let rise2 = document.querySelector(".rise2");
let rise3 = document.querySelector(".rise3");
let rise4 = document.querySelector(".rise4");

let drop21 = document.querySelector(".drop21");
let drop22 = document.querySelector(".drop22");
let drop23 = document.querySelector(".drop23");
let drop24 = document.querySelector(".drop24");

let rise21 = document.querySelector(".rise21");
let rise22 = document.querySelector(".rise22");
let rise23 = document.querySelector(".rise23");

let drop31 = document.querySelector(".drop31");
let drop32 = document.querySelector(".drop32");
let drop33 = document.querySelector(".drop33");

let rise31 = document.querySelector(".rise31");
let rise32 = document.querySelector(".rise32");
let rise33 = document.querySelector(".rise33");



let splash1 = document.querySelector(".splash1");
let splash2 = document.querySelector(".splash2");
let splash3 = document.querySelector(".splash3");






playerc.addEventListener('click', function() {
 
        playerc.style.display="none";
        playerg.style.display="block";        
        // cookie.classList.toggle("divchange");

    
  });

  document.addEventListener('keydown', (e) => {
   if(e.key == "ArrowLeft"){
    //    alert(`first keydown event. key property value is "${e.key}"`);
    playerd.style.display="none";  
    playerc.style.display="none";
    playerg.style.display="block"; 
 
}
if (e.key == "ArrowRight"){

    playerg.style.display="none";  
    playerc.style.display="none";
    playerd.style.display="block";  
}
  });

  document.addEventListener('keyup', (e) => {

        playerg.style.display="none";  
        playerc.style.display="block";
        playerd.style.display="none";  
  });
    // if (splash1.y > playerg.y && playerg.y != 0){
    //     alert('perdu');
    // };

rise33.addEventListener("animationend", function(){

        drop1.style.animationName = "none";
        drop2.style.animationName = "none";
        drop3.style.animationName = "none";
        drop4.style.animationName = "none";
        drop5.style.animationName = "none";

        rise1.style.animationName = "none";
        rise2.style.animationName = "none";
        rise3.style.animationName = "none";
        rise4.style.animationName = "none";

        drop21.style.animationName = "none";
        drop22.style.animationName = "none";
        drop23.style.animationName = "none";
        drop24.style.animationName = "none";

        rise21.style.animationName = "none";
        rise22.style.animationName = "none";
        rise23.style.animationName = "none";

        drop31.style.animationName = "none";
        drop32.style.animationName = "none";
        drop33.style.animationName = "none";

        rise31.style.animationName = "none";
        rise32.style.animationName = "none";
        rise33.style.animationName = "none";
    
    requestAnimationFrame(() => {
        drop1.style.animationName = "";
        drop2.style.animationName = "";
        drop3.style.animationName = "";
        drop4.style.animationName = "";
        drop5.style.animationName = "";

        rise1.style.animationName = "";
        rise2.style.animationName = "";
        rise3.style.animationName = "";
        rise4.style.animationName = "";

        drop21.style.animationName = "";
        drop22.style.animationName = "";
        drop23.style.animationName = "";
        drop24.style.animationName = "";

        rise21.style.animationName = "";
        rise22.style.animationName = "";
        rise23.style.animationName = "";

        drop31.style.animationName = "";
        drop32.style.animationName = "";
        drop33.style.animationName = "";

        rise31.style.animationName = "";
        rise32.style.animationName = "";
        rise33.style.animationName = "";
    })
    });
    document.addEventListener("animationend", () =>{
        if(drop1.y > playerd.y && playerd.style.display == "block"){
            splash3.style.visibility = "visible";
        }
    });

    drop5.addEventListener("animationend", function(){
        if (drop5.y > playerc.y && playerg.style.display == "none"){
            splash1.style.visibility = "visible";
            console.log("perdu");
            }else{
                drop5bis.style.visibility = "visible";
            }
    });
    drop24.addEventListener("animationend", function(){
        if (drop24.y > playerc.y && playerc.style.display == "none"){
            splash2.style.visibility = "visible";
            console.log("perdu");
            }
    });
    drop33.addEventListener("animationend", function(){
        if (drop33.y > playerc.y && playerd.style.display == "none"){
             splash3.style.visibility = "visible";
             console.log("perdu");
            }
    });
    
    rise33.addEventListener("animationend" , function(){
        drop5.style.animationName = "none";
        requestAnimationFrame(() => {
            drop5.style.animationName = "";
        })
    });
let screen = document.querySelector(".screen");
let playerc = document.querySelector(".playercentre");
let playerg = document.querySelector(".playergauche");
let playerd = document.querySelector(".playerdroite");
let drop5 = document.querySelector(".drop5");
let splash1 = document.querySelector(".splash1");





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

document.addEventListener("animationend", function(){
    if (splash1. y > playerg.y && playerg.style.display == "none"){
        alert('perdu1');
    }else{
        splash1.style.visibility = "hidden";
    }
});
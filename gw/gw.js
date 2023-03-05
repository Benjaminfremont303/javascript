let screen = document.querySelector(".screen");
let playerc = document.querySelector(".playercentre");
let playerg = document.querySelector(".playergauche");
let playerd = document.querySelector(".playerdroite");
let drop5 = document.querySelector(".drop5");
let splash1 = document.querySelector(".splash1");





playerc.addEventListener('click', function() {
 
        playerc.style.visibility="hidden";
        playerg.style.visibility="visible";        
        // cookie.classList.toggle("divchange");

    
  });

  document.addEventListener('keydown', (e) => {
   if(e.key == "ArrowLeft"){
    //    alert(`first keydown event. key property value is "${e.key}"`);
    playerd.style.visibility="hidden";  
    playerc.style.visibility="hidden";
    playerg.style.visibility="visible";  
}
if (e.key == "ArrowRight"){

    playerg.style.visibility="hidden";  
    playerc.style.visibility="hidden";
    playerd.style.visibility="visible";  
}
  });

  document.addEventListener('keyup', (e) => {

        playerg.style.visibility="hidden";  
        playerc.style.visibility="visible";
        playerd.style.visibility="hidden";  
  });
 document.addEventListener("style", function{
    if (playerg.style.visibility == "hidden" && drop5.style.visibility == "visible"){
        alert('perdu');
        splash1.style.visibility = "visible";        
    }});


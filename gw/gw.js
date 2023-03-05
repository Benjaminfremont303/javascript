let screen = document.querySelector(".screen");
let playerc = document.querySelector(".playercentre");
let playerg = document.querySelector(".playergauche");
let playerd = document.querySelector(".playerdroite");



playerc.addEventListener('click', function() {
 
        playerc.style.display="0";
        playerg.style.display="1";        
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
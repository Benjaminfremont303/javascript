let x = document.querySelector(".dutexte");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position);
   
  } else {
    x.innerHTML = "vous avez refusé la localisation";
  }
}
function position(position){
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let altitude = position.coords.altitude;
x.innerHTML = `<iframe 
width="300" 
height="170" 
frameborder="0" 
scrolling="no" 
marginheight="0" 
marginwidth="0" 
src="https://maps.google.com/maps?q=+${latitude}+,+${longitude}+
&hl=fr&z=14&amp;output=embed"
>`
}

      let image = document.querySelector(".image");
      let bouton = document.querySelector(".bouton");
      let brick = document.querySelector("#brick")
      let value = 0;
            bouton.addEventListener("click", function(){
              value = parseInt(value +10)
              image.style.left = value +"px"
            });

          
            brick.addEventListener("click", function(){
              anime({
                targets: '.image, #brick',
                translateX: 250,
                endDelay: 1000,
                direction: 'alternate'
            });
            });
let container = document.querySelector(".container");
    container.addEventListener("animationend", changePosition, true);

    function changePosition(event) {
      let circle = event.target;
      let triangle = event.target;

      circle.style.animationName = "none";
      triangle.style.animationName = "none";

      
      requestAnimationFrame(() => {
        circle.style.animationName = "";
        triangle.style.animationName = "";
      });

      let circleStyle = getComputedStyle(circle);
      let finalX = circleStyle.getPropertyValue("--xB");
      let finalY = circleStyle.getPropertyValue("--yB");

      let triangleStyle = getComputedStyle(triangle);
      let finalXt = triangleStyle.getPropertyValue("--xBt");
      let finalYt = triangleStyle.getPropertyValue("--yBt");

      circle.style.setProperty("--xA", finalX);
      circle.style.setProperty("--yA", finalY);
      circle.style.setProperty("--xC", finalX);
      circle.style.setProperty("--xB", getRandomNumber(-100, 1000) + "px");
      circle.style.setProperty("--yB", getRandomNumber(-50, 500) + "px");
      circle.style.setProperty("--yC", getRandomNumber(0, 120) + "px");


      triangle.style.setProperty("--xAt", finalXt);
      triangle.style.setProperty("--yAt", finalYt);
      triangle.style.setProperty("--xBt", getRandomNumber(0, 1000) + "px");
      triangle.style.setProperty("--yBt", getRandomNumber(00, 150) + "px");

      console.log(circle);
    }

    function getRandomNumber(low, high) {
      let r = Math.floor(Math.random() * (high - low + 1)) + low;
      return r;
    }


let compt = document.querySelector(".circle");
console.log(compt);

let p1 = document.querySelector(".p1");
let nbr = 0; 
let body = document.querySelector("body");

compt.addEventListener("click",function(){
    nbr++;
    p1.innerText = nbr;

    
});

body.addEventListener("click",function(){
    nbr--;
    p1.innerText = nbr;
});
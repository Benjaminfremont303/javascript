let url = "https://mybusiness.googleapis.com/v4/{name=accounts/*}/locations:batchGetReviews";
let main = document.querySelector("main");

fetch(url)
.then((resp) => resp.json())
.then(function(data) {
    // let fox = data.image;
    // ul.innerHTML = ` <img class="fox" src="${fox}" alt="">`
  console.log(data);

  
})


const ul = document.getElementById('authors');
function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}
function fox(){
const url = 'https://randomfox.ca/floof/';

fetch(url)
.then((resp) => resp.json())
.then(function(data) {
    let fox = data.image;
    ul.innerHTML = ` <img class="fox" src="${fox}" alt="">
    `
  console.log(data.image);

  
})
.catch(function(error) {
  console.log(error);
});
};

(function loop() {
    fox();
    setTimeout(() => {
      // Your logic here
        fox();
      loop();
    }, 8000);
  })();
  
// const ul = document.getElementById('authors');
// function createNode(element) {
//     return document.createElement(element);
// }

// function append(parent, el) {
//   return parent.appendChild(el);
// }

// const url = 'https://randomfox.ca/floof/';

// fetch(url)
// .then((resp) => resp.json())
// .then(function(data) {
//   let fox = data.results;
//   return fox.(function(fox) {
//     let li = createNode('li');
//     let img = createNode('img');
//     let span = createNode('span');
//     img.src = fox.picture.medium;
//     span.innerHTML = ``;
//     append(li, img);
//     append(li, span);
//     append(ul, li);
//     console.log(data)
//   })
// })
// .catch(function(error) {
//   console.log(error);
// });
const el = document.querySelector('h2');
const basilChefs = ['mama', 'papa', 'baby'];
const basilTexture = ['greasy', 'frozen', 'spicy'];

function random(array) {
  const max = array.length;
  const randomIndex = Math.floor(Math.random() * max);
  return array[randomIndex];
}

var recipeName = `${random(basilChefs)}'s ${random(basilTexture)} pesto`;

el.innerHTML = recipeName;

//fetches ascyhronyms. doesnt return immediately.
//response is a variable name, can be named anything.

var API = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';

fetch(API)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    document.querySelector('.quote').innerText = data[0];
  });

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

/*
  popover 
*/

var betaButton = document.querySelector('.beta');
betaButton.addEventListener('click', makePopover);

function makePopover() {
  var popover = document.createElement('div');
  popover.classList.add('betainfo');
  var popoverContent = `
  <h2>In Beta</h2>
  <p>Information about the beta program.<p>
  <div class="closer" href="#0">
    <div>✖︎</div>
  </div>
  `;
  popover.innerHTML = popoverContent;
  document.querySelector('body').append(popover);
}

// var popoverWindow = document.querySelector('.betainfo');
// var shader = document.querySelector('.shader');

// function showPopover() {
//   console.log(event.target);
//   if (event.target.matches('.beta, .closer')) {
//     pop();
//   } else {
//     return;
//   }
// }

// function pop() {
//   popoverWindow.classList.toggle('show');
//   shader.classList.toggle('show');
//   event.preventDefault();
// }

// document.addEventListener('click', showPopover);

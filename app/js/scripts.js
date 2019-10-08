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

// var betaButton = document.querySelector('.beta');
// betaButton.addEventListener('click', makePopover);

// function makePopover() {
//   var popover = document.createElement('div');
//   popover.classList.add('betainfo');
//   var popoverContent = `
//   <h2>In Beta</h2>
//   <p>Information about the beta program.<p>
//   <div class="closer" href="#0">
//     <div>✖︎</div>
//   </div>
//   `;
//   popover.innerHTML = popoverContent;
//   document.querySelector('body').append(popover);
// }

var popoverWindow = document.querySelector('.betainfo');
var shader = document.querySelector('.shader');

function showPopover() {
  console.log(event.target);
  if (event.target.matches('.beta, .closer')) {
    pop();
  } else {
    return;
  }
}

function pop() {
  popoverWindow.classList.toggle('show');
  shader.classList.toggle('show');
  event.preventDefault();
}

document.addEventListener('click', showPopover);

// test
let currRecipe = apiData[0];

let dirs = '';

function createDirections() {
  for (let i = 0; i < currRecipe.directions.length; i++) {
    dirs += '<li>' + currRecipe.directions[i] + '</li>';
  }
}

createDirections();

let recipe = `
<figure>
  <picture>
    <img src="img/${currRecipe.photo}" alt="${currRecipe.name}" />
  </picture>

  <figcaption>
  ${currRecipe.description}
  </figcaption>
</figure>

<h2 itemprop="name">${currRecipe.name}</h2>

<p itemprop="description">
  ${currRecipe.description}
</p>

<h3>Directions</h3>

<ol itemprop="recipeInstructions">
${dirs}
<!-- ${currRecipe.directions.map(dir => `<li>${dir}</li>`).join('')} -->

</ol>

<h3>Ingredients</h3>
<ul>
  <li itemprop="recipeIngredient">2 cups packed fresh basil leaves</li>
  <li itemprop="recipeIngredient">2 cloves garlic</li>
  <li itemprop="recipeIngredient">1/4 cup pine nuts</li>
  <li itemprop="recipeIngredient">2/3 cup extra-virgin olive oil</li>
  <li itemprop="recipeIngredient">
    Kosher salt and freshly ground black pepper, to taste
  </li>
  <li itemprop="recipeIngredient">
    1/2 cup freshly grated Pecorino cheese
  </li>
  <li itemprop="recipeIngredient">
    1 <abbr title="Pounds">lb</abbr> plain pasta
  </li>
</ul>
`;

const article = document.querySelector('article');
article.innerHTML = recipe;

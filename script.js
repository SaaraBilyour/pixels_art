
//====================== Créer Grid ===================
// *********** créer la grid par défaut 16 * 16 ***********
const grid = document.querySelector('.grid-parent');
grid.style.setProperty('grid-template-columns', 'repeat(' + 16 + ', 1fr)');
for (let i = 0; i < 16 * 16; i++) {
  const cell = document.createElement('div');
  cell.className = 'gridSquare';
  grid.appendChild(cell);
}

// *********** taille de la grid d'affichage ***********
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = [slider.value, 'x', slider.value].join(' '); 
document.addEventListener("DOMContentLoaded", addEvents(), false);


// *********** Changer grid de taille *************
slider.oninput = function () {
  output.innerHTML = [this.value, 'x', this.value].join(' ');
  const nb = parseInt(this.value);
  const square = document.querySelector('.gridSquare');
  const style_classes = square.classList;
  grid.innerHTML = '';
  grid.style.setProperty('grid-template-columns', 'repeat(' + nb + ', 1fr)');
  for (let i = 0; i < nb * nb; i++) {
    const cell = document.createElement('div');
    style_classes.forEach(style => {
        cell.classList.add(style);
      });
    grid.appendChild(cell);
  }
  addEvents();
}


//================= Grid événements ===================
// *********** ajoutez des événements (touch, mouseenter)***********
function addEvents() {
  divs = document.getElementsByClassName('gridSquare');
  for (let i = 0; i < divs.length; i++) {
    divs[i].addEventListener('mouseenter', changeColor);
    divs[i].addEventListener('touchend', changeColor);
  }
}



//====================== couleurs =====================
// créer un tableau pour la palette de couleur
var couleurs = [];
const palette = document.getElementsByClassName('couleurs-palette')[0];

// *********** calculer une couleur aléatoire : 
// *********** https://css-tricks.com/snippets/javascript/random-hex-color/
const couleur_aleatoire = ['#', Math.floor(Math.random() * 16777215).toString(16)].join('');
document.getElementById('select_color').value = couleur_aleatoire;

// *********** changer de couleur *********** 
function changeColor(e) {
  //s'il n'y a pas de couleur sélectionnée, créez une couleur aléatoire
  if (couleurs.length === 0){
    e.target.style.setProperty('background-color', couleur_aleatoire);
  }

  //s'il y a des couleurs sélectionnées, utilisez-les
  else {
  // Sélectionnez une couleur aléatoire dans la palette
   const random = Math.floor(Math.random() * (couleurs.length));
   console.log(random);
    e.target.style.setProperty('background-color', couleurs[random]);
  }
}


// ***********  ajouter une nouvelle couleur à la palette *********** 
// ***********  modifier le bouton Effacer visible *********** 
const effacer__btn = document.body.getElementsByClassName('effacer-palette')[0];
function ajouter_nouv_couleur() {
  const couleur = document.getElementById('select_color').value;
  couleurs.push(couleur);
  const palette__item = document.createElement('div');
  palette__item.style.setProperty('background-color', couleur)
  palette__item.className = 'palette__item';
  palette.appendChild(palette__item);
  effacer__btn.style.setProperty('visibility', 'visible');
}


// *********** supprimer la palette de couleurs *********** 
// ***********  et masquer le bouton Effacer *********** 
effacer__btn.addEventListener('click', () => {
  couleurs = [];
  console.log('empty');
  palette.innerHTML = '';
  effacer__btn.style.setProperty('visibility', 'hidden');
})



// ================changer le style de la grille===============

// Style 1 : fond blanc, bordure noir
const grid_style1 = document.getElementById('option1');
grid_style1.addEventListener('click', changeStyle);

// Style 2 : fond noir, bordure noir
const grid_style2 = document.getElementById('option2');
grid_style2.addEventListener('click', changeStyle);

// Style 3 : fond blanc, bordure blanc
const grid_style3 = document.getElementById('option3');
grid_style3.addEventListener('click', changeStyle);

// Style 4 : fond transparent, bordure blanc
const grid_style4 = document.getElementById('option4');
grid_style4.addEventListener('click', changeStyle);

// *********** fonction de changement de style de grid **********
function changeStyle(e) {
  const squares = document.querySelectorAll('.gridSquare');
  let style;
  switch (e.target.className) {
    case 'option1': style = 'grid_style1'; break;
    case 'option2': style = 'grid_style2'; break;
    case 'option3': style = 'grid_style3'; break;
    case 'option4': style = 'grid_style4'; break;
  }
  
  for (let i = 0; i < squares.length; i++) {
    (squares[i].classList.length === 1) ?
      // s'il n'y a qu'un seul style de classe, ajoutez le nouveau style de classe
      squares[i].classList.add(style) :
      //s'il y a plus d'un style de classe, remplacez le dernier.
      squares[i].classList.replace(squares[i].classList[squares[i].classList.length - 1], style);
  }
}






// ================ Modal  ================
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementsByClassName("propos")[0];

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
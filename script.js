// Retorne o elemento pelo nome do id
function byId(id) {
  return document.getElementById(id);
}

// Retorne os elementos que contém a classe informada
function byClass(className) {
  return document.getElementsByClassName(className);
}

// Retorne todos os elementos segundo o seletor informado
function qsa(selector) {
  return document.querySelectorAll(selector);
}

// Criar um novo elemento
function createElement(type) {
  return document.createElement(type);
}

const textInput = byId('text-input');
const memeText = byId('meme-text');

textInput.onkeyup = (e) => {
  memeText.innerText = e.target.value;
};

const memeInsert = byId('meme-insert');
const memeImage = byId('meme-image');

memeInsert.onchange = (e) => {
  const urlObject = URL.createObjectURL(e.target.files[0]);
  memeImage.setAttribute('src', urlObject);
};

const memeContainer = byId('meme-image-container');

const dashedBorder = byId('fire');
dashedBorder.onclick = () => {
  memeContainer.style.border = '3px dashed rgb(255 0 0)';
};

const doubleBorder = byId('water');
doubleBorder.onclick = () => {
  memeContainer.style.border = '5px double rgb(0 0 255)';
};

const grooveBorder = byId('earth');
grooveBorder.onclick = () => {
  memeContainer.style.border = '6px groove rgb(0 128 0)';
};

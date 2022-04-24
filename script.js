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
  console.log(`url("${e.target.value}")`);
  console.log(URL.createObjectURL(e.target.files[0]));
  memeImage.setAttribute('src', URL.createObjectURL(e.target.files[0]));
};

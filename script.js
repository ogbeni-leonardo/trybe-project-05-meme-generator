// Retorne o elemento pelo nome do id
function byId(id) {
  return document.getElementById(id);
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

const [dashedBorder, doubleBorder, grooveBorder] = [
  byId('fire'),
  byId('water'),
  byId('earth'),
];

dashedBorder.onclick = () => {
  memeContainer.style.border = '3px dashed rgb(255 0 0)';
};

doubleBorder.onclick = () => {
  memeContainer.style.border = '5px double rgb(0 0 255)';
};

grooveBorder.onclick = () => {
  memeContainer.style.border = '6px groove rgb(0 128 0)';
};

const [meme1, meme2, meme3, meme4] = [
  byId('meme-1'),
  byId('meme-2'),
  byId('meme-3'),
  byId('meme-4'),
];

const memesList = [meme1, meme2, meme3, meme4];

memesList.forEach((meme) => {
  meme.onclick = () => {
    console.log('oi');
    memeImage.setAttribute('src', meme.getAttribute('src'));
  };
});

const body = document.querySelector('body');

const IMG_NUMBER = 3;

function handleImgLoad() {
  console.log('finished');
}

function paintImage(imgNumber) {
  const image = new Image();
  image.src = `src/images/${imgNumber + 1}.jpeg`;
  image.classList.add('bgImage');
  body.prepend(image);
  image.addEventListener('loadend', handleImgLoad);
}

function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}

init();
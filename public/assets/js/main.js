'use strict'

const topDesign = document.querySelector('.containerDesign');
const bottomDesign = document.querySelector('.containerGrid');
const topFill = document.querySelector('.containerFillIn');
const bottomFill = document.querySelector('#form-container');
const topShare = document.querySelector('.containerShare');
const bottomShare = document.querySelector('.createCards');

const arrowDesign = document.querySelector('.iconDirection1');
const arrowFill = document.querySelector('.iconDirection2');
const arrowShare = document.querySelector('.iconDirection3');

function toggleDesign(){
    bottomDesign.classList.toggle('action');
    bottomFill.classList.remove('action');
    bottomShare.classList.remove('action');

    arrowDesign.classList.toggle('arrow-rotate');
    arrowFill.classList.remove('arrow-rotate');
    arrowShare.classList.remove('arrow-rotate');
}

function toggleFill() {
    bottomFill.classList.toggle('action');
    bottomDesign.classList.remove('action');
    bottomShare.classList.remove('action');

    arrowFill.classList.toggle('arrow-rotate');
    arrowDesign.classList.remove('arrow-rotate');
    arrowShare.classList.remove('arrow-rotate');

}

function toggleShare() {
    bottomShare.classList.toggle('action');
    bottomDesign.classList.remove('action');
    bottomFill.classList.remove('action');

    arrowShare.classList.toggle('arrow-rotate');
    arrowDesign.classList.remove('arrow-rotate');
    arrowFill.classList.remove('arrow-rotate');
}

topDesign.addEventListener('click', toggleDesign);
topFill.addEventListener('click', toggleFill);
topShare.addEventListener('click', toggleShare);
'use strict';
// Elementos de la paleta
const paletteOne = document.querySelector('#colorOne');
const paletteTwo = document.querySelector('#colorTwo');
const paletteThree = document.querySelector('#color3');

// Elementos de la tarjeta

const titleCard = document.querySelector('#cardid');
const socialKit = document.querySelector ('.list');


function previewOne (){

    titleCard.classList.add('colorPalette1');
    titleCard.classList.remove('colorPalette2');
    titleCard.classList.remove('colorPalette3');

};

function previewTwo (){
    titleCard.classList.add('colorPalette2');
    titleCard.classList.remove('colorPalette1');
    titleCard.classList.remove('colorPalette3');

};


function previewThree (){
    titleCard.classList.add('colorPalette3');
    titleCard.classList.remove('colorPalette1');
    titleCard.classList.remove('colorPalette2');

};

console.log('hola')

paletteOne.addEventListener('click',previewOne);
paletteTwo.addEventListener('click', previewTwo);
paletteThree.addEventListener('click', previewThree);




'use strict';

console.log('>> Ready :)');

//# sourceMappingURL=main.js.map

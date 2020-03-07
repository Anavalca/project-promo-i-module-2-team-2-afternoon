'hola 1'
console.log('hola')
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

'hola 1'
console.log('hola')
'use strict';
<<<<<<< HEAD

=======
// Elementos de la paleta
>>>>>>> palette
const paletteOne = document.querySelector('#colorOne');

const paletteTwo = document.querySelector('#colorTwo');

<<<<<<< HEAD
const paletteThree = document.querySelector('#color3');
=======
const paletteThree = document.querySelector('#color3');

// Elementos de la tarjeta

const titleCard = document.querySelector('#cardid');
const socialKit = document.querySelector ('.list');


function previewOne (){

    titleCard.classList.add('.colorPalette1');
    titleCard.classList.remove('.colorPalette2');
    titleCard.classList.remove('.colorPalette3');



};

function previewTwo (){
    titleCard.classList.add('.colorPalette2');
    titleCard.classList.remove('.colorPalette1');
    titleCard.classList.remove('.colorPalette3');



};


function previewThree (){
    titleCard.classList.add('.colorPalette3');
    titleCard.classList.remove('.colorPalette1');
    titleCard.classList.remove('.colorPalette2');

};




console.log('hola')


paletteOne.addEventListener('change',previewOne);
paletteTwo.addEventListener('change', previewTwo);
paletteThree.addEventListener('change', previewThree);

>>>>>>> palette



'use strict';

console.log('>> Ready :)');

//# sourceMappingURL=main.js.map

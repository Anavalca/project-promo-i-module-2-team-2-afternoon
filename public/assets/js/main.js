'hola 1'
<<<<<<< HEAD
console.log('hola')
'use strict';

=======
'use strict';
// Elementos de la paleta
>>>>>>> palette
const paletteOne = document.querySelector('#colorOne');

const paletteTwo = document.querySelector('#colorTwo');

const paletteThree = document.querySelector('#color3');
<<<<<<< HEAD
=======

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

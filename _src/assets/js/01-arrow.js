'use strict'

// Elementos de la paleta

const TopDesign = document.querySelector('.containerDesign');
const BottomDesign = document.querySelector('.containerGrid');
const TopFill = document.querySelector('.containerFillIn');
const BottomFill = document.querySelector('#form-container');
const TopShare = document.querySelector('.containerShare');
const BottomShare = document.querySelector('.createCards');

const arrowDesign = document.querySelector('#arrow-design');
const arrowFill = document.querySelector('#arrow-fill');
const arrowShare = document.querySelector('#arrow-share');

var flag = 0;
function toggleDesign(){
    if(flag === 0){
        BottomDesign.classList.toggle('action');
        BottomDesign.classList.remove('hidden');
        flag = 1;
    }
    else{
        BottomDesign.classList.toggle('hidden');
        BottomDesign.classList.remove('action');
        flag = 0;
    }
    BottomFill.classList.remove('action');
    BottomShare.classList.remove('action');

    arrowDesign.classList.toggle('form-arrow-collapse');
    arrowFill.classList.remove('form-arrow-collapse');
    arrowShare.classList.remove('form-arrow-collapse');
}

function toggleFill() {
    if(flag === 0){
        BottomFill.classList.toggle('action');
        BottomFill.classList.remove('hidden');
        flag = 1;
    }
    else{
        BottomFill.classList.toggle('hidden');
        BottomFill.classList.remove('action');
        flag = 0;
    }

    BottomDesign.classList.remove('action');
    BottomShare.classList.remove('action');

    arrowFill.classList.toggle('form-arrow-collapse');
    arrowDesign.classList.remove('form-arrow-collapse');
    arrowShare.classList.remove('form-arrow-collapse');
}
function toggleShare() {
    formBottomShare.classList.toggle('form-bottom-collapse');
    formBottomDesign.classList.remove('form-bottom-collapse');
    formBottomFill.classList.remove('form-bottom-collapse');

    arrowShare.classList.toggle('form-arrow-collapse');
    arrowFill.classList.remove('form-arrow-collapse');
    arrowDesign.classList.remove('form-arrow-collapse');
}

TopDesign.addEventListener('click', toggleDesign);
TopFill.addEventListener('click', toggleFill);
TopShare.addEventListener('click', toggleShare);
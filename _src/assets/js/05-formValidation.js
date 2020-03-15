'use strict'

const input1 = document.querySelector('#name-input');
const input2 = document.querySelector('#job-input');
const input3 = document.querySelector('#email-input');


function validateFormInput(input){
   
    if(input.value === ''){
        input.classList.add('errorBorder');
        input.nextElementSibling.classList.remove('hiddenInputMessage');
        return false;
    } else{
        input.classList.remove('errorBorder');
        input.nextElementSibling.classList.add('hiddenInputMessage');
        return true;
    }
}

function buttonActivation() {

    let button = document.querySelector("#buttonValidation");
    let errorMesagge = document.querySelector("#error-message");

    let returnInput1 = validateFormInput(input1);
    let returnInput2 = validateFormInput(input2);
    let returnInput3 = validateFormInput(input3);


    if (returnInput1 === false || returnInput2 === false || returnInput3 === false) {
        button.setAttribute('disabled','disabled');
        button.classList.add('buttonDisabled');
        errorMesagge.classList.remove('hiddenMessage');
    } else {
        button.classList.remove('buttonDisabled');
        errorMesagge.classList.add('hiddenMessage');
        button.removeAttribute("disabled");
    }
}

topShare.addEventListener('click', buttonActivation);
input1.addEventListener('keyup', function(){validateFormInput(this)});
input2.addEventListener('keyup', function(){validateFormInput(this)});
input3.addEventListener('keyup', function(){validateFormInput(this)});


'use strict'

function validateFormInput(inputKey){
    let input = document.querySelector(inputKey);
   
    if(input.value === ''){
        input.classList.add('errorBorder');
        return false;
    }else{
        input.classList.remove('errorBorder');
        return true;
    }
}


function buttonActivation() {

    let button = document.querySelector("#buttonValidation");

    let returnInput1 = validateFormInput('#name-input');
    let returnInput2 = validateFormInput('#job-input');
    let returnInput3 = validateFormInput('.search');
    let returnInput4 = validateFormInput('#email-input');


    if (returnInput1 === false || returnInput2 === false 
    || returnInput3 === false  || returnInput4 === false) {
    
        button.addAttribute("disabled");
        //TODO: añadir clase disable
    }
    else {
        button.removeAttribute("disabled");
        //TODO: quitar clase disable
    }

}

topShare.addEventListener('click', buttonActivatio);


'use strict';
//call elements

const nameInputElem = document.querySelector('#name-input');
const professionInputElem = document.querySelector('#job-input');
/* const imageInputElem = document.querySelector('#img-selector'); */
const emailInputElem = document.querySelector('#email-input');
const phoneInputElem = document.querySelector('#phone-input');
const linkedinInputElem = document.querySelector('#linkedin-input');
const githubInputElem = document.querySelector('#github-input');



const objetcData = {
"palette": " ",
  "name": " ",
  "job": " ",
  "phone": " ",
  "email": " ",
  "linkedin": " ",
  "github": " ",
  // "image": "undefined",
};

//detectar el click de los elementos radio falta para quedarse con el value


//  A partir de aqui es para checkbox 

//function that saves in local storage
function saveInfoLocalStorage(data){
  localStorage.setItem('userInfo',JSON.stringify(data));
  // Guarda en la memoria local 'user info' que es la info del usuario formateada como .json
}


function getInfoLocalStorage(){
  objetcData = JSON.parse(localStorage.getItem('userInfo'));
  if(objetcData.palette !== undefined){
      if(objetcData.palette === palette2.value){
        previewTwo ();
          paletteTwo.checked = true;
          paletteOne.checked = false;
          paletteThree.checked = false
      } else if(objetcData.palette === palette3.value){
        previewThree ();
          paletteThree.checked = true;
          paletteTwo.checked = false;
          paletteOne.checked = false
      } else{
        previewOne ();
          paletteThree.checked = false;
          paletteTwo.checked = false;
          paletteOne.checked = true;
      }
  }

  if (objetcData.name !== ''){
    nameInputElem.value = objetcData.name;
  }
  if (objetcData.job !== ''){
    professionInputElem.value =objetcData.job;
  }
  if (objetcData.email !== ''){
    emailInputElem.value = objetcData.email;
  }
  if (objetcData.phone !== ''){
    phoneInputElem.value = objetcData.phone;
  }
  if (objetcData.linkedin !== ''){
    linkedinInputElem.value = objetcData.linkedin;
  }
  if (objetcData.github !== ''){
    githubInputElem.value = objetcData.github;
  }
  saveInfoLocalStorage();
  getInfoLocalStorage ();
}

function setTheme(){
  if(paletteTwo.checked){
    previewTwo ();
  } else if(paletteThree.checked){
    previewThree ();
  } else {
    previewOne ();
  }
  saveInfoLocalStorage();
  getInfoLocalStorage ();
}

function checkInput(evt){
  let dataCheck = evt.currentTarget.value ;

  saveInfoLocalStorage(dataCheck);
  getInfoLocalStorage (dataCheck);
  setTheme()
}

function checkLocalStorage (){
  if (localStorage.getItem('userInfo')!== null){
    getInfoLocalStorage();
    
  }
}

function storeFullName(){
  objetcData.name = nameInputElem.value;
  saveInfoLocalStorage();   
}
function storeJob(){
objetcData.job = professionInputElem.value;
saveInfoLocalStorage();
}
function storeEmail(){
objetcData.email = emailInputElem.value;
saveInfoLocalStorage();
}
function storeTelf(){
objetcData.phone = phoneInputElem.value;
saveInfoLocalStorage();
}
function storeLinkedin(){
objetcData.linkedin = linkedinInputElem.value;
saveInfoLocalStorage();
}
function storeGithub(){
objetcData.github = githubInputElem.value;
saveInfoLocalStorage();
}










paletteOne.addEventListener('change',checkInput);
paletteTwo.addEventListener('change',checkInput);
paletteThree.addEventListener('change',checkInput);





















// //function that responds to click
// function infoIntoLocalStorage(evt){
//   infoToObject[evt.currentTarget.name] = evt.currentTarget.value; // MAL PARA IMAGEN //Usa el name del input y recoge el valor introducido
//   //ejecutamos la función infoObjectGenerator() sobre los valores recogidos
//   saveInfoLocalStorage(infoToObject); //ejecutamos la función saveInfoLocalStorage() sobre los valores recogidos
// }

// //function that saves in local storage
// function saveInfoLocalStorage(userInfo){
//   localStorage.setItem('userInfo',JSON.stringify(userInfo));
//   // Guarda en la memoria local 'user info' que es la info del usuario formateada como .json
// }

// //function that reads local storage
// function infoObjectGenerator(){
//   let infoToObject = JSON.parse(localStorage.getItem('userInfo')); //reclara y asigna un nuevo valor, parseador de de la info de usuario en formato .json
//   if(infoToObject !== null){ // devuelve el objeto infoToObject con la info del usuario
//     return infoToObject;
//   } else {
//     return infoToObject = {};
//    // devuelve infoToObject como objeto vacío
//   }
// }
// // SELECCIONAR CON CLASE.
// //function to fill inputs






// function retrieveInfo(object){
//   const inputArray = document.querySelectorAll('.inputInfo'); // Declara variable que selecciona el input
//   for(let inputName of inputArray){ //Recorre los inputs
//     if(object[inputName.name] !== undefined){// Comprueba si hay info en campos con atributo name (con valor name, profession, phone, email) del objecto infoToObject
//       inputName.value = object[inputName.name];
//     }// Si hay, guarda el valor en inputName
//     }
//   }
// function checkLocalStorage (){
//   if (localStorage.getItem('userInfo')!== null){
//       // retrievePalette();
//       // retrieveInfo();
//   }
// }

// nameInputElem.addEventListener('keyup',infoIntoLocalStorage);
// professionInputElem.addEventListener('keyup',infoIntoLocalStorage);
// /* imageInputElem.addEventListener('input',imageIntoLocalStorage); */
// emailInputElem.addEventListener('keyup',infoIntoLocalStorage);
// phoneInputElem.addEventListener('keyup',infoIntoLocalStorage);
// linkedinInputElem.addEventListener('keyup',infoIntoLocalStorage);
// githubInputElem.addEventListener('keyup',infoIntoLocalStorage);




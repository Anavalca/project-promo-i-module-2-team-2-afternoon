'use strict';

const nameInputElem = document.querySelector('#name-input');
const professionInputElem = document.querySelector('#job-input');
/* const imageInputElem = document.querySelector('#img-selector'); */
const emailInputElem = document.querySelector('#email-input');
const phoneInputElem = document.querySelector('#phone-input');
const linkedinInputElem = document.querySelector('#linkedin-input');
const githubInputElem = document.querySelector('#github-input');
/* const paletteElems = document.querySelectorAll('.check'); */


//detectar el click de los elementos radio falta para quedarse con el value

//save information in local storage
let infoToObject = infoObjectGenerator();
console.log(infoToObject);

//function that responds to click
function infoIntoLocalStorage(evt){
  infoToObject[evt.currentTarget.name] = evt.currentTarget.value; //Usa el name del input y recoge el valor introducido
  //ejecutamos la función infoObjectGenerator() sobre los valores recogidos
  saveInfoLocalStorage(infoToObject); //ejecutamos la función saveInfoLocalStorage() sobre los valores recogidos
}

//function that saves in local storage
function saveInfoLocalStorage(userInfo){
  localStorage.setItem('userInfo',JSON.stringify(userInfo));
  // Guarda en la memoria local 'user info' que es la info del usuario formateada como .json
}

//function that reads local storage
function infoObjectGenerator(){
  let infoToObject = JSON.parse(localStorage.getItem('userInfo')); //reclara y asigna un nuevo valor, parseador de de la info de usuario en formato .json
  if(infoToObject !== null){ // devuelve el objeto infoToObject con la info del usuario
    return infoToObject;
  } else {
    return infoToObject = {};
   // devuelve infoToObject como objeto vacío
  }
}
// SELECCIONAR CON CLASE.
//function to fill inputs

function retrieveInfo(object){
  const inputArray = document.querySelectorAll('.inputInfo'); // Declara variable que selecciona el input
  for(let inputName of inputArray){ //Recorre los inputs
    if(object[inputName.name] !== undefined){// Comprueba si hay info en campos con atributo name (con valor name, profession, phone, email) del objecto infoToObject
      inputName.value = object[inputName.name];
    }// Si hay, guarda el valor en inputName
    }
}

retrieveInfo(infoToObject);
nameInputElem.addEventListener('keyup',infoIntoLocalStorage);
professionInputElem.addEventListener('keyup',infoIntoLocalStorage);
/* imageInputElem.addEventListener('input',imageIntoLocalStorage); */
emailInputElem.addEventListener('keyup',infoIntoLocalStorage);
phoneInputElem.addEventListener('keyup',infoIntoLocalStorage);
linkedinInputElem.addEventListener('keyup',infoIntoLocalStorage);
githubInputElem.addEventListener('keyup',infoIntoLocalStorage);
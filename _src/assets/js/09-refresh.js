'use strict';
//call elements
const nameInputElem = document.querySelector('#name-input');
const professionInputElem = document.querySelector('#job-input');
const imageInputElem = document.querySelector('#image-input');
/* const imageFile = document.querySelector('#img-selector'); */
const addImageInputElem = document.querySelector('#addImage');
const emailInputElem = document.querySelector('#email-input');
const phoneInputElem = document.querySelector('#phone-input');
const linkedinInputElem = document.querySelector('#linkedin-input');
const githubInputElem = document.querySelector('#github-input');
/* const paletteElems = document.querySelectorAll('.check'); */
const profileImageInput = document.querySelector('.js__profile-image');

//detectar el click de los elementos radio falta para quedarse con el value

//save information in local storage
const saveInfoLocalStorage = readsaveInfoLocalStorage();
console.log(saveInfoLocalStorage);

//function that responds to click
function savesaveInfoLocalStorage(evt){
  saveInfoLocalStorage[evt.currentTarget.name] = evt.currentTarget.value; //Usa el name del input y recoge el valor introducido
  //ejecutamos la función readsaveInfoLocalStorage() sobre los valores recogidos
  setsaveInfoLocalStorage(saveInfoLocalStorage); //ejecutamos la función setsaveInfoLocalStorage() sobre los valores recogidos
}

//function that saves in local storage
function setsaveInfoLocalStorage(userInfo){
  localStorage.setItem('userInfo', JSON.stringify(userInfo));
  // Guarda en la memoria local 'user info' que es la info del usuario formateada como .json
}

//function that reads local storage
function readsaveInfoLocalStorage(){
  let saveInfoLocalStorage = JSON.parse(localStorage.getItem('userInfo')); //reclara y asigna un nuevo valor, parseador de de la info de usuario en formato .json
  if(saveInfoLocalStorage !== null){ // devuelve el objeto saveInfoLocalStorage con la info del usuario
    return saveInfoLocalStorage;
  } else {
    return saveInfoLocalStorage = {}; // devuelve saveInfoLocalStorage como objeto vacío
  }
}

//function to fill inputs
function fillFormfromLocal(saveInfoLocalStorage){
  const inputArray = document.querySelectorAll('input'); // Declara variable que selecciona el input
  for(let inputName of inputArray){ //Recorre los inputs
    if(saveInfoLocalStorage[inputName.name] !== undefined){ // Comprueba si hay info en campos con atributo name (con valor name, profession, phone, email) del objecto saveInfoLocalStorage
      inputName.value = saveInfoLocalStorage[inputName.name] // Si hay, guarda el valor en inputName
    } else {
      inputName.value = '';
    }
  }
}

fillFormfromLocal(saveInfoLocalStorage);
nameInputElem.addEventListener('keyup',savesaveInfoLocalStorage);
professionInputElem.addEventListener('keyup',savesaveInfoLocalStorage);
addImageInputElem.addEventListener('keyup',savesaveInfoLocalStorage);
emailInputElem.addEventListener('keyup',savesaveInfoLocalStorage);
phoneInputElem.addEventListener('keyup',savesaveInfoLocalStorage);
linkedinInputElem.addEventListener('keyup',savesaveInfoLocalStorage);
githubInputElem.addEventListener('keyup',savesaveInfoLocalStorage);
/* imageFile.addEventListener('input', /* savesInfoLocalStorage); */
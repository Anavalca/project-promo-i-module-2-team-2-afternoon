'use strict';
//call elements
const nameInputElem = document.querySelector('#name-input');
const professionInputElem = document.querySelector('#job-input');
const imageInputElem = document.querySelector('#image-input');
const addImageInputElem = document.querySelector('#addImage');
const emailInputElem = document.querySelector('#email-input');
const phoneInputElem = document.querySelector('#phone-input');
const linkedinInputElem = document.querySelector('#linkedin-input');
const githubInputElem = document.querySelector('#github-input');

//save information in local storage
const saveInfoLocalStorage = readsaveInfoLocalStorage()
console.log(saveInfoLocalStorage)

//function that responds to click
function savesaveInfoLocalStorage(evt){
  saveInfoLocalStorage[evt.currentTarget.name] = evt.currentTarget.value;
  setsaveInfoLocalStorage(saveInfoLocalStorage);
}

//function that saves in local storage
function setsaveInfoLocalStorage(userInfo){
  localStorage.setItem('userInfo',JSON.stringify(userInfo));
}

//function that reads local storage
function readsaveInfoLocalStorage(){
  let saveInfoLocalStorage = JSON.parse(localStorage.getItem('userInfo'));
  if(saveInfoLocalStorage !== null){
    return saveInfoLocalStorage;
  } else {
    return saveInfoLocalStorage = {};
  }
}

//function to fill inputs
function fillFormfromLocal(saveInfoLocalStorage){
  const inputArray = document.querySelectorAll('input');
 
  for(let inputName of inputArray){
    if(saveInfoLocalStorage[inputName.name] !== undefined){
      inputName.value = saveInfoLocalStorage[inputName.name]
    } else {
      inputName.value = '';
    }
  }
}
fillFormfromLocal(saveInfoLocalStorage);
nameInputElem.addEventListener('keyup',savesaveInfoLocalStorage);
professionInputElem.addEventListener('keyup',savesaveInfoLocalStorage);
imageInputElem.addEventListener('keyup',savesaveInfoLocalStorage);
addImageInputElem.addEventListener('keyup',savesaveInfoLocalStorage);
emailInputElem.addEventListener('keyup',savesaveInfoLocalStorage);
phoneInputElem.addEventListener('keyup',savesaveInfoLocalStorage);
linkedinInputElem.addEventListener('keyup',savesaveInfoLocalStorage);
githubInputElem.addEventListener('keyup',savesaveInfoLocalStorage);

'use strict'

const topDesign = document.querySelector('.containerDesignTop');
const bottomDesign = document.querySelector('.containerDesignBottom');
const topFill = document.querySelector('.containerFillInTop');
const bottomFill = document.querySelector('.containerFillInBottom');
const topShare = document.querySelector('.containerShareTop');
const bottomShare = document.querySelector('.containerShareBottom');

const arrowDesign = document.querySelector('.iconDirection1');
const arrowFill = document.querySelector('.iconDirection2');
const arrowShare = document.querySelector('.iconDirection3');

function toggleDesign(){
    bottomDesign.classList.toggle('action');
    bottomFill.classList.remove('action');
    bottomShare.classList.remove('action');

    arrowDesign.classList.toggle('arrow-rotate');
    arrowFill.classList.remove('arrow-rotate');
    arrowShare.classList.remove('arrow-rotate');
    
}

function toggleFill() {
    bottomFill.classList.toggle('action');
    bottomDesign.classList.remove('action');
    bottomShare.classList.remove('action');

    arrowFill.classList.toggle('arrow-rotate');
    arrowDesign.classList.remove('arrow-rotate');
    arrowShare.classList.remove('arrow-rotate');

}

function toggleShare() {
    bottomShare.classList.toggle('action');
    bottomDesign.classList.remove('action');
    bottomFill.classList.remove('action');

    arrowShare.classList.toggle('arrow-rotate');
    arrowDesign.classList.remove('arrow-rotate');
    arrowFill.classList.remove('arrow-rotate');
  
}


topDesign.addEventListener('click', toggleDesign);
topFill.addEventListener('click', toggleFill);
topShare.addEventListener('click', toggleShare);
'use strict';
// Elementos de la paleta
const paletteOne = document.querySelector('#colorOne');
const paletteTwo = document.querySelector('#colorTwo');
const paletteThree = document.querySelector('#color3');

// Elementos de la tarjeta

const titleCard = document.querySelector('#cardid');
const socialKit = document.querySelector ('.socialKit');


function previewOne (){

    titleCard.classList.add('colorPalette1');
    titleCard.classList.remove('colorPalette2');
    titleCard.classList.remove('colorPalette3');

    socialKit.classList.add ('coloricon1');
    socialKit.classList.remove ('coloricon2');
    socialKit.classList.remove ('coloricon3');

};

function previewTwo (){
    titleCard.classList.add('colorPalette2');
    titleCard.classList.remove('colorPalette1');
    titleCard.classList.remove('colorPalette3');

    socialKit.classList.add ('coloricon2');
    socialKit.classList.remove ('coloricon1');
    socialKit.classList.remove ('coloricon3');

};


function previewThree (){
    titleCard.classList.add('colorPalette3');
    titleCard.classList.remove('colorPalette1');
    titleCard.classList.remove('colorPalette2');

    socialKit.classList.add ('coloricon3');
    socialKit.classList.remove ('coloricon1');
    socialKit.classList.remove ('coloricon2');

};

console.log('hola')

paletteOne.addEventListener('click',previewOne);
paletteTwo.addEventListener('click', previewTwo);
paletteThree.addEventListener('click', previewThree);


'use strict';

const inputName = document.querySelector('#name-input');
const inputJob = document.querySelector('#job-input');
const outputName = document.querySelector('#cardname');
const outputJob = document.querySelector('#cardrole');

function printName(){
    outputName.innerHTML = inputName.value;
};

function printJob(){
    outputJob.innerHTML = inputJob.value;
};

inputName.addEventListener('keyup', printName);
inputJob.addEventListener('keyup', printJob);
'use strict'

const emailInput = document.querySelector('#email-input');
const phoneInput = document.querySelector('#phone-input');
const linkedinInput = document.querySelector('#linkedin-input');
const githubInput = document.querySelector('#github-input');

const emailIcon = document.querySelector('#btn-email');
const phoneIcon = document.querySelector('#btn-phone');
const linkedinIcon = document.querySelector('#btn-linkedin');
const githubIcon = document.querySelector('#btn-github');


function appearIconEmail (){

 emailIcon.classList.remove('hidden');
 
}

function appearIconPhone (){
    phoneIcon.classList.remove('hidden');
}

function appearIconLinkedin (){
    linkedinIcon.classList.remove('hidden');
}

function appearIconGithub (){
    githubIcon.classList.remove('hidden');
    console.log('hey')
}



emailInput.addEventListener('keyup',appearIconEmail);
phoneInput.addEventListener('keyup',appearIconPhone);
linkedinInput.addEventListener('keyup',appearIconLinkedin);
githubInput.addEventListener('keyup',appearIconGithub);
'use strict'

const input1 = document.querySelector('#name-input');
const input2 = document.querySelector('#job-input');
const input3 = document.querySelector('#email-input');

let button = document.querySelector("#buttonValidation");

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

'use strictic';

const btnReset = document.querySelector('#reset');
const inputImage = document.querySelector('#inputImage');
/* const addImage = document.querySelector('.search'); */


function resetAll() {

 
    // Palette1 checked by default
    paletteOne.checked = true;

 
    // Reset form fields
    document.querySelector('#email-input').value = '';
    document.querySelector('#phone-input').value = '';
    document.querySelector('#linkedin-input').value = '';
    document.querySelector('#github-input').value = '';
    document.querySelector('#name-input').value = '';
    document.querySelector('#job-input').value = '';

    //   Default Name & Rol in preview card

    outputName.innerHTML = 'Nombre Apellidos';
    outputJob.innerHTML = 'Front-end developer';

    // Default inputImage y addImpage 

    const imageUrl = './assets/images/queen.gif';
    inputImage.style.backgroundImage = `url(${imageUrl})`;
   /*  addImage.style.backgroundImage = `url(${imageUrl})`; */

    // Icons hidden & Default Color
    previewOne()

    emailIcon.classList.add('hidden');
    phoneIcon.classList.add('hidden');
    linkedinIcon.classList.add('hidden');
    githubIcon.classList.add('hidden');

}

btnReset.addEventListener('click', resetAll);
'use strict';
//creating constant for base url
const urlBase = `https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/`;

//we call the elements
const cardLinkElem = document.querySelector('#card-link');
const cardShare = document.querySelector('#card-share');

let imgSend = '';

//we use post method, sending data to the API
function sendData() {
    cardShare.classList.remove('hidden');
    fetch(urlBase, {
        method: 'POST',
        body: localStorage.getItem('Details'),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => showURL(data))
        .catch(function (error) { console.log(error) })
    // shareLink(event);
}

//showing tweet or error
function showURL(data) {
    if (data.success) {
        cardLinkElem.innerHTML = `<a class="twitter-url" href=${data.cardURL} target="_blank">${data.cardURL}</a>`;
        twitterLink(data.cardURL);
    } else {
        cardLinkElem.innerHTML = 'ERROR: ' + data.error;
    }
}

//link for twitter is created
function twitterLink(URL) {
    const twitterLink = document.querySelector('#twitter-share');
    twitterLink.href = `https://twitter.com/intent/tweet?text=He%20creado%20esta%20tarjeta%20tan%20GUAY%20con%20Awesome%20Profile%20Cards:%0A;hashtags=Adalab, AwesomeProfileCards, promo Idelisa Equipo 2 LAS MEJORES :) ${URL}`;
}

//element listener
button.addEventListener('click', sendData);
'use strict';
//call elements
const nameInputElem = document.querySelector('#name-input');
const professionInputElem = document.querySelector('#job-input');
/* const imageInputElem = document.querySelector('#img-selector'); */
const emailInputElem = document.querySelector('#email-input');
const phoneInputElem = document.querySelector('#phone-input');
const linkedinInputElem = document.querySelector('#linkedin-input');
const githubInputElem = document.querySelector('#github-input');
/* const paletteElems = document.querySelectorAll('.check'); */
/* const profileImageInput = document.querySelector('.js__profile-image'); */

//detectar el click de los elementos radio falta para quedarse con el value

//save information in local storage
let infoToObject = infoObjectGenerator();
console.log(infoToObject);

//function that responds to click
function infoIntoLocalStorage(evt){
  infoToObject[evt.currentTarget.name] = evt.currentTarget.value; //Usa el name del input y recoge el valor introducido
  //ejecutamos la función readsaveInfoLocalStorage() sobre los valores recogidos
  saveInfoLocalStorage(infoToObject); //ejecutamos la función setsaveInfoLocalStorage() sobre los valores recogidos
}

//function that saves in local storage
function saveInfoLocalStorage(userInfo){
  localStorage.setItem('userInfo',JSON.stringify(userInfo));
  // Guarda en la memoria local 'user info' que es la info del usuario formateada como .json
}

//function that reads local storage
function infoObjectGenerator(){
  let infoToObject = JSON.parse(localStorage.getItem('userInfo')); //reclara y asigna un nuevo valor, parseador de de la info de usuario en formato .json
  if(infoToObject !== null){ // devuelve el objeto saveInfoLocalStorage con la info del usuario
    return infoToObject;
  } else {
    return infoToObject = {};
   // devuelve saveInfoLocalStorage como objeto vacío
  }
}

//function to fill inputs
function fillFormfromLocal(object){
  const inputArray = document.querySelectorAll('input'); // Declara variable que selecciona el input
  for(let inputName of inputArray){ //Recorre los inputs
    if(object[inputName.name] !== undefined){ // Comprueba si hay info en campos con atributo name (con valor name, profession, phone, email) del objecto saveInfoLocalStorage
      inputName.value = object[inputName.name]
    }// Si hay, guarda el valor en inputName
    }
  }

fillFormfromLocal(infoToObject);
nameInputElem.addEventListener('keyup',infoIntoLocalStorage);
professionInputElem.addEventListener('keyup',infoIntoLocalStorage);
/* imageInputElem.addEventListener('input',infoIntoLocalStorage);*/
emailInputElem.addEventListener('keyup',infoIntoLocalStorage);
phoneInputElem.addEventListener('keyup',infoIntoLocalStorage);
linkedinInputElem.addEventListener('keyup',infoIntoLocalStorage);
githubInputElem.addEventListener('keyup',infoIntoLocalStorage);
'use strict';

const fr = new FileReader();
const uploadBtn = document.querySelector('.js__profile-trigger');
const fileField = document.querySelector('.js__profile-upload-btn');
const profileImage = document.querySelector('.js__profile-image');
const profilePreview = document.querySelector('#js__profile-preview');


/**
 * Recoge el archivo añadido al campo de tipo "file"
 * y lo carga en nuestro objeto FileReader para que 
 * lo convierta a algo con lo que podamos trabajar.
 * Añade un listener al FR para que ejecute una función
 * al tener los datos listos
 * @param {evento} e 
 */
function getImage(e){
  var myFile = e.currentTarget.files[0];
  fr.addEventListener('load', writeImage);
  fr.readAsDataURL(myFile);
}


/**
 * Una vez tenemos los datos listos en el FR podemos
 * trabajar con ellos ;)
 */
function writeImage() {
  /* En la propiedad `result` de nuestro FR se almacena
   * el resultado
   */
  profileImage.style.backgroundImage = `url(${fr.result})`;
  profilePreview.style.backgroundImage = `url(${fr.result})`;
}


/**
 * Genera un click automático en nuesto campo de tipo "file"
 * que está oculto
 */
function fakeFileClick() {
 fileField.click(); 
}

/**
 * Añadimos los listeners necesarios:
 * - al botón visible para generar el click automático
 * - al campo oculto para cuando cambie su value
 */
uploadBtn.addEventListener('click', fakeFileClick);
fileField.addEventListener('change', getImage);
'use strict';

console.log('>> Ready :)');

//# sourceMappingURL=main.js.map

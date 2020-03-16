'use strict'

const emailInput = document.querySelector('#email-input');
const phoneInput = document.querySelector('#phone-input');
const linkedinInput = document.querySelector('#linkedin-input');
const githubInput = document.querySelector('#github-input');
const inputFile = document.querySelector('#inputFile');

const emailIcon = document.querySelector('#btn-email');
const phoneIcon = document.querySelector('#btn-phone');
const linkedinIcon = document.querySelector('#btn-linkedin');
const githubIcon = document.querySelector('#btn-github');
const btnAddFile = document.querySelector('#btnFile');

const inputImgContainer = document.querySelector('.inputImgContainer');
const inputSmallImgContainer = document.querySelector('.inputSmallImgContainer');
const previewImg = document.querySelector('.previewImg');
const previewSmallImg = document.querySelector('.previewSmallImg');


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

function clickOnRealInputButton() {
    inputFile.click();
}

function displayFile() {
    previewImage.setAttribute('src', this.result);
    previewSmallImage.setAttribute('src', this.result);
}
function getFile(event) {
        const inputFile = this.files[0];
        if(inputFile) {
            const fileReader = new FileReader();
            previewImg.classList.add('hidden');
            previewSmallImg.classList.add('hidden');
            fileReader.addEventListener('load', displayFile);
            fileReader.readAsDataURL(inputFile);
        }
        else {
            previewImg.classList.remove('hidden');
            previewSmallImg.classList.remove('hidden');
            previewImg.setAttribute('src', '');
            previewSmallImg.setAttribute('src', '');
        }
}
emailInput.addEventListener('keyup',appearIconEmail);
phoneInput.addEventListener('keyup',appearIconPhone);
linkedinInput.addEventListener('keyup',appearIconLinkedin);
githubInput.addEventListener('keyup',appearIconGithub);
btnAddFile.addEventListener('click', clickOnRealInputButton);
inputFile.addEventListener('change', getFile);
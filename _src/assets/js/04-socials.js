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
 emailIcon.classList.remove('deactivate');
}

function appearIconPhone (){
    phoneIcon.classList.remove('deactivate');
}

function appearIconLinkedin (){
    linkedinIcon.classList.remove('deactivate');
}

function appearIconGithub (){
    githubIcon.classList.remove('deactivate');
}



emailInput.addEventListener('keyup',appearIconEmail);
phoneInput.addEventListener('keyup',appearIconPhone);
linkedinInput.addEventListener('keyup',appearIconLinkedin);
githubInput.addEventListener('keyup',appearIconGithub);
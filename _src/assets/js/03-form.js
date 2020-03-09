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
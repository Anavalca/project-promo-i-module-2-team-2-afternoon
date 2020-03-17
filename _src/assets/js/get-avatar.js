'use strict'

const inputFile = document.querySelector('#inputFile');
const btnAddFile = document.querySelector('#btnFile');
const inputImgContainer = document.querySelector('.inputImgContainer');
const inputSmallImgContainer = document.querySelector('.inputSmallImgContainer');
const previewImg = document.querySelector('.previewImg');
const previewSmallImg = document.querySelector('.previewSmallImg');

function clickOnRealInputButton() {
    inputFile.click();
}

function displayFile(previewImg) {
    previewImg.setAttribute('src', this.result);
    previewSmallImg.setAttribute('src', this.result);
}
function getFile() {
        const inputFile = this.files[0];
        if(inputFile) {
            const fileReader = new FileReader();
            previewImg.classList.add('hidden');
            previewSmallImg.classList.add('hidden');
            fileReader.addEventListener('load', displayFile);
            fileReader.readAsDataURL(inputFile);
            console.log(fileReader);
        }
        else {
            previewImg.classList.remove('hidden');
            previewSmallImg.classList.remove('hidden');
            previewImg.setAttribute('src', '');
            previewSmallImg.setAttribute('src', '');
        }
}

btnAddFile.addEventListener('click', clickOnRealInputButton);
inputFile.addEventListener('change', getFile);

'use strictic';

const btnReset = document.querySelector('#reset');
const inputImage = document.querySelector('#inputImage');
const addImage = document.querySelector('.search');


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
    addImage.style.backgroundImage = `url(${imageUrl})`;

    // Icons hidden & Default Color
    previewOne()

    emailIcon.classList.add('hidden');
    phoneIcon.classList.add('hidden');
    linkedinIcon.classList.add('hidden');
    githubIcon.classList.add('hidden');

}

btnReset.addEventListener('click', resetAll);
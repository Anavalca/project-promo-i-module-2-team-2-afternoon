'use strictic';

const btnReset = document.querySelector('#reset');
const inputImage = document.querySelector ('#inputImage');
const addImage = document.querySelector('.search');


function resetAll() {
    
    // previewOne ()
    // Reset form fields
    document.querySelector('#email-input').value = '';
    document.querySelector('#phone-input').value = '';
    document.querySelector('#linkedin-input').value = '';
    document.querySelector('#github-input').value = '';
    document.querySelector('#name-input').value = '';
    document.querySelector('#job-input').value = '';

    //   Default Name & Rol in preview card

    outputName.innerHTML ='Nombre Apellidos';
    outputJob.innerHTML = 'Front-end developer';

    // Default Palette Color , no funciona 

    
    paletteOne.checked = true;

   // Default inputImage y addImpage 

    const imageUrl = './assets/images/queen.gif';
    inputImage.style.backgroundImage = `url(${imageUrl})`;
    addImage.style.backgroundImage = `url(${imageUrl})`;

    // Icons hidden

    emailIcon.classList.add('hidden');
    phoneIcon.classList.add('hidden');
    linkedinIcon.classList.add('hidden');
    githubIcon.classList.add('hidden');



    
    titleCard.classList.add('colorPalette1');
    titleCard.classList.remove('colorPalette2');
    titleCard.classList.remove('colorPalette3');
}








// function reset(){
//     localStorage.removeItem('Details');
//     inputFullName.value = '';
//     inputJob.value = '';
//     inputEmail.value = '';
//     inputTelf.value = '';
//     inputLinkedin.value = '';
//     inputGithub.value = '';
//     cardName.innerHTML = 'Nombre Apellidos';
//     cardJob.innerHTML = 'Front-end developer';
//     palette1.checked = true;

//     const imageUrl = './assets/images/profile-picture.gif';
//     profileImage.style.backgroundImage = `url(${imageUrl})`;
//     profilePreview.style.backgroundImage = `url(${imageUrl})`;

//     fillTelf();
//     fillEmail();
//     fillLinkedin();
//     fillGithub();
//     setTheme();

//     validateAll();
//     toggleDesign()

//     cardShare.classList.add('hidden');
// }





btnReset.addEventListener('click', resetAll);
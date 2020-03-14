'use strictic';

const btnReset = document.querySelector('#reset');
const inputImage = document.querySelector ('#inputImage');
const addImage = document.querySelector('.search');

function resetAll() {

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

    // Default Palette Color 

    const defaultpalette = document.querySelector('#default');
    defaultpalette.checked = true;


    inputImage.image.background = "url('./assets/images/queen.gif') top center no-repeat";
    addImage.search.background = './assets/images/queen.gif';
    // profilePreviewImg.src = './assets/images/placeholderImg.jpg';




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
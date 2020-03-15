
'use strict';

const formContainer = document.querySelector('#form-container');

const getDataObj = function () {
  const inputPalleteChecked = document.querySelector(
    'input[name="colorCard"]:checked'
  );
  const data = {
    nameCard: inputNameCard.value,
    professionCard: inputprofessionCard.value,
    linkedinCard: inputlinkedinCard.value,
    githubCard: inputGithubCard.value,
    emailCard: inputEmailCard.value,
    phoneCard: inputphoneCard.value,
    colorCard: parseInt(inputcolorCardChecked.value),
    photo: picture
  };
  return data;
};

const setToLocalStorage = function () {
  const lsData = getDataObj();
  localStorage.setItem('userData', JSON.stringify(lsData));
};

const getFromLocalStorage = function () {
  const userData = JSON.parse(localStorage.getItem('userData'));
  if (userData !== null) {
    inputNameCard.value = userData.nameCard;
    inputprofessionCard.value = userData.professionCard;
    inputlinkedinCard.value = userData.linkedinCard;
    inputGithubCard.value = userData.githubCard;
    inputEmailCard.value = userData.emailCard;
    inputphoneCard.value = userData.phoneCard;
    picture = userData.photo;
    document.querySelector(
      `input[name="colorCard"][value="${userData.colorCard}"]`
    ).checked = true;
  }
};

getFromLocalStorage();
doAll();


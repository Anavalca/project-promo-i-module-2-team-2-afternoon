'use strict';
const urlBase = 'https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/';
const cardLinkElem = document.querySelector('#card-link');
const buttonCreate = document.querySelector('.buttonShare');


let photoSend = '';
function sendData() {
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
    shareLink(event);
}
function showURL(data) {
    if (data.success) {
        cardLinkElem.innerHTML = `<a class="twitter-url" href=${data.cardURL} target="_blank">${data.cardURL}</a>`;
        twitterLink(data.cardURL);
    } else {
        cardLinkElem.innerHTML = 'ERROR: ' + data.error;
    }
}
buttonCreate.addEventListener('click', sendData);

function twitterLink(URL) {
    const twitterLink = document.querySelector('#twitter-share');
    twitterLink.href = `https://twitter.com/intent/tweet?text=He%20creado%20esta%20tarjeta%20tan%20GUAY%20con%20Awesome%20Profile%20Cards:%0A;hashtags=Adalab, AwesomeProfileCards, promo Idelisa Equipo 2 LAS MEJORES :) ${URL}`;
}
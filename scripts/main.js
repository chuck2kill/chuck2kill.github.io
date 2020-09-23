let myImage = document.querySelector('img');

myImage.addEventListener('click', function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/DataCenter.jpg') {
        myImage.setAttribute('src', 'images/serveurs.jpg');
    } else {
        myImage.setAttribute('src', 'images/DataCenter.jpg');
    }
});

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Veuillez saisir votre nom.');
    localStorage.setItem('nom', myName);
    myHeading.textContent = 'Les serveurs, c\'est cool, ' + myName;
}

if (!localStorage.getItem('nom')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('nom');
    myHeading.textContent = 'Les serveurs, c\'est cool, ' + storedName;
}

myButton.addEventListener('click', function() {
    setUserName();
})
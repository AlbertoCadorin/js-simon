// richiamo countdown
const countdownElement = document.getElementById('countdown');
//  richiamo number list
const numbersListElement = document.getElementById('numbers-list');
// richiamo form user
const answersFormElement = document.getElementById('answers-form');
// richiamo instructions
const istructionsElement = document.getElementById('instructions');
// richiamo message
const messageElement = document.getElementById('message');

// timer
let count = 30;
let timer = setInterval(start, 1000);

// numeri randomici //
let number1 = randomNumber()
let number2 = randomNumber()
let number3 = randomNumber()
let number4 = randomNumber()
let number5 = randomNumber()
// lista numeri randomici
numbersListElement.innerHTML = `
<li>${number1}</li>
<li>${number2}</li>
<li>${number3}</li>
<li>${number4}</li>
<li>${number5}</li>`;
console.log(numbersListElement)
 

// FUNZIONI //
// genera numeri random
function randomNumber() {
    return Math.floor(Math.random() * 50) + 1;
}

// timer
function start() {
    countdownElement.innerHTML = count
    count--
    if (count === -1) {
        numbersListElement.className = 'd-none';
        answersFormElement.className = 'd-block';
        istructionsElement.innerText = 'Inserisci i numeri e premi conferma';
        clearInterval(timer)
    }
}
// controllo numeri
answersFormElement.addEventListener('submit', function (event) {
    event.preventDefault();
    const formControlElement = document.querySelectorAll('.form-control');
    console.log(formControlElement);

    let solved = 0;

    for (let i = 0; i < formControlElement.length; i++) {
        let control = formControlElement[i].value;
        control = parseInt(control);
        if (control === number1 || control === number2 || control === number3 || control === number4 || control === number5){
             solved++
        };
    }

    
        if (solved === 0) {
            messageElement.innerHTML = `Mi spiace non hai indovinato nessun numero`
        } else if (solved === 1) {
            messageElement.innerHTML = `complimenti hai indovinato ${solved} numero`
            messageElement.className = 'text-success text-center'
        } else if (solved > 1) {

            messageElement.innerHTML = `complimenti hai indovinato ${solved} numeri`
            messageElement.className = 'text-success text-center'
        }
    })
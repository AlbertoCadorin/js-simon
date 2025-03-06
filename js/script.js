// richiamo number list
const numberListItems = document.getElementById('numbers-list');
// salvo i numeri generati in una variabile 
let number1 = randomNumbers();
let number2 = randomNumbers();
let number3 = randomNumbers();
let number4 = randomNumbers();
let number5 = randomNumbers();
// lista numeri random
numberListItems.innerHTML = `
<li>${number1}</li>
<li>${number2}</li>
<li>${number3}</li>
<li>${number4}</li>
<li>${number5}</li>`;

//  richiamo il countdown
const countDownElement = document.getElementById('countdown');
const answersFormElement = document.getElementById('answers-form');
// timer
let count = 10;
let timer = setInterval(startTimer, 1000);


























// FUNZIONI //
// generare numeri 
function randomNumbers(){
    return Math.floor(Math.random() * 50 ) + 1;
};


// taimer

function startTimer(){
    countDownElement.innerHTML = count;
    count --;
    if(count === -1){
        numberListItems.className = 'd-none';
        answersFormElement.className = 'd-block';
        clearInterval(timer);
    };
};
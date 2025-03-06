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
// lista salvata in un array
console.log(numberListItems)
let numList = [
    `${number1}`,
    `${number2}`,
    `${number3}`,
    `${number4}`,
    `${number5}`
]
console.log(numList)
// richiama il form
const answersFormElement = document.getElementById('answers-form');
//  richiamo il countdown
const countDownElement = document.getElementById('countdown');

const messageElement = document.getElementById('message')
// timer
let count = 10;
let timer = setInterval(startTimer, 1000);








/*
// creare una lista
const list = [
    'taro@gmail.com',
    'asia@gmail.com',
    'ron@gmail.com',
    'lillo@gmail.com',
    'martino@gmail.com',
    'gastone@gmail.com',
    'lucy@gmail.com',
    'jimmi@gmail.com'
]
// chiedere all'utente la sua mail
const emailUsers = prompt('Please enter your email');
// variabile di controllo
let isEmailPresent = false ;
// creare un ciclo che controlli tutte le email della lista e le confronta con l'email che scrive lutente
for (i = 0; i < list.length; i++){
    const currentEmail = list[i];

    if(currentEmail === emailUsers){
        isEmailPresent = true ;
        break; // interrompere il ciclo appena una email 
    }
}
// stampa il risultato
if (isEmailPresent){
    console.log("the email ", emailUsers ," is present, you can enter");
}else{
    console.log("the email ", emailUsers," is not present, it cannot enter");
}
*/


















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
// lista numeri random
const numberListItems = document.getElementById('numbers-list');

let number1 = randomNumbers();
let number2 = randomNumbers();
let number3 = randomNumbers();
let number4 = randomNumbers();
let number5 = randomNumbers();

numberListItems.innerHTML = `
<li>${number1}</li>
<li>${number2}</li>
<li>${number3}</li>
<li>${number4}</li>
<li>${number5}</li>`































// FUNZIONI 
function randomNumbers(){
    return Math.floor(Math.random() * 50 ) + 1;
}


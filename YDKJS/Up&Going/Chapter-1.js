//JDKJS Up & Going Exercise 1
//Phone Store


//Variables
var amount = 0, bank_amount;
//Constants
const PHONE = 99;
const ACCESSORIES = 99;
const TAX = 0.08;
const BUY_LIMIT = 100;
//Functions
function formatAmount (amount) {
    return '$' + amount.toFixed(2);
}

function taxCalculator (amount) {
    return amount = amount * TAX;
}
//Program
bank_amount = prompt('I have to buy some cellphones. How much money will I have available?');
alert('Oh I have ' + bank_amount + ' Dolars. I will go to the store.');
alert('(A woman tells you) Welcome to Cell Store!!');

while (amount < bank_amount) {
    amount += PHONE;
    if (amount < BUY_LIMIT) {
        amount += ACCESSORIES;
    }
}

amount = amount + taxCalculator(amount);
alert('Your total amount is: ' + formatAmount(amount));

if (amount > bank_amount) {
  alert("Sorry, you can't afford this.");
} else {
  alert('You can afford this!');
}

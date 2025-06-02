const input = require("prompt-sync");
const prompt = input();

let firstNumber = Math.floor(Math.random() * 10);
let secondNumber = Math.floor(Math.random() * 5);

let count = 0;

for (count = 0; count < 10; count++) {
firstNumber = Math.floor(Math.random() * 10);
secondNumber = Math.floor(Math.random() * 5);

if (secondNumber > firstNumber) 
console.log("Cannot subtract number");


for (let counter = 1; counter <= 2; counter++){
let subtract = prompt(`${firstNumber} - ${secondNumber} = `)
count++

if (counter === 1)
console.log("Wrong")
else if (counter === 2)
console.log("last try")

 	
console.log(subtract);

}

}


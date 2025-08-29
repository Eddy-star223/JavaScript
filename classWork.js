function getLastWord(text) {

  let largestSentence = "";
  let tempWord = "";
  
  for (let i = 0; i < text.length; i++) {
    let char = text[i];
    
    if (char !== ' ') {
      tempWord += char;
    } else {
      largestSentence = tempWord;
      tempWord = "";
    }
  }
  if (tempWord !== "") {
    largestSentence = tempWord;
  }

  return largestSentence;
}


let result = "Ade is going to Semicolon ";
console.log("Output:", getLastWord(result)); 


function isArmstrongNumber(num) {
  const strNum = num.toString();
  const numDigits = strNum.length;
  let sum = 0;

  for (let i = 0; i < numDigits; i++) {
    sum += Math.pow(parseInt(strNum[i]), numDigits);
  }

  return sum === num;
}
console.log("Output:", isArmstrongNumber(125)); 


function ValidNumbers(arr) {
  return validNumbers = arr.filter(num => num >= 1 && num <= 5);

}
let numbers = [1, 2, 3, 4, 5, 6, 11, 12, 13, 0, 14, 15, 16, 17, 18, 19, 20];
console.log("Output:", ValidNumbers(numbers));

function ScoreDescending(customers) {
  return customers
    .filter(customer => customer.score > 1 && customer.score < 100)
    .sort((a, b) => b.score - a.score)
    .map(customer => customer.name, customers.score);
}
let customers = [
  { name: "Ade", score: 120 },
  { name: "Tolu", score: 90 },
  { name: "Bola", score: 150 },
  { name: "Chuka", score: 80 },
  { name: "Zainab", score: 85 } ]

console.log("Output:", ScoreDescending(customers));

function priceOfPizza(map) {
  let sum = 0;
  for (let value of map.values()) {
    sum += value;
  }
  return sum;
}
let myMap = new Map();
myMap.set("pepperoni", 7000);
myMap.set("veggie", 10000);
myMap.set("chicken suya", 15000);
console.log("Output:", priceOfPizza(myMap));


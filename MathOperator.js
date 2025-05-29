const prompt = require('prompt-sync')();

const left_operand = Number(prompt(`Enter the left operand: `));
const right_operand = Number(prompt(`Enter the right operand: `));

const operator = prompt(`Enter the operator "+. addition, -. subtraction, *. multiplication, /. divide" :  `);

let ans = 'NaN'

switch(operator) {

case '+': 
          ans = left_operand + right_operand
	  console.log(ans)
	  break
case '-': 
	  ans = left_operand - right_operand
	  console.log(ans)
	  break
case '*': 
	  ans = left_operand * right_operand
	  console.log(ans)
	  break
case '/':  
	  ans = left_operand / right_operand
	  console.log(ans)
	  break
}
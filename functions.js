function getEvenNumbers(array) {
    
    let evenNumbers = [];
    for (let index = 0; index < array.length; index++) {
        if (array[index] % 2 === 0) {
            evenNumbers.push(array[index]);
        }
    }
    return evenNumbers;
    
   // return array.filter(num => num % 2 === 0);
}



const createCounter = function() {
let count = 0;
return {
    getCount:()=> {
        return count; 

     },
     increment:() => {
        count++;
        return count;
     },
        decrement:() => {
            count--;
            return count;
        },
        reset:() => {
            count = 0;
            return count;
        }
    }
}



function priceOfPizza(obj) {
  let sum = 0;


  const prices = {
    "pepperoni": 3000,
    "veggie": 5000,
    "chicken suya": 1000
    };

  
    for (let key in obj) {
        if (prices[key]) {
            sum += prices[key] * obj[key];
        }
  }

  console.log("Total price of pizza:", sum);
  return sum;
}


module.exports = {getEvenNumbers, createCounter, priceOfPizza};


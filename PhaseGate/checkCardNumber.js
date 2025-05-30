function checkCardNumber(cardNumber) 
// let cardNumber = {5, 4, 1, 6, 6, 2, 3, 8, 9, 3, 5, 7, 2, 4, 8, 5};

	if (cardNumber.length != 16) {
	return {valid: false, reason: "Invalid length"}
	}
	// else if (cardNumber.matches("/d+")
	  

for (numbers of cardNumber) {
	if (cardNumber[0] === 4) {
	console.log('Visa');
	}
	else if (cardNumber[0] === 5) {
	console.log('Mastercard');
	}
	else if (cardNumber[0] === 6) {
	console.log('Discover');
	}
	else if (cardNumber[0] === 3) {
	console.log('American Express')
	}
	
	return {valid: true, issuer};
}
} 


 

}
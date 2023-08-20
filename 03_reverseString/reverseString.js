const reverseString = function(stringToBeReversed) {
	stringReversed = "";
	for(let i = stringToBeReversed.length-1; i >= 0; i--){
		stringReversed += stringToBeReversed[i];
	}
	return stringReversed;
};

// Do not edit below this line
module.exports = reverseString;


console.log(reverseString("Hello!"));
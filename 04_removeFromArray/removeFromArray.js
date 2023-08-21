const removeFromArray = function(arrayToModify, ...args) {
	arrayToReturn = [];
	
	arrayToModify.forEach(element => {
		console.log(args.indexOf(element));
		if(args.indexOf(element) === -1){
			arrayToReturn.push(element);
			console.log("Element: " + element + " | Array to return: " + arrayToReturn + " | Array to modify: " + arrayToModify);
		}
	});

	return arrayToReturn;
};

// Do not edit below this line
module.exports = removeFromArray;

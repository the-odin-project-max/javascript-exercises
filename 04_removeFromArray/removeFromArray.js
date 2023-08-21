const removeFromArray = function(arrayToModify, elementToRemove) {
	const index = arrayToModify.indexOf(elementToRemove);
	return arrayToModify.splice(index, 1);
};

// Do not edit below this line
module.exports = removeFromArray;

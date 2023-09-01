const palindromes = function (string) {
	string = string.toLowerCase().replace(/[^A-Za-z0-9]/g, "");
	return string.split("").reverse().join("") === string;
};

console.log(palindromes("r3ace3car"))

// Do not edit below this line
module.exports = palindromes;

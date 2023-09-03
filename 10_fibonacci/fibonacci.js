const fibonacci = function (n) {
	let fib = 0;
	let fib1 = 1;
	let fib2 = 0;
	if (n < 0) {
		return "OOPS";
	}
	for (let i = 0; i < n; i++) {
		fib = fib1 + fib2;
		fib2 = fib1;
		fib1 = fib;
	}
	return fib2;
};

console.log(fibonacci(4));

// Do not edit below this line
module.exports = fibonacci;

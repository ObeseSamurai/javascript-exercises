const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }

  return total;
};

const multiply = function(array) {
  let total = 1;
  for (let i = 0; i < array.length; i++) {
    total *= array[i];
  }

  return total;
};

// Doesn't work for negative powers
const power = function(base, exponent) {
  let total = 1;
	for (let i = 0; i < exponent; i++) {
    total *= base;
  }

  return total;
};

// doesnt work for neagtive number i dont think
const factorial = function(n) {
  if (n === 0) { return 1; }
	else if (n > 1) { return n * factorial(n - 1); }
  else { return n; }
};

// npm test calculator.spec.js

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};



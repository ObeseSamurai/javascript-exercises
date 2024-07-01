const fibonacci = function(n) {
    // accepts strings by converting string to number
    if (typeof(n) === "string") {
        n = Number(n);
    }

    // if 0 then return 0
    // no negatives
    if (n < 0) { return "OOPS"; }
    else if (!n) { return 0; }
    else if (n === 1) { return 1; }
    else {
        // Fn = F(n-1) + F(n-2)
        return fibonacci(n-1) + fibonacci(n-2);
    }
};

console.log("Fib: " + fibonacci("5"))

// npm test fibonacci.spec.js

// Do not edit below this line
module.exports = fibonacci;

const sumAll = function(a, n) {
    let difference = 1;

    if (typeof(a) === "number" && typeof(n) === "number") {
        if (a >= 1 && n >= 1) {
            if (a > n) {
                return (a / 2) * ( (2 * n) + ( (a - 1) * difference ) );
            }
            else {
                return (n / 2) * ( (2 * a) + ( (n - 1) * difference ) );
            }
        }
        else return "ERROR";
    }
    else return "ERROR";
    
};

console.log("Sum of 1 to 100: " + sumAll(1, 'yo'));





// Do not edit below this line
module.exports = sumAll;

// npm test sumAll.spec.js

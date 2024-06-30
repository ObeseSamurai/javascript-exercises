const reverseString = function(string) {
    let reversedString = "";

    for (let i = string.length; i + 1 > 0; i--) {
        reversedString += string.charAt(i);
    }

    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;

// npm test reverseString.spec.js

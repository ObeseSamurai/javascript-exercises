const palindromes = function (string) {
    let reversedString = "";
    string = string.replace(/[^\w\s]|_/g, ''); // Regex filter out punc
    string = string.toLowerCase(); // ignore capitals by making string all lowers
    string = string.replace(/ /g, ''); // get rid of spaces
    console.log("After conversion: " + string)

    for (let i = string.length - 1; i >= 0; i--) {
        reversedString += string[i];
        
    }
    console.log("Reversed String:  " + reversedString)
    return string == reversedString;
};

let p = "A car, a man, a maraca.";
//Rr1 2 3 4 5 6 7 8 9 8 7 6 5 4 3 2 1rR!!!
console.log("String before:    " + p)
console.log("Palindrome? " + palindromes(p))


// npm test palindromes.spec.js

// Do not edit below this line
module.exports = palindromes;

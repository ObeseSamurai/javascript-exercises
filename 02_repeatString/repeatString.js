const repeatString = function(string, repeats) {
    let strings = "";

    if (repeats < 0) {
        return "ERROR";
    }
    else {
        for (let i = 0; i < repeats; i++) {
            strings += string
        }
    }

    

    return strings;
};

// Do not edit below this line
module.exports = repeatString;

// npm test repeatString.spec.js
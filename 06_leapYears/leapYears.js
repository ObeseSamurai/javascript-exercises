const leapYears = function(year) {
    // if year is div by 4 its a leap year
    // if can be div by 4 and 100 its not a leap year
    // if div by 400 leap year
    if (year % 400 === 0 ) { return true; }
    if (year % 4 === 0 && year % 100 != 0) { return true; }
    else {
        return false
    }
};


//console.log("Leap Year: " + leapYears(199));

// Do not edit below this line
module.exports = leapYears;

// npm test leapYears.spec.js
const convertToCelsius = function(farenheit) {
  // Farenheit to Celsius
  // ( (f - 32) * 5 ) / 9
  let celsius = ( ( (farenheit - 32) * 5 ) / 9 );
  let deicmalPlaces = 1;
  let isWholeNumber = (celsius - Math.floor(celsius) == 0);
  console.log(isWholeNumber)

  if (isWholeNumber) { return celsius; }
  else { 
    let factor = Math.pow(10, deicmalPlaces);
    return Math.round(celsius * factor) / factor; 
  }
};

const convertToFahrenheit = function(celsius) {
  // Celsius to Farenheit
  let farenheit = ( ( (celsius * 9) / 5 ) + 32 );
  let deicmalPlaces = 1;
  let isWholeNumber = (farenheit - Math.floor(farenheit) == 0);


  if (isWholeNumber) { return farenheit; }
  else { 
    let factor = Math.pow(10, deicmalPlaces);
    return Math.round(farenheit * factor) / factor; 
  }

};

console.log("F to C: " + convertToCelsius(32.69578));
console.log ("C to F: " + convertToFahrenheit(67.654));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

// npm test tempConversion.spec.js

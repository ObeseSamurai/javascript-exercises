const findTheOldest = function(people) {
  let currentYear = new Date().getFullYear();
  let age;
  let ages = [];

  people.forEach(person => {
    // if no death date
    if (person.yearOfDeath == null) {
      age = currentYear - person.yearOfBirth;
      ages.push(age);
    }
    else {
      age = person.yearOfDeath - person.yearOfBirth;
      ages.push(age);
    }
  });

  let indexOfOldest = 0;
  let max = Math.max.apply(null, ages);
  //let max = Math.max(...ages);

  for (let i = 0; i < ages.length; i++) {
    if (ages[i] == max) { indexOfOldest = i; }
  }

  return people[indexOfOldest];
};

// Do not edit below this line
module.exports = findTheOldest;

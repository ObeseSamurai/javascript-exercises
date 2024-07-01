const getTheTitles = function(books) {
    return books.map(book => book.title)
    // used map instead of filter to access objects properties
    // aka accessing books titles
};

const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]

console.log(getTheTitles(books))

// npm test getTheTitles.spec.js

// Do not edit below this line
module.exports = getTheTitles;

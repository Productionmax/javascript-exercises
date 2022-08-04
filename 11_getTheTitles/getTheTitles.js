
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
const getTheTitles = function(book) {
    return book.map(name => {return name.title})
};
console.log(getTheTitles(books));
// Do not edit below this line
module.exports = getTheTitles;
//npm test getTheTitles.spec.js
// array.map 
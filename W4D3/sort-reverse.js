const books = [
  { title: 'Harry Potter', author: 'J.K. Rowling', pages: 700 },
  { title: 'To Kill a Mockingbird', author: 'Harper Lee', pages: 300 },
  { title: 'Eragon', author: 'Christopher Paolini', pages: 544 },
];

// Sort receives an argument, the callback function
// This callback function receives 2 arguments, the currentWord and the nextWord
// Normally we name it a and b, for ease of reading.
// It expects a negative, if a is supposed to come before b
// A positive value, if b is supposed to come before a
// and 0, if they're the same and the order shouldn't change
books.sort((a, b) => {
  if (a.pages > b.pages) {
    return 1;
  } else if (a.pages < b.pages) {
    return -1;
  } else {
    return 0;
  }
});

//could also be as a one line:
//books.sort((a, b) => a.pages - b.pages);

console.log(books);

// toSorted, uses the same logic as sort, but instead of changing (mutating) the orignal array
// it returns a new one.
const sortedBooks = books.toSorted((a, b) => {
  if (a.pages > b.pages) {
    return -1;
  } else if (a.pages < b.pages) {
    return 1;
  } else {
    return 0;
  }
});

console.log(sortedBooks);

// localeCompare is a string method that was basically desgined to work with sort.
// It returns -1 if a comes before b in alphabetical order, 1 if it's the other way around, or 0 if they're the same
books.sort((a, b) => {
  return b.title.localeCompare(a.title);
});

// reverse() and toReversed() take no arguments
// they simply reverse the array in place.
// reverse() mutates the original array, while toReversed() creates a new one.
books.reverse();
console.log(books);

const reversed = books.toReversed();
console.log(reversed);

const books = [
  { title: 'Harry Potter', author: 'J.K. Rowling', pages: 700 },
  { title: 'Eragon', author: 'Christopher Paolini', pages: 544 },
  { title: 'To Kill a Mockingbird', author: 'Harper Lee', pages: 300 },
];

//map
// Will always return an array with the same length as the original.
// if you don't return something inside the callback function, the resulting array might have undefined as values
const bookTitles = books.map((currentBook, bookIndex, booksArray) => {
  return currentBook.title;
});
/* 
console.log(bookTitles); */

const filteredBooks = books
  // filter expects a return of a boolean. So if you return a value that isnt' a boolean
  // it will read it's truthy or falsy value
  .filter((currentBook, bookIndex, booksArray) => {
    if (currentBook.pages > 500) {
      return currentBook;
    }
    //One line version: books.filter((currentBook) => cureentBook.pages > 500)
  });

// You can chain these methods, to do both things at the same time. Filter first, then map.
// As long as the resulting value is an array, you can keep chaining them as much as you'd like

console.log(filteredBooks);

const numbers = [10, 25, 36, 50, 12];

const sum = numbers.reduce((accumulator, currentNumber) => {
  // What you return at the end of the reduce
  // will be the starting value of the accumulator on the next iteration of it.
  return accumulator + currentNumber;
}, 0);

console.log(sum);

const max = numbers.reduce((acc, currentNumber) => {
  // In here, we only change the value, if it's bigger than the value stored in accumulator.
  if (currentNumber > acc) {
    return currentNumber;
  } else {
    // We still need to return, as the next iteration needs the accumulator
    return acc;
  }
}, numbers[0]);

console.log(max);

const words = ['apple', 'banana', 'apple', 'orange', 'apple', 'banana'];

const appleCount = words.reduce((count, currentWord) => {
  if (currentWord === 'apple') {
    // Same thing here, we only change the value, when the word is apple
    // as we're only counting the times apple appears in the array.
    return count + 1;
  } else {
    // But we still need to pass a value for the next accumulator
    return count;
  }
}, 0);
console.log(appleCount);

const wordCount = words.reduce((acc, word) => {
  // this example is a bit more involved, as we're counting more then one value appearance
  // It uses the {} empty object as a starting value, and then works directly with it's properties
  if (acc[word]) {
    // if the object has the property key that matches the word, it adds 1 to it's value
    acc[word] = acc[word] + 1;
  } else {
    // if it doesn't, it starts the property with word as the key, and 1 as the value
    acc[word] = 1;
  }
  return acc;
}, {});

console.log(wordCount);

const allPages = books.reduce((acc, currentBook) => {
  // In here, we can access the property of the objects to do a simple sum using reduce
  return acc + currentBook.pages;
}, 0);
console.log(allPages);

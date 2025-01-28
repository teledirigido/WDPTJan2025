const fruits = ['Apple', 'Pear', 'Orange', 'Mango'];

//Access the length of the array
const numberOfFruits = fruits.length;

console.log(numberOfFruits);

//Access element by index
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

const text = fruits.join(','); //joins the array element into a single string, separating each value with a comma
console.log(sentence);

const newFruits = text.split(','); //Splits the string into an array, using the "," as a divider
console.log(newFruits);

const hasPear = fruits.includes('Pear'); //Checks if "Pear" exists in the array, returns true or false accordingly.
console.log(hasPear);

const hasBanana = fruits.includes('Banana');
console.log(hasBanana);

const orangeIndex = fruits.indexOf('Orange'); //finds the index of Orange. Returns the index number if it exists, or -1 if it doens't
console.log(orangeIndex);

const indexOfBanana = fruits.indexOf('Banana');
console.log(indexOfBanana);

//Get a slice of the first two fruits
const firstTwoFruits = fruits.slice(0, 2);
console.log(firstTwoFruits);

//Get a slice from the second fruit to the end
const fromSecondFruit = fruits.slice(1);
console.log(fromSecondFruit);

//Get a slice with the last fruit only
const lastFruit = fruits.slice(-1);
console.log(lastFruit);

console.log(fruits); //the original array remains unchanged

function printFruits(currentElement, index, array) {
  //The function called passed as an argument to the forEach, takes 3 arguments
  //the currentElement of the array.
  //The index of the currentElement
  //And the original array
  console.log(`Fruit at index ${index}: ${currentElement}`);
}

fruits.forEach((currentElement, index, array) => {
  //The function passed to the forEach can be defined outside (see printFruits),
  //or inside, as what's called an annonymous function.
  console.log(`Fruit at index ${index}: ${currentElement}, ${array}`);
});

fruits.forEach(printFruits); //Does the same as above.

const nums = [1, 4, 6, 18, 62, 90];

let sum = 0;

nums.forEach((currentElement, index, array) => {
  //For each doesn't return anything, however
  //It can be quite powerful for mathematical operations
  sum += currentElement;
});
console.log(sum / nums.length);

const result = fruits.join(',').toUpperCase().split(','); //As long as the method you used previously returns something, you can chain them to save space
console.log(result);

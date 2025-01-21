let number = 0.4;

//Math.round() will round the number on mathematical logic (greater than or equal to 0.5 goes up, rest goes down)
console.log(Math.round(number));

//Math.ceil() will always round up
console.log(Math.ceil(number));

//Math.floor() will always round down
console.log(Math.floor(number));

//Math.min() takes a list of numbers and returns the smallest
console.log(Math.min(0, 4, 5, -2, 100, -50));

//Math.max() takes a list of numbers and returns the biggest
console.log(Math.max(0, 4, 100, 5, -2, 100, -50, 100));

//Math.random() returns a random number between 0 and 1, not including 1. Can be modified to change the treshold with mathematical operations and Math.floor
console.log(Math.random() /*  * 10 + 5 */);

//Mathematical Operations
//addition
console.log(1 + 1);

//subtraction
console.log(1 - 1);

//division
console.log(4 / 2);

//multiplication
console.log(5 * 2);

//can also be done with += -= /^= *= to reassign values
number = 1;

number += 4;
console.log(number);

number -= 4;
console.log(number);

number /= 2;
console.log(number);

number *= 2;
console.log(number);

//Raising to a power **
console.log(3 ** 3);

//Module operator. Divides and returns the remainder. Very useful to check for odd or even
console.log(3 % 2);
console.log(2 % 2);

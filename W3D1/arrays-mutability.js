const fruits = ['Apple', 'Pear', 'Orange', 'Mango'];

const removedByPop = fruits.pop(); //removes the last element and returns it
console.log(removedByPop);
console.log(fruits);

const removedByShift = fruits.shift(); //removes the first element and returns it
console.log(removedByShift);
console.log(fruits);

const newLengthFromPush = fruits.push('Strawberry'); //Adds a value to the end of the array, and returns it's new length
console.log(fruits);
console.log(newLengthFromPush);

const newLengthFromUnshift = fruits.unshift('Kiwi'); //Add a value to the start of the array, and returns it's new length
console.log(fruits);
console.log(newLengthFromUnshift);

const removedBySplice = fruits.splice(1, 0, 'Coconut', 'Blueberry', 'Coffee Beans');
console.log(removedBySplice);
console.log(fruits);

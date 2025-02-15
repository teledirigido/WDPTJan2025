console.log('Before the setTimeout');
setTimeout(() => {
  console.log('This is printed after 4 seconds');
}, 4000); // 4000 miliseconds = 4 seconds
console.log('This is after');

/* Expected output:
Before the setTimeout
This is after
This is printed after 4 seconds
*/

let counter = 0;
const intervalId = setInterval(() => {
  counter += 1;
  console.log('Counter: ', counter);

  if (counter === 5) {
    clearInterval(intervalId); //Will stop the interval from running again
    console.log('Interval cleared');
  }
}, 1000); // 1000 miliseconds = 1 second

/* setTimeout will run the callback function once, x miliseconds later.
setInterval will keep running the callback function, once every x miliseconds
until we clear the interval, using clearInterval(intervalId) */

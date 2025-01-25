console.time('Start'); //Starts a timer with the label Start
console.log('hello'); //Logs "hello" to the console.
console.clear(); //Clears the console.
console.error('This is an error'); //Logs "this is an error" with a diferrent coloration
console.timeEnd('Start'); //Stops the erro


function add(n1, n2) {
  return n1 + n2;
}

function subtract(n1, n2) {
  return n1 - n2;
}

function multiply(n1, n2) {
  return n1 * n2;
}

function divide(n1, n2) {
  return n1 / n2;
}

function make_calc(n1, n2, operation) {
  if (operation == 'add') {
    return add(n1, n2);
  }
  if (operation == 'subtract') {
    subtract(n1, n2);
  }
  if (operation == 'multiply') {
    return multiply(n1, n2);
  }
  if (operation == 'divide') {
    return divide(n1, n2);
  }
}

function init() {
  let result = 0;

  let sum = make_calc(2, 3, 'add');
  let subs = make_calc(2, 3, 'subtract');
  let mult = make_calc(2, 3, 'multiply');
  let div = make_calc(2, 3, 'divide');

  result = sum + subs + mult + div;
  console.log(result);
}
init();

let age = 29;

age(); //TypeError. Age is not a function

console.log(breed); //ReferenceError. breed is not defined.

if (true) {
  console.log('true'); //SyntaxError. Unexpected end of input. SyntaxErrors will trigger while the code is being interpreted
  //meaning they will crash the entire project, superseeding other errors.
//}

try { //Contains the code that's trying to be executed.
  console.log('trying to execute...');
  //Simulating an error
  let result = 10 / 0;
  console.log(result);
  if (!isFinite(result)) {
    throw new Error('Division by zero is not allowed'); //this line creates an error, that then get's caught by the catch block.
  }
  console.log('I will not be read'); //Anything below an error inside a try block will not be read.
} catch (error) {
    //if at any point in the try block, an error occurs, it stops execution and jumps to the catch block.
  console.error(`An error has occured: ${error.message}`); //Always a good idea to log the errors.
} finally {
    //Finally block is optional, and always runs, if it's there.
  console.log('Finally block is always read.');
}

/* function greet(name) {
  return `Hello, ${name}`;
} */

const greet = (name) => `Hello, ${name}`;
/* console.log(greet('Richard')); */

function executeOperation(operation, a, b) {
  return operation(a, b);
}

/* const result = executeOperation((x, y) => x * y, 3, 2); */
/* console.log(result); */

function displayArguments() {
  console.log(arguments);
}

/* displayArguments('Ironhack', 42, true, [2, 3, 4]); */

function sumAll() {
  let total = 0;

  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

const result = sumAll(2, 1, 5, 7, 10, 40, 51);
/* console.log(result); */

const wontWork = () => {
  console.log(arguments);
};

wontWork(4, 5, 1, 2);

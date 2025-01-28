function greet() {
  //function with no return or parameters
  console.log(`Hello, World`);
}
const greeting = greet(user); //it returns undefined

console.log(greeting);

const greetArrow = () => {
  console.log('Hello, Arrow!');
};

const greetingFromArrow = greetArrow(); //It also returns undefined

//Paremeters and arguments
function add(n1, n2) {
  //A function with 2 parameters, n1 and n2, and a return.
  return n1 + n2;
}

const result = add(2, 3); //When we call it, we're using 2 and 3 as arguments, and it returns their sum.

console.log(result);

//Arrow function example:
const addNumbersArrow = (n1, n2) => {
  //2 parameters and a return stament.
  return n1 + n2;
};

const resultArrow = addNumbersArrow(3, 5); //When we call it, we're using 3 and 5 as arguments, and it returns their sum.

console.log(resultArrow);

//A function can have more then one return statement, but only one of them can be read. Anything under it is ignored.
function checkNumber(num) {
  if (num > 0) {
    return 'Positive';
    let ignored = "I'm being ignored";
  } else if (num < 0) {
    return 'Negative';
    let ignored = "I'm being ignored";
  } else {
    return '0';
    let ignored = "I'm being ignored";
  }
}

console.log(checkNumber(10));
console.log(checkNumber(-5));
console.log(checkNumber(0));

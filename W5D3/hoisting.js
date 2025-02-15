//Function hoisting
sayHello(); //Works because function keyword functions are fully hoisted
function sayHello() {
  console.log('Hello');
}

//Variable hoisting
console.log(x); // Undefined. (Declaration is hoisted, but not initialized)
var x = 10;

console.log(y); //ReferenceError: Canno access "y" before initialization
let y = 20;

console.log(z); //ReferenceError: Canno access "z" before initialization
const z = 30;

//Arrow functions will follow the rules of the variable keyword that was used to create it.
sayHi(); //TypeError: sayHi is not a function.
//With let or const, it's ReferenceError: cannot access "sayHi" before initialization
var sayHi = () => {
  console.log('Hi');
};

function testHoisting() {
  console.log(a); // Undefined. (Declaration is hoisted, but not initialized)
  console.log(b); // ReferenceError: cannot access "b" before initialization
  console.log(c); // ReferenceError: cannot access "c" before initialization

  var a = 10;
  let b = 20;
  const c = 30;
}

testHoisting();

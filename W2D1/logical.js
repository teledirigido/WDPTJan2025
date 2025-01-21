//two equals evaluates if the value is the same, even if the type isn't.
console.log(0 == '0'); //true
console.log(0 == 1); //false

//three equals evaluates if the value and type are the same.
console.log(0 === '0'); //false
console.log(0 === 0); //true

//greater, lesser, greater equal and lesser equal
console.log(0 < 1); //true
console.log(0 > 1); //false
console.log(0 >= 1); //false
console.log(1 <= 1); //true

//OR || evaluates and responds with true if at least one value is truthy
console.log(true || false); //true
console.log(true || true); //true
console.log(false || false); //false

//AND && evaluates and responds with true if all values are truthy
console.log(true && false); //false
console.log(false && false); //false
console.log(true && true); //true

//Not ! will reverse the truthy or falsy value
console.log(!false);
console.log(!true);

console.log(!!''); //very useful if you forget the truthy value of some value

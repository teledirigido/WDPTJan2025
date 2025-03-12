const person = {
  firstName: "John Doe",
  age: 45
}

/**
 * New way to create and assign variables
 * 
**/
let { firstName: myVar, age: personAge } = person;

console.log(firstName); // John Doe

const person2 = person;
person2.firstName = "Bob Dylan";

console.log(person2.firstName); // Bob Dylan
console.log(person.firstName);  // Bob Dylan

/**
 * 
 * ⬆️
 * 
 * Why person.firstName is BobDylan, if on line 2 we see is "John Doe"?
 * 
 * This happens because on how we assigned person on line 14. 
 * person2 and person will be 'pointing' to the same block of memory, 
 * this means that any change on a property will affect person and person2 
 * 
 */

let person3 = {...person}; // Here we create a copy of person

person3.firstName = "Elvis Presley";
console.log(person3);

/**
 * ⬆️
 * 
 * Here person3 firstName is Elvis Presley while person keeps 
 * its original name. This is because of the spread operator on line 32.
 * 
 * This is a safe way to assign objects into a new variable.
 * 
 */


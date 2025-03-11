const person = {
  firstName: "John Doe",
  age: 45
}

// new way to create and assign variables
let { firstName: myVar, age: personAge } = person;
console.log(myVar);
// // console.log(firstName);

// const person2 = person;
// person2.firstName = "Bob Dylan"; // we updated person 2 firstname to Bob Dylan

// console.log(person2.firstName); // Bob DYlan
// console.log(person); 

// let person3 = {...person}; // copy person into person3

// person3.firstName = "Elvis Persley";
// console.log(person3);
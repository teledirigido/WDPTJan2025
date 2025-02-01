// Object creation with the object literal notation:
const person = {
  name: 'Alice',
  age: 25,
  favouriteColor: 'Blue',
};

console.log(person);

//access information with dot notation
console.log(person.name);

//Access information with the bracket notation
let value = `favouriteColor`;
console.log(person[value]);
//The value inside the bracket should always be a string
console.log(person['name']);

//Changing a property directly
person.favouriteColor = 'Red';

//Adding a property to the object
person.address = 'Fake address';
console.log(person.address);

//Removing a property from the object
delete person.favouriteColor;
console.log(person);

//Using the in operator to check if a property exists inside the object
console.log('name' in person);
console.log('pets' in person);

//Getting an array with all the keys of the object
const keys = Object.keys(person);
console.log(keys);
//Since Object.keys() returns an array, you can use it to loop through the object values
keys.forEach((property) => {
  console.log(person[property]);
});

//Getting an array with all the values of the object
const values = Object.values(person);
console.log(values);

//Using a for...in to directly loop through an object
for (const property in person) {
  console.log(`${property} : ${person[property]}`);
}

//for...of was designed to loop through arrays directly, not objects, but you can use
//Object.keys or Object.values to use for...of to loop through the object in an idirect way
for (const key of Object.keys(person)) {
  console.log(person[key]);
}

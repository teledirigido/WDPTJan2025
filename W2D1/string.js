let user = 'Eric'; //Double-quotes and single-quotes have rougly the same funcionality
let dog = 'Meli';
let dogBreed = 'German Shepherd';

let concatenated = user + ' has a dog named ' + dog; //String concatenation
console.log(concatenated);

let interpolated = `${user} has a dog named ${dog}`;
console.log(interpolated);

//String methods:

//[index] notation:
console.log(user[0] + user[1] + user[2] + user[3]); //[index] notation returns the character at the position index. index starts at 0

//.length
const randomStr =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero pariatur, impedit, nemo similique nesciunt eos nobis autem molestiae amet repudiandae, debitis provident magnam iusto possimus praesentium rerum officia culpa vel5';

//.lenght returns a number, the number of characters in the string
const numOfLetter = randomStr.length;
/* console.log(randomStr[numOfLetter - 1]); */

//.slice() cuts a section of the string, and returns the section without modifying the original string. syntax: string.slice(startIndex, endIndex)
let sliced = dogBreed.slice(0, 6); //starting at index 0, stopping at index 6
console.log(sliced);

let sliced2 = dogBreed.slice(7); //starting at index 7 and going until the end of the string
console.log(sliced2);

let sliced3 = dogBreed.slice(-6); //The last 6 characters of the string
console.log(sliced3);

//.toUpperCase() takes the sring and return the full string in upper case
let upperCasedName = user.toUpperCase();
/* console.log(upperCasedName); */

//.toLowerCase() takes the sring and return the full string in lower case
let lowerCasedName = user.toLowerCase();
/* console.log(lowerCasedName); */

//string.includes(str) returns true or false depending if the str exists inside string.
let doesInclude = 'Hello'.includes('h');
console.log(doesInclude);

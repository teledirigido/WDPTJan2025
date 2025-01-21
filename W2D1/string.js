let user = 'Eric';
let dog = 'Meli';
let dogBreed = 'German Shepherd';

let oldPhrase = user + ' has a dog named ' + dog;
/* console.log(oldPhrase); */

let newPhrase = `${user} has a dog named ${dog}`;
/* console.log(newPhrase); */

//String methods:

//[index] notation:
/* console.log(user[0] + user[1] + user[2] + user[3]); */

//.length
const randomStr =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero pariatur, impedit, nemo similique nesciunt eos nobis autem molestiae amet repudiandae, debitis provident magnam iusto possimus praesentium rerum officia culpa vel5';

const numOfLetter = randomStr.length;
/* console.log(randomStr[numOfLetter - 1]); */

//.slice()
let sliced = dogBreed.slice(0, 6);
/* console.log(sliced); */

let sliced2 = dogBreed.slice(7);
/* console.log(sliced2); */

let sliced3 = dogBreed.slice(-6);
/* console.log(sliced3); */

//.toUpperCase()
let upperCasedName = user.toUpperCase();
/* console.log(upperCasedName); */

//.toLowerCase()
let lowerCasedName = user.toLowerCase();
/* console.log(lowerCasedName); */

//.includes()
let doesInclude = 'Hello'.includes('h');
console.log(doesInclude);

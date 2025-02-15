// Primitive data type copy, copy by value
let a = 10;
let b = a; //Copying the value of "a" into "b"
console.log(a, b); //(10, 10)
b = 20; // Changing the value of "b", won't change the value of "a"
console.log(a, b); //(10, 20)

//Non-primitive data-type
const students = [{ name: 'Luke' }, { name: 'Richard' }, { name: 'Yarin' }];

//This will not work, as it's just passing the reference of the array
//Changing studentsCopy, will change students, same backwards
const studentsCopy = students;
console.log(students);
console.log(studentsCopy);
studentsCopy[0].name = 'Daniel';
console.log(students);
console.log(studentsCopy);

// ShallowCopy of non-primitive data
//The sprad operator (...) is only a deep copy, one level deep
//Meaning if there is nested objects or arrays, it will copy them by reference
//That way, altering the copy on those nested objects, will alter the original
const studentsShallowCopy = [...students];
studentsShallowCopy[0].name = 'Daniela';
console.log(studentsShallowCopy);
console.log(students);

//Map is another shallow copy, that will still keep references
const studentsMap = students.map((student) => {
  return student;
});
studentsMap[1].name = 'Samuel';
console.log(studentsMap);
console.log(students);

//Deep copy of non-primitive data
// Old way
// Good for arrays with nested objects. Won't alter the original, if the copy is changed
// The problem with JSON methods is that you will lose undefined values and functions
const studentsDeepCopy = JSON.parse(JSON.stringify(students));
console.log(studentsDeepCopy);
studentsDeepCopy[0].name = 'Julia';
console.log(students);
console.log(studentsDeepCopy);

//New way
//structuredClone() is great for nested objects and arrays, specially if they have undefined values or functions
const studentsClone = structuredClone(students);
studentsClone[0].name = 'Angele';
console.log(studentsClone);
console.log(students);

//Spread operator examples
const array = [1, 4, 5, 7];
const copy = [...array, 9]; // With the spread operator, you can add values to the copied array or object
console.log(copy);

const dog = {
  name: 'Meli',
  age: 3,
  breed: 'German Sheppherd',
  owners: {
    owner1: { name: 'Eric' },
    owner2: { name: 'Cristina' },
  },
};
const dogCopy = { ...dog, favouriteToy: 'Ball', age: 2.5 }; // With the spread operator on objects, you can even alter properties directly
//Remember that the spread operator is only a deep copy one level deep,
//which means nested objects and arrays will be copied by reference
object.owners.owner1.name = 'Alexandre';
console.log(object);
console.log(objectCopy);

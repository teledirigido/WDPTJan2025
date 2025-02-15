// Global Scope
var globalVar = "I'm a var in the global scope";
let globalLet = "I'm a let in the global scope";
const globalConst = "I'm a const in the global scope";

console.log(globalVar); // Accessible
console.log(globalLet); // Accessible
console.log(globalConst); // Accessible

function checkGlobalScope() {
  console.log(globalVar); // Accessible
  console.log(globalLet); // Accessible
  console.log(globalConst); // Accessible
}

checkGlobalScope();

//Function scope

function functionScopeExample() {
  var functionVar = "I'm a var in the function scope";
  let functionLet = "I'm a let in the function scope";
  const functionConst = "I'm a const in the function scope";

  console.log(functionVar); // Accessible
  console.log(functionLet); // Accessible
  console.log(functionConst); // Accessible
}

functionScopeExample();

console.log(functionVar); // Error: functionVar is not defined
console.log(functionLet); // Error: functionLet is not defined
console.log(functionConst); // Error: functionConst is not defined

if (true) {
  var blockVar = "I'm a var in the block scope";
  let blockLet = "I'm a let in the block scope";
  const blockConst = "I'm a const in the block scope";

  console.log(blockVar); //Accessible
  console.log(blockLet); //Accessible
  console.log(blockConst); //Accessible
}

console.log(blockVar); //Accessible (var is NOT block-scoped, in this case, will act as global scoped)
console.log(blockLet); //Error: blockLet is not defined
console.log(blockConst); //Error: blockConst is not defined

for (var index = 0; index < 3; index++) {
  console.log('Inside loop ', index);
}

console.log('outside loop,', index); //Accessible, var isn't block scoped

for (let i = 0; i < 3; i++) {
  console.log('Inside loop ', i);
}

console.log('outside loop,', i); //Error: i is not defined

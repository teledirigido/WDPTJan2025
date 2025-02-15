let message = 'Hello from global'; // Global scope

function showMessage() {
  let message = 'Hello from function'; //Shadowing the global message variable
  console.log(message); // "Hello from function"
}

showMessage();
console.log(message); // "Hello from global" (Original variable remains unchanged)

// Block scope shadowing
let color = 'blue'; // Outer scope
if (true) {
  let color = 'red'; // Shadows the outer "color" variable
  console.log(color); //"red"
}
if (true) {
  let color = 'purple'; // Shadows the outer "color" variable again
  console.log(color); //"purple"
}
console.log(color); // "blue" (Outer variable remains unchanged)

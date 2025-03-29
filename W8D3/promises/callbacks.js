const sayHi = (name, callback) => {

  // 
  console.log(callback);
  console.log(`Hello ${name}`);
  callback(name);
}


function sayGoodbye(name) {
  if ( name === 'Ironhack') {
    console.log(`Bye ${name}!, See you Tuesday`);

  } else {
    console.log(`Bye ${name}!`);
  }
}


sayHi('Peter', sayGoodbye );

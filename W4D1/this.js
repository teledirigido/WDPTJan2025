console.log(this); //Refers to the server or window objects, depending if in a node server, or browser envoironment

function printThis() {
  console.log(this); //In a free function invocaton, this will refer to the global window object.
}

printThis();

const ticket1 = {
  flightCode: 'UA515',
  printThis: function () {
    console.log('ticket1,', this);
    //This refers to the object the method belongs to
  },
};

ticket1.printThis();

const ticket2 = {
  flightCode: 'UA515',
  passenger: {
    name: 'Eric',
    printThis: function () {
      console.log('ticekt2, ', this); //If nested, it will refer to the closest scope to the invocation.
    },
  },
};

ticket2.passenger.printThis();

const printMe = () => {
  console.log(this); //In an arrow function, it will borrow the this meaning of the closest scope possible
};

printMe();

const person = {
  name: 'Eric',
  regularMethod: function () {
    console.log('regular method this:', this);

    const arrowFunc = () => {
      console.log('arrow function this:', this); //will reference the object, as it's the closest scope
    };
    arrowFunc();
  },
};

person.regularMethod();

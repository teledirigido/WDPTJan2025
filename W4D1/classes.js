class Car {
  constructor(make, model) {
    //constructor function defines how many parameters the class takes to initialize
    this.make = make;
    this.model = model;
  }

  //Outside the constructor function, we define the methods that the object will have

  showDetails() {
    console.log(`This car is a ${this.make} ${this.model}`);
  }

  //We can have as many methods as we want
  changeModel(newModel) {
    this.model = newModel;
    console.log(`The model has been updated to ${this.model}`);
  }
}

class ElectricCar extends Car {
  constructor(make, model, batteryCapacity) {
    super(make, model); //call the constructor of the parent class using "super"
    this.batteryCapacity = batteryCapacity; // additional property specific to the ElectricCar
  }

  //Additional method on the ElectricCar class
  showBatteryStatus() {
    console.log(`The battery capacity of this ${this.make} ${this.model} is ${this.batteryCapacity} kWh.`);
  }
}

//Create a new instance of the Car class
const myCar = new Car('Toyota', 'Corolla'); //Takes the same number of arguments of the constructor
console.log(myCar);
myCar.showDetails();
myCar.changeModel('Camry');

//You can create as many instances of the class as you'd need
const myCar2 = new Car('Audi', 'A4');
myCar2.showDetails();

//Create a new instance of the ElectricCar subclass
const myElectricCar = new ElectricCar('Tesla', 'Model 3', 75);
console.log(myElectricCar);
myElectricCar.showDetails(); //Methods defined in the parent class, still work on the extended class
myElectricCar.changeModel('Model Y');
myElectricCar.showBatteryStatus(); //New method defined in the extended class

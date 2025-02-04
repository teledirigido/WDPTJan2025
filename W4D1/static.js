class MathUtils {
  // Static prperty
  static PI = 3.14159;

  // Static method
  static calculateCircleArea(radius) {
    return this.PI * radius * radius;
  }
}

// Access the static property
console.log(MathUtils.PI);

// Call a static method
console.log(MathUtils.calculateCircleArea(5));

//Note: Static methods cannot be called on instances of the class
const math = new MathUtils();
math.calculateCircleArea(5); //This will throw an error

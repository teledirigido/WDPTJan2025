function centsToDecimals(cents) {
  if (typeof cents == 'string') {
    return undefined;
  }
  if (!cents) {
    return 0;
  }
  return cents / 100;
}

//Test

//Should convert the value from cents to a floating point number with 2 decimal places
console.log('Should convert value from cents to floating point number');
console.log(centsToDecimals(105) === 1.05);
console.log(centsToDecimals(23) === 0.23);

//Should return "undefined" when the argument passed is a string
console.log('Should return undefined when the argument passed is a string');
console.log(centsToDecimals('105') === undefined);

//Shoudl return 0 if there's no arguments passed
console.log("Should return 0 if there's no arguyments passed");
console.log(centsToDecimals() === 0);

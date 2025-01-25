let score = 95;

if (score >= 50) {
  //if true, executes the log and exist the conditional, never triggering the rest.
  console.log('Great job!');
} else {
  console.log('Could be better');
}

if (score >= 90) {
  console.log('Grade: A');
} else if (score >= 80) {
  console.log('Grade: B');
} else if (score >= 70) {
  console.log('Grade: C');
} else if (score >= 60) {
  console.log('Grade:D');
} else {
  //Acts as a fallback, in case all other conditions aren't met.
  console.log('Grade: F');
}

let day = 3;

switch (
  day //can be analyzing a value, or a condition as true or false
) {
  case 1:
    console.log('Monday');
    break; //In a switch statement, break needs to be there, or it won't break out of the conditional and keeps running the other cases.
  case 2:
    console.log('Tuesday');
    break;
  case 3:
    console.log('Wednesday');
    break;
  case 4:
    console.log('Thursday');
    break;
  case 5:
    console.log('Friday');
    break;
  default: //the fallback, in case all the other cases arent true
    console.log('Weekend');
}

switch (
  true //an example where it analyzes a condition as true or false, instead of a direct value
) {
  case score >= 90:
    console.log('Grade: A');
    break;
  case score >= 80:
    console.log('Grade: B');
    break;
  case score >= 70:
    console.log('Grade: C');
    break;
  case score >= 60:
    console.log('Grade: D');
    break;
  default:
    console.log('Grade: F');
}

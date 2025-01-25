const str = "It's raining";
//Print the characters from the str with a loop
for (let c = 0; i <= str.length - 1; c++) {
  console.log(str[c]);
}

//While loop to print the numbers from one to 5
let i = 1;
while (i <= 5) {
  console.log(i);
  i++; //Increment to avoid infinite loop
}

//Do while to print the numbers from one to 6
let j = 1;
do {
  console.log(j);
  j++; //increment to avoid infinite loop
} while (j <= 5); //Even if the condition isn't true, do while will run at least once.

for (let i = 0; i <= 10; i++) {
  if (i == 5 || i == 3) {
    continue; //Continue statements will make the loop ignore and jump to the next iteration. Anything bellow it, will not be read.
  }
  console.log(i);
}

for (let i = 0; i <= 10; i++) {
  if (i == 5 || i == 3) {
    break; //Break statements will make the loop stop. Anything bellow it will not be read.
  }
  console.log(i);
}

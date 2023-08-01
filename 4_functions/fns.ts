function signUpUser(name: string, email: string, hasPaid: boolean = false) {
  console.log(name, email, hasPaid);
  return hasPaid;
}

const isUserCreated: boolean = signUpUser("ayush", "ayush@ayush.co", true);

console.log(isUserCreated);

// arrow functions

const incrementFn = (num: number) => {
  // return "some string" // would work just fine
  return num + 1;
};

const incrementByTwoFn = (num: number): number => {
  // return "some string" // would not work and throw error
  return num + 2;
};

const numInc = incrementFn(5);
const numIncTwo = incrementFn(66);
console.log(numInc, numIncTwo);

// in case of multiple return types

function getValue(mayVal: number) {
  // how to assign the return type to the function? : boolean or : string
  if (mayVal > 5) return true;
  return "404";
}

// arrays
// Declaring an array of numbers
const numbers: number[] = [1, 2, 3, 4];
numbers.map((num): boolean => {
  // setting a return type to the callback inside map
  console.log(num);
  return true;
});

// Declaring an array of strings
const strings: string[] = ["hello", "world"];

// Declaring an array of booleans
const booleans: boolean[] = [true, false];

// Declaring a mixed array (array with multiple types)
const mixed: (number | string)[] = [1, "hello", 2, "world"];

// return types to function can also be `void` meaning the function will not return anything or `never` which means the function will never return anything

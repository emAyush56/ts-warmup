// numbers
// JavaScript does not have a special runtime value for integers, so there’s no equivalent to int or float - everything is simply number

const num: number = 3.14159;
console.log(num);

// booleans

const isLoading: boolean = false;
console.log(isLoading, typeof isLoading);

// type inference
let num2 = 2.71828; // how is this different from javascript? try assigning num2 a different type of value, ex: num2 = "ayush"
console.log(num2, typeof num2);

let name = "Ayush";
let isLoggedIn = false;

console.log(name, typeof name, isLoggedIn, typeof isLoggedIn);

const num3: number = 2;
const char: string = "2";

const strCat: string = num3 + char;
console.log(strCat);

// Why does line no. 24 doesnot give any type error? As I am trying to add a number to a string
// In JavaScript/TypeScript, when you add a number to a string, the number is automatically converted to a string and then concatenated with the other string. This is called type coercion.
// Type conversion is similar to type coercion because they both convert values from one data type to another with one key difference — type coercion is implicit whereas type conversion can be either implicit or explicit.
// In your code example, num3 is of type number, and char is of type string. When you try to concatenate them using the + operator, TypeScript automatically converts the number to a string and then concatenates it with the other string.

export {};

// any and noImplicitAny

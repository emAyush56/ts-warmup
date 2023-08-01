function signUpUser(name, email, hasPaid) {
    if (hasPaid === void 0) { hasPaid = false; }
    console.log(name, email, hasPaid);
    return hasPaid;
}
var isUserCreated = signUpUser("ayush", "ayush@ayush.co", true);
console.log(isUserCreated);
// arrow functions
var incrementFn = function (num) {
    // return "some string" // would work just fine
    return num + 1;
};
var incrementByTwoFn = function (num) {
    // return "some string" // would not work and throw error
    return num + 2;
};
var numInc = incrementFn(5);
var numIncTwo = incrementFn(66);
console.log(numInc, numIncTwo);
// in case of multiple return types
function getValue(mayVal) {
    // how to assign the return type to the function? : boolean or : string
    if (mayVal > 5)
        return true;
    return "404";
}
// arrays
// Declaring an array of numbers
var numbers = [1, 2, 3, 4];
numbers.map(function (num) {
    // setting a return type to the callback inside map
    console.log(num);
    return true;
});
// Declaring an array of strings
var strings = ["hello", "world"];
// Declaring an array of booleans
var booleans = [true, false];
// Declaring a mixed array (array with multiple types)
var mixed = [1, "hello", 2, "world"];
// return types to function can also be `void` meaning the function will not return anything or `never` which means the function will never return anything

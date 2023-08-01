"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// declaring objects
var user = {
    name: "John",
    age: 30,
    address: {
        street: "123 Main St",
        city: "Anytown",
        state: "CA",
        zip: "12345",
    },
    isFemale: false,
};
// passing objects to functions directly
function showMsg1(userInfo) {
    console.log(userInfo.name, userInfo.address, typeof userInfo.address);
}
showMsg1(user);
// passing objects to functions inside params
function showMsg2(person) {
    console.log(person.name, person.age);
}
showMsg2({ name: "ayush", age: 21 });
// returning objects from a function
function handleErr() {
    return { msg: "ok", code: 200 };
}
var errObj = handleErr();
console.log(errObj, typeof errObj);
// another way
function userPayment(_a) {
    var name = _a.name, hasPaid = _a.hasPaid;
    console.log("Name: ".concat(name));
    console.log("Has Paid: ".concat(hasPaid));
    console.log("ok");
}
userPayment({ name: "Ayush", hasPaid: true });
// miss behaviour
function userProfile(user) {
    // console.log(`email: ${user.email}`); // will not work
    console.log(user.age, user.name);
}
// userProfile({ name: "Ayush", age: 21, email: "a@a.co" }); // this throws an error as obviously email is not defined at the function definition
var missBehaviour = { name: "Ayush", age: 21, email: "a@a.co" };
userProfile(missBehaviour); // but this does not throws and error
function userAc(user) {
    console.log(user.address, "ok");
}
var myUser = {
    name: "Ayush",
    age: 21,
    address: {
        street: "Sector IV",
        city: "Kolkata",
        // state: "WB",
        pin: 736160,
    },
};
userAc(myUser);

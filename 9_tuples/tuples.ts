// tuples are used to set the order (and the no. of items) of the types in an array
let user: [string, number, string, boolean];

user = ["ayush", 21, "MAKAUT", true];
// user = [21, "ayush", true, "MAKAUT"]; // not in same order
console.log(user);

user.push("something new"); // why?
user.push(56); // why?
console.log(user);

let rgb: [number, number, number] = [255, 126, 255];
console.log(rgb);

export {};

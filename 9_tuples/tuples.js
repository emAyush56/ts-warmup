"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// tuples are used to set the order (and the no. of items) of the types in an array
var user;
user = ["ayush", 21, "MAKAUT", true];
// user = [21, "ayush", true, "MAKAUT"]; // not in same order
console.log(user);
user.push("something"); // why?
user.push(56); // why?
console.log(user);
var rgb = [255, 126, 255];
console.log(rgb);

"use strict";
// numbers
// JavaScript does not have a special runtime value for integers, so there’s no equivalent to int or float - everything is simply number
Object.defineProperty(exports, "__esModule", { value: true });
var num = 3.14159;
console.log(num);
// booleans
var isLoading = false;
console.log(isLoading, typeof isLoading);
// type inference
var num2 = 2.71828; // how is this difference from javascript? try assigning num2 a different type of value, ex: num2 = "ayush"
console.log(num2, typeof num2);
var name = "Ayush";
var isLoggedIn = false;
console.log(name, typeof name, isLoggedIn, typeof isLoggedIn);
var num3 = 2;
var char = "2";
var strCat = num3 + char;
console.log(strCat);
// any and noImplicitAny

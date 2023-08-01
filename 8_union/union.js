// the term union in someway is the mathematical meaning of the union operation on sets
// in ts it means the union of multiple types (generally using the `|` pipe symbol)
var someVar;
someVar = 2;
console.log(someVar);
someVar = "Ayush";
console.log(someVar);
var arr = [1, 2, "Ayush", 44, "Prithish"]; // parentheses are important
var _arr = [1, 2, "Ayush", 44, "Prithish"]; // better way, i think
console.log(arr, _arr);
var arr2 = ["1", "2", "Ayush", "44", "Prithish"]; // this means either arr has to be completely of type number or string
console.log(arr2);
// something new
var seatAllotedType;
// console.log(seatAllotedType); // cannot use value not assigned, no compilation error
seatAllotedType = "aisle"; // valid assignment
// seatAllotedType = "something else" // invalid assignment
console.log(seatAllotedType); // can use
/**
line 19 is an example of a union type. The variable seatAllotedType can have one of three string literal types: "aisle", "middle", or "window". This means that the variable can only be assigned one of these specific string values, and any other string value is not allowed.

Union types are a way to specify that a variable can have one of several types, without having to create a separate type for each possible value. In this case, the union type is created using the | (pipe) operator to separate the string literal types.

This type of assignment is useful when you want to restrict the possible values that a variable can take, and make it clear to other developers what those possible values are. It can also help prevent errors caused by invalid values being assigned to the variable.
**/

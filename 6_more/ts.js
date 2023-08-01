"use strict";
// readonly keyword and `?` symbol used with variables/properties that are optional
Object.defineProperty(exports, "__esModule", { value: true });
var user = {
    _id: "IEYEAS216",
    name: "Ayush Shah",
    email: "ayush@ayush.co",
    age: 21,
    //   hasPaid: false,
};
user.name = "Ayush Saha";
// user._id = "XXXXXXXX"; // cannot edit object property since it is read only
function createUser(user) {
    console.log("ok", user.hasPaid, typeof user.hasPaid);
}
createUser(user);

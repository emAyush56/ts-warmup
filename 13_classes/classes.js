"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(name, email, dob) {
        this.city = "";
        this.name = name;
        this.email = email;
        this.dob = dob;
    }
    return User;
}());
var ayush = new User("ayush", "ayush@ayushsaha.me", "05-10-2001");
console.log(ayush);
ayush.city = "Kolkata";
console.log(ayush);

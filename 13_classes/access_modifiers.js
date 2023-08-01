"use strict";
// private access modifiers
Object.defineProperty(exports, "__esModule", { value: true });
var UserX = /** @class */ (function () {
    function UserX(name, email // private userId: string
    ) {
        this.name = name;
        this.email = email;
        this.city = "Kolkata";
        this.name = name;
        this.email = email;
    }
    return UserX;
}());
var ayush = new UserX("ayush", "ayush@ayush.co");
console.log(ayush);
// getters and setters
var User = /** @class */ (function () {
    function User(fullName, email) {
        this.fullName = fullName;
        this.email = email;
        this.courseCount = 1;
        this.username = "EMAYUSH56";
    }
    // private method
    User.prototype.deleteToken = function () {
        console.log("Cannot be accessed");
    };
    Object.defineProperty(User.prototype, "getUserEmail", {
        get: function () {
            return "email: ".concat(this.email);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "getCourseCount", {
        // reading the private member `courseCount`
        get: function () {
            return this.courseCount;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "setCourseCount", {
        // modifying the private member `courseCount`
        set: function (_courseCount) {
            // no return type of the function is needed to be assigned
            if (_courseCount <= 1)
                throw new Error("No new course has been assigned after the default");
            this.courseCount = _courseCount;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(firstName, lastName, age, street) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.street = street;
    }
    User.prototype.getFirstName = function () {
        return this.firstName;
    };
    User.prototype.setFirstName = function (name) {
        this.firstName = name;
    };
    User.prototype.getLastName = function () {
        return this.lastName;
    };
    User.prototype.setLastName = function (name) {
        this.lastName = name;
    };
    User.prototype.getAge = function () {
        return this.age;
    };
    User.prototype.setAge = function (age) {
        this.age = age;
    };
    User.prototype.getStreet = function () {
        return this.street;
    };
    User.prototype.setStreet = function (street) {
        this.street = street;
    };
    User.prototype.print = function () {
        console.log('--- USER ---');
        console.log('Name: ', this.firstName, this.lastName);
        console.log('Age: ', this.age);
        console.log('Street: ', this.street);
    };
    return User;
}());
exports.User = User;
//# sourceMappingURL=user.js.map
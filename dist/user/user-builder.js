"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_1 = require("./user");
var UserBuilder = /** @class */ (function () {
    function UserBuilder() {
        this.firstName = '';
        this.lastName = '';
        this.age = -1;
        this.street = '';
    }
    UserBuilder.user = function () {
        return new UserBuilder();
    };
    UserBuilder.prototype.withFirstName = function (name) {
        this.firstName = name;
        return this;
    };
    UserBuilder.prototype.withLastName = function (lastName) {
        this.lastName = lastName;
        return this;
    };
    UserBuilder.prototype.withAge = function (age) {
        this.age = age;
        return this;
    };
    UserBuilder.prototype.liveInStreet = function (street) {
        this.street = street;
        return this;
    };
    UserBuilder.prototype.build = function () {
        var user = new user_1.User(this.firstName, this.lastName, this.age, this.street);
        return user;
    };
    return UserBuilder;
}());
exports.UserBuilder = UserBuilder;
//# sourceMappingURL=user-builder.js.map
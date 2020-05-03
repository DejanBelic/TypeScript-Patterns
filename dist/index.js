"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_builder_1 = require("./user/user-builder");
var user = user_builder_1.UserBuilder.user()
    .withFirstName('Dejan')
    .withLastName('Belic')
    .withAge(33)
    .liveInStreet('Kolo Srpskih Sestara')
    .build();
user.print();
//# sourceMappingURL=index.js.map
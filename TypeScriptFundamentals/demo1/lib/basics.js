"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//VARIABLES
let some = "something";
// here 'string' is the type annotation. Same as type declaration in C++/C.
let wildcard = 42;
wildcard = "reassigned.";
//ARRAYS
let numberArray = [23];
numberArray.push(33);
//numberArray.push("somestring") will give an error.
let s = []; //can store strings or numbers.
s.push(23);
s.push("this is a string");
//TUPLES: fixed length array.
let something = [
    123,
    "Hamza",
    "Ali",
    34
];
//pushing to a tuple is not type safe.
something.push(23); // so this is legal but it's stupid.
//OBJECTS
let someObj;
someObj = {
    houseNumber: 23,
    houseName: "RandomHouse"
};
someObj.houseName = "BetterHouseName";
;
//i.e. that field is optional.
let address1 = { houseNumber: 12 };
;
;
let bothTypes = {
    name: "Hamza",
    phone: 234,
    email: "email@email.com"
};
let someTypes;
someTypes = {
    name: "Hamza",
    email: "email@email.com"
};
someTypes.email;
//# sourceMappingURL=basics.js.map
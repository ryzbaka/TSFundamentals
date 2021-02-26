"use strict";
exports.__esModule = true;
//VARIABLES
var some = "something";
// here 'string' is the type annotation. Same as type declaration in C++/C.
var wildcard = 42;
wildcard = "reassigned.";
//ARRAYS
var numberArray = [23];
numberArray.push(33);
//numberArray.push("somestring") will give an error.
var s = []; //can store strings or numbers.
s.push(23);
s.push("this is a string");
//TUPLES: fixed length array.
var something = [
    123,
    "Hamza",
    "Ali",
    34
];
//pushing to a tuple is not type safe.
something.push(23); // so this is legal but it's stupid.
//OBJECTS
var someObj;
someObj = {
    houseNumber: 23,
    houseName: "RandomHouse"
};
someObj.houseName = "BetterHouseName";
;
var address1 = { houseNumber: 12 };
;
;
var bothTypes = {
    name: "Hamza",
    phone: 234,
    email: "email@email.com"
};
var someTypes;
someTypes = {
    name: "Hamza",
    email: "email@email.com"
};
someTypes.email;

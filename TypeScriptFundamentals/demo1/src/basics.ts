//VARIABLES
let some:string = "something";
// here 'string' is the type annotation. Same as type declaration in C++/C.

let wildcard:any = 42;
wildcard = "reassigned.";

//ARRAYS
let numberArray:number[] = [23];
numberArray.push(33);
//numberArray.push("somestring") will give an error.

let s:(string|number)[]=[]; //can store strings or numbers.
s.push(23);
s.push("this is a string");

//TUPLES: fixed length array.
let something:[number, string, string, number]=[
    123,
    "Hamza",
    "Ali",
    34
];
//pushing to a tuple is not type safe.
something.push(23); // so this is legal but it's stupid.

//OBJECTS

let someObj:{houseNumber:number;houseName:string};

someObj = {
    houseNumber:23,
    houseName:"RandomHouse"
};
someObj.houseName="BetterHouseName";
//not assigning a value to all of the keys in the object will lead to an error.
//To avoid that error you can use interfaces as shown below.

//INTERFACES
interface Address{
    houseNumber: number;
    streetName?:string //if the streetName key 
                      //is assigned a value it should be a string.
};
//i.e. that field is optional.
let address1:Address = {houseNumber:12};


export interface HasPhoneNumber{
    name:string,
    phone:number
};

export interface HasEmail{
    name:string,
    email:string
};

let bothTypes:(HasEmail&HasPhoneNumber) = {
    name:"Hamza",
    phone:234,
    email:"email@email.com"
}

let someTypes:(HasEmail|HasPhoneNumber);
someTypes= {
    name:"Hamza",
    email:"email@email.com",
    phone:23
}
// someTypes.email; 
// someTypes.phone
//these two values may or may not be there.

someTypes  = someTypes as HasEmail; //typecasting.
someTypes.email;
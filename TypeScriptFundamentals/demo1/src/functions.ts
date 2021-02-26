import {HasEmail, HasPhoneNumber} from "./basics";

function sendEmail(to:HasEmail):{recepient:string;body:string}{
    return {
        recepient:`${to.name} < ${to.email} >`,
        body: "You got mail!"
    }
}

const sendTextMessage=(to:HasPhoneNumber):{recepient:string;body:string}=>{
    return {
        recepient:`${to.name} < ${to.phone} >`,
        body: "Seen."
    }
}

// FUNCTION SIGNATURE OVERLOADING.

function contactPeople(method:"email",people:HasEmail[]):void;
function contactPeople(method:"phone",people:HasPhoneNumber[]):void;


function contactPeople(
    method: "email" | "phone", //fixed default values.
    people: (HasEmail | HasPhoneNumber)[], // array
):void{
    if(method==="email"){
        (people as HasEmail[]).forEach((el)=>sendEmail(el));
        //here we typecast people to an array of HasEmail        
    }else{
        (people as HasPhoneNumber[]).forEach(el=>sendTextMessage(el));
    }
}
contactPeople("email",[{name:"hamza",email:"email@email.com"}])
contactPeople("phone",[{name:"hamza",phone:23}])
// contactPeople("email",{name:hamza,phone:23}) ~ this won't work.

let testUser:(HasEmail&HasPhoneNumber) ={
    name:"Hamza",
    email:"hamza@email.com",
    phone:7890765
}

contactPeople("email",[testUser]); //this will work.

let testUser2:HasPhoneNumber = testUser as HasPhoneNumber;

contactPeople("phone",[testUser2]);
// contactPeople("email",[testUser2]); //this won't work.

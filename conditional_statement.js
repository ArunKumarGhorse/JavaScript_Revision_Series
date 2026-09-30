// execution according different conditions
// if
// if...else
// else if
// switch
// Ternary operator ? :

// 1. if
let age = 20;
if(age>18){
    console.log("eligible");
}

// 2.if...else
if(age<18){
    console.log("Not eligible");
}else{
    console.log("Eligible");
}

// 3.else if

if(age>18){
    console.log("Not Eligible");
}else if(age==18){
    console.log("eligible");
}

// 4.switch
let choice = 3;
switch(choice){
    case 1:
        console.log("Fist Class");
    break;
    case 2:
        console.log("Second Class");
    break;
    case 3:
        console.log("Thired Class");
    break;
    default:
        console.log("Enter num b/w 1 to 3");
    break;
}

// 5. Ternary operator
let a=18;
a>=18 ? console.log("Eligible") : console.log("Not Eligible");
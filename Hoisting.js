// Hoisting — 
// Hoisting is JavaScript's behavior where declarations of variables and functions are processed during the creation phase of an execution context before the code is executed.

// var is hoisted and initialized with undefined.
console.log(a); // undefined
var a = 10;

// let and const are hoisted, but they remain in the Temporal Dead Zone (TDZ) until their declaration is evaluated.
console.log(b); // ReferenceError
let b = 10;
console.log(c); // ReferenceError
const c = 10;

// Function declarations are fully hoisted:
greet();

function greet() {
    console.log("Hello");
}         // works

// Function Expression behave like variable
greet();

const greet = function () {
    console.log("Hello");
};    // ReferenceError


// HOISTING
// │
// ├── var
// │   ├── Declaration → hoisted
// │   ├── Initialized → undefined
// │   └── Before declaration → undefined
// │
// ├── let
// │   ├── Declaration → hoisted
// │   ├── Initialization → later
// │   └── Before initialization → TDZ / ReferenceError
// │
// ├── const
// │   ├── Declaration → hoisted
// │   ├── Initialization → later
// │   └── Before initialization → TDZ / ReferenceError
// │
// └── Function Declaration
//     ├── Fully hoisted
//     └── Can be called before declaration

// Global Scope
// Function Scope
// Block Scope
// Lexical Scope - inner fun can acccess outer function variables called Lexical scope

// 1. Global scope 
let name = "Arun";

function greet() {
    console.log(name);
}

greet();

// 2. Function Scope
function test() {
    let age = 21;
    console.log(age);
}
test();
console.log(age); // Error

// 3. Block Scope. let & const
if (true) {
    let x = 10;
    const y = 20;
    console.log(x);
}
console.log(x); // Error

// 4. Lexical Scope

function outer() {
    let x = 10;

    function inner() {
        console.log(x);
    }

    inner();
}

outer();

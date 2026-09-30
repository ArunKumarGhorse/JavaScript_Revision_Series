// HOF:- A function that takes another function as an argument OR returns a function.
// Using Callback
function greet(name) {
    console.log("Hello " + name);
}

function processUser(callback) {
    callback("Arun");
}
processUser(greet);

// Using Return another function
function outer() {
    return function inner() {
        console.log("Hello");
    };
}

const result = outer();

result();
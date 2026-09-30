// Closure — 
// A closure in JavaScript is a function that remembers and can access variables from its outer (enclosing) function's scope, even after the outer function has finished executing.
function outer(){
    let count = 0;
    return function inner(){
        count++;
        console.log(count);
    }
}
outer(); // only outer fun execute and it return inner but never execute inner we have to store it

const counter = outer(); // execute outer and return inner which is stored in counter
counter(); // execute inner
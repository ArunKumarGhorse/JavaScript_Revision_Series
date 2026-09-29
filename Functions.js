// Function Dec
function name_fun(para1,para2){
    // code
}
// Function Expression
const add = function(a,b){
    return a+b;
}
// Arrow Function
const sub = (a,b)=>{
    a-b;
}

// IIFE - Immediately Invoked Function Expression
(function(){
    console.log("Iam IIFE");
})();

// Callback & HOF  Function — function passed as an argument or return another fun
function greet(callback){
    console.log("Hello");
    callback();
}
function call(){
    console.log("Namaste");
}
greet(call);


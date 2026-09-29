// // 1. Basic :- JS is high level Prog. language. synchronous by default.
//// 2. Syntax, comment, variable, operator, data types

// console.log("Revising JS");

// let age = 25; // Fun Scoped
// var name = "John Doe"; // Function Scoped
// const isStudent = true; // Block Scoped

// let a = 10;
// let b = 5;

// let sum = a + b; // Addition
// let difference = a - b; // Subtraction
// let product = a * b; // Multiplication
// let quotient = a / b; // Division
// let remainder = a % b; // Modulus

// // 7. Functions

// function greet(name){
//      console.log("Namaste FL.",name)
// }
// greet("Avinash");
 
// // 8 Objects

// const Zarthi = {
//     type: "Company",
//     CEO : "Aditya Garg",
//     FL : "Avinash"
// }

// // 9. Symbol

// // 10.Strings, Arrays and Number Methods 
// let name = "I am String";

// const arr = [1,2,3,4,5];

// const arr2 = ['a','e','i','o','u'];

// // 11. JSON
// // JavaScript Object Notation is a lightweight data formate use to store and exchange data between applications
// // Rules :, NO Fun, keys should be in " " formate
// // {
// //   "name": "Arun",
// //   "skills": ["C++", "JavaScript", "React"],
// //   "active": true,
// //   "address": null
// // }

// //  12.Type Coercion 
// let x = "10";
// let y = 5;

// console.log(x + y); // 105. concate
// console.log(x-y); // 5


// 13.Looping 
// const arr3 = [1,2,3,4,5,6,7];

// for(num of arr3){
//     console.log(num);
// }
// let  idx=0;
// while(idx<5){
//     console.log(arr3[idx]);
//     idx++;
// }
// let i=0;
// do{
//     console.log(arr3[i]);
//     i++;
// }while(i<5)

// 14.Conditional Statements 

// let age=100;
// if(age<18){
//     console.log("teenager");
// }else if(age>=18 && age<=60){
//     console.log("Adult");
// }else{
//     console.log("Old");
// }

// 15.Scope 
// let age = 25; // block Scoped
// var name = "John Doe"; // Function Scoped
// const isStudent = true; // Block Scoped

// 16.Arrow Functions 
// const greet = (name) => {
//     console.log("Hello.",name)
// }

// greet("virat kohli");

// 17.Let / Var / Const 
// let age = 25; // Fun Scoped

// var name = "John Doe"; // Function Scoped
// const isStudent = true; // Block Scoped

// 18.High Order Functions 
// Higher-Order Function is a function that either takes another function as an argument or returns a function 
// Via Callbake
// const greet =  (callback)=>{
//     console.log("Hi this is fun greet");
//     callback();
// }

// function HOF(){
//     console.log("Namaste");
// }
// greet(HOF);
// // via returning function
// const fun = ()=>{
//     return HOF();
// }
// fun();


// const arr4=[1,2,3,4,5];

// 19.1 ForEach 

// arr4.forEach((num)=>{
//     console.log(num);
// })
// arr4.forEach((num,idx)=>{
//     console.log(idx,num);
// })
// let sum=0
// arr4.forEach((num)=>{
//     sum+=num;
// })
// console.log(sum)

// 19.2 Filter 




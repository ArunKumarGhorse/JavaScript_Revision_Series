console.log("5" + 2);   // "52" -> string concatination 
console.log("5" - 2);   // 3
console.log("5" * 2);   // 10
console.log("5" / 2);   // 2.5

// + with a string usually performs string concatenation:
// But -, *, / try to convert the string to a number:

// 2. Explicit Type Conversion
let x = "100";
console.log(Number(x));
console.log(parseInt(x));
let age = 20;
console.log(String(age));


// == (Loose Equality) vs === (Strict Equality)
console.log("5"==5) // true : checks val and compare
console.log("5"===5) // false : checks value as well as Data Type 


// Truthy & Falsy
//  falsy values:-   false,0,-0,"",null,undefined,NaN
// almost evry else is truthy
console.log(10 + "5"); // 105
console.log(10 - "5"); // 5
console.log(true + 1); // 2
console.log(false + 1); // 1
console.log(null + 1); // 1
console.log(undefined + 1); // NaN
console.log(5 == "5"); // true
console.log(5 === "5");  // false
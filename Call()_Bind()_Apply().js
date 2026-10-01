// call() function ko immediately execute karta hai aur this ko manually set karta hai.
// function.call(object, arg1, arg2, ...)

const user1 = {
    name:"Arun",
    age:20
}

const user2 = {
    name:"Vishal",
    age:20
}

function greet(city,num){
    console.log("Hello",this.name,city,num);
}
greet.call(user1,"Bhopal",41);
greet.call(user2,"Noida",40);

// bind() function ko immediately execute nahi karta.
// Ye ek new function return karta hai jisme this permanently set hota hai.

const newFunction = greet.bind(user1,"Bhopal",91);
newFunction();


// apply() bhi call() ki tarah immediately execute karta hai.
// Difference: arguments array ke form mein dete hain.

greet.apply(user1,["Bangluru",20]);

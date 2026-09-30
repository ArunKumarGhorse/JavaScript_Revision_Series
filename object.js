// Example
const student = {
    name: "Arun",
    age: 21,
    course: "AI & Data Science"
};

// Accessing Object Properties

// 1. Dot notation
console.log(student.name);

// 2. Bracket notation
console.log(student["age"]);

// Adding / Updating / Deleting
student.city = "Bhopal";       // Add
student.age = 22;              // Update
delete student.course;         // Delete

// Fun in Obj
const student = {
    name: "Arun",

    greet: function() {
        console.log("Hello!");
    }
};

student.greet();

// Ways to Create Objects

// Object literal
const obj = {name:"Arun"};

// Object constructor
const obj1 = new Object();

// Constructor function
function Student(name){
    this.name(name);
}
const s1 = new Student("Arun");
const s2 = new Student("Ghorse");

// Object.create()
const obj3 = Object.create(null);
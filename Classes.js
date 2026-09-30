// A class in JavaScript is a blueprint for creating objects.

class Student{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    Show(){
        console.log(`Student name is ${this.name} and age is ${this.age}`);
    }
}
const s1 = new Student("Arun",20)
const s2 = new Student("Arun's GF",18);

console.log(s1,'\n',s2);
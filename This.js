// this refers to the object/context from which the function is being called.
// In a browser's non-strict mode, this can refer to the global object (window). In strict mode, it is undefined.
const user = {
    name:"Arun",
    age:30,
    greet : function(){
        console.log(this.name);
    },
    deartment: "CSE"
}

user.greet();
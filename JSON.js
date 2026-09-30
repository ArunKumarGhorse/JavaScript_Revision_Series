// JSON is a lightweight text-based data format used to store and exchange data, especially between frontend and backend.

// obj
const user = {
    name: "Arun",
    age: 21
};

//json 
const JsonData = `{
    name: "Arun",
    age: 21
}`;

// obj to json 
const json_user = JSON.stringify(user);
// console.log(json_user);

console.log(typeof user);
console.log(typeof json_user)

// JSON string → JavaScript object
const json_Obj = `{"name":"arun","age":20}`;
const obj3 = JSON.parse(json_Obj);
console.log(typeof json_Obj);
console.log(typeof obj3);
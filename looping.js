// Used to perform repeated executive tasks
// 1.for
// 2.while
// 3.do...while
// 4.for...of
// 5.for...in

// 1. For Loop
for(let u=0;i<5;i++){
    console.log(i);
}

// 2. While
let i=0;
while(i<5){
    console.log(i);
    i++;
}

// 3.do while
let idx=0;
do{
    console.log(idx);
    idx++;
}while(idx<5);

// 4.for of loop
const nums = [1,2,3,4,5];
for(const num of nums){
    console.log(nums);
}

// 5.for in loop

const student = {
    name : "Arun",
    age : 20,
    course : "BTech CSE AIDS"
}

for(key in student){
    console.log(key," ",student.key);
}


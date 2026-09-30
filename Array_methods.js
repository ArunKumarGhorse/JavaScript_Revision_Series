const arr = [1,2,3,4,5];
// 1.For Each
arr.forEach((val,idx)=>{
    console.log(idx,val);
})

// 2.Filter - SELECT the element in New array
const res = arr.filter((val,idx)=>{
    if(val%2==0)
        return val;
})
console.log(res);

// 3.Map TRANSFORM the array into new array
const res1 = arr.map((num,idx)=>{
    return idx*num
        
})
console.log(res1);

// 4.Reduce
const res4 = arr.reduce((sum,curr)=>{
    sum+=curr;
    return sum;
},0)

console.log(res4);

// 5.Every
const res5 = arr.every((num)=>{
    return num%2==0;
})
console.log(res5);

// 6.Find return first element that satisfy consdition
const res6 = arr.find((num,idx)=>{
    return (num%idx==0);
})
console.log(res6);

// 7.Sort
// accending order sort
arr.sort((a,b)=>a-b);
console.log(arr);
// decending order sort
arr.sort((a,b) => b-a);
console.log(arr);

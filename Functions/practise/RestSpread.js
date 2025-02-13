
// Rest Parameters and Spread Operator

// 1. Rest Parameters

// let i = 0;

// const sumAll = (...num) =>{
//     let sum = 0;
//     while(i<num.length){
//         sum = sum + num[i];
//         i++;
//     }
//     return sum;
// }

// console.log(sumAll(12,23,43,56));

// 2. spread operator

let arr1 = [12,33,54,22];
let arr2 = [...arr1]; // creates a new copy(shallow copy)

arr2.push(10);

console.log(arr1); // Original remains unchanged
console.log(arr2);

// Ques.1
// for(let i=1; i<=10; i++){
//     setTimeout(()=>{
//         console.log(i);
//     }, 1000 * i)
// }


// Ques.2 => predict the output
// const arr = [ 1,2,3 ];

// arr = [4,5,6]; // not changable because it's const type

// arr[4] = 8; // assigning values not ref

// console.log(arr.length) // 5
// console.log(arr[3]) // undefined or empty
// console.log(arr)


// Ques.3 => Destructuring
    // const [a, b] = [10, 'hii'];
    // console.log(a, b)

// ques4. print the value 30?

const [, , , , a] = [10,20,30,40,50]; // first way
console.log(a);

// const {3: b} = [10,20,30,40,50]; // object destructuring on arr, it's possible because arr is also an object.
// console.log(b)

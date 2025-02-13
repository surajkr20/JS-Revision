
// it is reference type = object
// ordered collection of items.

let arr = ["fruits", "mango", "vegitables", "grapes", "onion"];

console.log(typeof(arr)) // type check
console.log(Array.isArray(arr)) // checking is array or not

// arr.push("alobera", "masala"); // add elements from end, in array

// arr.pop(); // remove elements from end
// arr.pop();

// shift and unshift

arr.unshift("banana"); // add from start
arr.shift(); // remove from start

console.log(arr)
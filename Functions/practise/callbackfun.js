// Create a function called `processArray` that accepts two parameters: an array and a callback function. The function should apply the callback function to each element of the array and return a new array with the results.

const processArray = (arr, callfun) =>{
    return arr.map(callfun); // Applies callback to each element
}

let numbers = [1,2,3,4,5];

let result = processArray(numbers, (num)=>(num ** 2));
console.log(result)


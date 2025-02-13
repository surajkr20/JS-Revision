
function fun(a,b){
    return a+b;
}

const value = fun(11,90);
const value1 = fun(23,22,33, 45); // only add 23 + 22, and remaining values are ignored

console.log(value)
console.log(value1)
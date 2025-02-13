
function calc(a, b){
    return 2 * (a+b);
}

function calc1(a, b=0){
    return (2 * (a+b));
}

console.log(calc(2, 4));
console.log(calc1(2)); // 4
console.log(calc1(4,4));
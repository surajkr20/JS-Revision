

const outer = (x) =>{
    const inner = (y) =>{
        console.log("suraj", x+y)
    }
    return inner;
}

const outerResult = outer(10);
console.log(outerResult(10));
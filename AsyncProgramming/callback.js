
// calling a function inside a fun

let outer = () =>{
    return inner = () =>{
        console.log("hello")
    }
}

let innerResult = outer();
innerResult()
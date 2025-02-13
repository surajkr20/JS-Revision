
// nested functions
// const add = (a,b) =>{

//     console.log(a+b);

//     const substract = (a,b) =>{
//         console.log(a-b);
//     }
//     substract(a,b);

// }

// add(32,12);

// Function scops => who can access, what?

// if you are define any variables inside the functions, you can able to access all values in the fun not outside the fun.

const hello = "AbhinavSuraj";

const fun = () =>{
    const a = 20;
    let b = 10;
    var c = 30;

    console.log(a,b,c);

    // all outer variables accessible inside the function but function variables not accessible, outside the fun.
    console.log(hello);
}

fun();

console.log(a,b,c) // it's not accessible
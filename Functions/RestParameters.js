
// rest parameter is always last parameter
// => allows the functions to the accept any no of arguments as an array

function fun(a,...b){
    console.log(a, b);
}

fun(23,43,43,56,76);
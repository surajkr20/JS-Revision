
//  Function Declaration vs. Function Expression

// 1. Function Declaration : A function declaration defines a function with a name and allows it to be called before its definition due to hoisting.
// ==>> key features :-
// ✅ Hoisted – The function is moved to the top of its scope during compilation, so it can be called before being declared.
// ✅ More readable due to a named function.
// ✅ Can be used globally in its scope.
// ✅ can't arrow fun or anonymous

// greet(); //  ✅ Works due to hoisting

// function greet(){
//     console.log("say hello..")
// }

// 2. Function Expression : A function expression assigns a function to a variable. It can be named or anonymous and is not hoisted.
// ==>> key features :-

// console.log(data) // Error : ❌ Not hoisted – Cannot be called before its definition.
// ✅ Can be anonymous, named or arrow fun.
// ✅ Used in callbacks and closures.

// let data = (function (){
//     console.log("function expressions")
// })

// data();

// ------------------------practise------------------------

// functions declaration

// greet("Abhinav")

// function greet(name){
//     console.log(`hello ${name}`)
// }

// greet("suraj");

// functions expression
const greetExp = (name) =>{
    console.log(`Hello ${name}`)
    console.log("kaa haal baa")
}

greetExp("suryaa bhai");
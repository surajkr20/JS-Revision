
// in the pure functions if input is same, output will be same

// function sayGreeting(name){
//     return `Hello ${name}`
// }

// console.log(sayGreeting('Suraj'))

// impure function = input and output are diffirent

let greeting = "kaa re ";

function sayGreeting1(name){
    return `${greeting} ${name}`
}

console.log(sayGreeting1('suraj'))
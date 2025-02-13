

// calling a function inside a fun.
// =>> javascript runs top to the bottom

// function one(call_two){
//     console.log('step 1 completed, please call step 2');
//     call_two();
// }

// function two(){
//     console.log('step 2')
// }

// one(two);

// another example

// let order = (call_production) =>{
//     console.log("order placed, please call production");
//     call_production();
// }

// let production = () =>{
//     console.log("order received, starting production")
// }

// order(production);

// how to access

let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"]
}

console.log(stocks.Fruits[2])
console.log(stocks.Fruits)
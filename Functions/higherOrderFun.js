
// higher order functions (HOF)
/** 
 * (if satisfied anyone one or both conditions that's called HOF)
 * It takes one or more functions as an argument
 * It may return a function
 */

// function getCapture(camera){
//     camera();
// }

// getCapture(function(){
//     console.log("picture captured..")
// })

function returnFun(){
    return function(){
        console.log('returning..')
    }
}

const fun = returnFun();
fun();
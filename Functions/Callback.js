// Callback fun.

// the fun doesn't have a name called anonymous fun.

function callback(bar){ // parameter(a fun)
    bar(); // this is called callback fun
}

// function print(){
//     console.log("printing......")
// }

// callback(print)

callback(function(){ // calling callback fun as an function angument
    console.log("hello world!")
})




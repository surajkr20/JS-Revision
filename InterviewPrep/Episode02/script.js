
// Ques.1

// The comma operator ensures that only the last expression’s result is returned.
// In the code, addNum() and substractNum, executes but its return value is ignored because the comma operator.
// The final value assigned to a is the return value of productNum (25).

// function addNum(){
//     console.log("add");
//     return 100+100; // this will be ignored because the comma operator(in where is calling fun)
// }

// function substractNum(){
//     console.log("substract");
//     return 200-100 
// }

// function productNum(){
//     console.log("product");
//     // return 5*5; // if here is not returning anything, then value is undefined
// }

// const a = (addNum(), substractNum(), productNum());
// console.log(a);




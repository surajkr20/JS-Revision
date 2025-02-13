
### 1. Function Declaration vs. Function Expression

**Question:**  
- **a.** Write a **function declaration** called `greet` that takes a name as a parameter and logs `"Hello, [name]!"` to the console.
- **b.** Write a **function expression** that does the same thing and assign it to a variable named `greetExpr`.

*Hint:* Remember that function declarations are hoisted, while function expressions are not.

---

### 2. Arrow Functions

**Question:**  
Convert the following function expression to an arrow function:
```js
const multiply = function(a, b) {
  return a * b;
};
```

*Extra Challenge:* Write a single-line arrow function to calculate the square of a number.

---

### 3. Default Parameters

**Question:**  
Write a function named `createUser` that takes two parameters: `username` and `role`. Set the default value for `role` to `"guest"`. The function should return an object with properties `username` and `role`.

*Example:*  
```js
createUser("Alice"); 
// should return { username: "Alice", role: "guest" }
```

---

### 4. Rest Parameters and Spread Operator

**Question:**  
- **a.** Write a function called `sumAll` that uses the **rest parameter** to accept any number of numerical arguments and returns their sum.
- **b.** Use the **spread operator** to call `sumAll` with the array `[1, 2, 3, 4, 5]`.

---

### 5. Callback Functions

**Question:**  
Create a function called `processArray` that accepts two parameters: an array and a callback function. The function should apply the callback function to each element of the array and return a new array with the results.

*Example:*  
```js
function double(num) {
  return num * 2;
}
processArray([1, 2, 3], double);  // should return [2, 4, 6]
```

---

### 6. Higher-Order Functions

**Question:**  
Write a function named `filterArray` that takes an array and a predicate function as arguments. The function should return a new array containing only the elements for which the predicate function returns `true`.

*Example:*  
```js
function isEven(num) {
  return num % 2 === 0;
}
filterArray([1, 2, 3, 4, 5, 6], isEven);  // should return [2, 4, 6]
```

---

### 7. Closures

**Question:**  
Write a function called `makeCounter` that returns a function that, when called, increments and returns an internal counter. Demonstrate that the internal counter is maintained across multiple calls.

*Hint:*  
```js
const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2
```

---

### 8. Immediately Invoked Function Expression (IIFE)

**Question:**  
Write an IIFE that logs `"IIFE executed"` to the console. Then, explain one practical use case of an IIFE in JavaScript.

---

### 9. Recursion

**Question:**  
Write a recursive function called `factorial` that takes a positive integer `n` and returns the factorial of `n`.  
*Example:*  
```js
factorial(5); // should return 120
```

*Extra Challenge:* Write a recursive function to compute the nth Fibonacci number.

---

### 10. Function Binding (`call`, `apply`, and `bind`)

**Question:**  
- **a.** Create an object named `person` with a method `introduce` that logs `"Hi, my name is [name]"`, where `[name]` is a property of the object.
- **b.** Create a second object without an `introduce` method.  
- **c.** Use `call`, `apply`, or `bind` to borrow the `introduce` method from `person` and invoke it for the second object.

*Hint:*  
```js
// Using call:
person.introduce.call(anotherPerson);
```

---

### 11. Function Factory

**Question:**  
Write a function `makeAdder` that takes a number `x` and returns a new function. The returned function should take another number `y` and return the sum of `x` and `y`.

*Example:*  
```js
const addFive = makeAdder(5);
console.log(addFive(10)); // should output 15
```

---

### 12. Understanding Hoisting

**Question:**  
Consider the following code:
```js
sayHello();

function sayHello() {
  console.log("Hello!");
}

sayHi();

var sayHi = function() {
  console.log("Hi!");
};
```
- Explain why calling `sayHello()` works but calling `sayHi()` before its declaration results in an error.

---

### Additional Challenge:  
Combine multiple concepts by writing a function that:
- Uses default and rest parameters,
- Returns another function (closure) that makes use of the parameters,
- And demonstrates recursion internally.

*Example Scenario:* Create a function that builds a calculator. The outer function accepts an initial value (default to 0) and returns an object with methods like `add`, `subtract`, and `multiply`. Each method should accept a variable number of arguments, perform the corresponding operation recursively on all arguments, and update the internal value.
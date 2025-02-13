
// Write a function named `createUser` that takes two parameters: `username` and `role`. Set the default value for `role` to `"guest"`. The function should return an object with properties `username` and `role`.

const createUser = (username, role='guest') =>{
    return {
        username,
        role
    }
}

// executing fun

let result = createUser("suraj07");
console.log(result);

console.log(createUser("abhinavsuraj").username)
console.log(createUser("abhinavsuraj").role)
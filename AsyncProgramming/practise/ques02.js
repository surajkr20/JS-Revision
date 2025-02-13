// ques. Create a function fetchData(callback) that simulates fetching data asynchronously and calls the provided callback function with the data after 2 seconds.

const fetchData = (callback) =>{
    setTimeout(()=>{
        const data = "data fetching from server"; // Simulated data
        callback(data);
    }, 2000)
}

function call_fun(data){
    console.log("printed from callback function :", data)
}

fetchData(call_fun);
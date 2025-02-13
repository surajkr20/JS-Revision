
### **Basic Level**
1. **Create a Delayed Message**  
   Write a function `delayedMessage` that takes a message and a delay (in milliseconds) and logs the message after the given delay using `setTimeout`.

2. **Using Callbacks**  
   Create a function `fetchData(callback)` that simulates fetching data asynchronously and calls the provided callback function with the data after 2 seconds.

3. **Convert Callback to Promise**  
   Convert the `fetchData(callback)` function into a promise-based function called `fetchDataPromise()`.

4. **Promise Chain**  
   Write a function that returns a promise which resolves after 2 seconds. Chain another `.then()` call to modify the resolved value and log it.

5. **Handling Errors in Promises**  
   Write a function `fetchDataWithError()` that returns a promise which rejects after 3 seconds. Handle the rejection using `.catch()`.

---

### **Intermediate Level**
6. **Using `async/await` with `fetchDataPromise()`**  
   Rewrite the `fetchDataPromise()` function to use `async/await` instead of `.then()`.

7. **Parallel Execution with `Promise.all`**  
   Write two async functions that return a promise after 2 and 3 seconds, respectively. Use `Promise.all` to wait for both functions to complete and log the results.

8. **Race Condition with `Promise.race`**  
   Implement two promises, one resolving after 3 seconds and one after 1 second. Use `Promise.race` to log the result of the fastest promise.

9. **Timeout with `Promise.race`**  
   Write an async function that fetches data from a mock API. If the request takes more than 5 seconds, return a timeout error.

10. **Sequential Execution with `async/await`**  
    Write a function that executes multiple promises sequentially and logs the results in order.

---

### **Advanced Level**
11. **Retry a Failed API Request**  
    Implement a function `fetchWithRetry(url, retries)` that retries an API call up to `retries` times if it fails.

12. **Implement a Simple Rate Limiter**  
    Create a function that limits the number of async calls executed in parallel.

13. **Create a Debounce Function Using `setTimeout`**  
    Implement a `debounce` function that delays the execution of a function until after a specified delay.

14. **Throttling Using `setTimeout`**  
    Implement a `throttle` function that ensures a function is executed at most once in a given time interval.

15. **Custom `Promise.all` Implementation**  
    Implement a function `myPromiseAll(promises)` that mimics the behavior of `Promise.all`.

---

### **Bonus Challenge**
16. **Custom Event Loop Simulation**  
    Simulate the event loop behavior in JavaScript by scheduling tasks with `setTimeout`, Promises, and `process.nextTick` (Node.js).

17. **Web Scraper with Async Requests**  
    Use `fetch` with `async/await` to make multiple requests to an API and process the responses in parallel.

---

Would you like me to provide solutions for any of these questions? 🚀

// Write a function delayedMessage that takes a message and a delay (in milliseconds) and logs the message after the given delay using setTimeout.

const delayedMessage = (message, delay) =>{
    setTimeout(()=>{
        console.log(`${message}`)
    }, delay)
}

delayedMessage("hello india", 3000);
delayedMessage("12 jyortilinga darshana with mummy-papa the ending of 2026", 4000);
// setTimeout in JavaScript
// The setTimeout() function is used to execute a function after a specified period of time.
// This is particularly useful for adding delays, scheduling tasks, or delaying the execution of a function.

// Basic Syntax:
// setTimeout(function, delay, [arg1, arg2, ...])

// Parameters:
// - function: The function to execute after the delay.
// - delay: The delay in milliseconds before execution.
// - arg1, arg2, ...: Optional additional arguments that will be passed through to the function.

// Returns:
// A timeout ID that can be used to cancel the timeout with clearTimeout().

// Simple Example:
// This example logs a message to the console after 3 seconds.
setTimeout(() => {
    console.log("This message is shown after 3 seconds");
}, 3000);

// Using clearTimeout to cancel a setTimeout
// Sometimes you may want to cancel a timeout before it's executed.
let timeoutId = setTimeout(() => {
    console.log("This will not be logged if clearTimeout is called in time");
}, 5000);

// To cancel the timeout, use clearTimeout and pass the timeout ID.
clearTimeout(timeoutId);

// Use Case: Debouncing User Input
// Debouncing is a programming practice used to ensure that time-consuming tasks do not fire so often,
// which can cause performance issues. For example, resizing a window or scrolling.

let debounceTimeout = null;
window.addEventListener('resize', () => {
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => {
        console.log("Resize event handler called after 500ms of no resize events.");
    }, 500);
});

// Use Case: Delays in Animation
// setTimeout can be used to create delays in animations or transitions, giving a more dynamic feel to web interfaces.

setTimeout(() => {
    document.getElementById("animatedElement").style.transform = "translateX(100px)";
}, 1000);

// Practical Example: Polling
// In cases where real-time WebSocket communication isn't available, you might use setTimeout to periodically poll a server.

function fetchData() {
    fetch("https://api.example.com/data")
        .then(response => response.json())
        .then(data => {
            console.log("Data fetched:", data);
            // Schedule the next fetch after 10 seconds
            setTimeout(fetchData, 10000);
        })
        .catch(console.error);
}

// Start the polling
fetchData();

// Use Case: Delayed Actions in Games
// setTimeout is often used in game development to trigger delayed actions or events, like a countdown timer.

setTimeout(() => {
    console.log("Game starts now!");
}, 3000);

// Real-world analogy:
// Think of setTimeout as setting an alarm. When you set an alarm for the morning, you're scheduling an action (waking up) after a specific period (until morning). Similarly, setTimeout schedules code for execution after a delay.

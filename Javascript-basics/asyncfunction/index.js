// Async Functions in JavaScript
// Async functions enable easier handling of asynchronous operations. They use the async/await syntax for working with promises.
// Example: Fetching data asynchronously from an API using async/await
async function fetchDataFromApi() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error('Failed to fetch data:', error);
    }
}

// Edge case: Handling network errors or bad JSON parsing
async function robustFetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error during fetch:', error.message);
    }
}

// Modules in JavaScript
// JavaScript modules allow you to split code into separate files, thus improving maintainability and reusability.
// Example: Exporting and importing a function in ES6 module syntax
// File: mathOperations.js
export function add(a, b) {
    return a + b;
}

// File: app.js
import { add } from './mathOperations.js';
console.log(add(4, 5)); // Output: 9

// Debugging in JavaScript
// Debugging is crucial for identifying and fixing errors in code. JavaScript offers several methods for this.
// Example: Using console and debugger
console.log('Debugging start');
function calculateSum(a, b) {
    debugger;  // Pauses execution when developer tools are open
    return a + b;
}
console.log(calculateSum(2, 3));  // Output: 5

// Error Handling in JavaScript
// Robust error handling in JavaScript is achieved using try...catch blocks.
// Example: Gracefully catching errors in code execution
try {
    const user = JSON.parse('{invalidJson:}');
} catch (error) {
    console.error('Failed to parse JSON:', error);
}

// Edge case: Catching asynchronous errors in promises
async function fetchDataWithErrorHandling() {
    try {
        const response = await fetch('https://api.example.com/invalid-url');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Async error caught:', error);
    }
}

// Summary:
// - Async functions simplify handling asynchronous operations.
// - Modules help in organizing code effectively across different files.
// - Debugging techniques like console methods and the debugger statement are essential for tracing and fixing issues.
// - Error handling with try...catch ensures your applications can handle unexpected issues gracefully.


// Async Functions 
// Async functions are a new way to write asynchronous code in JavaScript.
// They are a higher-level abstraction over promises.
// Async functions always return a promise.

// Example of an async function fetching data from an API:
async function fetchData() {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    return data;
}

// Modules in JavaScript 
// Modules are reusable pieces of code that can be exported from one program and imported for use in another program.
// They help organize, reuse, and maintain code.
// Modules prevent naming conflicts and manage dependencies.

// Example of exporting and importing modules:
// myModule.js
// Exporting a module
export function usefulModuleFunction() {
    console.log('This function is exported and can be used elsewhere.');
}

// main.js
// Importing a module
import { usefulModuleFunction } from './myModule.js';
usefulModuleFunction();

// Debugging in JavaScript 
// Debugging is the process of finding and fixing errors in a program.
// Techniques include console.log(), debugger statement, and using browser developer tools.

// Example of using console.log() for debugging:
console.log('Hello, World!');
console.error('This is an error!');
console.warn('This is a warning!');

// Example of using debugger statement:
function add(a, b) {
    debugger;
    return a + b;
}
add(2, 3); // Execution pauses at the debugger statement.

// Error Handling in JavaScript
// Error handling is done using try...catch blocks to gracefully handle exceptions.
// This helps prevent crashing and provides better user experience.

// Example of try...catch block:
try {
    // Code that may throw an error
    const result = 10 / 0; // This will throw a division by zero error
} catch (error) {
    // Code to handle the error
    console.error('An error occurred:', error.message);
}

// Async Functions 
// Async functions are a new way to write asynchronous code in JavaScript.
// 'await' expressions are only allowed within async functions and at the top levels of modules.ts(1308)
async function fetchApiResponse() {
    const response = await fetch('https://api.github.com/users');
    console.log(response);
}

// async function expression
const fetchApiResponse = async () => {
    const response = await fetch('https://api.github.com/users');
    console.log(response);
};
/* add the list important things that can be important edge cases related to the following topic
or edge or unique cases  correctly */

/* write the code according to es lint without removing the comments */

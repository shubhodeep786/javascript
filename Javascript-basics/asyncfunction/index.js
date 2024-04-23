//Async Functions 
//Async functions are a new way to write asynchronous code in JavaScript.
//await' expressions are only allowed within async functions and at the top levels of modules.ts(1308)
function fetchApiRsponse(){
    const response = await fetch('https://api.github.com/users');
    console.log(response);
}
//async function expression
async function fetchApiRsponse(){
    const response = await fetch('https://api.github.com/users');
    console.log(response);
}

//js is single threaded, meaning it can only do one thing at a time. 
//This is why we use async functions to handle multiple tasks at once.
//Async functions are a new way to write asynchronous code in JavaScript.
//Async functions are a combination of promises and generators, and basically, they are a higher level abstraction over promises.
//Async functions always return a promise.
//The await keyword is used to pause the execution of the async function and wait for the promise to resolve, and then resume the execution of the async function and return the resolved value.
//The await keyword can only be used inside an async function.
//Async functions can contain zero or more await expressions.


//Modules in JavaScript 
//Modules are reusable pieces of code that can be exported from one program and imported for use in another program.
//Modules are particularly useful for a number of reasons.
//They help you organize your code.
//They help you reuse your code.
//They help you keep your code clean and readable.
//They help you manage dependencies.
//They help you prevent naming conflicts.
//They help you make your code more efficient.
//They help you make your code more secure.

//await in modules ?
//Module creates their own scope 
/* <script type="module">
    await fetch('https://api.github.com/users')
</script> */

//imports and exports
//To import a module, you use the import keyword followed by the module name.
//To export a module, you use the export keyword followed by the module name.
//You can export a module as default or named.
//You can import a module as default or named.
//You can import a module as a namespace.
//You can import a module dynamically using the import() function.
//You can import a module conditionally using the if statement.

/* impport {usefulModuleFunction} from './myModule.js'
usefulModuleFunction()
*/

//Debugging in JavaScript 
//Debugging is the process of finding and fixing errors in a computer program.
//There are many ways to debug a program in JavaScript.
//You can use console.log() to print the values of variables to the console.
//You can use the debugger statement to pause the execution of a script and jump into the debugger.
//You can use the Chrome DevTools to debug a program.
/*
console.log('Hello, World!');
console.error('This is an error!');
console.warn('This is a warning!'); 
 */
/* 
using browser debugger 
//To use the debugger statement, you must have the browser's developer console open.
function add(a, b) {
    debugger;
    return a + b;
}
*/
//Error Handling in JavaScript
/*
 try & catch 
 try lets us "watch out" for errors in a block of code. and its friends catch us
    catch lets us handle the error if there is one.
try {
    // Code to try
}
catch (error) {
    // Code to handle the error
}
//catch block is only executed if an error occurs in the try block.
//If an error occurs in the try block, the catch block is executed.
//If an error occurs in the try block, the catch block is executed.
 */
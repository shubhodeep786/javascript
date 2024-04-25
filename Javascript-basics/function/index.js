// Functions in JavaScript

// Functions are reusable blocks of code that perform a specific task or calculation.
// They can take input values, called parameters, and return output values.
// Functions in JavaScript are declared using the `function` keyword, followed by a name, a list of parameters in parentheses, and a block of code in curly braces.

// Example of declaring and calling a function:
function half(number) {
    return number / 2;
}
const one = half(2);

// Parameters and Arguments
// Parameters are the placeholders for the values a function expects, while arguments are the actual values passed to the function when it is called.

// Example of a function with parameters and arguments:
function add(a, b) {
    return a + b;
}
const sum = add(2, 3);

// Functions can have multiple parameters or no parameters at all.

// Parameters should be named like variables and behave like variables within the function body.
// Function names should be descriptive of what the function does.

// Return Values
// A return statement specifies the function's output value.
// If a function does not have a return statement, it returns `undefined` by default.

// Example of a function with a return value:
function square(number) {
    return number * number;
}
const four = square(2);

// Example of a function without a return value:
function greet(name) {
    console.log(`Hello, ${name}!`);
}
greet('John');

// Functions can also have side effects, such as logging to the console or modifying global variables, without returning a value.


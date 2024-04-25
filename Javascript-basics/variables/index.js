// Variables in JavaScript
// JavaScript variables are identifiers used to store data values. JavaScript supports three kinds of variable declarations.

// var: Declares a variable, optionally initializing it to a value.
var oldSchoolVariable = 'I am old school';

// let: Declares a block-scoped, local variable, optionally initializing it to a value.
let modernVariable = 'I am modern';

// const: Declares a block-scoped, read-only named constant.
const unchangeableVariable = 'I cannot change';

// Using Variables
// Once declared, variables can be used by referencing their names in the code to access or modify their values.

let age = 25;
console.log(age);  // Output: 25
age = 26;
console.log(age);  // Output: 26

// Note: const declarations are immutable only in the sense that the variable identifier cannot be reassigned.
// However, the contents of a const object can still be altered (if it's an object or array).

const userDetails = { name: 'John', age: 30 };
userDetails.age = 31;  // This is allowed
console.log(userDetails);  // Output: { name: 'John', age: 31 }

// Variable Naming Conventions
// JavaScript variable names should start with a letter, underscore (_), or dollar sign ($).
// Subsequent characters can also be digits (0-9).

// Good practice for naming variables:
let userName = 'John';  // Camel case for variable names
const MAX_COUNT = 100;  // Upper case for constants
let $element = document.getElementById('myElement');  // Using $ for DOM elements

// Expressions vs Statements
// An expression is any valid unit of code that resolves to a value.
// Example of an expression:
let sum = 10 + 5;  // Evaluates to 15

// A statement performs actions. 
// Example of a statement:
if (userName === 'John') {
    console.log('Hello John');  // This if statement checks if userName is 'John'
}

// Real-world Example: Using Variables to Control Application Flow
// Variables can be used to store user input and control the flow of an application accordingly.

let userInput = prompt("Enter 'yes' if you accept the terms and conditions:");
const ACCEPTED = 'yes';

if (userInput.toLowerCase() === ACCEPTED) {
    console.log('User accepted the terms.');
} else {
    console.log('User did not accept the terms.');
}

// This script uses variables to handle simple conditional logic based on user input.
// It is common in web forms and conditional operations in web apps.

// Tips for Effective Variable Naming:
// - Use meaningful and descriptive names: Choose names that reflect the purpose of the variable.
// - Stick to camelCase for variable names (standard in JavaScript) except for constants which use UPPER_CASE.
// - Avoid names that are too generic or ambiguous (e.g., 'data', 'value').
// - Keep names concise but informative enough to be understood by others who may read your code.


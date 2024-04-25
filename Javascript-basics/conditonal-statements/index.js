// Conditional Statements in JavaScript

// 1. If Statement
// The if statement executes a block of code if a specified condition is true.
// Example: Checking if a user is logged in
let isLoggedIn = true;
if (isLoggedIn) {
    console.log('User is logged in.');
}
// Output: User is logged in.

// Real-world example: Displaying access only if the user has admin privileges
const user = { name: "John", role: "admin" };
if (user.role === "admin") {
    console.log('Access granted to admin panel.');
}

// 2. If...Else Statement
// An if...else statement executes one block of code if a condition is true, and another block if it is false.
// Example: Checking if the number is even or odd
let number = 4;
if (number % 2 === 0) {
    console.log('Number is even.');
} else {
    console.log('Number is odd.');
}
// Output: Number is even.

// Real-world example: Checking a login success
let password = '12345';
if (password === '123456') {
    console.log('Login successful.');
} else {
    console.log('Login failed.');
}

// 3. Else if Statement
// Used to specify a new condition to test if the first condition is false.
// Example: Checking multiple conditions
let score = 85;
if (score >= 90) {
    console.log('Grade A');
} else if (score >= 80) {
    console.log('Grade B');
} else if (score >= 70) {
    console.log('Grade C');
} else {
    console.log('Grade F');
}
// Output: Grade B

// Real-world example: Providing multi-level access based on user scores
if (score > 90) {
    console.log('Access to all levels');
} else if (score > 75) {
    console.log('Access to level 1 and 2');
} else {
    console.log('Access to level 1');
}

// Boolean Logic in Conditions
// Conditions can use logical operators to combine multiple Boolean expressions.
// Example: Checking multiple conditions together
let age = 25;
let hasTicket = true;
if (age > 18 && hasTicket) {
    console.log('Allowed to enter the movie.');
}
// Output: Allowed to enter the movie.

// Real-world example: E-commerce product purchase eligibility
let hasValidPaymentMethod = true;
let hasAddress = true;
if (hasValidPaymentMethod && hasAddress) {
    console.log('Proceed to checkout.');
} else {
    console.log('Please add a payment method and address.');
}

// Using truthiness
// JavaScript uses "truthy" and "falsy" values to evaluate conditions.
// Falsy values include: 0, "", null, undefined, NaN, and false.
// Example: Checking the truthiness of a value
let myVar = '';
if (myVar) {
    console.log('Variable is truthy.');
} else {
    console.log('Variable is falsy.');
}
// Output: Variable is falsy.

// Summary:
// Conditional statements are powerful tools in JavaScript for making decisions. The use of `if`, `else if`, `else`, and logical operators allows developers to write flexible and intelligent decision-making code that reacts differently under varying conditions. Understanding these concepts is crucial for controlling program flow and implementing dynamic behavior in applications.

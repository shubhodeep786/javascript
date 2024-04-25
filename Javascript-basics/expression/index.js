// Expressions in JavaScript
// An expression is any valid unit of code that resolves to a value.

// Arithmetic Expressions
// These expressions use arithmetic operators to calculate numeric values, similar to simple math operations.
let sum = 5 + 2;  // Evaluates to 7
let difference = 10 - 3;  // Evaluates to 7
let product = 4 * 3;  // Evaluates to 12
let quotient = 10 / 2;  // Evaluates to 5
let remainder = 7 % 2;  // Evaluates to 1 (because 7 divided by 2 leaves a remainder of 1)

// Real-world example: Calculating the total cost of items in a shopping cart
const pricePerItem = 19.99;
const numberOfItems = 3;
const totalCost = pricePerItem * numberOfItems;
console.log(`Total cost: $${totalCost}`);  // Output: Total cost: $59.97

// Logical Expressions
// These use logical operators to derive a Boolean value based on the truthiness of operands.
let isAdult = true;
let hasConsent = false;
let canProceed = isAdult && hasConsent;  // Evaluates to false
let willAttend = true || false;  // Evaluates to true
let negateTruth = !true;  // Evaluates to false

// Real-world example: Checking user access based on multiple conditions
const isLoggedIn = true;
const hasPaidSubscription = false;
const hasAccess = isLoggedIn && hasPaidSubscription;
console.log(`User access granted: ${hasAccess}`);  // Output: User access granted: false

// Comparison Expressions
// These expressions compare two values using comparison operators and return a Boolean value.
let isEqual = 4 == '4';  // Evaluates to true (loose equality)
let isIdentical = 4 === '4';  // Evaluates to false (strict equality)
let isNotEqual = 5 != '5';  // Evaluates to false
let isLess = 3 < 6;  // Evaluates to true
let isGreaterOrEqual = 5 >= 5;  // Evaluates to true

// Real-world example: Validating form input
const enteredAge = 30;
const legalAge = 18;
const isLegalAge = enteredAge >= legalAge;
console.log(`Is user of legal age? ${isLegalAge}`);  // Output: Is user of legal age? true

// Assignment Expressions
// These involve assigning values to variables, potentially performing operations at the same time.
let x = 10;  // Simple assignment
x += 5;  // Addition assignment (x = x + 5)
x *= 2;  // Multiplication assignment (x = x * 2)

// Real-world example: Tracking a score in a game
let score = 0;
score += 10;  // Player scored a point
score *= 2;  // Score multiplier event
console.log(`Current score: ${score}`);  // Output: Current score: 20

// Function Call Expressions
// These expressions call JavaScript functions, which are reusable blocks of code.
function greet(name) {
    return `Hello, ${name}!`;
}
let greeting = greet('Alice');  // Calls the greet function with 'Alice' as an argument
console.log(greeting);  // Output: Hello, Alice!

// Real-world example: Calculating area of a circle
function calculateArea(radius) {
    return Math.PI * radius * radius;  // Math.PI is a mathematical constant
}
let area = calculateArea(10);
console.log(`Area of the circle: ${area.toFixed(2)}`);  // Output: Area of the circle: 314.16

// Summary:
// Expressions are central to JavaScript programming, allowing developers to perform operations, make decisions, and execute functions dynamically. Understanding and using different types of expressions effectively is crucial for writing concise and powerful JavaScript code.

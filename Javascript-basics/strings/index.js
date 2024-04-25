// Strings in JavaScript
// A string in JavaScript is an immutable sequence of characters enclosed by single or double quotes.

// Creating a String
let greeting = "Hello, world!";

// String Length
// The 'length' property gives the number of characters in the string.
let lengthOfGreeting = greeting.length;  // Output: 13

// Accessing Characters
// You can access individual characters of a string using bracket notation.
let firstCharacter = greeting[0];  // Output: 'H'

// indexOf()
// Returns the index of the first occurrence of the specified value, or -1 if not found.
let indexOfL = greeting.indexOf('l');  // Output: 2

// includes()
// Checks if the string contains the specified sequence of characters.
let hasWorld = greeting.includes('world');  // Output: true

// startsWith()
// Checks if the string starts with the specified sequence of characters.
let startsWithHello = greeting.startsWith('Hello');  // Output: true

// endsWith()
// Checks if the string ends with the specified sequence of characters.
let endsWithWorld = greeting.endsWith('world!');  // Output: true

// slice()
// Extracts a section of a string and returns it as a new string, without modifying the original string.
let slicedGreeting = greeting.slice(7, 12);  // Output: 'world'

// toUpperCase() and toLowerCase()
// Converts a string to uppercase or lowercase, respectively.
let shout = greeting.toUpperCase();  // Output: 'HELLO, WORLD!'
let whisper = greeting.toLowerCase();  // Output: 'hello, world!'

// trim()
// Removes whitespace from both ends of a string.
let extraSpace = "   Hello, world!   ";
let trimmed = extraSpace.trim();  // Output: 'Hello, world!'

// split()
// Splits a string into an array of substrings based on a specified delimiter.
let words = greeting.split(', ');  // Output: ['Hello', 'world!']

// Real-World Example: Email Validation
// Use string methods to check if an input is a valid email format (a very basic check).
function isValidEmail(email) {
    return email.includes('@') && email.endsWith('.com');
}
console.log(isValidEmail('user@example.com'));  // Output: true
console.log(isValidEmail('userexample.com'));   // Output: false

// Real-World Example: Formatting User Input
// Properly capitalize the first letter of each word in a user's name.
function formatName(name) {
    let words = name.split(' ');
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1).toLowerCase();
    }
    return words.join(' ');
}
console.log(formatName('john doe')); // Output: 'John Doe'

// Using Template Literals
// Template literals are string literals allowing embedded expressions, using backticks.
let user = 'Jane';
let emailCount = 12;
let message = `Hello ${user}, you have ${emailCount} new emails.`;
console.log(message);  // Output: 'Hello Jane, you have 12 new emails.'

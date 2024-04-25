// Strings in JavaScript

// Strings are sequences of characters, where each character is a Unicode code point. They are enclosed in single ('') or double ("") quotes.

// Example:
let greeting = 'hello';

// String Length
// The length property of a string returns the number of characters in the string.

// Example:
let length = "hello".length; // Output: 5

// Indexing in Strings
// Individual characters in a string can be accessed using bracket notation and the character's index.

// Example:
let firstChar = "hello"[0]; // Output: 'h'

// indexOf()
// The indexOf() method returns the index of the first occurrence of a specified value within a string.

// Example:
let index = "hello".indexOf('l'); // Output: 2

// includes()
// The includes() method determines whether a string contains the specified value.

// Example:
let contains = "hello".includes('h'); // Output: true

// startsWith()
// The startsWith() method determines whether a string begins with the characters of a specified string.

// Example:
let startsWith = "Hello".startsWith('H'); // Output: true

// endsWith()
// The endsWith() method determines whether a string ends with the characters of a specified string.

// Example:
let endsWith = "Hello".endsWith('o'); // Output: true

// slice()
// The slice() method extracts a section of a string and returns it as a new string.

// Example:
let substring = "hello".slice(2, 4); // Output: 'll'

// toUpperCase()
// The toUpperCase() method converts a string to uppercase.

// Example:
let uppercase = "hello".toUpperCase(); // Output: 'HELLO'


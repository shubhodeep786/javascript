/* eslint-disable no-console */
/* eslint-disable max-len */

// Text Data (Strings)
// Strings in JavaScript are used to represent text and are enclosed in quotes. They can be enclosed in single quotes (''), double quotes (""), or backticks (``).
// Example of strings:
const greeting = "Hello";
const response = "World";
const formattedMessage = `Hello, ${response}!`; // Using template literals for interpolation

// Numbers
// Numbers in JavaScript can be either integers or floating-point numbers (decimals).
// Example of numbers:
const age = 25;
const price = 99.99;
const hexValue = 0xff; // Hexadecimal number

// typeof() Operator
// The typeof operator is used to determine the type of a variable or an expression.
console.log(typeof "hello"); // Output: "string"
console.log(typeof 42); // Output: "number"
console.log(typeof true); // Output: "boolean"

// Primitive Data Types
// JavaScript has six primitive data types: string, number, bigint, boolean, undefined, symbol, and null (technically a primitive, but typeof returns "object").
// Examples of primitive data types:
const userName = "Alice"; // string
const userScore = 100; // number
const bigNumber = BigInt(123456789012345678901234567890); // bigint
const isLoggedIn = false; // boolean
let notDefined; // undefined
const uniqueID = Symbol("id"); // symbol
const emptyValue = null; // null

// Real-world example: Checking data types of form inputs
function validateInput(input) {
  if (typeof input === "string") {
    console.log("Input is a string.");
  } else if (typeof input === "number") {
    console.log("Input is a number.");
  }
}
validateInput(userName);
validateInput(userScore);

// Non-Primitive Data Types
// Non-primitive data types (also known as reference types) include objects, arrays, functions, and more. They can store multiple values and are mutable.
// Example of non-primitive data types:
const user = {
  name: "John",
  age: 30,
  hobbies: ["Reading", "Gaming", "Hiking"],
};
const numbers = [1, 2, 3, 4, 5]; // array
function displayUser(user) {
  console.log(`User: ${user.name}, Age: ${user.age}`);
} // function

// Real-world example: Storing and accessing user profiles
const profiles = [
  { id: 1, name: "Sarah", age: 24 },
  { id: 2, name: "Bob", age: 27 },
];
profiles.forEach((profile) => {
  console.log(`Profile ID: ${profile.id}, Name: ${profile.name}`);
});

// Summary:
// Understanding the difference between primitive and non-primitive data types is crucial in JavaScript as it affects how values are assigned and manipulated.
// Primitives are copied by their value, whereas non-primitives are copied by reference, meaning operations on these values can affect the original data.

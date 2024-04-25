// Destructuring in JavaScript
// Destructuring is a convenient way of extracting multiple values from data stored in objects and arrays.

// Destructuring Objects
// This method allows us to unpack properties directly into variables.

// Example: Extracting properties from an object
const user = { name: 'John Doe', age: 30, email: 'john@example.com' };
const { name, email } = user;
console.log(name); // Output: John Doe
console.log(email); // Output: john@example.com

// Real-world example: Extracting user settings from a configuration object
const settings = {
    volume: 75,
    brightness: 80,
    theme: 'dark'
};
const { volume, theme } = settings;
console.log(`Volume: ${volume}, Theme: ${theme}`); // Output: Volume: 75, Theme: dark

// Destructuring with new variable names
// If you want to assign properties to variables with different names:
const { name: userName, age: userAge } = user;
console.log(userName); // Output: John Doe

// Default values
// Useful when the value may be undefined, you can assign a default value during destructuring.
const { background = 'blue' } = settings;
console.log(background); // Output: blue

// Nested Object Destructuring
const userProfile = {
    name: 'Alice',
    details: { city: 'Paris', country: 'France' }
};
const { details: { city, country } } = userProfile;
console.log(city); // Output: Paris

// Destructuring Arrays
// Arrays can also be destructured, which is quite handy when dealing with data represented as arrays.

// Example: Extracting elements from an array
const fibonacci = [1, 1, 2, 3, 5, 8, 13];
const [first, second, third] = fibonacci;
console.log(first, second, third); // Output: 1 1 2

// Skipping elements
// You can skip elements by leaving gaps in the destructuring assignment.
const [, , , fourth] = fibonacci;
console.log(fourth); // Output: 3

// Rest pattern with arrays
// Capturing all remaining elements after the ones you're interested in.
const [firstFib, ...others] = fibonacci;
console.log(others); // Output: [1, 2, 3, 5, 8, 13]

// Real-world example: Function that returns multiple values as an array
function calculate(x, y) {
    return [x + y, x - y, x * y, x / y];
}
const [sum, difference, product, quotient] = calculate(20, 10);
console.log(`Sum: ${sum}, Difference: ${difference}`); // Output: Sum: 30, Difference: 10

// Destructuring Parameters
// Destructuring can be used directly in the parameter list of a function.

// Example: Function with object parameters destructured
function displayUser({ name, age }) {
    console.log(`Name: ${name}, Age: ${age}`);
}
displayUser(user); // Output: Name: John Doe, Age: 30

// Summary:
// Destructuring provides a cleaner and more readable syntax for accessing elements of objects and arrays. It reduces the need for additional lines of code and temporary variables, making your JavaScript code more efficient and readable. Use destructuring wherever you need to extract multiple properties or elements concisely and directly.



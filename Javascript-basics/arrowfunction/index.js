// Arrow Functions in JavaScript
// Arrow functions provide a concise syntax to write function expressions. They do not have their own `this`, `arguments`, `super`, or `new.target`.
// These functions are best suited for non-method functions.

// Example of an arrow function with implicit return:
const add = (x, y) => x + y;

// Example of an arrow function with explicit return and body:
const subtract = (x, y) => {
    return x - y;
};

// Example of an arrow function used for a simple comparison:
const isGreater = (a, b) => a > b;

// Scoping in JavaScript
// Scope in JavaScript determines the accessibility of variables and functions at various parts of code.
// JavaScript has global scope, function scope, and block scope (introduced with ES6).

// Global scope example:
let mood = 'happy'; // `mood` is globally scoped
function changeMood() {
    mood = 'sad'; // Accesses `mood` from the global scope
}
changeMood();
console.log(mood); // Outputs: 'sad'

// Block scope with let and const:
if (true) {
    let localVar = 'I am local to this block';
    const constVar = 'I cannot change';
    console.log(localVar); // Outputs: 'I am local to this block'
    console.log(constVar); // Outputs: 'I cannot change'
}
// console.log(localVar); // Error: localVar is not defined outside the block
// console.log(constVar); // Error: constVar is not defined outside the block

// Arrow Function Lexical Scoping
// Arrow functions capture the `this` value of the enclosing context, making them ideal for use in scenarios where you want to retain the context.
const team = {
    members: ['Jane', 'Bill'],
    teamName: 'Super Coders',
    teamGreeting: function () {
        // Using `map` with an arrow function to maintain the `this` context from `teamGreeting`
        return this.members.map(member => `${member} is part of ${this.teamName}`);
    }
};
console.log(team.teamGreeting()); // Outputs: ["Jane is part of Super Coders", "Bill is part of Super Coders"]

// Usage with the `this` context in object methods (potential pitfall):
const person = {
    name: 'John',
    greet: () => {
        // Arrow functions do not have their own `this` context
        console.log(`Hello, ${this.name}!`); // `this.name` will not refer to person.name; `this` is inherited from the outer scope
    }
};
person.greet(); // Outputs: 'Hello, undefined!'

// Using traditional function expression if `this` is needed:
const personCorrected = {
    name: 'John',
    greet() {
        console.log(`Hello, ${this.name}!`); // Correctly references `this.name` within the object
    }
};
personCorrected.greet(); // Outputs: 'Hello, John!'

// Summary:
// Arrow functions simplify function syntax and manage `this` context lexically. They are especially useful for inline functions and when working with methods that involve callbacks. However, they are not suitable for methods where you rely on a contextual `this`.






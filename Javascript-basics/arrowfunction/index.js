// Arrow Function
// Arrow functions are a shorthand syntax for writing function expressions in JavaScript.
// They are denoted by the "fat arrow" => and eliminate the need for the function keyword.
// Arrow functions are concise and great for one-liner functions.

// Example of arrow function to add two numbers:
const add = (x, y) => x + y;

// Example of arrow function with explicit return:
const add1 = (x, y) => {
    return x + y;
};

// Example of arrow function for comparing string lengths:
const shorterThan = (a1, a2) => a1.length < a2.length;

// Scope in JavaScript
// Scope refers to the visibility and accessibility of variables within a program.
// Variables can have global scope, function scope, or block scope.

// Example of global scope:
let feeling = "happy";
function expressFeeling() {
    feeling = "sad";
}
expressFeeling();
console.log(feeling); // Outputs: sad

// Var vs let vs const
// The var, let, and const keywords are used to declare variables in JavaScript, each with its own scope and behavior.

// Example of var keyword:
var x = 10;
if (true) {
    var y = 20;
}
console.log(x); // Outputs: 10
console.log(y); // Outputs: 20

// Example of let keyword:
let a = 10;
if (true) {
    let b = 20;
}
console.log(a); // Outputs: 10
console.log(b); // Error: b is not defined

// Example of const keyword:
const pi = 3.14159;
pi = 3.14; // Error: Assignment to constant variable

// Arrow Function Scope
// Arrow functions have lexical scoping, meaning they inherit the scope of the surrounding code block.

// Example of arrow function inside an object:
const person = {
    name: 'John',
    greet: () => {
        console.log(`Hello, ${this.name}!`);
    }
}
person.greet(); // Outputs: Hello, undefined!

// Arrow Function
// The arrow function is a shorthand syntax for writing function expressions in JavaScript.
// The "fat arrow" => lets us create a function without using the function keyword.
// Arrow functions are great when we just want to return a value.

const add2 = (x, y) => x + y;

let addOne = (x, y) => {
    return x + y;
}

const shorterThan1 = (a1, a2) => a1.length < a2.length;

/* write the code according to eslint rules without removing the comments */
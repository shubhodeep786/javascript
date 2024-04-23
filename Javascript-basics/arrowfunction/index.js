//Arrow Function
//The arrow function is a shorthand syntax for writing function expressions in JavaScript.
//=>"fat arrow" let us create a function without using the function keyword.
(x, y) => x + y

const add = (x, y) => x + y; // Arrow function with parameters
//Arrow fcuntions are grreat when we just want to return a value

const add1 = (x, y) => {
    return x + y;
}

const shorterThan = (a1, a2) => a1.length < a2.length;

//Scope in JavaScript
//Scope refers to the visibility and accessibility of variables within a program. In JavaScript, variables can have global scope, function scope, or block scope.
//Global Scope
//Variables declared outside of any function or block have global scope, meaning they can be accessed from anywhere in the program.
//Function Scope
//Variables declared inside a function have function scope, meaning they can only be accessed from within that function.
//Block Scope
//Variables declared inside a block, such as an if statement or loop, have block scope, meaning they can only be accessed within that block.
//Hoisting in JavaScript
//Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their containing scope during the compilation phase. This allows variables and functions to be used before they are declared.
//Hoisting in JavaScript can lead to unexpected behavior if not understood properly. For example:
// console.log(x); // Outputs: undefined
// var x = 10;
// //The variable `x` is hoisted to the top of the scope, but its value is not assigned until later in the code.
// //Arrow Function Scope
// //Arrow functions have lexical scoping, meaning they inherit the scope of the surrounding code block. This can lead to unexpected behavior when using arrow functions inside other functions or blocks.
// //For example:
// const person = {
//     name: 'John',
//     greet: () => {
//         console.log(`Hello, ${this.name}!`);
//     }
// }
// person.greet(); // Outputs: Hello, undefined!
//Variables declared w ith let can be modified from within a norrower scope
//this can be useful but also dangerous
let  feeling = "happy";
function expressFeeling() {
    feeling = "sad";
}
expressFeeling();
console.log(feeling); // Outputs: sad
//Var vs let vs const
//The var, let, and const keywords are used to declare variables in JavaScript, each with its own scope and behavior.
//var: Variables declared with var have function scope, meaning they are accessible throughout the function in which they are declared.
//let: Variables declared with let have block scope, meaning they are accessible only within the block in which they are declared.
//const: Constants declared with const have block scope and cannot be reassigned or redeclared.
//For example:
// var x = 10;
// if (true) {
//     var y = 20;
// }
// console.log(x); // Outputs: 10
// console.log(y); // Outputs: 20
// let x = 10;
// if (true) {
//     let y = 20;
// }
// console.log(x); // Outputs: 10
// console.log(y); // Error: y is not defined
// const pi = 3.14159;
// pi = 3.14; // Error: Assignment to constant variable
// pi = 3.14; // Error: Assignment to constant variable
// //The var keyword has function scope, meaning variables declared with var are accessible throughout the function in which they are declared.
// //The let keyword has block scope, meaning variables declared with let are accessible only within the block in which they are declared.
// //The const keyword is used to declare constants, which cannot be reassigned or redeclared.


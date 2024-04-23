//Functions in Javascript
//values are things
//varaibles point to thing
//fucntion do things
//functions are reusable blocks of code that perform a specific task or calculation. Functions can take input values, called parameters, and return output values. In JavaScript, functions are declared using the function keyword, followed by a name, a list of parameters in parentheses, and a block of code in curly braces.

//Declaring creating a function
function half(number) {
    return number / 2;
}
//calling(using) a function
const one = half(2);

//Parameters and Arguments
//Some fucntions need more than one value to work
function add(a, b) {
    return a + b;
}
const sum = add(2, 3);
//Some fucntions don't need any values to work 
function getRandomNumber() {
    return Math.random();
}
const random = getRandomNumber();
//Parameters are the inputs a fucntion expects 
//Arguments are the actual values that are passed to the function when it is called
function add(x,y,z) {
    return x + y + z;
}
const sum = add(1,2,3);

//Parameters should be named like variables and behave like variables within the function body
function doesThisWork("literray value"){
    return true;
}

function doesThisWork(1weirdThing){
    return true;
}

//Return Values 
//A return statement specifies the dunctions output value

function sqaure(number) {
    return number * number;
}
const four = square(2);
//Some fucntions don't return a value
function greet(name) {
    console.log(`Hello, ${name}!`);
}
greet('John');
//What the value is returned when there is no return statement
//If a function does not have a return statement, it returns undefined by default. For example:
function sayHello() {
    console.log('Hello, world!');
}   

//Conditional Statements
// 1. if statement let us execute a block of code if a specified condition is true
// if (condition) 
if(you.wannaBeMyLover) {
    console.log('You gotta get with my friends');
}
// 2. if...else statement let us execute a block of code if a specified condition is true and another block of code if it is false
if (you.reallyBugMe) {
    // Block of code to be executed if the condition is true
    me.say("Goodbye");
} else {
    me.say("Hello");
    // Block of code to be executed if the condition is false
}  

//compare we chain else and if blocks together
if (you.reallyBugMe) {
    // Block of code to be executed if the condition is true
    me.say("Goodbye");
} else if (you.wannaBeMyLover) {
    me.say("You gotta get with my friends");
} else {
    me.say("Hello");
    // Block of code to be executed if the condition is false
}
//The (condition) is an expression that evaluates to true or false. If the condition is true, the code inside the if block is executed. If the condition is false, the code inside the else block is executed.
if(forecast === 'rain') {
    me.takeUmbrella();
} else if (forecast === 'snow') {
    me.wearCoat();
} else {
    me.wearSunglasses();
}
//Boolean (logical) operators can be used to combine multiple conditions in an if statement. For example: 
let someoneIsAroundYou = false;
if(!someoneIsAroundYou) {
    console.log('You are alone');
}
//Sometimes we care about the truthiness of a value, not just if it is true
if(you.happy && you.knowIt) {
    you.clapHands();
}

//Conditoinal (ternary) operator
//The conditional (ternary) operator is a shorthand for the if...else statement. It takes three operands: a condition, an expression to execute if the condition is true, and an expression to execute if the condition is false.'
//Syntax: condition ? expressionIfTrue : expressionIfFalse
let isRaining = true;  
let action = isRaining ? 'Take an umbrella' : 'Wear sunglasses';
console.log(action); // Outputs: Take an umbrella
//Switch Statement
//The switch statement is used to perform different actions based on different conditions. It evaluates an expression
//and executes the code block associated with the matching case.
//Syntax:
// switch (expression) {
//     case value1:
//         // Code block to be executed if expression === value1
//         break;
//     case value2:
//         // Code block to be executed if expression === value2
//         break;
//     ...
//     default:
//         // Code block to be executed if expression is different from all cases
// }

//is eqvivalent to
let mood ;
if (mood === 'happy') {
    me.dance();
} else {
    me.cry();
}


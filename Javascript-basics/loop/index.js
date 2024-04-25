// Loops in JavaScript
// Loops are used to repeat a block of code multiple times under defined conditions, making them a fundamental aspect of programming.

// For Loop
// The 'for' loop is the most common loop and has three components: initialization, condition, and final-expression.
for (let i = 0; i < 5; i++) {
    console.log('Iteration number ' + i);
}
// Output: Iteration number 0 through Iteration number 4

// Real-world example: Processing items in a shopping cart
const cart = ['Apple', 'Banana', 'Carrot'];
for (let i = 0; i < cart.length; i++) {
    console.log(`Processing item: ${cart[i]}`);
}

// For...of Loop
// The 'for...of' loop is used to iterate over iterable objects (like arrays, strings, maps, etc.).
const colors = ['red', 'green', 'blue'];
for (const color of colors) {
    console.log(color);
}
// Output: red, green, blue

// Real-world example: Iterating over a list of users to display their names
const users = [{name: 'Alice'}, {name: 'Bob'}, {name: 'Charlie'}];
for (const user of users) {
    console.log(`User name: ${user.name}`);
}

// While Loop
// Executes its statements as long as a specified condition evaluates to true.
let counter = 0;
while (counter < 5) {
    console.log('Counter is ' + counter);
    counter++;
}
// Output: Counter is 0 to Counter is 4

// Real-world example: Waiting for a file download to complete
let downloadComplete = false;
let attempts = 0;
while (!downloadComplete && attempts < 5) {
    downloadComplete = attemptDownload();  // Assuming attemptDownload() tries to download and returns true on success
    attempts++;
    console.log(`Download attempt ${attempts}`);
}

// Do...While Loop
// Similar to the while loop, but it will always run at least once because the condition is checked after the loop's body.
let result;
do {
    result = performAction();  // Assuming performAction() performs an action and returns a result
    console.log('Performed action with result: ' + result);
} while (result < 0);
// This loop will continue to perform the action until a non-negative result is returned.

// Real-world example: Processing user input until it's valid
let userInput;
do {
    userInput = prompt("Please enter a valid number (greater than 0):");
} while (userInput <= 0);

// This example showcases how each loop type can be utilized in different scenarios, emphasizing their suitability based on the task at hand. Loops are integral in handling repetitive tasks efficiently, which are common in many real-world applications, especially in web development.


   
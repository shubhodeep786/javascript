// Loops in JavaScript

// Loops allow us to execute the same block of code multiple times, often with different inputs or conditions.

// For Loop
// The for loop is used to execute a block of code repeatedly based on a given condition.
// It consists of three parts: initialization, condition, and iteration.

// Example of a for loop:
for (let rep = 0; rep < 10; rep++) {
    console.log('Lifting weights repetition ' + rep);
}

// In the example above:
// - `rep` is the loop counter variable, initialized to 0.
// - The loop continues as long as `rep` is less than 10.
// - After each iteration, `rep` is incremented by 1.

// The output of the loop will be "Lifting weights repetition 0" to "Lifting weights repetition 9".

// For...of Loop
// The for...of loop is a more modern iteration statement introduced in ECMAScript 2015 (ES6).
// It simplifies the process of iterating over iterable objects such as arrays, strings, maps, sets, etc.

// Example of a for...of loop:
const numbersExample = [1, 2, 3, 4, 5];
for (let numbersExample of numbersExample) {
    console.log(numbersExample);
}

// In the example above, the loop iterates over each element of the `numbers` array and logs it to the console.
// This loop is often used when you want to iterate over the values of an array without needing the index.

// The output of the loop will be:
// 1
// 2
// 3
// 4
// 5

// The for...of loop simplifies the syntax for iterating over arrays and other iterable objects compared to traditional for loops.



// Loops let us run the same chunk of code multiple times
for(let rep=0; rep<10; rep++) {
    console.log('Lifting weights repetition ' + rep);
}
console.log('Lifting weights repetition 1');
//for loops require us to:
//declare & initailize a loop counter variable
//give condition for the loop to keep running
//describe how to change(usually increase) the counter each time

//for ...of loops let us more easily iterate over items in a collection
const numbers = [1, 2, 3, 4, 5];
for (let number of numbers) {
    console.log(number);
} 


/* write short notes on the explaining the each logic with example  
correct format and everything should be explained correctly and write the following in Javascript file the 
the text and theory should be in comments and the code should be in js each point should explain with real world example and sample code 
*/
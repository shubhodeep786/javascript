// Map and Filter
// Map: The map method calls a function on each item in an array and returns a new array with the results.
const sports = ['soccer', 'baseball', 'basketball', 'football'];
const sportsLength = sports.map(sport => sport.length); // returns [6, 8, 10, 8]

// Filter: The filter method calls a true or false function on each item in an array and returns a new array with only the items that return true.
const spices = ['salt', 'pepper', 'mel', 'cumin'];
const mels = spices.filter(s => s === 'mel'); // returns ['mel']

// Spread Operator (...)
// The spread operator (...) is used to expand an array into individual elements. It is useful for combining arrays, passing arguments to functions, and creating copies of arrays.
// Combining arrays:
const oldBurns = ['burns', 'burns', 'burns'];
const newBurns = ['burns', ...oldBurns, 'burns']; // returns ['burns', 'burns', 'burns', 'burns', 'burns']
// Passing arguments to functions:
const skills = ['HTML', 'CSS', 'JavaScript'];
const newSkills = ['React', 'Node.js', ...skills]; // returns ['React', 'Node.js', 'HTML', 'CSS', 'JavaScript']
// Creating copies of arrays:
const burnBook = [...oldBurns, ...newBurns]; // returns ['burns', 'burns', 'burns', 'burns', 'burns', 'burns', 'burns', 'burns']

// While Loops
// While loops let us run a chunk of code over and over again as long as a condition is true.
// Example 1: Generating five random numbers
let fiveRandomNumbers = [];
while (fiveRandomNumbers.length < 5) {
    fiveRandomNumbers.push(Math.random());
}

// Example 2: Running a loop forever
while (true) {
    console.log('I will run forever!');
}

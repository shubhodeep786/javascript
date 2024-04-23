//Map and Filter 
//Map 
//maps calls a fucntion on each item in an array and returns a new array with the results
const sports = ['soccer', 'baseball', 'basketball', 'football'];
const sportsLength = sports.map(sport => sport.length);

//String tmeplates are used too Make them with backticks and ${} e.g.
// const sports = ['soccer', 'baseball', 'basketball', 'football'];

//filters calls a true or false function on each item in an array and returns a new array with only the items that return true 
const mels = spices.filter(s => s === 'mel');

//Spread Operator (...)
//The spread operator (...) is used to expand an array into individual elements. It is useful for combining arrays, passing arguments to functions, and creating copies of arrays.
//We can  use it to put all the items from one array into another array

const oldBurns = ['burns', 'burns', 'burns'];
const newBurns = ['burns', ...oldBurns, 'burns'];
const burnBook = [ ...oldBurns, ...newBurns];

//We cal also use it to pass all the items from and array as arguments to a function
const skills = ['HTML', 'CSS', 'JavaScript']; 
const newSkills = ['React', 'Node.js', ...skills];
skills.push(...newSkills);
console.log(...skills);

//while loops 
//lets us run a chunk of code over and over again as long as a condition is true
let fiveRandomNumbers = [];
while(fiveRandomNumbers.length < 5) {
    fiveRandomNumbers.push(Math.random());
}

while(true) {
    console.log('I will run forever!');
}

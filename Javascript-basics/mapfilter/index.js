// Map in JavaScript
// The 'map' method creates a new array populated with the results of calling a provided function on every element in the calling array.
const numbers = [1, 2, 3, 4];
const squares = numbers.map(number => number * number);
console.log(squares);  // Output: [1, 4, 9, 16]

// Real-world example: Converting temperatures from Celsius to Fahrenheit
const celsius = [0, 10, 20, 30];
const fahrenheit = celsius.map(temp => temp * 1.8 + 32);
console.log(fahrenheit);  // Output: [32, 50, 68, 86]

// Filter in JavaScript
// The 'filter' method creates a new array with all elements that pass the test implemented by the provided function.
const ages = [22, 16, 14, 30, 18];
const adults = ages.filter(age => age >= 18);
console.log(adults);  // Output: [22, 30, 18]

// Real-world example: Filtering search results
const products = [
    { name: "iPhone", price: 999 },
    { name: "Samsung Galaxy", price: 850 },
    { name: "Google Pixel", price: 799 }
];
const expensiveProducts = products.filter(product => product.price > 800);
console.log(expensiveProducts);  // Output: [{name: "iPhone", price: 999}, {name: "Samsung Galaxy", price: 850}]

// Spread Operator in JavaScript
// The spread operator (...) allows an iterable such as an array or string to be expanded in places where zero or more arguments or elements are expected.
const part1 = ['a', 'b', 'c'];
const part2 = ['d', 'e', 'f'];
const combined = [...part1, ...part2];
console.log(combined);  // Output: ['a', 'b', 'c', 'd', 'e', 'f']

// Real-world example: Combining ingredients
const baseIngredients = ['flour', 'water', 'yeast'];
const additionalIngredients = ['salt', 'sugar', 'butter'];
const allIngredients = [...baseIngredients, ...additionalIngredients];
console.log(allIngredients);  // Output: ['flour', 'water', 'yeast', 'salt', 'sugar', 'butter']

// While Loops in JavaScript
// A 'while' loop continues to run as long as the specified condition is true.
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

// Real-world example: Processing queued messages
let messages = ['Hello', 'Good morning', 'How are you?'];
while (messages.length > 0) {
    const message = messages.shift();
    console.log(`Processing message: ${message}`);
}

// Infinite Loops
// An infinite loop runs perpetually because the terminating condition is never reached or doesn't exist.
// Note: Be careful with infinite loops as they can crash your browser or server if not handled correctly.
// let j = 0;
// while (true) {
//     console.log(j++);
//     if (j === 100) break;  // A break statement to prevent infinite execution
// }



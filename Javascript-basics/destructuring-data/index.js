// Destructuring Objects and Arrays
// Destructuring is a JavaScript expression that allows unpacking values from arrays or properties from objects into distinct variables.

// Destructuring Objects
// When destructuring objects, we use curly braces {} and specify the property names to extract from the object.

// Example of destructuring an object:
let spices = [
    { name: 'Cinnamon', nickname: 'Spicy' },
    { name: 'Turmeric', nickname: 'Golden Spice' },
    { name: 'Paprika', nickname: 'Red Pepper' }
];

let { name, nickname } = spices[0];
// Here, name will be assigned the value 'Cinnamon' and nickname will be assigned 'Spicy'.

// If we only care about some properties, we can omit the others:
let { nickname1 } = spices[2];
// In this case, nickname1 will be assigned the value 'Red Pepper'.

// Destructuring Arrays
// When destructuring arrays, we use square brackets [] and specify the positions of the elements to extract.

// Example of destructuring an array:
let [first, second] = spices;
// Here, first will be assigned the first object in the spices array, and second will be assigned the second object.

// Using ... to collect remaining values
// We can use the spread operator (...) to collect remaining values when destructuring arrays.

// Example of collecting remaining values:
const [first1, ...rest] = spices;
// Here, first1 will be assigned the first object in the spices array, and rest will be an array containing the remaining objects.




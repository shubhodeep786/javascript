//Destructuting Objects and Arrays
//Destructuring is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.
//By extracting values from an object with their property names, destructuring allows you to bind variables to those values. 

let {name,nickname} = spices[0];

//If we only care about some of the propertirs we can omit the others 
let {nickname1} = spices[2];

//we can also destructure Arrays, assigning variables for the items
let [first, second] = spices;

//We can use ...to collect remaining values
const [first1, ...rest] = spices; 
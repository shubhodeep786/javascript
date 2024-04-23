const js = {
    name: 'JavaScript',
    type: 'programming language',
    purpose: 'building web applications',
    libraries: ['React', 'Angular', 'Vue'],
    frameworks: ['Node.js', 'Express', 'Meteor'],
    birthYear: 1995,
    creator: 'Brendan Eich'
}

//objects collects multiple values together to describe a more complex data
//Similar to how we can point at different values with variables, we can point at different values with objects
//Objects are mutable, meaning you can change their properties

//getting property values
js.name
js.name.startsWith('J')

//object.freeze() method freezes an object. A frozen object can no longer be changed; freezing an object prevents new properties from being added to it, existing properties from being removed, prevents changing the enumerability, configurability, or writability of existing properties, and prevents the values of existing properties from being changed. In addition, freezing an object also prevents its prototype from being changed. freeze() returns the same object that was passed in.
Object.freeze(js)
//spread syntax (...) allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.
const jsCopy = { ...js }
//Object.assign() method copies all enumerable own properties from one or more source objects to a target object. It returns the target object.
const jsCopy2 = Object.assign({}, js)

//this method in javascript lets us reference other properties in the object
//this keyword refers to the object it belongs to
const person = {
    firstName: 'John',
    lastName: 'Doe',
    fullName: function () {
        return this.firstName + ' ' + this.lastName;
    }
}
person.fullName()

//This is an method lets us reference other properties in the object
hello.speak = function () {
    console.log('Hello, ' + this.name + '!');
}
hello.speak()

//Nested objects with examples?
//Objects can contain other objects as properties, creating nested objects. This allows for organizing data in a hierarchical structure. For example:
const person = {
    name: 'John',
    age: 30,
    address: {
        street: '123 Main St',
        city: 'Anytown',
        state: 'CA'
    }
}

const state = person.address.state;

//Objects in Arrays and Objects explain with example??
//Objects in Arrays
//An array can hold multiple objects. Each object in the array is an element and can be accessed using its index.

let arr = [
    { name: 'John', age: 30 },
    { name: 'Jane', age: 25 },
    { name: 'Doe', age: 35 }
];
arr[1].name; // Outputs: Jane
const [person1, person2, person3] = arr;

console.log(person1.name); // Outputs: John
console.log(person2.age); // Outputs: 25
console.log(person3); // Outputs: {name: 'Doe', age: 35}

//Objects in Objects
//An object can also contain other objects. These are known as nested objects. You can access the properties of nested objects using dot notation.

let { person1, person2, person3 } = obj;

console.log(person1.name); // Outputs: John
console.log(person2.age); // Outputs: 25
console.log(person3); // Outputs: {name: 'Doe', age: 35}
//In both examples, `name` and `age` are properties of the objects.

//Built in Object in JavaScript
//JavaScript provides several built-in objects that can be used to perform common tasks. Some of the built-in objects in JavaScript include:
// // //Math: Provides mathematical functions and constants.
// // //Date: Represents dates and times.
// // //String: Represents a sequence of characters.
// // //Array: Represents a collection of elements.
// // //Function: Represents a function.
// // //Object: Represents a generic object.
// // //RegExp: Represents a regular expression.
// // //Error: Represents an error object.
// // //Global: Represents the global object.
// // //JSON: Provides methods for working with JSON data.
// // //Promise: Represents the eventual completion (or failure) of an asynchronous operation.
// // //Set: Represents a collection of unique values.
// // //Document: Represents the HTML document in a web browser.
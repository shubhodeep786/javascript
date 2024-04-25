// Objects
// Objects collect multiple values together to describe more complex data. They allow us to organize data into key-value pairs.
const js = {
    name: 'JavaScript',
    type: 'programming language',
    purpose: 'building web applications',
    libraries: ['React', 'Angular', 'Vue'],
    frameworks: ['Node.js', 'Express', 'Meteor'],
    birthYear: 1995,
    creator: 'Brendan Eich'
}

// Getting property values
js.name; // returns 'JavaScript'
js.name.startsWith('J'); // returns true

// Object.freeze()
// The freeze method freezes an object, making it immutable.
Object.freeze(js);

// Spread syntax (...)
// The spread syntax allows us to expand an iterable (like an array) or object in places where multiple elements are expected.
const jsCopy = { ...js };
const jsCopy2 = Object.assign({}, js);

// 'this' keyword
// 'this' refers to the object it belongs to. It is commonly used within methods to refer to other properties of the object.
const person = {
    firstName: 'John',
    lastName: 'Doe',
    fullName: function () {
        return this.firstName + ' ' + this.lastName;
    }
}
person.fullName(); // returns 'John Doe'

// Nested objects
// Objects can contain other objects as properties, creating nested objects.
const personOne  = {
    name: 'John',
    age: 30,
    address: {
        street: '123 Main St',
        city: 'Anytown',
        state: 'CA'
    }
}
const state = personOne.address.state; // returns 'CA'

// Objects in Arrays
// An array can hold multiple objects. Each object in the array is an element and can be accessed using its index.
let arr = [
    { name: 'John', age: 30 },
    { name: 'Jane', age: 25 },
    { name: 'Doe', age: 35 }
];
arr[1].name; // returns 'Jane'

// Objects in Objects
// An object can contain other objects, known as nested objects.
let { personOne: person1, personTwo: person2, personThree: person3 } = obj;

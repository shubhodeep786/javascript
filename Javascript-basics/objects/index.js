// Objects in JavaScript
// Objects are used to store keyed collections of various data and more complex entities. 
// An object can be created using curly braces {} with an optional list of properties.
// A property is a "key: value" pair, where key is a string and value can be anything.

// Creating an object
const car = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2020,
    isHybrid: false
};

// Accessing property values
// You can access properties of an object using the dot notation or square bracket notation.
console.log(car.model); // Outputs 'Corolla'
console.log(car['year']); // Outputs 2020

// Object.freeze()
// This method freezes an object. A frozen object can no longer be changed; freezing an object prevents new properties from being added to it,
// existing properties from being removed, and prevents changing the enumerability, configurability, or writability of existing properties.
Object.freeze(car);
car.color = 'Blue'; // This will have no effect as the object is frozen.

// Spread syntax (...)
// The spread syntax allows an object to be expanded in places where key-value pairs are expected. It is very useful for making shallow copies of objects.
const updatedCar = { ...car, isHybrid: true };
console.log(updatedCar); // Outputs the car object with isHybrid set to true

// 'this' keyword
// 'this' refers to the object that the function is a property of. 
// The value of 'this' is usually determined by how a function is called (runtime binding).
const person = {
    firstName: 'John',
    lastName: 'Doe',
    fullName: function () {
        return this.firstName + ' ' + this.lastName;
    }
};
console.log(person.fullName()); // Outputs 'John Doe'

// Nested objects
// JavaScript allows you to nest objects within other objects, creating a multi-level data structure.
const company = {
    name: 'Tech Innovations',
    address: {
        street: '456 Tech Rd',
        city: 'Innovate City',
        zipCode: '12345'
    },
    departments: {
        research: {
            employees: 100,
            director: 'Jane Smith'
        },
        development: {
            employees: 150,
            director: 'John Doe'
        }
    }
};
console.log(company.departments.research.director); // Outputs 'Jane Smith'

// Objects in Arrays
// Arrays can store objects. This can be useful for representing collections of records with the same structure.
let employees = [
    { name: 'John Doe', position: 'Manager' },
    { name: 'Jane Smith', position: 'Developer' },
    { name: 'Alice Johnson', position: 'Designer' }
];
console.log(employees[1].position); // Outputs 'Developer'

// Real-world analogy
// Think of an object as a file cabinet, where each drawer (property) can hold various types of documents (values).
// For example, a drawer labeled "Personal Information" might include documents such as a passport, birth certificate, etc.


// Promises in JavaScript
// Promises are a fundamental concept in JavaScript for handling asynchronous operations. They represent the eventual completion (or failure) of an asynchronous task and its resulting value. Promises have three possible states: pending, fulfilled, or rejected.

// Example of creating and using a promise in JavaScript:
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = true;
        if (success) {
            resolve('Operation completed successfully');
        } else {
            reject('Operation failed');
        }
    }, 2000);
});

// In the above example:
// - We create a new Promise using the Promise constructor, which takes a function as its argument.
// - Inside the function, we perform some asynchronous operation, such as setTimeout.
// - If the operation is successful, we call the resolve() function with the result.
// - If there's an error, we call the reject() function with an error message.

// Handling Promises:
promise
    .then(result => console.log(result)) // Handle successful completion
    .catch(error => console.error(error)); // Handle error

// In the above code:
// - We use the .then() method to handle the successful completion of the promise.
// - Inside .then(), we specify a callback function that takes the result of the successful operation as its argument.
// - We use the .catch() method to handle any errors that occur during the promise execution.
// - Inside .catch(), we specify a callback function that takes the error message as its argument.

// Real-World Example: Fetching Data from an API
// Let's use promises to fetch data from an API asynchronously.

fetch('https://api.example.com/data')
    .then(response => response.json()) // Parse response as JSON
    .then(data => console.log(data)) // Handle data
    .catch(error => console.error('Error fetching data:', error)); // Handle error

// In the above code:
// - We use the fetch() function to make an HTTP request to the API endpoint.
// - We chain .then() methods to handle the response asynchronously.
// - Inside the first .then(), we parse the response as JSON using the .json() method.
// - In the second .then(), we handle the data retrieved from the API.
// - We use .catch() to handle any errors that occur during the request.

// Asynchronous Functions with Await
// The await keyword is used to pause the execution of an asynchronous function until a Promise is settled.

// Example of using the await keyword within an async function:
async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
fetchData();

// In the above example:
// - We define an async function fetchData() to fetch data from an API.
// - Inside the function, we use the await keyword to pause execution until the fetch() promise is settled.
// - We wrap the await calls in a try-catch block to handle any errors that may occur during the asynchronous operation.
// - If the promise resolves successfully, the execution continues, and we log the retrieved data.
// - If there's an error, it's caught in the catch block and logged to the console.
// - We call the fetchData() function to initiate the asynchronous operation.

// These concepts and patterns are commonly used in JavaScript to handle asynchronous tasks in a clean and readable manner.


// Promise.all() - Resolving Multiple Promises Concurrently
const promise2 = fetch('https://api.example.com/data1');
const promise3 = fetch('https://api.example.com/data2');

Promise.all([promise2, promise3])
    .then(responses => {
        // Handle responses when all promises are resolved
        const data1 = responses[0].json();
        const data2 = responses[1].json();
        console.log(data1, data2);
    })
    .catch(error => console.error('Error fetching data:', error));

// Promise.race() - Competing Promises
const promise4 = new Promise(resolve => setTimeout(resolve, 500, 'one'));
const promise5 = new Promise(resolve => setTimeout(resolve, 100, 'two'));

Promise.race([promise4, promise5])
    .then(value => console.log(value)) // Logs 'two' because promise2 resolves faster
    .catch(error => console.error('Error:', error)); // Won't be called

// Promise.resolve() - Resolving with a Value
const promise6 = Promise.resolve('Resolved value');

promise.then(value => console.log(value)); // Logs 'Resolved value'

// Promise.reject() - Rejecting with a Reason
const promise7 = Promise.reject('Reason for rejection');

promise.catch(reason => console.error(reason)); // Logs 'Reason for rejection'

// Chaining Promises - Sequential Execution
fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => {
        // Process data and return a new promise
        return fetch('https://api.example.com/otherdata');
    })
    .then(otherResponse => otherResponse.json())
    .then(otherData => console.log(otherData))
    .catch(error => console.error('Error:', error));
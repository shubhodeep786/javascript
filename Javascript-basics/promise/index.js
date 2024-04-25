// Promises in JavaScript
// Promises are used to handle asynchronous operations in JavaScript. They provide a way to handle asynchronous operations by
// representing a value that may be available now, later, or never.

// Creating a Promise
// The Promise constructor takes a function (executor) that should eventually resolve or reject the promise.
const myPromise = new Promise((resolve, reject) => {
    let condition = true;  // Assume some condition is checked to resolve or reject the promise
    if (condition) {
        resolve('Promise is resolved!');  // If the condition is true, resolve the promise
    } else {
        reject('Promise is rejected!');   // If the condition is false, reject the promise
    }
});

// Handling Promises using then, catch, and finally
myPromise
    .then(value => {
        console.log(value);  // Handle successful resolution here
    })
    .catch(error => {
        console.error(error);  // Handle errors or rejections here
    })
    .finally(() => {
        console.log('Cleanup can be done here');  // Executed regardless of the promise outcome
    });

// Real-world example: Fetching data from a server
fetch('https://api.example.com/data')
    .then(response => response.json())  // Parses the JSON response
    .then(data => {
        console.log('Fetched data:', data);  // Process the data
    })
    .catch(error => {
        console.error('Failed to fetch data:', error);  // Handle any errors that occur during the fetch
    });

// Promise.all - Handling multiple promises together
// This method takes an array of promises and resolves when all of them are resolved or rejects as soon as one of them rejects.
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then(values => {
    console.log(values);  // [3, 42, 'foo']
}).catch(error => {
    console.error(error);
});

// Promise.race - Resolving/rejecting as soon as the first promise resolves/rejects
const timeout = new Promise((resolve, reject) => {
    setTimeout(reject, 5000, 'Operation timed out');
});
const fetchPromise = fetch('https://api.example.com/data');

Promise.race([fetchPromise, timeout])
    .then(response => {
        console.log('Successful response:', response);
    })
    .catch(error => {
        console.error('Error or timeout:', error);
    });

// Async/Await - Syntactic sugar for working with promises in a more synchronous fashion
async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');  // Wait for the fetch to resolve
        const data = await response.json();  // Wait for the JSON conversion
        console.log('Data received:', data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
fetchData();

// Practical application of async/await in a real-world scenario
// This could be used in a web application to load user data from a server and display it on the page.

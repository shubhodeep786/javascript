//Fetching Data from an API in JavaScript?
//To fetch data from an API in JavaScript, you can use the Fetch API, which provides a simple and powerful way to make HTTP requests. Here's an example of how to fetch data from an API using the Fetch API:
//fetch('https://api.example.com/data')
//    .then(response => response.json())
//    .then(data => console.log(data))
//    .catch(error => console.error('Error fetching data:', error));
//The fetch() function takes a URL as an argument and returns a Promise that resolves to the Response object representing the response to the request. You can then use the .json() method on the Response object to parse the response as JSON data. The .then() method is used to handle the successful response, and the .catch() method is used to handle any errors that occur during the request.
//The Fetch API is supported in all modern browsers and can be used to fetch data from any API that supports the HTTP protocol.

//promises in JavaScript
//A promise in JavaScript represents the eventual completion (or failure) of an asynchronous operation and its resulting value. Promises are used to handle asynchronous operations such as fetching data from an API, reading a file, or waiting for a user input. Here's an example of how to create and use a promise in JavaScript:
// //Creating a promise
// const promise = new Promise((resolve, reject) => {
//     // Perform an asynchronous operation
//     setTimeout(() => {
//         const success = true;
//         if (success) {
//             resolve('Operation completed successfully');
//         } else {
//             reject('Operation failed');
//         }
//     }, 2000);
// });

//Promises can be in 3 possible states: 
//Pending: The initial state of a promise. It is neither fulfilled nor rejected.
//Fulfilled: The state of a promise representing a successful operation.
//Rejected: The state of a promise representing a failed operation.
//You can use the .then() method to handle the successful completion of a promise and the .catch() method to handle any errors that occur during the operation. For example:

//await in JavaScript 
//The await keyword is used to pause the execution of an asynchronous function until a Promise is settled (that is, fulfilled or rejected). The await keyword can only be used inside an async function. Here's an example of how to use the await keyword in JavaScript:
// async function fetchData() {
//     const response = await fetch('https://api.example.com/data');
//     const data = await response.json();
//     console.log(data);
// }
// fetchData();

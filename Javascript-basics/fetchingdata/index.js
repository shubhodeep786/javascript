// Fetching Data from an API in JavaScript
// To fetch data from an API in JavaScript, the Fetch API is commonly used. It provides a simple and powerful way to make HTTP requests.

// Example of fetching data from an API using the Fetch API:
fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error fetching data:', error));

// Explanation:
// The fetch() function takes a URL as an argument and returns a Promise that resolves to the Response object representing the response to the request.
// The .then() method is used to handle the successful response. In this case, we call the .json() method on the Response object to parse the response as JSON data.
// Finally, the .catch() method is used to handle any errors that occur during the request.

// Promises in JavaScript
// Promises represent the eventual completion (or failure) of an asynchronous operation and its resulting value.

// Example of creating and using a promise in JavaScript:
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = true;
        if (success) {
            resolve('Operation completed successfully');
        } else {
            reject('Operation failed');
        }
    }, 2000);
});

// Promises can be in three possible states: pending, fulfilled, or rejected.
// You can handle the successful completion of a promise using the .then() method and handle errors using the .catch() method.

// Await in JavaScript
// The await keyword is used to pause the execution of an asynchronous function until a Promise is settled.

// Example of using the await keyword:
async function fetchData() {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
}
fetchData();

// Explanation:
// The await keyword is used inside an async function to wait for the fetch() function to complete and resolve the Promise.
// Once the Promise is resolved, the execution continues, and the data is retrieved and logged to the console.


/* expalin in similar ways about promises in js in similar fashion and all the methods related to realworld examples
code snippet examples related to it  should be written in the same way as above
*/


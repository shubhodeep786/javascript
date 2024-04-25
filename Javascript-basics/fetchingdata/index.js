// Promises in JavaScript
// A Promise is an object representing the eventual completion or failure of an asynchronous operation. Essentially, it is a returned object to which you attach callbacks, instead of passing callbacks into a function.

// Creating a Promise
// Example: Let's say you want to simulate a task that could succeed or fail like checking if a user exists in a database.
const checkUserExists = new Promise((resolve, reject) => {
    setTimeout(() => {
        const users = ['Alice', 'Bob', 'Charlie'];
        const user = 'Bob';

        if (users.includes(user)) {
            resolve(`User found: ${user}`);
        } else {
            reject(new Error('User not found'));
        }
    }, 1000);
});

// Using a Promise
// The then() method is used to schedule a callback to be executed when the promise is successfully resolved.
// The catch() method is used to handle the promise if it is rejected.
checkUserExists
    .then(result => console.log(result))  // Handle a successful outcome
    .catch(error => console.error(error));  // Handle an error

// Real-world example: Processing online payment
// Imagine you need to process a payment and then send a confirmation once the payment is successful.
const processPayment = amount => {
    return new Promise((resolve, reject) => {
        console.log(`Processing payment of $${amount}...`);
        setTimeout(() => {
            // Simulate payment processing and respond
            const success = Math.random() > 0.5;  // 50% chance of success
            if (success) {
                resolve(`Payment of $${amount} processed successfully.`);
            } else {
                reject(new Error(`Payment of $${amount} failed.`));
            }
        }, 2000);
    });
};

processPayment(100)
    .then(confirmation => console.log(confirmation))
    .catch(error => console.error(error));

// Promise Chaining
// You can chain multiple promises using then() methods. This is useful for performing several asynchronous tasks in sequence where each task depends on the outcome of the previous one.
const getUserData = userId => Promise.resolve({ id: userId, username: 'johndoe' });
const getUserPermissions = user => Promise.resolve({ ...user, permissions: ['admin', 'editor'] });

getUserData(1)
    .then(user => getUserPermissions(user))
    .then(userWithPermissions => console.log(userWithPermissions))
    .catch(error => console.error(error));

// Async/Await
// The async/await syntax is used to write promises in a more synchronous-looking fashion. This can make asynchronous code easier to write and read.
async function displayUserData(userId) {
    try {
        const user = await getUserData(userId);
        const permissions = await getUserPermissions(user);
        console.log(`User: ${user.username}, Permissions: ${permissions.permissions.join(', ')}`);
    } catch (error) {
        console.error('Failed to fetch user data:', error);
    }
}
displayUserData(1);

// Explanation:
// In the above async function, 'await' is used to pause the function execution until the promise resolves, making the code look and behave a bit more like synchronous code.



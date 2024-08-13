// Promises in JavaScript
// A Promise is an object representing the eventual completion or failure of an asynchronous operation. Essentially, it is a returned object to which you attach callbacks, instead of passing callbacks into a function.

// Creating a Promise
// Example: Let's say you want to simulate a task that could succeed or fail like checking if a user exists in a database.
const checkUserExists = new Promise((resolve, reject) => {
  setTimeout(() => {
    const users = ["Alice", "Bob", "Charlie"];
    const user = "Bob";

    if (users.includes(user)) {
      resolve(`User found: ${user}`);
    } else {
      reject(new Error("User not found"));
    }
  }, 1000);
});
/* Image_prompt = """Provide a detailed and comprehensive description of the image pamphlet, including all relevant visual elements, objects, actions, and surroundings, ensuring no detail is overlooked, captured all its essence and context.
You also have to answer below question based on the number scale 0-10, where 0-3 consider as a Good signage pamphlet, 4-7 as Better signage pamphlet and 8-10 as Best signage pamphlet.
Below are the questions which you have to answered
Q. Check the following correctly and try to find out the brand name and brand description and try to find the product and industry segment the brand is targeting
Q. For a Screen Specifications, On a scale of 0-10, how well do the dimensions and aspect ratio of the screens adhere to the 16:9 or 9:16 ratio for landscape or portrait screens respectively?
Q. For a Conciseness of Communication, Evaluate the signage's adherence to the Three By Five rule in terms of communicating information effectively. (0 being unclear and verbose, 10 being concise and informative)
Q. For a Font and Text Visibility, Rate the visibility of the body text font size (20-30pt) from a distance of around 7 feet away. (0 for illegible, 10 for highly visible)
Q. For a Design Simplicity, Assess the signage's adherence to simplicity guidelines, including avoiding too many fonts moving parts. (0 for cluttered, 10 for minimal and focused)
Q. For a Screen Layout and Visibility, Evaluate how well the signage obeys screen layout principles, ensuring visibility and avoiding cutoffs of important elements. (0 for poorly structured, 10 for well-organized and visible)
Q. For a Visual Contrast, Rate the effectiveness of visual contrasts used in the signage for enhancing legibility and attracting attention. (0 for insufficient contrast, 10 for highly effective contrast)
Q. For a Balance Between Text and Graphics, How well does the signage achieve a balance between text and graphics? (0 for imbalance, 10 for harmonious integration)

Do not include markdown "```" at the start or end,return the json with "Description" as a key whose value is description of an image rest keys are Complete Question text : Answer digit between 0-10 in json format only.
Add one more key "Category" which classify pamphlets into different categories based on the respective industries they represent.
Make sure all json keys are enclosed in double quotes only. */

// Using a Promise
// The then() method is used to schedule a callback to be executed when the promise is successfully resolved.
// The catch() method is used to handle the promise if it is rejected.
checkUserExists
  .then((result) => console.log(result)) // Handle a successful outcome
  .catch((error) => console.error(error)); // Handle an error

// Real-world example: Processing online payment
// Imagine you need to process a payment and then send a confirmation once the payment is successful.
const processPayment = (amount) => {
  return new Promise((resolve, reject) => {
    console.log(`Processing payment of $${amount}...`);
    setTimeout(() => {
      // Simulate payment processing and respond
      const success = Math.random() > 0.5; // 50% chance of success
      if (success) {
        resolve(`Payment of $${amount} processed successfully.`);
      } else {
        reject(new Error(`Payment of $${amount} failed.`));
      }
    }, 2000);
  });
};

processPayment(100)
  .then((confirmation) => console.log(confirmation))
  .catch((error) => console.error(error));

// Promise Chaining
// You can chain multiple promises using then() methods. This is useful for performing several asynchronous tasks in sequence where each task depends on the outcome of the previous one.
const getUserData = (userId) =>
  Promise.resolve({ id: userId, username: "johndoe" });
const getUserPermissions = (user) =>
  Promise.resolve({ ...user, permissions: ["admin", "editor"] });

getUserData(1)
  .then((user) => getUserPermissions(user))
  .then((userWithPermissions) => console.log(userWithPermissions))
  .catch((error) => console.error(error));

// Async/Await
// The async/await syntax is used to write promises in a more synchronous-looking fashion. This can make asynchronous code easier to write and read.
async function displayUserData(userId) {
  try {
    const user = await getUserData(userId);
    const permissions = await getUserPermissions(user);
    console.log(
      `User: ${user.username}, Permissions: ${permissions.permissions.join(
        ", "
      )}`
    );
  } catch (error) {
    console.error("Failed to fetch user data:", error);
  }
}
displayUserData(1);

// Explanation:
// In the above async function, 'await' is used to pause the function execution until the promise resolves, making the code look and behave a bit more like synchronous code.

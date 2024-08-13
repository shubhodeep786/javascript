//Higher Order Functions
//Higher order functions are functions that take other functions as arguments or return functions as output.
//Higher order functions are a result of first-class functions.
//First-class functions are functions that can be assigned to variables, passed as arguments, and returned from other functions.
//Higher order functions are used to abstract or isolate actions, effects, or async flow control using callback functions, promises, async and await.
/* function to support multiple operations by providing different operation functions: addition, multiplication, and more.

Additionally, the concept of the higher-order function allows composability of functions. For example, you compose calculate() with sum() to calculate the sum of all numbers in an array. If you want to calculate the production, then you compose calculate() and multiply(). */
function calculate(operation, initialValue, numbers) {
  let total = initialValue;
  for (const number of numbers) {
    total = operation(total, number);
  }
  return total;
}

function sum(n1, n2) {
  return n1 + n2;
}

function multiply(n1, n2) {
  return n1 * n2;
}

//Closure in JS
/* Closed over Variable Environment
Persistent Lexical  Scope Referenced Data (P.L.S.)
Backpack
Closure is when a function remembers its outer scope even when the function is called outside of that scope.
What is Execution Context , Call stack , 
*/
/* Closure is the concept of function + lexical environment in which function it was created. so every function declared within another function then it has access to the scope chain of the outer function and the variables created within the scope of the outer function will not get destroyed. */

function foo(outer_agr) {
  function inner(inner_arg) {
    return outer_agr + inner_arg;
  }
  return inner;
}
let get_func_inner = foo(5);
console.log(get_func_inner(10)); // 15
console.log(get_func_inner(20)); // 25

function outer() {
  let arr = [];
  let i;
  for (i = 0; i < 3; i++) {
    arr[i] = function () {
      return i;
    };
  }
  return arr;
}
let get_arr = outer();
console.log(get_arr[1]());
//Closure gives our functions persistent  memories and entirely new toolkit for writing professional code
/* Helper functions */
/* Iterators and Generators */
/* Module Patterns */
/* Asynchronous Javascript  */
/* What is Memorization */
/* memorization in Javascript and how the it works under the hood with help of closures */

/* Web Browser Rules */
/* Global Memo */
/* Set Timeout  */

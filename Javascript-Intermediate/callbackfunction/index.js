//What are callback functions and need ?
function print(callback) {
  callback();
}
//What is an Anonymous Function?
setTimeout(function () {
  console.log("This message is shown after 3 seconds");
}, 3000);
//Callback as an Arrow Functions
setTimeout(() => {
  console.log("This message is shown after 3 seconds");
}, 3000);
/* lexically scoped language */
/* persistance or lexically stored data  */

/* Callback hell in Javascript */

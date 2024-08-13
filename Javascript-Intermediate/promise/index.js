function display(data) {
  console.log(data);
}

const futureData = fetch("https://twitter.com/will/1");
/* fetch will return a promise object  which has the following keys 
onfullfilled is an hidden property
{ value: ,
  onfullfilled:,
    Promise { <pending> },
done: false } 
When the data will be comeback from the promise function
FetchData.then()
*/

futureData.then(display);
console.log("Me first ");
// Global Memory  execution for the  following  promises and how onfullfilled is updated when the data is received from the server in the Global Memory Context
// hidden Property onfullfilled
//FutureData .then()taken
/* how data will be transferred to the FutureData variable  */
/* display('hi') */
/* then method and functionality  to call on completion 
Any code we want to run on the data must also be saved on the promise object 
Added using then method to the hidden property 'unfullfillment'
Promise objects will automatically trigger and get attached to the function with its input being the return data 
*/
/*how our promise-deferred functionality gets back into  javascript to be run */
/* fetchData = fetch("") */
/* function display(data){ console.log(data)} 
function correctly 
*/

function display(data) {
  console.log(data);
}

const futureData1 = fetch("https://twitter.com/will/1");
futureData1.then(display);

console.log("Me first!");
/* Then method and functionality to call on completion
Any code we went to run on the returned data must be  also saved on the promise object 
Added using then method to the hidden property onfullfilled
Promise objects will automatically trigger and get attached to the function with its input being the return data
*/

// Global Memory execution for the following promises and how onfullfilled is updated when the data is received from the server in the Global Memory Context

function display(data) {
  console.log(data);
}
function printHello() {
  console.log("Hello");
}
function blockFor300ms() {
  /*blocks js thread for 300ms*/
}

setTimeout(printHello, 0);
const futureData2 = fetch("https://twitter.com/will/1");
futureData2.then(display);

blockFor300ms();
console.log("Me first");
/* Explain the execution with the help of global execution context  */

/* Microtask Queue  */
/* https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API/Microtask_guide */

/*  Promises , Web APIs the callback & Microtask Queues and Event loops enable:
    Non-blocking Application 
    However long takes
    Web Application
*/

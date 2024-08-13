/* eslint-disable no-unused-vars */
/* Promises,Async & the Event Loop */
//Promises
//Asynchronicity
//The event Loop
//The working of Event loop
//Microtask Queue

const num = 3;
function multiplyBy2(inputNumber) {
  const result = inputNumber * 2;
  return result;
}
const Output = multiplyBy2(num);
const newOutput = multiplyBy2(10);
/* Thread of Execution */
/* !flow of the execution initialized*/
/* Thread of Execution 1 */
/* global memory 
    num: 3 
    multiplyBy2: fn 
    output: 6 
    Thread of Execution 2 
    new execution context initialized
    inputNumber: 3 
    result: 6
    Thread of Execution 3
    new execution context initialized
    inputNumber: 10 
    result: 20
 */

/*Asynchronous browser 
    
    ES5 Solution introducing 'callback functions' and web   */
/* label for the  web browsers 
  Document - > HTML DOM
  Console - > Console
  setTimeout -> Timer 
*/
function printHello() {
  console.log("Hello");
}
setTimeout(printHello, 1000);
console.log("We First:");
/* Flow of execution
   printHello: fn
   setTimeout(printable,1000)  -----> web browser (timer),1000 milliseconds on completion
 */

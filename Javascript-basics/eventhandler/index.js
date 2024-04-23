//Events and Handlers in JavaScript
//Events are actions that occur in the browser, such as a user clicking a button, hovering over an element, or submitting a form. Event handlers are functions that are executed in response to events. In JavaScript, you can attach event handlers to elements in the DOM to respond to user interactions. Here are some common events and event handlers in JavaScript:
//The web browser fires events when certain things happen on the page 
//For example, when a user clicks a button, hovers over an element, or submits a form


document.addEventListener('click', () => {
    console.log('The document was clicked!');
}); // Event listener

//.addEventListener() method is used to attach an event listener to the document object. The first argument is the event type, in this case, 'click', and the second argument is a callback function that will be executed when the event occurs.
//It takes 2 parameters: the event type and a callback function that will be executed when the event occurs.   
//handler function that JS  calls whent the event is fired on this element

//
//<!-- HTML -->
//<button id="clickMeButton">Click me</button>
// JavaScript
//document.getElementById('clickMeButton').addEventListener('click', function() {
//    alert('Button was clicked!');
//});
//The event handler is a function that is executed when the button is clicked. In this case, it displays an alert box with the message 'Button was clicked!'.
//
//js  passes an event object to the handler function as an argument wtih information about the event
//if we accept this as a parameter we can use it to access information about the event we can use itto get details 

//click isnt the only typo of event we can listen for
//there are many other types of events we can listen for
//such as mouseover, mouseout, keydown, keyup, submit, change, and many more

// JavaScript
let button = document.getElementById('myButton');

button.addEventListener('click', function() {
    console.log('Button was clicked!');
});

button.addEventListener('mouseover', function() {
    console.log('Mouse is over the button!');
});

button.addEventListener('mouseout', function() {
    console.log('Mouse is out of the button!');
});

button.addEventListener('keydown', function() {
    console.log('Key was pressed down!');
});

button.addEventListener('keyup', function() {
    console.log('Key was released!');
});

// Note: 'submit' and 'change' events are typically used with forms and form elements, not buttons.
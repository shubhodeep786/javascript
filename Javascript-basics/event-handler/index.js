// Events and Handlers in JavaScript
// Events are actions that occur in the browser, such as clicking a button, hovering over an element, or submitting a form. 
// Event handlers are functions that respond to these events.

// Example of adding an event listener to the document:
document.addEventListener('click', () => {
    console.log('The document was clicked!');
});

// Explanation:
// The addEventListener() method is used to attach an event listener to the document object.
// It takes two parameters: the event type ('click' in this case) and a callback function that will be executed when the event occurs.

// Example of adding event listeners to a button:
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

button.addEventListener('keydown', function(event) {
    console.log('Key was pressed down!');
    console.log('Key code:', event.keyCode); // Accessing event information
});

button.addEventListener('keyup', function() {
    console.log('Key was released!');
});

// Explanation:
// These event listeners respond to different events on the button element.
// 'click', 'mouseover', 'mouseout', 'keydown', and 'keyup' are all event types that trigger the respective callback functions.
// Inside each callback function, a message is logged to the console indicating the event that occurred.

// Note: Other common event types include 'submit', 'change', 'focus', 'blur', etc.
// Some events are specific to certain elements or form elements.

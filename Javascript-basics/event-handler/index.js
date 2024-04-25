// Events and Event Handlers in JavaScript
// Events are user interactions or browser manipulations that your web application can respond to through JavaScript code.

// Adding an Event Listener
// The addEventListener() method attaches an event handler to a specified element without overwriting existing event handlers.
document.addEventListener('DOMContentLoaded', () => {
    console.log('The document is fully loaded.');
});

// Explanation:
// 'DOMContentLoaded' is an event that fires when the HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.

// Example of Handling Click Events
let button = document.getElementById('clickButton');
button.addEventListener('click', function (event) {
    console.log('Button was clicked!');
    console.log(`Event type: ${event.type}`); // Logs 'click'
});

// Real-world example: Implementing a like button
let likeButton = document.getElementById('likeButton');
let likesCount = 0;
likeButton.addEventListener('click', function () {
    likesCount++;
    console.log(`Likes: ${likesCount}`);
});

// Handling Mouse Events
// Mouse events include actions like moving the mouse over an element, clicking, or moving out of an element.
let mouseArea = document.getElementById('mouseArea');
mouseArea.addEventListener('mouseover', function () {
    console.log('Mouse entered the area');
});
mouseArea.addEventListener('mouseout', function () {
    console.log('Mouse left the area');
});

// Real-world example: Changing button color on hover
let colorButton = document.getElementById('colorButton');
colorButton.addEventListener('mouseover', function () {
    this.style.backgroundColor = 'blue';
});
colorButton.addEventListener('mouseout', function () {
    this.style.backgroundColor = 'initial';
});

// Keyboard Events
// These events are triggered by actions on the keyboard, such as pressing or releasing a key.
document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        console.log('Enter key was pressed');
    }
});

// Real-world example: Handling form input with keyboard
let inputField = document.getElementById('inputField');
inputField.addEventListener('keyup', function (event) {
    console.log(`Input value: ${this.value}`);
    if (event.key === 'Enter') {
        console.log('Form submitted with Enter key');
        // Code to submit the form
    }
});

// Using Event Information
// Event objects contain information about the specific event, such as the type of event, the target element, and more.
button.addEventListener('click', function (event) {
    console.log(`Clicked element: ${event.target.tagName}`); // Logs 'BUTTON'
    event.stopPropagation(); // Stops the event from bubbling up the event chain
});

// Explanation:
// The `event` object provides detailed context about the event, including methods like `stopPropagation()` which prevents further propagation of the current event.

// Removing Event Listeners
// To remove an event listener, you need to provide the exact same function reference used when adding the listener.
function handleClick() {
    console.log('Button clicked and listener will be removed');
    button.removeEventListener('click', handleClick);
}
button.addEventListener('click', handleClick);

// Summary:
// Events allow JavaScript to interact with HTML elements by responding to user actions like clicks, mouse movements, or key presses.
// Event handlers are functions associated with a specific event and element. They execute in response to the event occurring.
// Using `addEventListener` and `removeEventListener` provides fine-grained control over event management in web applications.


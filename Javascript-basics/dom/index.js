//what is Document Object Model (DOM)?
//The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page.
//The DOM represents a document with a logical tree. Each branch of the tree ends in a node, and each node contains objects. DOM methods allow programmatic access to the tree; with them you can change the document's structure, style, or content. Nodes can also have event handlers attached to them. Once an event is triggered, the event handlers get executed.
//A web page is a document. This document can be either displayed in the browser window or as the HTML source. But it is the same document in both cases. The Document Object Model (DOM) represents that same document so it can be manipulated. The DOM is an object-oriented representation of the web page, which can be modified with a scripting language such as JavaScript.
//<html lang="en"> what does is mean?
//<!DOCTYPE html> is a declaration that tells a website visitor's browser what version of HTML the page is written in. It is not an HTML tag, but it is a declaration that should be placed at the very top of an HTML document before any of the HTML tags.
//all the different types of elements in the DOM
//The DOM represents a document as a tree of nodes. There are many types of nodes, each of which may have its own properties and methods. The most common types of nodes are:
//Element nodes - HTML elements
//Text nodes - Text within HTML elements
//Comment nodes - Comments within HTML
//Document nodes - The entire document
//Attribute nodes - Attributes of elements
//The DOM represents a document as a tree of nodes. The most common types of nodes are:
//Element nodes - HTML elements

//document in JavaScript what does it mean?
//The document object represents your web page. If you want to access any element in an HTML page, you always start with accessing the document object. The document object has various properties that refer to other objects which allow access to and modification of document content.

//What is the difference between the DOM and the BOM?
//The DOM is a W3C (World Wide Web Consortium) standard. The DOM defines a standard for accessing documents:

//document.title what it will do?
//The title property sets or returns the title of the current document.

//document.body what it will do?
//The body property sets or returns the document's body (the <body> element).

//document.body.children what it will do?
//The children property returns a collection of an element's child elements, as an HTMLCollection object.

//document.getElementById() what it will do?
//The getElementById() method returns the element that has the ID attribute with the specified value.

//document.querySelector() what it will do?
//The querySelector() method returns the first element that matches a specified CSS selector(s) in the document.

//what will happen in mutiple elements with the same id?
//If more than one element has the same ID, the getElementById() method returns the first element in the source code.

//document.createElement() what it will do?
//The createElement() method creates an Element Node with the specified name.

//document.createTextNode() what it will do?
//The createTextNode() method creates a Text Node with the specified text.

//element.appendChild() what it will do?
//The appendChild() method appends a node as the last child of a node.

//element.removeChild() what it will do?
//The removeChild() method removes a specified child node of the specified element.

//element.innerHTML what it will do?
//The innerHTML property sets or returns the HTML content (inner HTML) of an element.

//document.getElementsByClassName() what it will do?
//The getElementsByClassName() method returns a collection of all elements in the document with the specified class name, as a NodeList object.

//document.getElementsByTagName() what it will do?
//The getElementsByTagName() method returns a collection of all elements in the document with the specified tag name, as a NodeList object.

//document.getElementsByClassName().lenght what it will do?
//The length property returns the number of elements in the collection.

//document.querySelector().length what it will do?
//The length property returns the number of elements in the collection.

//document.getElementById().textContent what it will do?
//The textContent property sets or returns the text content of the specified node, and all its descendants.

//document.getElementByName() what it will do?
//The getElementsByName() method returns a collection of all elements in the document with the specified name (the value of the name attribute), as a NodeList object.

//Editing the Webpage with js

//document.title = "New Title" what it will do?
//The title property sets or returns the title of the current document.

//document.body.style.backgroundColor = "red" what it will do?
//The backgroundColor property sets or returns the background color of an element.

//document.getElementById("myElement").textContent = "Hello World!" what it will do?
//The textContent property sets or returns the text content of the specified node, and all its descendants.

//document.getElementById("myElement").append("Hello World!") what it will do?
//The append() method appends a node as the last child of a node.

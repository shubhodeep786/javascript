// Operators in JavaScript
// Operators are special symbols in programming that are used to perform operations on operands (values or variables).

// Arithmetic Operators
// These operators are used to perform mathematical calculations.
let a = 10;
let b = 5;
console.log(a + b);  // Addition, outputs 15
console.log(a - b);  // Subtraction, outputs 5
console.log(a * b);  // Multiplication, outputs 50
console.log(a / b);  // Division, outputs 2
console.log(a % b);  // Modulus (remainder), outputs 0
console.log(++a);    // Increment, outputs 11 (a is now 11)
console.log(--b);    // Decrement, outputs 4 (b is now 4)

// Real-world analogy for Arithmetic Operators:
// Think of arithmetic operators like a basic calculator performing operations on two numbers to produce a result.

// Comparison Operators
// These operators compare two values and return a Boolean value (true or false).
let c = 10;
let d = '10';
console.log(c == d);   // Equal to, outputs true (checks value)
console.log(c === d);  // Strict equal to, outputs false (checks value and type)
console.log(c != d);   // Not equal to, outputs false
console.log(c !== d);  // Strict not equal to, outputs true
console.log(c > d);    // Greater than, outputs false
console.log(c < d);    // Less than, outputs false
console.log(c >= d);   // Greater than or equal to, outputs true
console.log(c <= d);   // Less than or equal to, outputs true

// Logical Operators
// These are used to determine the logic between variables or values.
let e = true;
let f = false;
console.log(e && f); // Logical AND, outputs false
console.log(e || f); // Logical OR, outputs true
console.log(!e);     // Logical NOT, outputs false

// Assignment Operators
// They are used to assign values to JavaScript variables.
let g = 10;
g += 5;  // g is now 15 (same as g = g + 5)
g -= 5;  // g is now 10 (same as g = g - 5)
g *= 2;  // g is now 20 (same as g = g * 2)
g /= 4;  // g is now 5 (same as g = g / 4)
g %= 3;  // g is now 2 (same as g = g % 3)

// Bitwise Operators
// These operators are used for handling data at the bit level.
let h = 5; // Binary 0101
let i = 3; // Binary 0011
console.log(h & i);  // Bitwise AND, outputs 1 (Binary 0001)
console.log(h | i);  // Bitwise OR, outputs 7 (Binary 0111)
console.log(h ^ i);  // Bitwise XOR, outputs 6 (Binary 0110)
console.log(~h);     // Bitwise NOT, outputs -6 (Binary 1010, two's complement)
console.log(h << 1); // Left shift, outputs 10 (Binary 1010)
console.log(h >> 1); // Right shift, outputs 2 (Binary 0010)
console.log(h >>> 1);// Unsigned right shift, outputs 2 (Binary 0010)

// Real-world analogy for Bitwise Operators:
// Consider bitwise operations like manual switches that can be either on (1) or off (0), manipulating individual bits in a sequence to achieve desired outcomes in electrical circuits or low-level machine tasks.

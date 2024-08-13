/* In javascript everything is an object  */
/* 

undeclared? null? function ? array?bigint? 
 
 undefined type
 string type 
 number type 
 boolean type
 object type 
 symbol type 

*/
let v; // Declare the variable 'v'
v = []; //"Object"
console.log(typeof v); // Use the result of 'typeof v'
v = Symbol(); //"symbol"
console.log(typeof v); // Use the result of 'typeof v'

typeof dosentExist; // "undefined";

var v;
typeof v; // "undefined";

var v = null;
console.log(typeof v); // "object"

v = function () {};
console.log(typeof v); // "function"

v = [1, 2, 3];
console.log(typeof v); // "object"

/* typeof will only return strings  */
/* Special values */
/* NaN */

var myAge = Number("0o46");
var myNextAge = Number("33");
var myCatsAge = Number("n/a");
myAge - "my sons age";
myCatsAge === myCatsAge;

isNaN(myAge);
isNaN(myCatsAge);
isNaN("my sons age");

Number.isNaN(myCatsAge);

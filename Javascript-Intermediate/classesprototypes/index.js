/* Classes,Prototypes - OOPS  */
/* a popular paradigm for structuring complex code 
Prototype Chain- The feature behind the scenes that enables emulation of OOP but is compelling tool in itself 
Understanding the difference between __proto__ and prototype 
The new class keywords as tools to automate our  objects & method creation
 */

/* Core of development */
/* Objects- store functions with their associated data

*/
const user1 = {
  name: "Will",
  score: 3,
  increment: function () {
    user1.score++;
  },
};

user1.increment();

const user2 = {};
user2.name = 6;
user2.increment = function () {
  user2.score++;
};

const user3 = Object.create(null);
user3.name = "Eva";
user3.score = 9;
user3.increment = function () {
  user3.score++;
};

/* creating  user3 using objects.create */

/* Prototype chain store the increment function in just and have the interpreter if it doesn't if it  */

/* Using prototype chain in Js */
function userCreator(name, score) {
  const newUser = Object.create(userFunctionStore);
  newUser.name = name;
  newUser.score = score;
  return newUser;
}
const userFunctionStore = {
  increment: function () {
    this.score++;
  },
  login: function () {
    console.log("Logged in");
  },
};

const user1 = userCreator("Will", 3);
const user2 = userCreator("Tim", 2);
user.increment();
user1.hasOwrProperty('score')
/* we can use the hasOwnProperty method but where is it ? */
/* the use of __proto__ property implementation and usage */
/* it is the linking of the prototype chaining */
/* lexical scope vs proto__property */

/* all the objects has __proto__  property  by default to linking to a big object prototype full of functions  */
/* the prototype chain is the chain of objects that are linked together by the __proto__ property */
/* the __proto__ property is the link to the prototype object */
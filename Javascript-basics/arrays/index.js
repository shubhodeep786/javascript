//Arrays
//like strings,arrays have a length property that tells you how many items are in the array.
//arrays has an index
//unlike strings we can modify the items in an array
let myArray = [1, 2, 3, 4, 5];
//Arrays can be empty or hold a single item
//Arrays can hold any type of items, or mix and match 
//.sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.
//.reverse() method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.
//.push() method adds one or more elements to the end of an array and returns the new length of the array.
//.pop() method removes the last element from an array and returns that element.
//.shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.
//.unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
//.splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
//.concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
//.join() method creates and returns a new string by concatenating all of the elements in an array, separated by commas or a specified separator string.
//.slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
//.indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
//.includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
//.filter() method creates a new array with all elements that pass the test implemented by the provided function.
//.map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
//.reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
//.forEach() method executes a provided function once for each array element.
//.find() method returns the value of the first element in the provided array that satisfies the provided testing function.
//.some() method tests whether at least one element in the array passes the test implemented by the provided function.
//.every() method tests whether all elements in the array pass the test implemented by the provided function.
//.sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.
//.reverse() method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.
//.push() method adds one or more elements to the end of an array and returns the new length of the array.
//.pop() method removes the last element from an array and returns that element.
//.shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.
//.unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
//.splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
//.concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
//.join() method creates and returns a new string by concatenating all of the elements in an array, separated by commas or a specified separator string.
//.slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.


let abcArray = ['a', 'b', 'c'];
abcArray[1] = 'b';

let abcString = 'abc';
abcString[1] = 'b';

//Mutable vs Immutable
//Arrays are mutable, meaning you can change their elements. Strings are immutable, meaning you cannot change their characters.
//Strings are immutable, meaning you cannot change their characters. If you want to modify a string, you need to create a new string with the desired changes.
//and other primitives

//immutable variables with mutable values
const operands = [1, 2, 3];
const sum = operands[0] + operands[1];



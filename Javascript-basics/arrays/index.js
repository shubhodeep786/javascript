// Arrays
// Arrays in JavaScript are ordered collections of values. They can hold any type of data, including other arrays, objects, or primitives like strings and numbers.

// Example:
const myArray = [1, 2, 3, 4, 5];

// Arrays have a length property that indicates the number of elements they contain.
// Example:
console.log(myArray.length); // Output: 5

// Arrays are indexed, starting from 0 for the first element.
// Example:
console.log(myArray[0]); // Output: 1

// Unlike strings, arrays are mutable, meaning you can modify their elements.
// Example:
myArray[0] = 10;
console.log(myArray); // Output: [10, 2, 3, 4, 5]

// .sort() method sorts the elements of an array in place.
// Example:
const unsortedArray = [5, 2, 8, 1, 4];
unsortedArray.sort();
console.log(unsortedArray); // Output: [1, 2, 4, 5, 8]

// .reverse() method reverses the elements of an array in place.
// Example:
const originalArray = [1, 2, 3, 4, 5];
originalArray.reverse();
console.log(originalArray); // Output: [5, 4, 3, 2, 1]

// .push() method adds elements to the end of an array.
// Example:
const fruits = ['apple', 'banana'];
fruits.push('orange');
console.log(fruits); // Output: ['apple', 'banana', 'orange']

// .pop() method removes the last element from an array.
// Example:
const colorsOne = ['red', 'green', 'blue'];
const removedColor = colors.pop();
console.log(removedColor); // Output: 'blue'
console.log(colors); // Output: ['red', 'green']

// .shift() method removes the first element from an array.
// Example:
const animals = ['dog', 'cat', 'rabbit'];
const removedAnimal = animals.shift();
console.log(removedAnimal); // Output: 'dog'
console.log(animals); // Output: ['cat', 'rabbit']

// .unshift() method adds elements to the beginning of an array.
// Example:
const numbersOne = [2, 3, 4];
numbersOne.unshift(1);
console.log(numbersOne); // Output: [1, 2, 3, 4]

// .splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements.
// Example:
const months = ['January', 'February', 'April', 'May'];
months.splice(2, 0, 'March');
console.log(months); // Output: ['January', 'February', 'March', 'April', 'May']

// .concat() method is used to merge two or more arrays.
// Example:
const arr1 = [1, 2];
const arr2 = [3, 4];
const mergedArray = arr1.concat(arr2);
console.log(mergedArray); // Output: [1, 2, 3, 4]

// .join() method creates a string by concatenating all elements of an array with a specified separator.
// Example:
const elements = ['Fire', 'Air', 'Water'];
const result = elements.join(', ');
console.log(result); // Output: 'Fire, Air, Water'

// .slice() method returns a shallow copy of a portion of an array.
// Example:
const arr = [1, 2, 3, 4, 5];
const slicedArray = arr.slice(1, 3);
console.log(slicedArray); // Output: [2, 3]

// .indexOf() method returns the index of the first occurrence of a specified value in an array.
// Example:
const colorsTwo = ['red', 'green', 'blue', 'green'];
const indexOfGreen = colorsTwo.indexOf('green');
console.log(indexOfGreen); // Output: 1

// .includes() method checks whether an array includes a certain value, returning true or false.
// Example:
const numbersTwo = [1, 2, 3, 4, 5];
const includesThree = numbersTwo.includes(3);
console.log(includesThree); // Output: true

// .filter() method creates a new array with elements that pass a test implemented by a provided function.
// Example:
const scores = [78, 85, 92, 60, 45];
const passingScores = scores.filter(score => score >= 70);
console.log(passingScores); // Output: [78, 85, 92]

// .map() method creates a new array with the results of calling a provided function on every element in the array.
// Example:
const numberThree = [1, 2, 3];
const doubledNumbers = numberThree.map(num => num * 2);
console.log(doubledNumbers); // Output: [2, 4, 6]

// .reduce() method applies a function to each element of an array, resulting in a single output value.
// Example:
const numberFour = [1, 2, 3, 4, 5];
const sum = numberFour.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(sum); // Output: 15

// .forEach() method executes a provided function once for each array element.
// Example:
const colors = ['red', 'green', 'blue'];
colors.forEach(color => console.log(color));
// Output:
// 'red'
// 'green'
// 'blue'

// .find() method returns the first element in an array that satisfies a provided testing function.
// Example:
const numbersFive = [1, 2, 3, 4, 5];
const evenNumber = numbersFive.find(num => num % 2 === 0);
console.log(evenNumber); // Output: 2

// .some() method tests whether at least one element in the array passes the test provided by a function.
// Example:
const numberSix = [1, 2, 3, 4, 5];
const hasEvenNumber = numberSix.some(num => num % 2 === 0);
console.log(hasEvenNumber); // Output: true

// .every() method tests whether all elements in the array pass the test provided by a function.
// Example:
const numberSeven = [1, 2, 3, 4, 5];
const allEvenNumbers = numberSeven.every(num => num % 2 === 0);
console.log(allEvenNumbers); // Output: false

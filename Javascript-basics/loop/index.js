// Loops let us run the same chunk of code multiple times
for(let rep=0; rep<10; rep++) {
    console.log('Lifting weights repetition ' + rep);
}
console.log('Lifting weights repetition 1');
//for loops require us to:
//declare & initailize a loop counter variable
//give condition for the loop to keep running
//describe how to change(usually increase) the counter each time

//for ...of loops let us more easily iterate over items in a collection
const numbers = [1, 2, 3, 4, 5];
for (let number of numbers) {
    console.log(number);
} 
/*
    Resources:
    - freeCodeCamp on Map, Reduce and Filter: https://www.freecodecamp.org/news/javascript-map-reduce-and-filter-explained-with-examples/
*/
// TODO 5.1 Use the map method to create a new array that contains the squares of all numbers in the array
const numbers = [1, 2, 4, 4, 5];
// Your code here
const squares = numbers.map(num => num ** 2)
console.log(squares)


// TODO 5.2 Use the filter method to create a new array that contains only the even numbers in the array
// Your code here
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens)


// TODO 5.3 Use the reduce method to find the sum of all numbers in the array
// Your code here
const sum = numbers.reduce((acc, num) => acc + num, 0)
console.log(sum)


// TODO 5.4 Use the map method to convert all elements in the array to uppercase
const words = ['hello', 'world'];
// Your code here
const upperCaseWords = words.map(word => word.toUpperCase());
console.log(upperCaseWords)

// TODO 5.5 Use the filter method to create a new array that contains only the words with more than four letters in the array
// Your code here
const longWords = words.filter(word => word.length > 4);
console.log(longWords)



// TODO 5.6 Use the reduce method to concatenate all words in the array into a single string
// Your code here
const concatenatedWords = words.reduce((acc, word) => acc + word, '');
console.log(concatenatedWords)

// Checkpoint 5.1 Summarize what map, filter, and reduce do
// Answer: 

/*
map() creates a new array by calling a function on each element of the original array. 
For example, you can use map() to create a new array that contains the squares of all numbers in the original array.

filter() creates a new array by filtering out elements from the original array that do not meet a certain condition. 
For example, you can use filter() to create a new array that contains only the even numbers in the original array.

reduce() applies a function to each element of the array to reduce the array to a single value. 
For example, you can use reduce() to find the sum of all numbers in the original array.
*/
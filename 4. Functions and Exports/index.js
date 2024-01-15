/*
    Resources:
    - MDN on Functions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
    - JavaScript Tutorial on Functions: https://javascript.info/function-basics
    - freeCodeCamp on Functions: https://www.freecodecamp.org/news/what-is-a-function-javascript-function-examples/
*/

// Todo 4.1 Declare a function named 'greet' that takes one parameter 'name' and displays a greeting
// Then, Call the 'greet' function with your name as the argument
// Your code here

function greet(name) {
    console.log("Hello, " + name)
}
greet("Josh")

// Checkpoint 4.1 What is the difference between a function declaration and a function expression?
// Answer: 

// A function declaration is a way to create a function by giving it a name and some inputs. You can use the function before or after you write it down. 
// A function expression is another way to create a function, but you don’t have to give it a name. You can only use the function after you write it down. You can also make the function run right away without calling it.


// Todo 4.2 Declare a function expression named 'calculateArea' that takes the length and width of a rectangle and returns its area
// Then, Call the 'calculateArea' function with any length and width as arguments
// Your code here

let calculateArea = function(length, width) {
    return length * width
}
console.log(calculateArea(20, 50))

// Checkpoint 4.2 What is a callback function? Provide an example.
// Answer: 

function greeting(name) {
    console.log('wassup ' + name)
  }
  
  function processUserInput(callback) {
    var name = ("Joshua")
    callback(name)
  }
  
  processUserInput(greeting)
  

// Todo 4.3 Declare a higher-order function named 'modifyArray' that takes an array and a function as parameters. The function should modify each element in the array using the provided function and return the modified array.
// Then, Call the 'modifyArray' function with the 'numbers' array and a function that increments each number by 1
// Useful Tutorial: https://youtu.be/H4awPsyugS0?si=7wC1B7whXVkG8X5l
// Your code here

function modifyArray(array, func) {
    return array.map(func)
}
let numbers = [1, 2, 3, 4, 5]
console.log(modifyArray(numbers, number => number + 1))

// Todo 4.4 See mathUtils.js for the instructions to create the add method and PI constant.
// Then, import and call the add method here and display the value of the PI constant
// Useful Tutorial: https://youtu.be/qgRUr-YUk1Q?si=ceAaeHJfCYCmeNWx
// Your code here

const mathUtils = require('./mathUtils')
const sum = mathUtils.add(5, 3)
console.log('Sum:', sum)
console.log('PI:', mathUtils.PI)

// Todo 4.5 See isPalindrome.js for the instructions to create the isPalindrome method.
// Then, import and call the isPalindrome method here
// Useful Tutorial: https://youtu.be/qgRUr-YUk1Q?si=ceAaeHJfCYCmeNWx
// Your code here

const isPalindrome = require('./isPalindrome')

// Call the isPalindrome function with a word
const word = 'racecar'
const result = isPalindrome(word)

// Display the result
console.log(`Is "${word}" a palindrome? ${result}`)


// Checkpoint 4.3 What does the require function and module.exports variable do?
// Should we use it over the import and export keywords? Why? Research your answer.
// Answer: 

/*
Node.js uses require and module.exports to manage and share modules between different files. 
You should use require and module.exports if you are using Node.js modules or CommonJS style. 
You can use import and export if you are using ES modules and a newer version of Node.js. 
The best option depends on your project needs and the Node.js version you are using.
*/

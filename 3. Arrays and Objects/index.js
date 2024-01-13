/*
    Resources:
    - JavaScript Tutorial on Objects: https://javascript.info/object
    - freeCodeCamp on Objects: https://www.freecodecamp.org/news/objects-in-javascript-for-beginners/
    - JavaScript Tutorial on Arrays: https://javascript.info/array
    - freeCodeCamp on Arrays: https://www.freecodecamp.org/news/javascript-array-tutorial-array-methods-in-js/
*/

let numbers = [
    1, 89, 55, 63, 29, 19,
    15, 77, 62, 68, 29, 84,
    21, 26, 49
];

// Todo 3.1 Get the first, 5th, and last items in the numbers array.
// Your code here

console.log(numbers[0])
console.log(numbers[4])
console.log(numbers[14])

// Todo 3.2 calculate the min, max, and the average of the numbers array
// Your code here

const minNum = (Math.min(...numbers))
console.log(minNum)
const maxNum = (Math.max(...numbers))
console.log(maxNum)

let sum = 0
for (let i = 0; i < numbers.length; i++)
{
    sum += numbers[i]
}
average = sum  / numbers.length
console.log(average)

// Checkpoint 3.1 How would you compare lists in python vs arrays in JavaScript
// Answer: 


// Todo 3.3 Declare an object with information about IT114L (course code, name, units, number of students)
// Your code here
let info = new Object()
info = {
    course: "IT114L",
    name: "Joshua",
    Units: "16",
    NumStud: "35"
}
console.log(info)

// Todo 3.4 Add professor name as one of the fields of the object. Display the value of professor name.
// Your code here

info.professor = "Job Lipat"
console.log(info.professor)

// Todo 3.5 Declare and array of objects with information about the courses you are taking this term
// Your code here



// Todo 3.5 Calculate the total number of units you are taking this term using the array of objects.
// Your code here

// Checkpoint 3.2 What would be the equivalent of objects in python? How would you compare them?
// Answer: 

// Todo 3.6 Going back to the array of numbers, use the spread syntax to create a copy of the array with an additional number
// Your code here

// Todo 3.7 Going back to your IT114L object, extract the course code and units using the spread operator
// Your code here

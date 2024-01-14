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

/*
Structure: Both Python lists and JavaScript arrays are collections of 
elements and can be indexed, sliced, and iterated through12.
Mutability: Both are mutable, meaning you can modify their elements31.
Dynamic Size: Python lists and JavaScript arrays can grow or shrink dynamically3.
Data Types: Both can store elements of different types34.
Methods: JavaScript arrays can contain methods (functions), while Python lists cannot3.
*/

// Todo 3.3 Declare an object with information about IT114L (course code, name, units, number of students)
// Your code here
let info = new Object()
info = {
    course: "IT114L",
    name: "Joshua",
    Units: "1",
    NumStud: "35"
}
console.log(info)

// Todo 3.4 Add professor name as one of the fields of the object. Display the value of professor name.
// Your code here

info.professor = "Job Lipat"
console.log(info.professor)

// Todo 3.5 Declare and array of objects with information about the courses you are taking this term
// Your code here

let courses = [
    {
        courseCode: "IT114L",
        courseName: "Web Development",
        units: 1,
        professor: "Job Lipat",
        numberOfStudents: 35
    },
    {
        courseCode: "CS107L",
        courseName: "Information Management Laboratory",
        units: 3,
        professor: "Adomar Ilao",
        numberOfStudents: 30
    },
    {
        courseCode: "CS107",
        courseName: "Information Management ",
        units: 3,
        professor: "Dahlia De Mesa",
        numberOfStudents: 40
    }
];

console.log(courses);


// Todo 3.5 Calculate the total number of units you are taking this term using the array of objects.
// Your code here

let totalUnits = 0;
for (let i = 0; i < courses.length; i++) {
    totalUnits += courses[i].units;
}
console.log("Total Units: " + totalUnits);


// Checkpoint 3.2 What would be the equivalent of objects in python? How would you compare them?
// Answer: 

/*
Structure: Both JavaScript objects and Python dictionaries are collections of key-value pairs. 
They allow you to store and access data using keys.

Accessing Values: In both JavaScript and Python, you can access values using the keys.

Mutability: Both JavaScript objects and Python dictionaries are mutable. 
This means you can add, modify, or delete key-value pairs after the object or dictionary is created.

There are some differences:

Methods: JavaScript objects can contain methods (functions), while Python dictionaries cannot.

Key Types: In JavaScript, object keys are always strings. In Python, dictionary keys can be of any 
immutable type, such as integers, floats, strings, and tuples.
*/

// Todo 3.6 Going back to the array of numbers, use the spread syntax to create a copy of the array with an additional number
// Your code here

let newNumbers = [...numbers, 143];
console.log(newNumbers);

// Todo 3.7 Going back to your IT114L object, extract the course code and units using object deconstructing
// Your code here

let {course, Units} = info;
console.log(course, Units);
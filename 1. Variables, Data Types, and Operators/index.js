/*
    Resources:
    - MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators
*/
console.log("Hello World")
// TODO 1.1 Use the var keyword to define a variable. Log the variable to the console. Now try moving the variable declaration after you log the variable.
// Your code here

console.log(aaaa)
var aaaa = ("Hello World")

// TODO 1.2 Use the let keyword to define a variable.
// Your code here
let abab = ("Hi")
console.log(abab)
// TODO 1.3 Use the const keyword to define a variable. Try reassigning the value of the variable. What happens?
// Your code here
const bbbb = ("josh")
//bbbb = ("Emman")
console.log(bbbb)
// Checkpoint 1.1 What is the difference between var, let, and const?
// Answer:
 
/*var: Function-scoped, can be re-declared and updated.
let: Block-scoped, can be updated but not re-declared.
const: Block-scoped, cannot be updated or re-declared. Must be initialized.*/


// TODO 1.4 Try out the different arithmetic operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#arithmetic_operators
// Your code here
const plus = 10 + 5 - 2 * 6
console.log(plus)

// Checkpoint 1.2 What operators did you use?
// Answer: 
// Your code here

/*
plus, minus and multiply
*/

// TODO 1.5 Try out the different string operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#string_operators
// Your code here

const greeting = 'Hello' + ', ' + 'World!';
console.log(greeting);
const josh = ("JOSH")
const damps = ("DAMPS")

const jdamps = (josh + damps)
console.log(jdamps)

// Checkpoint 1.3 What operators did you use?
// Answer: 

// plus 

// TODO 1.6 Try out the different logical operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#logical_operators
// Your code here

const a1 = true && true; // t && t returns true
const a2 = true && false; // t && f returns false
const a3 = false && true; // f && t returns false
const a4 = false && 3 === 4; // f && f returns false
const a5 = "Cat" && "Dog"; // t && t returns Dog
const a6 = false && "Cat"; // f && t returns false
const a7 = "Cat" && false;
console.log(a1)
// Checkpoint 1.4 What operators did you use?
// Answer: 


// TODO 1.7 Try out the different relational operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#relational_operators


// Checkpoint 1.5 What does [] == false evaluate to? Why does that happen? Research why
// Answer: 
// Your code here
// ----------------------- COMMENTS ---------------------------
// used to leave notes in the program, explaining what a partucar portion of the code does
// Two types of comments:
// This is a single line comment
/*
    This is
    a multiline
    comment,
    spanning multiple 
    lines
*/

// Containers to store reusable data - Units of storage in computer memory
// 3 ways to declare variables: var, let and const
// use modern way, let and const
// let age = 43
const myName = "Jose"

// console.log(myName, age)

// ------------------------- DATA TYPES --------------------------------

// There are 8 data types in JS
// Can be separated by two groups:

// PRIMITIVE DATA TYPES:
let name = "Jose" // STRING - a string of characters in quotation marks
let age = 42 // NUMBER - any number with/without decimal point
let maritalStatus = true // BOOLEAN - true or false value
let address = null // NULL - ubsense of value in variable
let employment // UNDEFINED - variable does not exist or no value assigned to it

// COMPLEX DATA TYPES:
// OBJECT - the most important data-type and forms the building blocks for modern JS
// SYMBOL - rarely used

// Strings can be created in 3 ways
let doubleQuotes = "double" // with double quotes
let singleQuotes = 'single' // with single quotes
let backticks = `backticks` // with backticks - can be useful to enbed a whole expression:
let sum = `2 + 2 = ${2 + 2}, created with ${backticks}`
console.log(sum);
/*
========================================
      JavaScript Data Types Notes
========================================
*/

/*
🔹 What Are Data Types?

A data type defines the kind of value a variable can store.

JavaScript is a dynamically typed language,
meaning you don’t need to declare the type —
it is decided at runtime.
*/

/*
🔹 Two Main Categories of Data Types

1️⃣ Primitive Data Types
2️⃣ Non-Primitive (Reference) Data Types
*/

/*
========================================
1️⃣ Primitive Data Types
========================================

Primitive types store single values and are immutable.

There are 7 primitive types in JavaScript:
*/

// 1. Number
//   Represents integers and decimals.
let x = 10;
let y = 3.14;

// 2. String
//Text values (inside quotes).
let name = "John";

// 3. Boolean
//True or False.
let isActive = true;

// 4. Undefined
// A variable declared but not assigned a value.
let a;
console.log(a); // undefined

// 5. Null
// Represents intentional empty value.
let data = null;

// 6. BigInt
// Used for very large integers.
let big = 12345678901234567890n;

// 7. Symbol
//Used to create unique identifiers.
let id = Symbol("id");

/*
========================================
2️⃣ Non-Primitive (Reference) Data Types
========================================

These store collections or complex data.
*/

/*Object

// An object is used to store data in key–value pairs.
// It represents a real-world entity.
store reference*/

let person = {
  name: "John",
  age: 25,
};

// Array
// An array is used to store multiple values in a single variable.
let numbers = [1, 2, 3];

/* Function
A function is a block of code designed to perform a task.

👉 It runs only when it is called (invoked).*/

function greet() {
  console.log("Hello");
}

/*
========================================
Key Difference

Primitive:
- Stores actual value
- Immutable
- Copied by value

Reference:
- Stores reference (address)
- Mutable
- Copied by reference
========================================
*/

// Definition: Operators perform operations on values or variables

// Arithmetic Operators: Perform math operations
let sum = 5 + 3; // Addition
let diff = 5 - 3; // Subtraction
let mul = 5 * 3; // Multiplication
let div = 15 / 3; // Division
let mod = 10 % 3; // Remainder
let exp = 2 ** 3; // Exponent

// Assignment Operators: Assign or update values
let num = 5;
num += 3; // num = 8
num -= 2; // num = 6

// Comparison Operators: Compare values
console.log(5 == "5"); // Equal value → true
console.log(5 === "5"); // Equal value & type → false
console.log(5 != 3); // Not equal → true
console.log(5 > 3); // Greater than → true
console.log(3 <= 5); // Less than or equal → true

// Logical Operators: Combine boolean expressions
console.log(true && false); // AND → false
console.log(true || false); // OR → true
console.log(!true); // NOT → false

// Unary Operators: Operate on a single value
let i = 5;
i++; // Increment → 6
i--; // Decrement → 5
console.log(typeof i); // Returns data type → "number"

// Ternary Operator: Shorthand if-else
let age = 18;
let status = age >= 18 ? "Adult" : "Minor";
console.log(status); // Adult

// Bitwise Operators: Operate on binary representations
console.log(5 & 1); // AND → 1
console.log(5 | 1); // OR → 5
console.log(5 ^ 1); // XOR → 4
console.log(~5); // NOT → -6
console.log(5 << 1); // Left shift → 10
console.log(5 >> 1); // Right shift → 2

// let com = 4 !== '4' ;
// console.log(com)

// let sum = '1' + 1 + 1  ;
// console.log( sum);

// let b;
// console.log( typeof(typeof(b)))

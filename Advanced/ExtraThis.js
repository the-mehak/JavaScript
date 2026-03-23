// Define a simple function and object
function sayHello() {
    console.log(`This inside function: ${this}`); // 1. Default binding - global object in non-strict mode
}

const person = {
    name: "John",
    greet: function () {
        console.log(`This inside object method: ${this}`); // 2. Object binding - 'person' object
        sayHello(); // 3. Implicit binding - global object again
    },
    arrowGreet: () => {
        console.log(`This inside arrow function: ${this}`); // 4. Lexical binding - retains outer `greet` context (person)
    },
};

// Calling functions with different contexts
sayHello.call(person); // 5. Explicit binding with call() - sets 'this' to 'person'
person.greet();
person.arrowGreet();

// Binding function with bind()
const boundSayHello = sayHello.bind(person);
boundSayHello(); // 6. Bound binding with bind() - sets permanent 'this' context

// Strict mode changes
"use strict"; // Strict mode activated

sayHello(); // Throws TypeError - undefined 'this' in strict mode

function strictHello() {
    console.log(`This inside strict function: ${this}`); // undefined in strict mode
}

strictHello();

// Summary
console.log("--- Summary of 'this' behavior ---");
console.log("1. Default binding:", undefined); // undefined as global object is not logged
console.log("2. Object binding:", person);
console.log("3. Implicit binding:", undefined); // undefined as implicit binding falls back to global
console.log("4. Lexical binding:", person);
console.log("5. Explicit binding:", person);
console.log("6. Bound binding:", person);
console.log("Strict mode 'this':", undefined); // undefined as global object is not logged
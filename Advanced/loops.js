// Traditional for loop
console.log("Traditional for loop:");
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// For...in loop (used for iterating over object properties)
console.log("\nFor...in loop:");
const obj = { a: 1, b: 2, c: 3 };
for (let key in obj) {
    console.log(key, obj[key]);
}

// For...of loop (used for iterating over iterable objects like arrays)
console.log("\nFor...of loop:");
const array = [10, 20, 30];
for (let value of array) {
    console.log(value);
}

// While loop
console.log("\nWhile loop:");
let counter = 0;
while (counter < 3) {
    console.log(counter);
    counter++;
}

// Do...while loop
console.log("\nDo...while loop:");
let doWhileCounter = 0;
do {
    console.log(doWhileCounter);
    doWhileCounter++;
} while (doWhileCounter < 3);
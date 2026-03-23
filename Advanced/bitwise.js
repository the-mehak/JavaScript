// Bitwise AND (&)
console.log("Bitwise AND (&):", 5 & 3); // Output: 1

// Bitwise OR (|)
console.log("Bitwise OR (|):", 5 | 3); // Output: 7

// Bitwise XOR (^)
console.log("Bitwise XOR (^):", 5 ^ 3); // Output: 6

// Bitwise NOT (~)
console.log("Bitwise NOT (~):", ~5); // Output: -6

// Left Shift (<<)
console.log("Left Shift (<<):", 5 << 1); // Output: 10

// Right Shift (>>)
console.log("Right Shift (>>):", 5 >> 1); // Output: 2

// Zero-fill Right Shift (>>>)
console.log("Zero-fill Right Shift (>>>):", 5 >>> 1); // Output: 2

// Using bitwise operators to check if a number is even or odd
function checkEvenOdd(num) {
    if (num & 1) {
        console.log(num + " is odd.");
    } else {
        console.log(num + " is even.");
    }
}

checkEvenOdd(8);
checkEvenOdd(15);
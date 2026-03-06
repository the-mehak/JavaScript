// JavaScript String Methods – Short Notes + Example (1 line work)

// 1. length – string ka character count
let str = "  Hello JavaScript World  ";
console.log("Length:", str.length); // 26

// 2. trim() – start/end ke extra spaces remove karta hai
console.log("Trim:", str.trim()); // "Hello JavaScript World"

// 3. toUpperCase / toLowerCase – case convert karta hai
console.log("UpperCase:", str.toUpperCase()); // "  HELLO JAVASCRIPT WORLD  "
console.log("LowerCase:", str.toLowerCase()); // "  hello javascript world  "

// 4. slice(start,end) – string ka part extract karta hai, negative index allowed
console.log("Slice(0,5):", str.slice(0, 5)); // "  He"
console.log("Slice(-6,-1):", str.slice(-6, -1)); // "World"

// 5. substring(start,end) – string ka part extract karta hai, negative index 0 treat
console.log("Substring(0,5):", str.substring(0, 5)); // "  He"

// 6. replace / replaceAll – string me value replace karta hai
console.log("Replace 'World' with 'JS':", str.replace("World", "JS")); // "  Hello JavaScript JS  "
console.log("ReplaceAll 'l' with 'L':", str.replaceAll("l", "L")); // "  HeLLo JavaScript WorLd  "

// 7. includes() – check karta hai word string me hai ya nahi
console.log("Includes 'Java':", str.includes("Java")); // true

// 8. indexOf / charAt – word ka position / character at index
console.log("IndexOf 'Java':", str.indexOf("Java")); // 8
console.log("CharAt(1):", str.charAt(1)); // " "

// 9. startsWith / endsWith – check start/end of string
console.log("StartsWith 'Hello':", str.trim().startsWith("Hello")); // true
console.log("EndsWith 'World':", str.trim().endsWith("World")); // true

// 10. split() – string → array using delimiter
let fruits = "apple,banana,mango";
console.log("Split by comma:", fruits.split(",")); // ["apple","banana","mango"]

// 11. concat / template literal – join strings
let a = "Hello",
  b = "VSCode";
console.log("Concat:", a.concat(" ", b)); // "Hello VSCode"
console.log(`Template Literal: Hello ${"Rahul"}`); // "Hello Rahul"

console.log(2 && 0);
console.log(0 && -2);
console.log(2 || 0);
console.log(0 || 2);

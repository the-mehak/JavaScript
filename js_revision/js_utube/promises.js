function isdata(item) {
  const promise1 = new Promise(function fun1(resolve, reject) {
    if (item) {
      resolve("solve");
    } else {
      // Sirf console.log kafi nahi hai, reject call karna zaroori hai
      reject("fail");
    }
  });
  return promise1;
}

let result = isdata("assd"); // Empty string is 'falsy'
console.log(result);

result.then(
  (val) => {
    console.log("Success:", val);
  },
  (failure) => {
    console.log("Error:", failure);
  }, // Ab ye trigger hoga!
);
console.log("end");

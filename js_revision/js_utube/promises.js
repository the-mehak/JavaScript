const promise1 = new Promise(function fun1(resolve, reject) {
  //   resolve("fullfilled");
  reject("rejected");
}).then(
  (sucess = (value) => {
    console.log(value);
  }),
  (failure = (err) => {
    console.log(err);
  }),
);

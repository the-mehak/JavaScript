function api1() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("api 1");
    }, 5000);
  });
}
function api2() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("api2");
      //   rej("rejected");
    }, 1000);
  });
}

function api3() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      rej("rejected2");
      //   res("api3");
    }, 2000);
  });
}

// let pro1 = api1();
// let pro2 = api2();
// let pro3 = api3();
// api1().then((data) => {
//   console.log(data);
// });
// api2().then((data) => {
//   console.log(data);
// });
// api3().then((data) => {
//   console.log(data);
// });

//promises methods

//promise.all

Promise.all([api1(), api2(), api3()])
  .then((values) => {
    console.log(values);
  })
  .catch((err) => {
    console.error(err);
  });

//promise.allsettled
Promise.allSettled([api1(), api2(), api3()])
  .then((values) => {
    console.log(values);
  })
  .catch((err) => {
    console.error(err);
  });

// promise.race;
Promise.race([api1(), api2(), api3()])
  .then((values) => {
    console.log(values);
  })
  .catch((err) => {
    console.error(err);
  });

// promise.any;
Promise.any([api1(), api2(), api3()])
  .then((values) => {
    console.log(values);
  })
  .catch((err) => {
    console.error(err);
  });

// function searchFood(item) {
//   return new Promise(function fun1(res, rej) {
//     console.log("searching start for", item, ".....");
//     setTimeout(function timer1() {
//       let data = `list of ${item}`;
//       if (item) {
//         res({ item, data });
//       } else {
//         rej(`item is not selected `);
//       }
//     }, 3000);
//   });
// }

// function orderFood(item) {
//   return new Promise(function fun2(res, rej) {
//     console.log("Select ", item);
//     setTimeout(function timer2() {
//       let id = Math.floor(Math.random() * 999999);
//       res({ id, item });
//     }, 4000);
//   });
// }

// function payment(item, id) {
//   return new Promise(function fun3(res, rej) {
//     console.log(`payment starting for ${item} with id no.`, id);
//     setTimeout(function timer3() {
//       let status = true;

//       if (status) {
//         res(status);
//       } else {
//         rej(`payment is failed due to technical error ${status}`);
//       }
//     }, 6000);
//   });
// }
// let result = searchFood("dal chawal")
//   .then(function consume1(detail) {
//     console.log(detail.data);
//     return orderFood(detail.item);
//   })
//   .then(function consume2(detail2) {
//     console.log("order created successfully with id no.", detail2.id);
//     return payment(detail2.item, detail2.id);
//   })
//   .then(function consume3(status) {
//     console.log("Payment successfull with status", status);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

//sync and await

function searchFood(item) {
  return new Promise(function fun1(res, rej) {
    console.log("searching start for", item, ".....");
    setTimeout(function timer1() {
      let data = `list of ${item}`;
      if (item) {
        res({ item, data });
      } else {
        rej(`item is not selected `);
      }
    }, 3000);
  });
}

function orderid(item) {
  return new Promise(function fun2(res, rej) {
    console.log("Select ", item);
    setTimeout(function timer2() {
      let id = Math.floor(Math.random() * 999999);
      res({ id, item });
    }, 4000);
  });
}

function payment(item, id) {
  return new Promise(function fun3(res, rej) {
    console.log(`payment starting for ${item} with id no.`, id);
    setTimeout(function timer3() {
      let status = false;

      if (status) {
        res(status);
      } else {
        rej(new Error(`payment is failed due to technical error ${status}`));
      }
    }, 6000);
  });
}

async function orderfood(item) {
  try {
    let res1 = await searchFood(item);
    let res2 = await orderid(res1.item);
    console.log("order created successfully with id no.", res2.id);
    let res3 = await payment(res2.item, res2.id);

    console.log("Payment successfull with status", valres3);
  } catch (err) {
    console.log(err);
  } finally {
    console.log("excutes wheter promise rejected and fullfilled");
  }
}

orderfood("rice");
// .catch((err) => {
//   console.error(err);
// });

// let result = searchFood("dal chawal")
//   .then(function consume1(detail) {
//     console.log(detail.data);
//     return orderFood(detail.item);
//   })
//   .then(function consume2(detail2) {
//     console.log("order created successfully with id no.", detail2.id);
//     return payment(detail2.item, detail2.id);
//   })
//   .then(function consume3(status) {
//     console.log("Payment successfull with status", status);
//   });

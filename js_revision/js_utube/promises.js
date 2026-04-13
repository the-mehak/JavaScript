// function isdata(item) {
//   const promise1 = new Promise(function fun1(resolve, reject) {
//     if (item) {
//       resolve("solve");
//     } else {
//       // Sirf console.log kafi nahi hai, reject call karna zaroori hai
//       reject("fail");
//     }
//   });
//   return promise1;
// }

// let result = isdata("assd"); // Empty string is 'falsy'
// console.log(result);

// result.then(
//   (val) => {
//     console.log("Success:", val);
//   },
//   (failure) => {
//     console.log("Error:", failure);
//   }, // Ab ye trigger hoga!
// );
// console.log("end");

//promises
// function search(item) {
//   console.log("Searching for ", item, "....");
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       if (item) {
//         res({ id: "abc", name: item }); // <==== Replace with actual data
//       } else {
//         rej(`${item} not found`);
//       }
//     }, 2000);
//   });
// }

// function orderid(itemname) {
//   console.log("creating order id");
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       if (itemname) {
//         res(Math.floor(Math.random() * 999999)); // Replace with actual logic
//       } else {
//         rej(`${item} not selected properly`);
//       }
//     }, 4000);
//   });
// }

// function payment(id) {
//   console.log("payment stared with id no", id);
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       if (id) {
//         let status = true;
//         res(`Your payment is received with ID: ${id}`); // Replace with actual logic
//       } else {
//         rej("Payment not found");
//       }
//     }, 6000);
//   });
// }

// search("icecream")
//   .then((res) => {
//     console.log(res.name);
//     return orderid(res.name);
//   })
//   .then((orderId) => {
//     console.log(`Order created with ID: ${orderId}`);
//     return payment(orderId);
//   })
//   .then((paymentStatus) => {
//     console.log(paymentStatus);
//     console.log("Your order is placed");
//   })
//   .catch((err) => {
//     console.error(err);
//   });

function searchFood(item) {
  return new Promise(function fun1(res, rej) {
    console.log("searching start for", item, ".....");
    setTimeout(function timer1() {
      let data = `list of ${item}`;
      res({ item, data });
    }, 3000);
  });
}

function orderFood(item) {
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
      let status = true;
      res(status);
    }, 6000);
  });
}

let result = searchFood("dal chawal")
  .then(function consume1(detail) {
    console.log(detail.data);
    return orderFood(detail.item);
  })
  .then(function consume2(detail2) {
    console.log("order created successfully with id no.", detail2.id);
    return payment(detail2.item, detail2.id);
  })
  .then(function consume3(status) {
    console.log("Payment successfull with status", status);
  });

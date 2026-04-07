//callback Hell
function search(item, cb) {
  console.log("Searching for ", item, "....");
  setTimeout(function timer1() {
    var data = `list of ${item}`;
    cb(item, data);
  }, 3000);
}
function orderid(itemname, cb2) {
  console.log("creating order id");
  setTimeout(function timer2() {
    let id = Math.floor(Math.random() * 999999);
    console.log("id created succesfully");
    cb2(id);
  }, 4000);
}
function payment(item, id, cb3) {
  console.log("payment stared", item, "with id no", id);
  setTimeout(function timer3() {
    let status = true;
    cb3(status);
  }, 6000);
}

let list = search("pizza", function fun1(itemname, getdata) {
  console.log(getdata);
  orderid(itemname, function getorderid(orderidget) {
    console.log(orderidget);
    console.log("order is placed succesfully Your Order id is:", orderidget);
    payment(itemname, orderidget, function getpaymentdetails(response) {
      console.log(`payment response :${response}`);
    });
  });
});
console.log(list);

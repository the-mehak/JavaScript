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

let list = search("pizza", function fun1(itemname, getdata) {
  console.log(getdata);
  orderid(itemname, function getorderid(orderidget) {
    console.log(orderidget);
    console.log("orderf is placed succesfully Your Order id is:", orderidget);
  });
});

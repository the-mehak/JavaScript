// let heading = document.querySelector("h1");
// let submitbtn = document.querySelector("input[type=submit]");
// console.log(heading);
// heading.innerText = "Dom practice";
// heading.style.backgroundColor = "blue";
// // heading.setAttribute("class", "head1");
// // heading.getAnimations("zoom", "scale:2px");
// heading.classList.add("hi");
// //append
// let newtag = document.createElement("h2");
// newtag.innerText = "upadate";
// // document.body.append(newtag);
// heading.insertAdjacentElement("beforebegin", newtag);

let gadgets = [
  "Smartphone",
  "Laptop",
  "Smartwatch",
  "Headphones",
  "Tablet",
  "Camera",
  "Gaming Console",
  "Power Bank",
  "Bluetooth Speaker",
  "Drone",
];
const ul = document.querySelector("#list");
for (let i = 0; i < gadgets.length; i++) {
  let liadd = document.createElement("li");
  liadd.style.backgroundColor = "pink";
  liadd.style.margin = "5px";
  liadd.style.padding = "5px";
  liadd.style.textAlign = "center";
  liadd.style.borderRadius = "7px";
  liadd.style.width = "200px";
  liadd.innerText = gadgets[i];
  ul.appendChild(liadd);
}

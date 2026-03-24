// let btnevent = document.getElementById("btn");

// btn.addEventListener("click", () => {
//   let ischange = confirm("is color change");
//   // alert("Events");

//   if (ischange) {
//     let name = prompt("Enter color name:");
//     document.body.style.backgroundColor = `${name}`;
//   }
// });

let submit = document.querySelector("#submit");
let colorname = document.querySelector("#colorname");
let p = document.createElement("p");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  document.body.style.backgroundColor = `${colorname.value}`;
  p.innerText = colorname.value;
  //   p.style.color = colorname.value;
  document.body.appendChild(p);
});

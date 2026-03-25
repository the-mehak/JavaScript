// let btnevent = document.getElementById("btn");

// btn.addEventListener("click", () => {
//   let ischange = confirm("is color change");
//   // alert("Events");

//   if (ischange) {
//     let name = prompt("Enter color name:");
//     document.body.style.backgroundColor = `${name}`;
//   }
// });

// let submit = document.querySelector("#submit");
// let colorname = document.querySelector("#colorname");
// let p = document.createElement("p");

// submit.addEventListener("click", (e) => {
//   e.preventDefault();
//   document.body.style.backgroundColor = `${colorname.value}`;
//   p.innerText = colorname.value;
//   //   p.style.color = colorname.value;
//   document.body.appendChild(p);
// });
let btnevent = document.getElementById("btnccolor");
function random(number) {
  return Math.floor(Math.random() * (number + 1));
}
// console.log(random(number));
btncolor.addEventListener("click", (e) => {
  const rndcol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  document.body.style.backgroundColor = rndcol;
});

// let changebg = () => {
//   const rndcol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
//   document.body.style.backgroundColor = rndcol;
// };
// setInterval(changebg, 1000);//use when u want change bg in 1 second

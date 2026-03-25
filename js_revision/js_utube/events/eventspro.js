// Add [0] to get the first element with this class
let maindiv = document.getElementById("maindiv");

let box1 = document.getElementById("box1");

box1.addEventListener(
  "click",
  () => {
    console.log("box1");
  },
  true,
);

maindiv.addEventListener(
  "click",
  () => {
    console.log("maindiv");
  },
  true,
);

// Use document.body
document.body.addEventListener(
  "click",
  () => {
    console.log("body");
  },
  true,
);

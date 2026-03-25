// // Add [0] to get the first element with this class
// let maindiv = document.getElementById("maindiv");

// let box1 = document.getElementById("box1");

// box1.addEventListener(
//   "click",
//   () => {
//     console.log("box1");
//   },
//   true,
// );

// maindiv.addEventListener("click", () => {
//   console.log("maindiv");
// });

// // Use document.body
// document.body.addEventListener(
//   "click",
//   () => {
//     console.log("body");
//   },
//   true,
// );

// const mainDIv = document.getElementById("mainDiv")
// const box = document.getElementById("div1")

// box.addEventListener('click' , (e) => {
//     e.stopPropagation()
//     console.log("Box")
// })

// mainDIv.addEventListener('click' , () => {
//     console.log("Main Div")
// })

// document.body.addEventListener('click' , () => {
//     console.log("body");
// })

const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");
const items = document.getElementsByClassName("item");
for (let item of items) {
  item.addEventListener("dragstart", (e) => {
    let data = e.target;

    box2.addEventListener("dragover", (e) => {
      e.preventDefault();
      e.stopPropagation();
    });
    box2.addEventListener("drop", (e) => {
      box2.append(data);
      data = "";
    });
    box1.addEventListener("dragover", (e) => {
      e.preventDefault();
      e.stopPropagation();
    });
    box1.addEventListener("drop", (e) => {
      box1.append(data);
      data = "";
    });
  });
}

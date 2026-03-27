const tictac = document.querySelector(".tictac");
const boxes = document.querySelectorAll(".box");
const h1 = document.getElementsByTagName("h1");
const rBtn = document.getElementById("rstbtn");
let winingCondition = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let count = 0;
let currentplayer = "X";
function eventStart(e) {
  if (e.target.textContent === "") {
    e.target.textContent = currentplayer;
    count++;
    winner();
    currentplayer = currentplayer === "X" ? "O" : "X";
  }
  if (count === 9) {
    h1[0].innerText = `Match Draw`;
  }
}

function startGame() {
  tictac.addEventListener("click", eventStart);
}

function winner() {
  winingCondition.forEach((item) => {
    let val0 = boxes[item[0]].innerHTML;
    let val1 = boxes[item[1]].innerHTML;
    let val2 = boxes[item[2]].innerHTML;
    console.log(item[0], val0, item[1], val1, item[2], val2);
    if (val0 !== "" && val1 !== "" && val2 !== "") {
      if (val0 === val1 && val0 === val2) {
        boxes[item[0]].classList.add("winnerClass");
        boxes[item[1]].classList.add("winnerClass");
        boxes[item[2]].classList.add("winnerClass");
        count = 0;
        h1[0].innerText = `Winner is:${val0}`;
        tictac.removeEventListener("click", eventStart);
      }
    }
  });
}

rBtn.addEventListener("click", () => {
  currentplayer = "X";
  h1[0].innerHTML = "Tic Tac Toe";
  boxes.forEach((item) => {
    item.innerHTML = "";
    item.classList.remove("winnerClass");
  });
  startGame();
});
startGame();

const tictac = document.querySelector(".tictac");
console.log(tictac);
let currentplayer = "X";
tictac.addEventListener("click", (e) => {
  if (e.target.textContent === "") {
    e.target.textContent = currentplayer;
    currentplayer = currentplayer === "X" ? "O" : "X";
  }
});

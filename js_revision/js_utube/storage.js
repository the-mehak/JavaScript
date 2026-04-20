let input = document.getElementById("in");

input.addEventListener("input", (e) => {
  localStorage.setItem("name", e.target.value);
  document.getElementById("h1in").innerText = localStorage.getItem("name");
});

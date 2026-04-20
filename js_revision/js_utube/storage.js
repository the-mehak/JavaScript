let btn = document.getElementById("btn");
btn.addEventListener("click", (e) => {
  let name = document.getElementById("name").value;
  let rollno = document.getElementById("rollno").value;
  localStorage.setItem("data", JSON.stringify({ name: name, rollno: rollno }));
  document.getElementById("h1in").innerText = JSON.parse(
    localStorage.getItem("data"),
  ).name;
  document.getElementById("h2in").innerText = JSON.parse(
    localStorage.getItem("data"),
  ).rollno;
});
document.getElementById("h1in").innerText = JSON.parse(
  localStorage.getItem("data"),
).name;
document.getElementById("h2in").innerText = JSON.parse(
  localStorage.getItem("data"),
).rollno;

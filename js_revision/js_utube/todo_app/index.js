let id = 1;
let count = 1;
let add = document.getElementById("add");
let inputval = document.getElementById("input");
let removebtn = document.getElementsByClassName("btn");
// function removediv(id) {
//   let div = document.getElementById(id);
//   div.remove();
// }
// function checkdiv(id) {
//   let div = document.getElementById(id);
//   div.children[0].classList.toggle("textline");

//   //   div.children[0].children[0].classList.add("textline");
// }
// add.addEventListener("click", (e) => {
//   e.preventDefault();
//   todoval = inputval.value;
//   if (todoval !== "") {
//     let div = document.createElement("div");
//     div.setAttribute("class", "singletodo");
//     div.setAttribute("id", id);
//     console.log(div);
//     div.innerHTML = `
//     <h2 class="tasks"><div class=num>${count}.</div> ${todoval}</h2>
//           <input type="checkbox" for="task" id="checkbox" onclick=checkdiv(${id}) />
//           <button class="btn" onclick=removediv(${id}) >Remove</button>`;
//     document.getElementById("alltodo").appendChild(div);
//     inputval.value = "";
//     count++;
//     id++;
//   } else {
//     alert("ADD Todo First");
//   }
// });
let arr = [];
add.addEventListener("click", (e) => {
  e.preventDefault();
  todoval = inputval.value;
  arr.push(todoval);
  if (todoval !== "") {
    let div = document.createElement("div");
    div.setAttribute("class", "singletodo");
    div.setAttribute("id", id);

    div.innerHTML = `
    <h2 class="tasks"><div class=num>${count}.</div> ${todoval}</h2>
          <input type="checkbox" for="task" id="checkbox" ) />
          <button class="btn" >Remove</button>`;
    //   let store=localStorage.setItem("todo",${todoval})
    let buttn = div.getElementsByTagName("button");
    buttn[0].addEventListener("click", (e) => {
      e.target.parentNode.remove();
    });
    let inputcheck = div.getElementsByTagName("input");
    inputcheck[0].addEventListener("click", (e) => {
      e.target.previousElementSibling.classList.toggle("textline");
    });
    document.getElementById("alltodo").appendChild(div);
    localStorage.setItem("todoall", JSON.stringify(arr));
    inputval.value = "";
    count++;
    id++;
  } else {
    alert("ADD Todo First");
  }
});

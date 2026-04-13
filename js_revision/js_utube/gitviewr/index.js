let user = document.getElementById("searchbtn");
user.addEventListener("click", () => {
  let username = document.getElementsByClassName("name").innerHtml;
  console.log(username);
});

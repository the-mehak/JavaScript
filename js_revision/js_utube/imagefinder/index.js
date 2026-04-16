const ACCESS_TOKEN = "cGx728eD-9uWzIOF-LrBcVBmLUx3VVUGkTxg3IecSNA";
let keyword = document.getElementById("keyword");
let searchBtn = document.getElementById("searchbtn");
var val;
// let currentpage = 1;
let page = 1;

searchBtn.addEventListener("click", () => {
  document.getElementById("allimage").innerHTML = "";
  val = keyword.value;
  keyword.value = "";
  featchimg(val, page);
});
async function featchimg(val, page) {
  let response = await fetch(
    `https://api.unsplash.com/search/photos?query=${val}&client_id=${ACCESS_TOKEN}&page=${page}`,
  );
  let res = await response.json();
  displayimg(res);
}

function displayimg(res) {
  try {
    res.results.map((data) => {
      // let div2 = ` <div class="image1" id="firstimg">
      //      <div class="topimagediv">
      //            <img src="proimg.jpg">
      //       <h6 class="username">Name</h6>
      //       </div>
      //       <img src="proimg.jpg" class="userimg" alt="">
      //     <p>User image data</p>
      //    `;
      let div = document.createElement("div");
      div.setAttribute("class", "image1");
      console.log(div);
      div.innerHTML = `

       <div class="topimagediv">
                 <img class="profileimg" src=${data.user.profile_image.small}>
            <h6 class="name">${data.user.name}</h6>
            </div>
            <img  src=${data.urls.raw} class="userimg" alt="">
          <p>${data.alt_description}</p>`;

      // document
      //   .getElementById("allimage")
      //   .insertAdjacentHTML("afterbegin", div2);
      document.getElementById("allimage").appendChild(div);
    });
    const loadBtn = document.getElementById("loadMoreBtn");
    if (loadBtn) {
      loadBtn.classList.add("visible");
    }
  } catch (error) {
    alert(error);
  }
}
document.getElementById("loadMoreBtn").addEventListener("click", () => {
  page++;
  featchimg(val, page);
});

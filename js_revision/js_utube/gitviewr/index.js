const user = document.getElementById("searchbtn");

user.addEventListener("click", async () => {
  let username = document.getElementById("getname").value;
  try {
    let response = await fetch(`https://api.github.com/users/${username}`);
    let result = await response.json();
    if (response.ok) {
      displayUSer(result);
    } else {
      alert("USer Not Found!!!");
    }
  } catch (error) {
    alert(error);
  }
});

const displayUSer = ({
  avatar_url,
  name,
  bio,
  public_repos,
  followers,
  following,
}) => {
  document.querySelector(".secondDiv").innerHTML = ` 
      <div class="leftdiv">
        <img src="${avatar_url}" alt="profile" />
        <h5>${name || "No Name"}</h5>
        <p>${bio || "No Bio"}</p>
      </div>
      <div class="rightdiv">
        <div class="profileinfo">
          <div class="follower">
            <h5>Followers</h5>
            <p>${followers || 0}</p>
          </div>
          <div class="following">
            <h5>Following</h5>
            <p>${following || 0}</p>
          </div>
          <div class="repo">
            <h5>Repository</h5>
            <p>${public_repos || 0}</p>
          </div>
        </div>
         <div class="viewprofile"><button>View profile</button></div>
      </div>
      <div><button class="clear">Clear</button></div>`;
  document.querySelector(".clear").addEventListener("click", () => {
    document.getElementById("getname").value = "";
    document.querySelector(".secondDiv").innerHTML = "";
  });
};

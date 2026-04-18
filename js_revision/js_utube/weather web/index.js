const API_KEY = "c5f0cb6fc8c83c743ec179a9ff522625";
const searchbtn = document.querySelector(".btn");
const cityInput = document.querySelector(".search");
const dataContainer = document.querySelector(".video-container");
const currentlocation = document.querySelector(".currentloc");
const searchbox = document.querySelector(".headsearchdiv");

searchbtn.addEventListener("click", () => {
  let cityname = cityInput.value;
  if (cityname.trim() !== "") {
    fetchApi(cityname);
  } else {
    alert("Please enter a city name!");
  }
});

async function fetchApi(cityname) {
  try {
    // units=metric se temperature Celsius mein aayega
    let response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&units=metric&appid=${API_KEY}`,
    );

    if (!response.ok) {
      alert("City not found!");
      return;
    }

    let res = await response.json();
    console.log(res);

    displaydetail(res);
  } catch (error) {
    console.log("Error in  fetching data:", error);
  }
}
currentlocation.addEventListener("click", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error);
  } else {
    alert("your Browser don't support the geo location");
  }
});
async function success(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  console.log(` Lat ${lat}, Lon ${lon}`);
  try {
    let responseloc = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`,
    );
    let res = await responseloc.json();
    console.dir(res);

    displaydetail(res);
  } catch (error) {
    console.log(`:Cannot fetch location -> ${error} `);
  }
}

function error() {
  alert("Unable to retrieve your location. Please check permissions.");
}

function displaydetail(res) {
  let existingdiv = document.querySelector(".weather");
  if (existingdiv) {
    existingdiv.remove();
  }
  searchbox.classList.add("hidden");
  // Naya div create karna
  let div = document.createElement("div");
  div.setAttribute("class", "weather content");
  div.classList.add("visible");

  // API se real data nikaal kar HTML mein daalna
  div.innerHTML = `
    <div class="heading">
      <h1 class="divheading">Weather</h1>
      <img src="https://openweathermap.org/img/wn/${res.weather[0].icon}@2x.png" class="cloud" />
    </div>
    <div class="info">
      <div class="temp">${Math.round(res.main.temp)}°C</div>
      <div class="cityname">${res.name}</div>
      <div class="data">
        <div class="Wind">Wind<p>${res.wind.speed} km/h</p></div>
        <div class="pressure">Pressure<p>${res.main.pressure}</p></div>
        <div class="humidity">Humidity<p>${res.main.humidity}%</p></div>
      </div>
      <button class="change-loc-btn flexify">Change Location</button>
    </div>`;

  dataContainer.appendChild(div);

  // const changeBtn = div.querySelector(".change-loc-btn");
  // changeBtn.addEventListener("click", () => {
  //   // Card ko hatao aur Search box wapas dikhao
  //   div.remove();
  //   searchSection.classList.remove("hidden");
  //   cityInput.value = ""; //
  //   cityInput.focus(); //
  // });
}

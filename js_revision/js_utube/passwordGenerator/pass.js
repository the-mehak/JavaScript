const btn = document.getElementById("genPass");
const newPass = document.getElementById("passshow");
const slider = document.getElementById("range");
const rangeVal = document.getElementById("rangeText"); // Range text update
const statusImg = document.getElementById("statusImg"); // Image change ke liye

const upprCase = document.getElementById("uprlet");
const lowerCase = document.getElementById("smalletr");
const number = document.getElementById("num");
const symbol = document.getElementById("symbol");
const copyBtn = document.getElementById("copyBtn");

// Live Slider Value Update
slider.addEventListener("input", (e) => {
  rangeVal.innerText = `Password length: ${e.target.value}`;
});

btn.addEventListener("click", () => {
  let capitalLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let smallLetter = "abcdefghijklmnopqrstuvwxyz";
  let numberStr = "0123456789";
  let symbolsStr = "~`!@#$%^&*()_+}{";
  let finalStr = "";

  if (upprCase.checked) finalStr += capitalLetter;
  if (lowerCase.checked) finalStr += smallLetter;
  if (number.checked) finalStr += numberStr;
  if (symbol.checked) finalStr += symbolsStr;

  if (finalStr === "") {
    alert("Please Select at least one option");
    return;
  }

  let latestPassword = "";
  let len = parseInt(slider.value);

  for (let i = 0; i < len; i++) {
    let rndnum = Math.floor(Math.random() * finalStr.length);
    latestPassword += finalStr.charAt(rndnum);
  }

  newPass.innerText = latestPassword;

  // --- Image Change Logic ---
  if (len < 10) {
    statusImg.src = "weak_image.svg"; // Apni weak image ka path daalein
  } else if (len >= 10 && len < 15) {
    statusImg.src = "medium_image.svg"; // Apni medium image ka path daalein
  } else {
    statusImg.src = "strong_castle.svg"; // Jo image abhi hai wo (Strong)
  }
});

// Copy Logic
copyBtn.addEventListener("click", () => {
  const pass = newPass.innerText;
  if (!pass) return alert("First Generate the password");
  navigator.clipboard.writeText(pass);
  alert("Password Copied!");
});

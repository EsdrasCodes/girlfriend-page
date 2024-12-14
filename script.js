const btn = document.getElementById("switch")
const htmlElement = document.documentElement;
let imageProfile = document.querySelector("#profile img")

btn.addEventListener("click", switchMode)

function switchMode() {
  htmlElement.classList.toggle("light")

  if (htmlElement.classList.contains("light")) {
    imageProfile.setAttribute("src", "./assets/avatar-light.png")
  } else {
    imageProfile.setAttribute("src", "./assets/avatar.png")
  }
}
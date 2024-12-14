const btn = document.getElementById("switch")
const htmlElement = document.documentElement;
let imageProfile = document.querySelector("#profile img")
let nameProfile = document.getElementById("nameProfile")
let items = document.querySelectorAll(".item")
let content = document.getElementById("content")

btn.addEventListener("click", switchMode)


items.forEach((item) => {
  item.addEventListener("click", () => {

    const content = item.querySelector("#content, #images, #plans");

    if (content) {
      content.style.display = content.style.display === "flex" ? "none" : "flex";
    }
  });
});


function switchMode() {
  htmlElement.classList.toggle("light")

  if (htmlElement.classList.contains("light")) {
    imageProfile.setAttribute("src", "./assets/avatar-light.png")
    nameProfile.textContent = "Rebeka Thamilis";
  } else {
    imageProfile.setAttribute("src", "./assets/avatar.png")
    nameProfile.textContent = "Esdras Asa";
  }
}
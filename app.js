let social = document.querySelector(".sharing");
let viewSocial = document.querySelector(".social-network");
let showId = document.getElementById("show");
//console.log(social)
//console.log(show)

if (screen.width >= 320 && screen.width <= 480) {
  let addImg = document.createElement("img");
  addImg.src = "./images/icon-share.svg";

  let addElement = document.getElementById("share-button");
  addElement.appendChild(addImg);
}

social.addEventListener("click", () => {
  if (getComputedStyle(viewSocial).display != "none") {
    viewSocial.style.display = "none"
  } else {
    viewSocial.style.display = "flex"
  }
});

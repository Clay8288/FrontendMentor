  // We delete the field
  let fieldEmail = document.getElementById("email");

  fieldEmail.addEventListener("click", () => {
    fieldEmail.value = " ";
  });


  // We add a new div if the email isn't valid
  let emailAlert = document.querySelector(".main-form");

  let newDiv = document.createElement("div");
  newDiv.innerHTML = "Please provide a valid email";
  newDiv.classList = "alert";


  // We add image alert if the email isn't
  let imageAlert = document.createElement("img");

  imageAlert.src = "../images/icon-error.svg";
  imageAlert.classList = "imgAlt";


  // We change the image according to the screen
  function resizeImage() {

    let image = document.getElementById("img");

    if (window.screen.width <= 768) {
      image.src = "../images/hero-mobile.jpg";
    } else {
      image.src = "../images/hero-desktop.jpg"
    }
  }



  // Fonction for validate email
  function ValidateEmail(email) {
    var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (email.value.match(regex)) {
      return true;
    } else {
      emailAlert.appendChild(newDiv);
      emailAlert.appendChild(imageAlert);
      return emailAlert;
    }
  }

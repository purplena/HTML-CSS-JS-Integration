document.addEventListener("DOMContentLoaded", function () {
  //Variables for the menu
  const menuIcon = document.getElementById("menu-icon"),
    mainMenu = document.getElementById("main-menu"),
    websiteWrapper = document.getElementById("website-wrapper");

  //Click evet for the menu
  menuIcon.addEventListener("click", function () {
    mainMenu.classList.toggle("opened-menu");
    menuIcon.classList.toggle("closed");
    websiteWrapper.classList.toggle("website-wrapper");
  });

  //Variables for the form
  const form = document.getElementById("the-form"),
    inputName = document.getElementById("name"),
    inputEmail = document.getElementById("email"),
    inputMessage = document.getElementById("message"),
    errorName = document.getElementById("the-error-name"),
    errorEmail = document.getElementById("the-error-email"),
    errorMessage = document.getElementById("the-error-message");

  // _____________________________________________________
  //Hide error message
  function hideErrors(input, errorDiv) {
    input.addEventListener("focus", function () {
      errorDiv.classList.add("hidden");
      errorDiv.textContent = "";
      input.value = "";
    });
    return;
  }

  hideErrors(inputName, errorName);
  hideErrors(inputEmail, errorEmail);
  hideErrors(inputMessage, errorMessage);
  // _____________________________________________________

  // _____________________________________________________
  //Click event on the form and error messages
  form.addEventListener("submit", function (evt) {
    evt.preventDefault();

    let arrErrors = [];
    const errorMessages = [
      "Les lettre anonymes, c'est mal",
      "Et comment on fait pour vous spammer?",
      "Non mais âllo quoi, tu nous écris et tu nous écris rien?",
    ];

    //Function to trim my input
    function trimInput(input) {
      let newInput = input.value;
      return newInput.trim();
    }

    let newInputName = trimInput(inputName);
    let newInputEmail = trimInput(inputEmail);
    let newInputMessage = trimInput(inputMessage);

    //Input Validation Helpers
    const regexForName = /^[a-zA-Z\-]+$/;
    const regexForEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // const username = newInputEmail.split("@")[0];

    //Input Name Validation
    if (newInputName === "" || !newInputName.match(regexForName)) {
      arrErrors.unshift(errorMessages[0]);
      errorName.textContent = arrErrors[0].toString();
      errorName.classList.remove("hidden");
    }

    //Email Validation
    if (newInputEmail === "" || !newInputEmail.match(regexForEmail)) {
      arrErrors.unshift(errorMessages[1]);
      errorEmail.textContent = arrErrors[0].toString();
      errorEmail.classList.remove("hidden");
    }

    //Message Validation
    if (newInputMessage === "") {
      arrErrors.unshift(errorMessages[2]);
      errorMessage.textContent = arrErrors[0].toString();
      errorMessage.classList.remove("hidden");
    }

    //Modal Window
    if (arrErrors.length === 0) {
      const modalPanel = document.getElementById("modal-panel");
      modalPanel.classList.remove("modal-hidden");

      modalButton = document.getElementById("btn-modal-modal");
      modalButton.addEventListener("click", function () {
        modalPanel.classList.add("modal-hidden");
      });
    }
  });
});

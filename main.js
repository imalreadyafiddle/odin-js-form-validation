function addFormValidation() {
  // declare form elements
  const emailAddress = document.getElementById("emailAddress");
  const state = document.getElementById("state");
  const postalCode = document.getElementById("postalCode");
  const password = document.getElementById("password");
  const passwordConfirm = document.getElementById("passwordConfirm");
  const submitButton = document.querySelector("button");
  const hooray = new Audio("./party-whistle.mp3");
  const confettis = document.querySelector(".confetti-container");

  // apply custom validation
  emailAddress.addEventListener("blur", (event) => {
    if (emailAddress.validity.typeMismatch) {
      emailAddress.setCustomValidity(
        "This should be an email address, ya goober!"
      );
    } else {
      emailAddress.setCustomValidity("");
    }
    emailAddress.reportValidity();
    isFilledOut();
  });

  state.addEventListener("change", (event) => {
    if (state.validity.valueMissing) {
      state.setCustomValidity("You didn't select a state!");
    } else {
      state.setCustomValidity("");
    }
    state.reportValidity();
    isFilledOut();
  });

  postalCode.pattern = "[0-9]{5}";
  postalCode.addEventListener("change", (event) => {
    if (postalCode.validity.patternMismatch) {
      postalCode.setCustomValidity("Enter a valid ZIP code!");
    } else if (postalCode.validity.valueMissing == true) {
      postalCode.setCustomValidity("C'mon... it's only 5 numbers.");
    } else {
      postalCode.setCustomValidity("");
    }
    postalCode.reportValidity();
    isFilledOut();
  });

  password.pattern =
    "^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$";
  password.addEventListener("keyup", (event) => {
    if (password.validity.patternMismatch) {
      password.setCustomValidity(
        "Password must be at least 8 characters and include: \nletters \nAt least 1 number \nAt least 1 special character"
      );
    } else {
      password.setCustomValidity("");
    }
    password.reportValidity();
    isFilledOut();
  });

  passwordConfirm.addEventListener("keyup", (event) => {
    if (passwordConfirm.value != password.value) {
      passwordConfirm.setCustomValidity("Passwords must match");
    } else {
      passwordConfirm.setCustomValidity("");
    }
    passwordConfirm.reportValidity();
    isFilledOut();
  });

  function isFilledOut() {
    if (
      emailAddress.checkValidity() == true &&
      state.checkValidity() == true &&
      postalCode.checkValidity() == true &&
      password.checkValidity() == true &&
      passwordConfirm.checkValidity() == true
    ) {
      submitButton.disabled = false;
    } else submitButton.disabled = true;
  }

  submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    hooray.play();
    confettis.classList.remove("hidden");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  addFormValidation();
});

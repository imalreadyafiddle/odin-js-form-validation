function addFormValidation() {
  const emailAddress = document.getElementById("emailAddress");
  emailAddress.addEventListener("blur", (event) => {
    if (emailAddress.validity.typeMismatch) {
      emailAddress.setCustomValidity(
        "This should be an email address, ya goober!"
      );
    } else {
      emailAddress.setCustomValidity("");
    }
    emailAddress.reportValidity();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  addFormValidation();
});

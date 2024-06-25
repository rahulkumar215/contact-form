const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const emailAddress = document.querySelector("#contact-email");
const queryType = document.querySelectorAll(".radio__input");
const message = document.querySelector("#message");
const consentCheck = document.querySelector("#consent");
const button = document.querySelector(".btn");
const successAlert = document.querySelector(".success__message");

const textInputs = [
  [firstName, ".first-name"],
  [lastName, ".last-name"],
  [emailAddress, ".input__email"],
  [message, ".input__message"],
];

textInputs.forEach((input) => {
  input[0].addEventListener("input", (e) => {
    e.target.value === ""
      ? document.querySelector(input[1]).classList.add("error")
      : document.querySelector(input[1]).classList.remove("error");
  });
});

[
  [queryType[0], ".input__query-type"],
  [queryType[0], ".input__query-type"],
  [consentCheck, ".input__checkbox"],
].forEach((input) => {
  input[0].addEventListener("change", (e) => {
    document.querySelector(input[1]).classList.remove("error");
  });
});

button.addEventListener("click", (e) => {
  e.preventDefault();

  document
    .querySelectorAll(".error")
    .forEach((el) => el.classList.remove("error"));

  const errors = [
    ...textInputs
      .filter((input) => input[0].value === "")
      .map((input) => input[1]),
    ,
    queryType[0].checked == false && queryType[1].checked == false
      ? ".input__query-type"
      : "",
    consentCheck.checked === false && ".input__checkbox",
  ].filter((item) => item ?? item);

  if (errors.length > 0) {
    console.log(errors);
    errors.forEach((error) => {
      document.querySelector(error).classList.add("error");
    });
    return;
  } else {
    successAlert.classList.add("show-alert");
    setTimeout(() => {
      successAlert.classList.remove("show-alert");
    }, 1500);
    clearForm();
  }
});

function clearForm() {
  document.querySelector("#first-name").value = "";
  document.querySelector("#last-name").value = "";
  document.querySelector("#contact-email").value = "";
  document
    .querySelectorAll(".radio__input")
    .forEach((item) => (item.checked = false));
  document.querySelector("#message").value = "";
  document.querySelector("#consent").checked = false;
}

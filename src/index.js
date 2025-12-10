"use strict";
import {
  inputs,
  radioInputs,
  checkboxInputs,
  buttonContent,
  formContent,
  errorContent,
} from "../constants/index.js";

const [buyer, seller] = radioInputs;
const [checkboxMarketing] = checkboxInputs;

function createEl(tag, props) {
  const el = document.createElement(tag);
  for (const key in props) {
    if (key === "description" || key === "text") continue;
    el[key] = props[key];
  }
  return el;
}

function createRadioOption(el) {
  const label = document.createElement("label");
  label.className = "label-radio-area";
  label.htmlFor = el.id;
  const btn = createEl("input", el);
  const textRadioBtn = document.createElement("span");
  textRadioBtn.textContent = el.text;
  const textDescription = document.createElement("span");
  textDescription.className = "radio-description";
  textDescription.textContent = el.description;
  label.append(btn, textRadioBtn, textDescription);
  return label;
}

function createCheckbox(el) {
  const checkboxLabel = document.createElement("label");
  checkboxLabel.className = "check-div";
  checkboxLabel.htmlFor = el.id;
  const checkbox = createEl("input", el);
  const checkboxText = document.createElement("span");
  checkboxText.textContent = el.text;
  checkboxText.className = "check-div check-span";
  checkboxLabel.append(checkbox, checkboxText);
  return checkboxLabel;
}

/* -------------------Create Element and Append Element--------------------*/
const main = document.createElement("main");
const form = document.createElement("form");
const h1 = createEl("h1", formContent.title);
const p = createEl("p", formContent.subtitle);
const inputDiv = createEl("div", formContent.formInputsDiv);
const radioDiv = createEl("div", formContent.formRadioDiv);
const checkboxLabel = createCheckbox(checkboxMarketing);
const button = createEl("button", buttonContent);
const errorContainer = createEl("div", errorContent.errorMesConteiner);

document.body.append(main);
main.append(form);
form.append(h1, p, inputDiv, radioDiv, checkboxLabel, button);
radioDiv.append(createRadioOption(buyer));
radioDiv.append(createRadioOption(seller));
inputs.forEach((cfg) => {
  inputDiv.append(createEl("input", cfg));
});
form.append(errorContainer);

/* ------------------------Local Storage-------------------------*/
const propsArray = Array.from(
  document.querySelectorAll(".form-inputs-div>input")
);
class Person {
  constructor(...args) {
    args.forEach(({ name, value }) => (this[name] = value));
  }
}

function saveToLocalStorage() {
  const person = new Person(...propsArray);
  localStorage.setItem(
    `${person.lastName}`,
    JSON.stringify(
      person,
      (key, value) => {
        return key === "email" || key === "password" ? undefined : value;
      },
      2
    )
  );
}
/* ----------------------------Validation--------------------------*/

function addError(el) {
  if (document.getElementById(el.id)) return;
  errorContainer.append(createEl("div", el));
}

function removeError(id) {
  const el = document.getElementById(id);
  if (el) {
    el.remove();
  }
}

function blinkError(el) {
  el.classList.add("blink");
  setTimeout(() => el.classList.remove("blink"), 150);
}

function validatePassword() {
  const passwordConfirmation = document.getElementById("passwordConfirmation");
  const password = document.getElementById("password");
  if (password.value.trim() === "") {
    addError(errorContent.passwordConfirmationError);
    return;
  } else {
    removeError(errorContent.passwordConfirmationError.id);
  }

  password.value.trim() === passwordConfirmation.value.trim()
    ? removeError(errorContent.passwordConfirmationError.id)
    : addError(errorContent.passwordConfirmationError);
}
function validateEmail() {
  const email = document.getElementById("email");
  const pattern = /^\w+\.?\w+@[a-z]{3,}\.[a-z]{2,}$/i;
  pattern.test(email.value.trim())
    ? removeError(errorContent.emailError.id)
    : addError(errorContent.emailError);
}
function submitHandler(e) {
  validateEmail();
  validatePassword();
  if (errorContainer.children.length > 0) {
    e.preventDefault();
    Array.from(errorContainer.children).forEach(blinkError);
    return;
  }
  saveToLocalStorage();
}
email.addEventListener("blur", validateEmail);
passwordConfirmation.addEventListener("blur", validatePassword);
form.addEventListener("submit", submitHandler);

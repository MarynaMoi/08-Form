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
function createErrorDiv(cfg) {
  const container = document.createElement("div");
  container.className = "input-container";
  const input = createEl("input", cfg);
  container.append(input);
  if (errorContent[cfg.id]) {
    const errorDiv = createEl("div", errorContent[cfg.id]);
    errorDiv.hidden = true;
    container.append(errorDiv);
  }
  inputDiv.append(container);
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

document.body.append(main);
main.append(form);
form.append(h1, p, inputDiv, radioDiv, checkboxLabel, button);
radioDiv.append(createRadioOption(buyer));
radioDiv.append(createRadioOption(seller));
inputs.forEach(createErrorDiv);
/* ------------------------Hidden fields-------------------------*/

const emptyErrorDiv = createEl("div", errorContent.emptyInputError);
form.append(emptyErrorDiv);
emptyErrorDiv.hidden = true;
const emailErrorDiv = document.getElementById("emailError");
const passwordErrorDiv = document.getElementById("passwordError");

/* ------------------------Local Storage-------------------------*/
const propsArray = Array.from(
  document.querySelectorAll(".form-inputs-div input")
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

function validatePassword() {
  const passwordConfirmation = document.getElementById("passwordConfirmation");
  const password = document.getElementById("password");
  password.value.trim() === passwordConfirmation.value.trim()
    ? (passwordErrorDiv.hidden = true)
    : (passwordErrorDiv.hidden = false);
}

function validateEmail() {
  const email = document.getElementById("email");
  const pattern = /^\w+\.?\w+@[a-z]{3,}\.[a-z]{2,}$/i;
  pattern.test(email.value.trim())
    ? (emailErrorDiv.hidden = true)
    : (emailErrorDiv.hidden = false);
}

function checkEmptyInputs() {
  const isFill = propsArray.every((input) => input.value.trim() !== "");
  isFill ? (emptyErrorDiv.hidden = true) : (emptyErrorDiv.hidden = false);
  return isFill;
}

function permissionToSubmit() {
  if (emailErrorDiv.hidden && passwordErrorDiv.hidden && checkEmptyInputs()) {
    return true;
  }
  return false;
}

function submitHandler(e) {
  e.preventDefault();
  if (permissionToSubmit()) {
    saveToLocalStorage();
    form.reset();
  }
}

email.addEventListener("change", validateEmail);
passwordConfirmation.addEventListener("change", validatePassword);
password.addEventListener("change", validatePassword);
form.addEventListener("submit", submitHandler);

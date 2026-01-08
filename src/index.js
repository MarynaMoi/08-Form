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
function createDivForInputAndError(cfg) {
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
inputs.forEach(createDivForInputAndError);
/* ------------------------Hidden fields-------------------------*/

const passwordErrorDiv = document.getElementById("passwordError");

/* ----------------------------Validation--------------------------*/

function validatePassword() {
  const passwordConfirmation = document.getElementById("passwordConfirmation");
  const password = document.getElementById("password");
  password.value.trim() === passwordConfirmation.value.trim()
    ? (passwordErrorDiv.hidden = true)
    : (passwordErrorDiv.hidden = false);
}

function submitHandler(e) {
  if (!passwordErrorDiv.hidden) {
    e.preventDefault();
  }
}

passwordConfirmation.addEventListener("change", validatePassword);
form.addEventListener("submit", submitHandler);

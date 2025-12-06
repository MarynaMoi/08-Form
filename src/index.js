"use strict";
import { inputs, radioInputs, checkboxInputs} from "../constants/index.js";
const [buyer, seller] = radioInputs;
const [checkboxMarketing] = checkboxInputs;

function createInput(props) {
  const input = document.createElement("input");
  for (const key in props) {
    input[key] = props[key];
  }
  return input;
}

function createRadioOption(el, text, desc) {
  const label = document.createElement("label");
  label.className = "label-radio-area";
  label.htmlFor = el.id;
  const btn = createInput(el);
  const textRadioBtn = document.createElement("span");
  textRadioBtn.textContent = text;
  const textDescription = document.createElement("span");
  textDescription.className = "radio-description";
  textDescription.textContent = desc;
  label.append(btn, textRadioBtn, textDescription);
  return label;
}

function createCheckbox(el, text) {
  const checkboxLabel = document.createElement("label");
  checkboxLabel.className = "check-div";
  checkboxLabel.htmlFor = el.id;
  const checkbox = createInput(el);
  const checkboxText = document.createElement("span");
  checkboxText.textContent = text;
  checkboxText.className = "check-div check-span";
  checkboxLabel.append(checkbox, checkboxText);
  return checkboxLabel;
}

const main = document.createElement("main");
const form = document.createElement("form");

const h1 = document.createElement("h1");
h1.textContent = "CREATE AN ACCOUNT";

const p = document.createElement("p");
p.className = "head-p";
p.textContent = "We always keep your name and email address private.";

const inputDiv = document.createElement("div");
inputDiv.className = "form-inputs-div";

const radioDiv = document.createElement("div");
radioDiv.className = "radios-div";

radioDiv.append(
  createRadioOption(
    buyer,
    "Join As a Buyer ",
    "I am looking for a Name, Logo or Tagline for my business, brand or product."
  )
);
radioDiv.append(
  createRadioOption(
    seller,
    "Join As a Creative or Marketplace Seller ",
    "I plan to submit name ideas, Logo design or sell names in Domain Marketplace."
  )
);

const checkboxLabel = createCheckbox(
  checkboxMarketing,
  "Allow Squadhelp to send marketing/promotional offers from time to time"
);

const button = document.createElement("button");
button.type = "submit";
button.textContent = "Create account";

document.body.append(main);
main.append(form);
form.append(h1, p, inputDiv, radioDiv, checkboxLabel, button);
inputs.forEach((cfg) => {
  inputDiv.append(createInput(cfg));
});



class Person {
  constructor(firstName, lastName, displayName, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.displayName = displayName;
    this.email = email;
  }
}

button.addEventListener("click", function (e) {

  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const displayName = document.getElementById("displayName").value.trim();
  const email = document.getElementById("email").value.trim();

  const person = new Person(firstName, lastName, displayName, email);
  localStorage.setItem(lastName, JSON.stringify(person));
  form.reset();
});

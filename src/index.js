"use strict";

const main = document.createElement("main");

const form = document.createElement("form");

const h1 = document.createElement("h1");
h1.textContent = "CREATE AN ACCOUNT";

const p = document.createElement("p");
p.className = "head-p";
p.textContent = "We always keep your name and email address private.";

const inputDiv = document.createElement("div");
inputDiv.className = "input-div";

function createInput(
  type,
  placeholder,
  required = true,
  className = "input-text"
) {
  const input = document.createElement("input");
  input.type = type;
  input.placeholder = placeholder;
  input.className = className;
  input.required = required;
  return input;
}

const firstName = createInput("text", "First name");
const lastName = createInput("text", "Last name");
const displayName = createInput("text", "Display name");
const emailAddress = createInput("email", "Email Address");
const password = createInput("password", "Password");
const passwordConfirmation = createInput("password", "Password Confirmation");

const radioDiv = document.createElement("div");
radioDiv.className = "radio-div";

const buyerLabel = document.createElement("label");
buyerLabel.className = "label-btn";
buyerLabel.htmlFor = "buyer";

const buyerInput = document.createElement("input");
buyerInput.type = "radio";
buyerInput.name = "buyer-or-seller";
buyerInput.id = "buyer";
buyerInput.required = true;
const buyerText = document.createTextNode(" Join As a Buyer ");

const buyerSpan = document.createElement("span");
buyerSpan.textContent =
  "I am looking for a Name, Logo or Tagline for my business, brand or product.";

const sellerLabel = document.createElement("label");
sellerLabel.className = "label-btn";
sellerLabel.htmlFor = "seller";

const sellerInput = document.createElement("input");
sellerInput.type = "radio";
sellerInput.name = "buyer-or-seller";
sellerInput.id = "seller";
sellerInput.required = true;

const sellerText = document.createTextNode(
  " Join As a Creative or Marketplace Seller "
);

const sellerSpan = document.createElement("span");
sellerSpan.textContent =
  "I plan to submit name ideas, Logo design or sell names in Domain Marketplace.";

const checkboxLabel = document.createElement("label");
checkboxLabel.className = "check-div";
checkboxLabel.htmlFor = "checkbox";

const checkbox = document.createElement("input");
checkbox.type = "checkbox";
checkbox.id = "checkbox";
checkbox.className = "checkbox-btn";
checkbox.required = true;

const checkboxText = document.createTextNode(
  " Allow Squadhelp to send marketing/promotional offers from time to time"
);

const button = document.createElement("button");
button.type = "submit";
button.textContent = "Create account";

document.body.append(main);
main.append(form);
form.append(h1, p, inputDiv, radioDiv, checkboxLabel, button);
inputDiv.append(
  firstName,
  lastName,
  displayName,
  emailAddress,
  password,
  passwordConfirmation
);
radioDiv.append(buyerLabel);
buyerLabel.append(buyerInput, buyerText, buyerSpan);
radioDiv.append(sellerLabel);
sellerLabel.append(sellerInput, sellerText, sellerSpan);
checkboxLabel.append(checkbox, checkboxText);

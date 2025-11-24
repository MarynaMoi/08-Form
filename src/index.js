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

const firstName = document.createElement("input");
firstName.className = "input-text";
firstName.type = "text";
firstName.placeholder = "First name";
firstName.required = true;

const lastName = document.createElement("input");
lastName.className = "input-text";
lastName.type = "text";
lastName.placeholder = "Last name";
lastName.required = true;

const displayName = document.createElement("input");
displayName.className = "input-text";
displayName.type = "text";
displayName.placeholder = "Display name";
displayName.required = true;

const emailAddress = document.createElement("input");
emailAddress.className = "input-text";
emailAddress.type = "email";
emailAddress.placeholder = "Email Address";
emailAddress.required = true;

const password = document.createElement("input");
password.className = "input-text";
password.type = "password";
password.placeholder = "Password";
password.required = true;

const passwordConfirmation = document.createElement("input");
passwordConfirmation.className = "input-text";
passwordConfirmation.type = "password";
passwordConfirmation.placeholder = "Password Confirmation";
passwordConfirmation.required = true;

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

////////////////////////////////////////////////////////////
document.body.appendChild(main);
main.appendChild(form);
form.appendChild(h1);
form.appendChild(p);

form.appendChild(inputDiv);
inputDiv.appendChild(firstName)
inputDiv.appendChild(lastName)
inputDiv.appendChild(displayName)
inputDiv.appendChild(emailAddress)
inputDiv.appendChild(password)
inputDiv.appendChild(passwordConfirmation)


form.appendChild(radioDiv);

radioDiv.appendChild(buyerLabel);
buyerLabel.appendChild(buyerInput);
buyerLabel.appendChild(buyerText);
buyerLabel.appendChild(buyerSpan);

radioDiv.appendChild(sellerLabel);
sellerLabel.appendChild(sellerInput);
sellerLabel.appendChild(sellerText);
sellerLabel.appendChild(sellerSpan);

form.appendChild(checkboxLabel);
checkboxLabel.appendChild(checkbox);
checkboxLabel.appendChild(checkboxText);

form.appendChild(button);
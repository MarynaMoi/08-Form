export const inputs = [
  {
    type: "text",
    placeholder: "First name",
    className: "form-input",
    name: "firstName",
  },
  {
    type: "text",
    placeholder: "Last name",
    className: "form-input",
    name: "lastName",
  },
  {
    type: "text",
    placeholder: "Display name",
    className: "form-input",
    name: "displayName",
  },
  {
    type: "email",
    placeholder: "Email Address",
    className: "form-input",
    name: "email",
    id: "email",
    required: true,
  },
  {
    type: "password",
    placeholder: "Password",
    className: "form-input",
    name: "password",
    id: "password",
    required: true,

  },
  {
    type: "password",
    placeholder: "Password Confirmation",
    className: "form-input",
    id: "passwordConfirmation",
    name: "password",
  },
];

export const radioInputs = [
  {
    type: "radio",
    name: "buyer-or-seller",
    id: "buyer",
    text: "Join As a Buyer",
    description:
      "I am looking for a Name, Logo or Tagline for my business, brand or product.",
  },
  {
    type: "radio",
    name: "buyer-or-seller",
    id: "seller",
    text: "Join As a Creative or Marketplace Seller",
    description:
      "I plan to submit name ideas, Logo design or sell names in Domain Marketplace.",
  },
];
export const checkboxInputs = [
  {
    type: "checkbox",
    className: "checkbox-btn",
    id: "checkbox-allow-send-marketing-btn",
    text: "Allow Squadhelp to send marketing/promotional offers from time to time",
  },
];

export const buttonContent = {
  type: "submit",
  textContent: "Create Account",
};

export const formContent = {
  title: { textContent: "CREATE AN ACCOUNT" },
  subtitle: {
    textContent: "We always keep your name and email address private.",
    className: "head-p",
  },
  formInputsDiv: { className: "form-inputs-div" },
  formRadioDiv: { className: "radios-div" },
};

export const errorContent = {
  email: {
    id: "emailError",
    textContent: "Invalid email address.",
    
  },
  passwordConfirmation: {
    id: "passwordError",
    textContent: "Invalid password confirmation",
  },
    emptyInputError: {
    id: "emptyError",
    textContent: "Please fill in all fields.",
  },
};

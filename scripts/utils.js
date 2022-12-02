import validationConfig from "./config.js";

export const disableButton = (Button) => {
    Button.classList.add(validationConfig.inactiveButtonClass)
    Button.disabled = true;
  }
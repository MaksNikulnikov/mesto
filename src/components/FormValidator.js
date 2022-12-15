export default class FormValidator {

  constructor(validationConfig, form) {
    this._inputSelector = validationConfig.inputSelector;
    this._submitButtonSelector = validationConfig.submitButtonSelector;
    this._inactiveButtonClass = validationConfig.inactiveButtonClass;
    this._errorClass = validationConfig.errorClass;
    this._inputInvalidClass = validationConfig.inputInvalidClass;
    this._parentInputAndErrorSelector = validationConfig.parentInputAndErrorSelector;
    this._inputErrorSelector = validationConfig.inputErrorSelector;
    this._form = form;
    this._submitButton = form.querySelector('.popup__submit-btn');
    this._inputList = Array.from(this._form.querySelectorAll(this._inputSelector));
  }

  disableButton = () => {
    this._submitButton.classList.add(this._inactiveButtonClass);
    this._submitButton.disabled = true;
  }

  _activataButton = () => {
    this._submitButton.classList.remove(this._inactiveButtonClass);
    this._submitButton.removeAttribute('disabled');
  }

  toggleButtonState = () => {
    const hasInvalidInput = this._inputList.some(el => !el.validity.valid);

    if (hasInvalidInput) {
      this.disableButton();
    } else {
      this._activataButton();
    }
  }

  _checkInputValidity = (inputElement) => {
    const isValid = inputElement.validity.valid,
      inputSection = inputElement.closest(this._parentInputAndErrorSelector),
      inputError = inputSection.querySelector(this._inputErrorSelector),
      errorMessage = inputElement.validationMessage

    if (!isValid) {
      this._showErrorInput(inputError, errorMessage);
      this._markInputAsInvalid(inputElement);
    } else {
      this._hideErrorInput(inputError);
      this._unmarkInputAsInvalid(inputElement);
    }
  }

  _showErrorInput = (inputError, errorMessage) => {
    inputError.textContent = errorMessage;
    inputError.classList.add(this._errorClass);
  }

  _hideErrorInput = (inputError) => {
    inputError.textContent = '';
    inputError.classList.remove(this._errorClass);
  }

  _markInputAsInvalid = (inputError) => {
    inputError.classList.add(this._inputInvalidClass);
  }

  _unmarkInputAsInvalid = (inputError) => {
    inputError.classList.remove(this._inputInvalidClass);
  }

  _setEventListeners = () => {
    this._form.addEventListener('submit', (event) => {
      event.preventDefault();
    });

    this.toggleButtonState();

    this._inputList.forEach((inputEl) => {
      inputEl.addEventListener('input', () => {
        this._checkInputValidity(inputEl);
        this.toggleButtonState();
      });
    });
  }

  enableValidation = () => {
    this._setEventListeners();
  }
}
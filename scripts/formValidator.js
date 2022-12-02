import { disableButton } from './utils.js'

class FormValidator {

  constructor(validationConfig, form) {
    this._validationConfig = validationConfig;
    this._inputSelector = validationConfig.inputSelector;
    this._submitButtonSelector = validationConfig.submitButtonSelector;
    this._inactiveButtonClass = validationConfig.inactiveButtonClass;
    this._errorClass = validationConfig.errorClass;
    this._inputInvalidClass = validationConfig.inputInvalidClass;
    this._parentInputAndErrorSelector = validationConfig.parentInputAndErrorSelector;
    this._inputErrorSelector = validationConfig.inputErrorSelector
    this._form = form;
    this._disableSubmitButton = disableButton;
  }

  _toggleButtonState = (inputList, submitButton) => {
    const hasInvalidInput = inputList.some(el => !el.validity.valid)

    if (hasInvalidInput) {
      this._disableSubmitButton(submitButton)
    } else {
      submitButton.removeAttribute('disabled')
      submitButton.classList.remove(this._inactiveButtonClass)
    }
  }

  _checkInputValidity = (inputElement) => {
    const isValid = inputElement.validity.valid,
      inputSection = inputElement.closest(this._parentInputAndErrorSelector),
      inputError = inputSection.querySelector(this._inputErrorSelector),
      errorMessage = inputElement.validationMessage

    if (!isValid) {
      this._showErrorInput(inputError, errorMessage)
      this._markInputAsInvalid(inputElement)
    } else {
      this._hideErrorInput(inputError)
      this._unmarkInputAsInvalid(inputElement)
    }
  }

  _showErrorInput = (inputError, errorMessage) => {
    inputError.textContent = errorMessage
    inputError.classList.add(this._errorClass)
  }

  _hideErrorInput = (inputError) => {
    inputError.textContent = ''
    inputError.classList.remove(this._errorClass)
  }

  _markInputAsInvalid = (inputError) => {
    inputError.classList.add(this._inputInvalidClass)
  }

  _unmarkInputAsInvalid = (inputError) => {
    inputError.classList.remove(this._inputInvalidClass)
  }

  _setEventListeners = () => {
    const inputList = Array.from(this._form.querySelectorAll(this._inputSelector)),
      submitButton = this._form.querySelector(this._submitButtonSelector)

    this._form.addEventListener('submit', (event) => {
      event.preventDefault()
    })

    this._toggleButtonState(inputList, submitButton)

    inputList.forEach((inputEl) => {
      inputEl.addEventListener('input', () => {
        this._checkInputValidity(inputEl)
        this._toggleButtonState(inputList, submitButton)
      })
    })
  }

  enableValidation = () => {
    this._setEventListeners()
  }
}

export default FormValidator;
class FormValidator {
  
  constructor(validationConfig, form){
    this.validationConfig = validationConfig;
    this.form = form;
  }

  _toggleButtonState = (inputList, submitButton, inactiveButtonClass) => {
    const hasInvalidInput = inputList.some(el => !el.validity.valid)
  
    if (hasInvalidInput) {
      submitButton.setAttribute('disabled', true)
      submitButton.classList.add(inactiveButtonClass)
    } else {
      submitButton.removeAttribute('disabled')
      submitButton.classList.remove(inactiveButtonClass)
    }
  }
  _disableSubmitButton = (submitButton, inactiveButtonClass) => {
    submitButton.classList.add(inactiveButtonClass)
    submitButton.setAttribute('disabled', true)
  }
  
  _checkInputValidity = (inputElement, { parrentInputAndErrorSelector, inputErrorSelector, ...rest }) => {
    const isValid = inputElement.validity.valid,
      inputSection = inputElement.closest(parrentInputAndErrorSelector),
      inputError = inputSection.querySelector(inputErrorSelector),
      errorMessage = inputElement.validationMessage
  
    if (!isValid) {
      this._showErrorInput(inputError, errorMessage, rest)
      this._markInputAsInvalid(inputElement, rest)
    } else {
      this._hideErrorInput(inputError, rest)
      this._unmarkInputAsInvalid(inputElement, rest)
    }
  }
  
  _showErrorInput = (inputError, errorMessage, { errorClass }) => {
    inputError.textContent = errorMessage
    inputError.classList.add(errorClass)
  }
  
  _hideErrorInput = (inputError, { errorClass }) => {
    inputError.textContent = ''
    inputError.classList.remove(errorClass)
  }
  
  _markInputAsInvalid = (inputError, { inputInvalidClass }) => {
    inputError.classList.add(inputInvalidClass)
  }
  
  _unmarkInputAsInvalid = (inputError, { inputInvalidClass }) => {
    inputError.classList.remove(inputInvalidClass)
  }
  
  _setEventListeners = (formElement, { inputSelector, submitButtonSelector, inactiveButtonClass, ...rest }) => {
    const inputList = Array.from(formElement.querySelectorAll(inputSelector)),
      submitButton = formElement.querySelector(submitButtonSelector)
  
    formElement.addEventListener('submit', (event) => {
      event.preventDefault()
      this._disableSubmitButton(submitButton, inactiveButtonClass)
    })
  
    this._toggleButtonState(inputList, submitButton, inactiveButtonClass)
  
    inputList.forEach((inputEl) => {
      inputEl.addEventListener('input', () => {
        this._checkInputValidity(inputEl, rest)
        this._toggleButtonState(inputList, submitButton, inactiveButtonClass)
      })
    })
  }
  
  enableValidation = () => {
    this._setEventListeners(this.form, this.validationConfig)
  }
}

export default FormValidator;
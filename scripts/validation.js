const toggleButtonState = (inputList, submitButton, inactiveButtonClass) => {
  const hasInvalidInput = inputList.some(el => !el.validity.valid)

  if (hasInvalidInput) {
    submitButton.setAttribute('disabled', true)
    submitButton.classList.add(inactiveButtonClass)
  } else {
    submitButton.removeAttribute('disabled')
    submitButton.classList.remove(inactiveButtonClass)
  }
}
const disableSubmitButton = (submitButton, inactiveButtonClass) => {
  submitButton.classList.add(inactiveButtonClass)
  submitButton.setAttribute('disabled', true)
}

const checkInputValidity = (inputElement, { parrentInputAndErrorSelector, inputErrorSelector, ...rest }) => {
  const isValid = inputElement.validity.valid,
    inputSection = inputElement.closest(parrentInputAndErrorSelector),
    inputError = inputSection.querySelector(inputErrorSelector),
    errorMessage = inputElement.validationMessage

  if (!isValid) {
    showErrorInput(inputError, errorMessage, rest)
    markInputAsInvalid(inputElement, rest)
  } else {
    hideErrorInput(inputError, rest)
    unmarkInputAsInvalid(inputElement, rest)
  }
}

const showErrorInput = (inputError, errorMessage, { errorClass, ...rest }) => {
  inputError.textContent = errorMessage
  inputError.classList.add(errorClass)
}

const hideErrorInput = (inputError, { errorClass, ...rest }) => {
  inputError.textContent = ''
  inputError.classList.remove(errorClass)
}

const markInputAsInvalid = (inputError, { inputInvalidClass, ...rest }) => {
  inputError.classList.add(inputInvalidClass)
}

const unmarkInputAsInvalid = (inputError, { inputInvalidClass, ...rest }) => {
  inputError.classList.remove(inputInvalidClass)
}

const setEventListeners = (formElement, { inputSelector, submitButtonSelector, inactiveButtonClass, ...rest }) => {
  const inputList = Array.from(formElement.querySelectorAll(inputSelector)),
    submitButton = formElement.querySelector(submitButtonSelector)

  formElement.addEventListener('submit', (event) => {
    event.preventDefault()
    disableSubmitButton(submitButton, inactiveButtonClass)
  })

  toggleButtonState(inputList, submitButton, inactiveButtonClass)

  inputList.forEach((inputEl) => {
    inputEl.addEventListener('input', () => {
      checkInputValidity(inputEl, rest)
      toggleButtonState(inputList, submitButton, inactiveButtonClass)
    })
  })
}

const enableValidation = ({ formSelector, ...rest }) => {
  const formList = document.querySelectorAll(formSelector)

  formList.forEach(form => {
    setEventListeners(form, rest)
  })
}
const toggleButtonState = (inputList, submitButton, { inactiveButtonClass, ...rest }) => {
  const hasInvalidInput = inputList.some(el => !el.validity.valid)

  if (hasInvalidInput) {
    submitButton.setAttribute('disabled', true)
    submitButton.classList.add(inactiveButtonClass)
  } else {
    submitButton.removeAttribute('disabled')
    submitButton.classList.remove(inactiveButtonClass)
  }
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

const setEventListeners = (formElement, { inputSelector, submitButtonSelector, ...rest }) => {
  const inputList = Array.from(formElement.querySelectorAll(inputSelector)),
    submitButton = formElement.querySelector(submitButtonSelector)



  formElement.addEventListener('input', (event) => {
    event.preventDefault()
  })

  toggleButtonState(inputList, submitButton, rest)

  inputList.forEach((inputEl) => {
    inputEl.addEventListener('input', () => {
      checkInputValidity(inputEl, rest)
      toggleButtonState(inputList, submitButton, rest)
    })
  })
}

const enableValidation = ({ formSelector, ...rest }) => {
  const formList = document.querySelectorAll(formSelector)

  formList.forEach(form => {
    setEventListeners(form, rest)
  })
}

 
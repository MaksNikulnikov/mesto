

const toggleButtonState = (inputList, submitButton) => {
  const hasInvalidInput = inputList.some(el => !el.validity.valid)

  if (hasInvalidInput) {
    submitButton.setAttribute('disabled', true)
    submitButton.classList.add('popup__submit-btn_disabled')
  } else {
    submitButton.removeAttribute('disabled')
    submitButton.classList.remove('popup__submit-btn_disabled')
  }
}


const checkInputValidity = (inputElement) => {
  const isValid = inputElement.validity.valid,
    inputSection = inputElement.closest('.popup__form_section'),
    inputError = inputSection.querySelector('.popup__text_type_error'),
    errorMessage = inputElement.validationMessage

  if (!isValid) {
    showErrorInput(inputError, errorMessage)
  } else {
    hideErrorInput(inputError)
  }
}

const showErrorInput = (inputError, errorMessage) => {
  inputError.textContent = errorMessage
  inputError.classList.add('popup__error_visible')
}

const hideErrorInput = (inputError) => {
  inputError.textContent = ''
  inputError.classList.remove('popup__error_visible')
}

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.popup__text')),
    submitButton = formElement.querySelector('.popup__submit-btn')

  formElement.addEventListener('input', (event) => {
    event.preventDefault()
  })

  toggleButtonState(inputList, submitButton)

  inputList.forEach((inputEl) => {
    inputEl.addEventListener('input', () => {
      checkInputValidity(inputEl)
      toggleButtonState(inputList, submitButton)
    })
  })
}

const formList = document.querySelectorAll('.popup__form')

formList.forEach(form => {
  setEventListeners(form)
})




/* enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__text',
    submitButtonSelector: '.popup__submit-btn',
    inactiveButtonClass: 'popup__submit-btn_disabled',
    inputErrorClass: 'popup__text_type_error',
    errorClass: 'popup__error_visible'
  }); */
const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__text',
    parentInputAndErrorSelector: '.popup__form-section',
    submitButtonSelector: '.popup__submit-btn',
    inputErrorSelector: '.popup__error',
    inactiveButtonClass: 'popup__submit-btn_disabled',
    errorClass: 'popup__error_visible',
    inputInvalidClass: 'popup__text_invalid'
}

const apiConfig = {
    token: 'f4e3da40-9a8f-4342-ac62-1d7a154eaa67',
    groupId: 'cohort-57',
    serverName: 'https://nomoreparties.co'
}

export {validationConfig, apiConfig};
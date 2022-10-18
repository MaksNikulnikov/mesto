const popupElement = document.querySelector('.popup');
const popupButtonOpen = document.querySelector('.profile__edit-button');
const popupButtonClose = popupElement.querySelector('.popup__close-btn');
const popupButtonSave = popupElement.querySelector('.popup__submit-btn');
const popupTextFieldTitle = popupElement.querySelector('.popup__text_type_name');
const popupTextFieldSubtitle = popupElement.querySelector('.popup__text_type_caption');
const profileTextFieldTitle = document.querySelector('.profile__title');
const profileTextFieldSubitle = document.querySelector('.profile__subtitle');
const form = document.querySelector('.popup__container');

const openPopup = function () {
    popupElement.classList.toggle('popup_opened');
    popupTextFieldTitle.value = profileTextFieldTitle.textContent;
    popupTextFieldSubtitle.value = profileTextFieldSubitle.textContent;
}

popupButtonOpen.addEventListener('click', openPopup);

const closePopup = function () {
    popupElement.classList.remove('popup_opened');
    popupTextFieldTitle.value = '';
    popupTextFieldSubtitle.value = '';
}

popupButtonClose.addEventListener('click', closePopup);

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileTextFieldTitle.textContent = popupTextFieldTitle.value;
    profileTextFieldSubitle.textContent = popupTextFieldSubtitle.value;
    popupElement.classList.remove('popup_opened');
}

form.addEventListener('submit', formSubmitHandler); 
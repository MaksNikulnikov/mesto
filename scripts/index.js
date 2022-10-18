const popupElement = document.querySelector('.popup');
const popupButtonOpen = document.querySelector('.profile__edit-button');
const popupButtonClose = popupElement.querySelector('.popup__close-btn');
const popupTextFieldTitle = popupElement.querySelector('.popup__text_type_name');
const popupTextFieldSubtitle = popupElement.querySelector('.popup__text_type_caption');
const profileTextFieldTitle = document.querySelector('.profile__title');
const profileTextFieldSubitle = document.querySelector('.profile__subtitle');
const form = document.querySelector('.popup__container');

const openPopup = function () {
    popupElement.classList.add('popup_opened');
    popupTextFieldTitle.value = profileTextFieldTitle.textContent;
    popupTextFieldSubtitle.value = profileTextFieldSubitle.textContent;
}

const closePopup = function () {
    popupElement.classList.remove('popup_opened');
}

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileTextFieldTitle.textContent = popupTextFieldTitle.value;
    profileTextFieldSubitle.textContent = popupTextFieldSubtitle.value;
    closePopup();
}

popupButtonOpen.addEventListener('click', openPopup);
popupButtonClose.addEventListener('click', closePopup);
form.addEventListener('submit', formSubmitHandler); 
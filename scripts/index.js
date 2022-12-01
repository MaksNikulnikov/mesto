import validationConfig from './config.js';
import initialCards from './constants.js';
import Card from './card.js';
import FormValidator from './formValidator.js';

// popup profile

const popupProfileElement = document.querySelector('.popup_add-profile');
const popupProfileButtonOpen = document.querySelector('.profile__edit-button');
const popupProfileButtonClose = popupProfileElement.querySelector('.popup__close-btn');
const popupProfileTextFieldTitle = popupProfileElement.querySelector('.popup__text_type_name');
const popupProfileTextFieldSubtitle = popupProfileElement.querySelector('.popup__text_type_caption');
const profileTextFieldTitle = document.querySelector('.profile__title');
const profileTextFieldSubitle = document.querySelector('.profile__subtitle');
const formProfile = popupProfileElement.querySelector('.popup__container');

//popup add cards

const popupAddCardElement = document.querySelector('.popup_add-card');
const popupAddCardButtonOpen = document.querySelector('.profile__add-button');
const popupAddcardButtonClose = popupAddCardElement.querySelector('.popup__close-btn');
const popupAddCardTextFieldTitle = popupAddCardElement.querySelector('.popup__text_type_name');
const popupAddCardTextFieldImageURL = popupAddCardElement.querySelector('.popup__text_type_url');
const formAddCard = popupAddCardElement.querySelector('.popup__container');

//popup view image

const popupViewImageElement = document.querySelector('.popup_view-image');
const popupViewImageImage = popupViewImageElement.querySelector('.popup__image');
const popupViewImageDescription = popupViewImageElement.querySelector('.popup__figcaption');
const popupViewImageButtonClose = popupViewImageElement.querySelector('.popup__close-btn');

// section elements

const cardsTemplate = document.querySelector('.element__template').content;
const cardsContainer = document.querySelector('.elements__holder');

//popups open close

const handleEscUp = function (evt) {
    if (evt.key === 'Escape') {
        closePopup(document.querySelector('.popup_opened'))
    }
}

const openPopup = function (popupElement) {
    popupElement.classList.add('popup_opened');
    document.addEventListener('keyup', handleEscUp)
}

const openEditProfilePopup = function (popupElement) {
    popupProfileTextFieldTitle.value = profileTextFieldTitle.textContent;
    popupProfileTextFieldSubtitle.value = profileTextFieldSubitle.textContent;
    openPopup(popupElement);
}

const closePopup = function (popupElement) {
    popupElement.classList.remove('popup_opened');
    document.removeEventListener('keyup', handleEscUp)
}

const closeAddCardPopup = function (popupElement) {
    popupElement.querySelector('.popup__form').reset();
    closePopup(popupElement);
}

const setListenerClosePopupOverleyClicked = function (popupElements) {
    popupElements.forEach(popupElement => {
        popupElement.addEventListener('click', (ev) => {
            if (ev.target === ev.currentTarget) {
                closePopup(popupElement)
            }
        })
    })
}

setListenerClosePopupOverleyClicked(document.querySelectorAll('.popup'))

//popup add profile

const formProfileSubmitHandler = function (evt) {
    evt.preventDefault();
    profileTextFieldTitle.textContent = popupProfileTextFieldTitle.value;
    profileTextFieldSubitle.textContent = popupProfileTextFieldSubtitle.value;
    closePopup(popupProfileElement);
}

//cards

const renderCardAppend = function (card) {
    cardsContainer.append(card);
}

const renderCardPrepend = function (card) {
    cardsContainer.prepend(card);
}

const renderPopupViewImage = function (card) {
    popupViewImageImage.src = card.querySelector('.element__image').src;
    popupViewImageImage.alt = card.querySelector('.element__caption').textContent;
    popupViewImageDescription.textContent = card.querySelector('.element__caption').textContent;
}

const makeImageClicable = function (card) {
    const image = card.querySelector('.element__image');
    image.addEventListener('click', function (evt) {
        renderPopupViewImage(evt.target.closest('.element'));
        openPopup(popupViewImageElement);
    });
}

initialCards.forEach((el) => {
    const card = new Card(el.name, el.link, cardsTemplate).getInstance();
    makeImageClicable(card);
    renderCardAppend(card);
});

//popup add card

const formAddCardSubmitHandler = function (evt) {
    evt.preventDefault();
    const cardName = popupAddCardTextFieldTitle.value;
    const cardLink = popupAddCardTextFieldImageURL.value;
    const card = new Card(cardName, cardLink, cardsTemplate).getInstance();
    makeImageClicable(card);
    renderCardPrepend(card);
    closeAddCardPopup(popupAddCardElement);
}

//popup add profile

popupProfileButtonOpen.addEventListener('click', function () {
    openEditProfilePopup(popupProfileElement);
});
popupProfileButtonClose.addEventListener('click', function () {
    closePopup(popupProfileElement);
});
formProfile.addEventListener('submit', formProfileSubmitHandler);

//popup add cards

popupAddCardButtonOpen.addEventListener('click', function () {
    openPopup(popupAddCardElement);
})
popupAddcardButtonClose.addEventListener('click', function () {
    closeAddCardPopup(popupAddCardElement);
})
formAddCard.addEventListener('submit', formAddCardSubmitHandler);

//popup view image

popupViewImageButtonClose.addEventListener('click', function () {
    closePopup(popupViewImageElement);
})

//validation

const formList = document.querySelectorAll(validationConfig.formSelector)
formList.forEach(form=>{
    new FormValidator(validationConfig, form).enableValidation();
})
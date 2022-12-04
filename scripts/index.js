import validationConfig from './config.js';
import initialCards from './constants.js';
import Card from './Card.js';
import FormValidator from './FormValidator.js';

/** Popup profile.
 * @constan
 */
const popupProfileElement = document.querySelector('.popup_add-profile');
const popupProfileButtonOpen = document.querySelector('.profile__edit-button');
const popupProfileButtonClose = popupProfileElement.querySelector('.popup__close-btn');
const popupProfileTextFieldTitle = popupProfileElement.querySelector('.popup__text_type_name');
const popupProfileTextFieldSubtitle = popupProfileElement.querySelector('.popup__text_type_caption');
const profileTextFieldTitle = document.querySelector('.profile__title');
const profileTextFieldSubtitle = document.querySelector('.profile__subtitle');
const formProfile = popupProfileElement.querySelector('.popup__container');
const popupProfileValidator = new FormValidator(validationConfig, formProfile);

/** Popup add card.
 * @constan
 */
const popupAddCardElement = document.querySelector('.popup_add-card');
const popupAddCardButtonOpen = document.querySelector('.profile__add-button');
const popupAddCardButtonClose = popupAddCardElement.querySelector('.popup__close-btn');
const popupAddCardTextFieldTitle = popupAddCardElement.querySelector('.popup__text_type_name');
const popupAddCardTextFieldImageURL = popupAddCardElement.querySelector('.popup__text_type_url');
const formAddCard = popupAddCardElement.querySelector('.popup__container');
const popupAddCardForm = popupAddCardElement.querySelector('.popup__form');
const popupAddCardValidator = new FormValidator(validationConfig, popupAddCardForm);

/** Popup view image.
 * @constan
 */
const popupViewImageElement = document.querySelector('.popup_view-image');
const popupViewImageImage = popupViewImageElement.querySelector('.popup__image');
const popupViewImageDescription = popupViewImageElement.querySelector('.popup__figcaption');
const popupViewImageButtonClose = popupViewImageElement.querySelector('.popup__close-btn');

const cardsTemplate = document.querySelector('.element__template').content;
const cardsContainer = document.querySelector('.elements__holder');
const popupElements = document.querySelectorAll('.popup');
const formList = document.querySelectorAll(validationConfig.formSelector);

const handleEscUp = function (evt) {
    if (evt.key === 'Escape') {
        closePopup(document.querySelector('.popup_opened'))
    }
}

const openPopup = function (popupElement) {
    popupElement.classList.add('popup_opened');
    document.addEventListener('keyup', handleEscUp)
}

const openEditProfilePopup = function () {
    popupProfileTextFieldTitle.value = profileTextFieldTitle.textContent;
    popupProfileTextFieldSubtitle.value = profileTextFieldSubtitle.textContent;
    openPopup(popupProfileElement);
}

const closePopup = function (popupElement) {
    popupElement.classList.remove('popup_opened');
    document.removeEventListener('keyup', handleEscUp)
}

const closeAddCardPopup = function () {
    popupAddCardForm.reset();
    popupAddCardValidator.disableButton();
    closePopup(popupAddCardElement);
}

const bindPopupsOverlayClickListeners = function () {
    popupElements.forEach(popupElement => {
        popupElement.addEventListener('click', (ev) => {
            if (ev.target === ev.currentTarget) {
                closePopup(popupElement)
            }
        })
    })
}
bindPopupsOverlayClickListeners();

const renderCardAppend = function (card) {
    cardsContainer.append(card);
}

const renderCardPrepend = function (card) {
    cardsContainer.prepend(card);
}

const renderPopupViewImage = function (cardName, imgUrl) {
    popupViewImageImage.src = imgUrl;
    popupViewImageImage.alt = cardName;
    popupViewImageDescription.textContent = cardName;
    openPopup(popupViewImageElement);
}

const getCard = function (cardData) {
    const card = new Card(cardData, cardsTemplate, renderPopupViewImage).createCard();
    return card
}

initialCards.forEach((cardData) => {
    const card = getCard({ cardName: cardData.name, cardImgURL: cardData.link });
    renderCardAppend(card);
});

/** Handler for popup add profile. */
const handleProfileFormSubmit = function (evt) {
    evt.preventDefault();
    profileTextFieldTitle.textContent = popupProfileTextFieldTitle.value;
    profileTextFieldSubtitle.textContent = popupProfileTextFieldSubtitle.value;
    closePopup(popupProfileElement);
}

/** Handler for popup add card. */
const handleCardFormSubmit = function (evt) {
    evt.preventDefault();
    const cardName = popupAddCardTextFieldTitle.value;
    const cardImgURL = popupAddCardTextFieldImageURL.value;
    const card = getCard({ cardName, cardImgURL });
    renderCardPrepend(card);
    closeAddCardPopup(popupAddCardElement);
}

/** Addition of listeners. */
popupProfileButtonOpen.addEventListener('click', function () {
    openEditProfilePopup();
});
popupProfileButtonClose.addEventListener('click', function () {
    closePopup(popupProfileElement);
});
formProfile.addEventListener('submit', handleProfileFormSubmit);

popupAddCardButtonOpen.addEventListener('click', function () {
    openPopup(popupAddCardElement);
})
popupAddCardButtonClose.addEventListener('click', function () {
    closeAddCardPopup(popupAddCardElement);
})
formAddCard.addEventListener('submit', handleCardFormSubmit);

popupViewImageButtonClose.addEventListener('click', function () {
    closePopup(popupViewImageElement);
})

/** Validation connection. */
popupAddCardValidator.enableValidation();
popupProfileValidator.enableValidation();

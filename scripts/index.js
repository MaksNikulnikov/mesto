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

const openPopup = function (popupElement) {
    popupElement.classList.add('popup_opened');
}

const openEditProfilePopup = function (popupElement) {
    popupProfileTextFieldTitle.value = profileTextFieldTitle.textContent;
    popupProfileTextFieldSubtitle.value = profileTextFieldSubitle.textContent;
    openPopup(popupElement);
}

const closePopup = function (popupElement) {
    popupElement.classList.remove('popup_opened');
}

const closeAddCardPopup = function (popupElement) {
    popupElement.querySelector('.popup__form').reset();
    closePopup(popupElement);
}

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

const addlikeListener = function (card) {
    const heartElement = card.querySelector('.element__heart');
    heartElement.addEventListener('click', function () {
        heartElement.classList.toggle('element__heart_clicked');
    });
}

const addRemoveListener = function (card) {
    const removeElement = card.querySelector('.element__delete');
    removeElement.addEventListener('click', function () {
        removeElement.closest('.element').remove();
    });
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

//cards factory

const createCard = function (cardName, cardImgURL) {
    const card = cardsTemplate.cloneNode(true);

    const cardImage  = card.querySelector('.element__image');
    cardImage.src = cardImgURL;
    cardImage.alt = cardName;
    card.querySelector('.element__title').textContent = cardName;

    addlikeListener(card);
    addRemoveListener(card);
    makeImageClicable(card);
    return card;
}

initialCards.forEach((el) => {
    const card = createCard(el.name, el.link);
    renderCardAppend(card);
});

//popup add card

const formAddCardSubmitHandler = function (evt) {
    evt.preventDefault();
    const cardName = popupAddCardTextFieldTitle.value;
    const cardLink = popupAddCardTextFieldImageURL.value;
    const card = createCard(cardName, cardLink);
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

enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__text',
    inputInvalidClass: 'popup__text_invalid',
    submitButtonSelector: '.popup__submit-btn',
    inactiveButtonClass: 'popup__submit-btn_disabled',
    parrentInputAndErrorSelector: '.popup__form_section',
    inputErrorSelector: '.popup__text_type_error',
    errorClass: 'popup__error_visible'
  });
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

// section elements

const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];
const cardsTemplate = document.querySelector('.element__template').content;
const cardsContainer = document.querySelector('.elements__holder');

//popups open close

const openPopup = function (popupElement) {
    popupElement.classList.add('popup_opened');
    if (popupElement.classList.value.includes('profile')) {
        popupProfileTextFieldTitle.value = profileTextFieldTitle.textContent;
        popupProfileTextFieldSubtitle.value = profileTextFieldSubitle.textContent;
    }
}

const closePopup = function (popupElement) {
    popupElement.classList.remove('popup_opened');
    if (popupElement.classList.value.includes('add-card')) {
        popupAddCardTextFieldTitle.value = '';
        popupAddCardTextFieldImageURL.value = '';
    }
}

//popup add profile

const formProfileSubmitHandler = function (evt) {
    evt.preventDefault();
    profileTextFieldTitle.textContent = popupProfileTextFieldTitle.value;
    profileTextFieldSubitle.textContent = popupProfileTextFieldSubtitle.value;
    closePopup(popupProfileElement);
}

//cards

const addlikeListener = function (card) {
    const heartElement = card.querySelector('.element__heart');
    heartElement.addEventListener('click', function(){
        heartElement.classList.toggle('element__heart_clicked');
    });
}

const addRemoveListener = function (card) {
    const removeElement = card.querySelector('.element__delete');
    removeElement.addEventListener('click', function(){
        removeElement.closest('.element').remove();
    });
}

//cards factory

const createCards = function (cardName, cardImgURL, container, isAppendRender) {
    const makeCards = function (descriptionImage, URlImage) {
        const card = cardsTemplate.cloneNode(true);
        card.querySelector('.element__image').src = URlImage;
        card.querySelector('.element__image').alt = descriptionImage;
        card.querySelector('.element__title').textContent = descriptionImage;
        return card;
    }

    const renderCards = function (card, container) {
        if (isAppendRender) {
            container.append(card);
        } else {
            container.prepend(card);
        }
    }

    const card = makeCards(cardName, cardImgURL);
    addlikeListener(card);
    addRemoveListener(card);
    renderCards(card, container);

}

initialCards.forEach((el) => {
    createCards(el.name, el.link, cardsContainer, true);
});

//popup add card

const formAddCardSubmitHandler = function (evt) {
    evt.preventDefault();
    const cardName = popupAddCardTextFieldTitle.value;
    const cardLink = popupAddCardTextFieldImageURL.value;

    createCards(cardName, cardLink, cardsContainer, false);
    closePopup(popupAddCardElement);
}

//popup add profile

popupProfileButtonOpen.addEventListener('click', function () {
    openPopup(popupProfileElement);
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
    closePopup(popupAddCardElement);
})
formAddCard.addEventListener('submit', formAddCardSubmitHandler); 
// popup profile
const popupProfileElement = document.querySelector('.popup_add-profile');
const popupProfileButtonOpen = document.querySelector('.profile__edit-button');
const popupProfileButtonClose = popupProfileElement.querySelector('.popup__close-btn');
const popupProfileTextFieldTitle = popupProfileElement.querySelector('.popup__text_type_name');
const popupProfileTextFieldSubtitle = popupProfileElement.querySelector('.popup__text_type_caption');
const profileTextFieldTitle = document.querySelector('.profile__title');
const profileTextFieldSubitle = document.querySelector('.profile__subtitle');
const formProfile = document.querySelector('.popup__container');

//popup add cards
const popupAddCardsElement = document.querySelector('.popup_add-card');
const popupAddCardButtonOpen = document.querySelector('.profile__add-button');
const popupAddcardButtonClose = popupAddCardsElement.querySelector('.popup__close-btn');

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

//popup add profile

const openPopup = function (popupElement) {
    console.log('hello');
    popupElement.classList.add('popup_opened');
    if (popupElement.classList.value.includes('profile')) {
        popupProfileTextFieldTitle.value = profileTextFieldTitle.textContent;
        popupProfileTextFieldSubtitle.value = profileTextFieldSubitle.textContent;
    }

}

const closePopup = function (popupElement) {
    popupElement.classList.remove('popup_opened');
}

const formProfileSubmitHandler = function (evt) {
    evt.preventDefault();
    profileTextFieldTitle.textContent = popupProfileTextFieldTitle.value;
    profileTextFieldSubitle.textContent = popupProfileTextFieldSubtitle.value;
    closePopup(popupProfileElement);
}

//section elements

const initialiseCards = function (initialElements, initialContainer) {

    const makeCards = function (urlImage, descriptionImage) {
        const card = cardsTemplate.cloneNode(true);
        card.querySelector('.element__image').src = urlImage;
        card.querySelector('.element__image').alt = descriptionImage;
        card.querySelector('.element__title').textContent = descriptionImage;
        return card;
    }

    const renderCards = function (card, container) {
        container.append(card);
    }

    initialElements.forEach(element => {
        console.log(element.name, element.link);
        const card = makeCards(element.link, element.name);
        renderCards(card, initialContainer);
    });

}

initialiseCards(initialCards, cardsContainer);

//popup add profile

popupProfileButtonOpen.addEventListener('click', function(){
    openPopup(popupProfileElement);
});
popupProfileButtonClose.addEventListener('click', function(){
    closePopup(popupProfileElement);
});
formProfile.addEventListener('submit', formProfileSubmitHandler); 

//popup add cards

popupAddCardButtonOpen.addEventListener('click', function(){
    openPopup(popupAddCardsElement);
})
popupAddcardButtonClose.addEventListener('click', function(){
    closePopup(popupAddCardsElement);
})
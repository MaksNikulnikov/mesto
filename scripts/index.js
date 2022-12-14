import validationConfig from './config.js';
import initialCards from './constants.js';
import Card from './Card.js';
import FormValidator from './FormValidator.js';
import PopupWithImage from './components/PopupWithImage.js';
import PopupWithForm from './components/PopupWithForm.js';
import UserInfo from './components/UserInfo.js';


const popupProfileButtonOpen = document.querySelector('.profile__edit-button');

const popupProfileValidator = new FormValidator(validationConfig, document.forms.formProfile);


const popupAddCardButtonOpen = document.querySelector('.profile__add-button');
const popupAddCardValidator = new FormValidator(validationConfig, document.forms.formAddCard);


const cardsTemplate = document.querySelector('.element__template').content;
const cardsContainer = document.querySelector('.elements__holder');
const popupElements = document.querySelectorAll('.popup');

const handleEscUp = function (evt) {
    if (evt.key === 'Escape') {
        closePopup(document.querySelector('.popup_opened'))
    }
}

const closePopup = function (popupElement) {
    popupElement.classList.remove('popup_opened');
    document.removeEventListener('keyup', handleEscUp)
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


const renderPopupViewImageClass = function (cardName, imgUrl) {
    const popupWithImage = new PopupWithImage('.popup_view-image',{src:imgUrl, caption:cardName})
    popupWithImage.setEventListeners();
    popupWithImage.open();
}

const getCard = function (cardData) {
    const card = new Card(cardData, cardsTemplate, renderPopupViewImageClass).createCard();
    return card
}

initialCards.forEach((cardData) => {
    const card = getCard({ cardName: cardData.name, cardImgURL: cardData.link });
    renderCardAppend(card);
});

const userInfo = new UserInfo({nameSelector:'.profile__title', descriptionSelector:'.profile__subtitle'});

const profilePopup = new PopupWithForm('.popup_add-profile', (event)=>{
    event.preventDefault();
    
    const popup = profilePopup;
    popup._getInputValues();
    
    const {inputToProfileTitle: name, inputToProfileSubtitle: description} = popup._inputValues;
    userInfo.setUserInfo({name, description});
    popup.close();
    popupProfileValidator.toggleButtonState();
});

    profilePopup.setEventListeners();


const newCardPopup = new PopupWithForm('.popup_add-card', (event)=>{
    event.preventDefault();
    
    const popup = newCardPopup;
    popup._getInputValues();  
    const cardName = popup._inputValues.inputToProfileTitle;
    const cardImgURL = popup._inputValues.inputToProfileSubtitle;
    const card = getCard({ cardName, cardImgURL });
    renderCardPrepend(card);
    popup.close();
    popupAddCardValidator.toggleButtonState();
});

    newCardPopup.setEventListeners();

/** Addition of listeners. */
popupProfileButtonOpen.addEventListener('click', function () {
   profilePopup.open();
});


popupAddCardButtonOpen.addEventListener('click', function () {
    newCardPopup.open();
})

popupAddCardValidator.enableValidation();
popupProfileValidator.enableValidation();
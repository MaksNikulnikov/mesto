import validationConfig from './config.js';
import initialCards from './constants.js';
import Card from './components/Card.js';
import FormValidator from './components/FormValidator.js';
import PopupWithImage from './components/PopupWithImage.js';
import PopupWithForm from './components/PopupWithForm.js';
import UserInfo from './components/UserInfo.js';
import Section from './components/Section.js';

const popupProfileButtonOpen = document.querySelector('.profile__edit-button');
const popupAddCardButtonOpen = document.querySelector('.profile__add-button');
const popupProfileValidator = new FormValidator(validationConfig, document.forms.formProfile);
const popupAddCardValidator = new FormValidator(validationConfig, document.forms.formAddCard);

const handleCardClick = function (cardName, imgUrl) {
    const popupWithImage = new PopupWithImage('.popup_view-image', { src: imgUrl, caption: cardName })
    popupWithImage.setEventListeners();
    popupWithImage.open();
}

const sectionCards = new Section({
    items: initialCards, renderer: (cardData) => {
        const card = new Card(cardData, '.element__template', handleCardClick).createCard();
        return card;
    }
}, '.elements__holder');

sectionCards.render();

const userInfo = new UserInfo({ nameSelector: '.profile__title', descriptionSelector: '.profile__subtitle' });

const profilePopup = new PopupWithForm('.popup_add-profile', (event, inputValues) => {
    event.preventDefault();

    const popup = profilePopup;
    const { inputToProfileTitle: name, inputToProfileSubtitle: description } = inputValues;
    userInfo.setUserInfo({ name, description });
    popup.close();
    popupProfileValidator.toggleButtonState();
});

const newCardPopup = new PopupWithForm('.popup_add-card', (event, inputValues) => {
    event.preventDefault();

    const popup = newCardPopup;
    const { inputToProfileTitle: name, inputToProfileSubtitle: link } = inputValues;
    sectionCards.addItem({name, link});
    popup.close();
    popupAddCardValidator.toggleButtonState();
});

newCardPopup.setEventListeners();
profilePopup.setEventListeners();

popupProfileButtonOpen.addEventListener('click', function () {
    profilePopup.open(userInfo.getUserInfo());
});
popupAddCardButtonOpen.addEventListener('click', function () {
    newCardPopup.open();
})

popupAddCardValidator.enableValidation();
popupProfileValidator.enableValidation();
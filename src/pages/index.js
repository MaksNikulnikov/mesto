import './index.css';
import validationConfig from '../utils/config.js';
import { initialCards, popupAddCardButtonOpen, popupProfileButtonOpen } from '../utils/constants.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import Section from '../components/Section.js';
import Api from '../components/Api';

const api = new Api();
const popupProfileValidator = new FormValidator(validationConfig, document.forms.formProfile);
const popupAddCardValidator = new FormValidator(validationConfig, document.forms.formAddCard);

const popupWithImage = new PopupWithImage('.popup_view-image')

const handleCardClick = function ({ src, caption }) {
    popupWithImage.setEventListeners();
    popupWithImage.open({ src, caption });
}

const getCard = function (cardData) {
    return new Card(cardData, '.element__template', handleCardClick).createCard();
}

const sectionCards = new Section({
    items: initialCards,
    renderer: (cardData) => {
        sectionCards.addItem(getCard(cardData),
            true);
    }
}, '.elements__holder');

const userInfo = new UserInfo({ nameSelector: '.profile__title', descriptionSelector: '.profile__subtitle' }, api.getUserInfo());

const profilePopup = new PopupWithForm('.popup_add-profile', (event, inputValues) => {
    event.preventDefault();

    userInfo.setUserInfo(inputValues);
    profilePopup.close();
    popupProfileValidator.toggleButtonState();
});

const newCardPopup = new PopupWithForm('.popup_add-card', (event, inputValues) => {
    event.preventDefault();

    sectionCards.addItem(getCard(inputValues),
        false);
    newCardPopup.close();
    popupAddCardValidator.toggleButtonState();
});

sectionCards.render();

newCardPopup.setEventListeners();
profilePopup.setEventListeners();

popupProfileButtonOpen.addEventListener('click', function () {
    profilePopup.setInputValues(userInfo.getUserInfo());
    profilePopup.open();
});
popupAddCardButtonOpen.addEventListener('click', function () {
    newCardPopup.open({});
})

popupAddCardValidator.enableValidation();
popupProfileValidator.enableValidation();
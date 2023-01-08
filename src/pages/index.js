import './index.css';
import validationConfig from '../utils/config.js';
import { popupAddCardButtonOpen, popupProfileButtonOpen } from '../utils/constants.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import Section from '../components/Section.js';
import Api from '../components/Api';
import PopupRemoveElement from '../components/PopupRemoveElement';

const api = new Api();
const popupProfileValidator = new FormValidator(validationConfig, document.forms.formProfile);
const popupAddCardValidator = new FormValidator(validationConfig, document.forms.formAddCard);

const popupWithImage = new PopupWithImage('.popup_view-image')

const handleCardClick = function ({ src, caption }) {
    popupWithImage.setEventListeners();
    popupWithImage.open({ src, caption });
}

const popupRemoveCard = new PopupRemoveElement('.popup_remove-card', (card) => {
    api.deleteCard(card.getId())
        .then(card.removeCard());
    popupRemoveCard.close();
});

const handleRemoveClick = function (removedElement) {
    popupRemoveCard.setRemovedElement(removedElement);
    popupRemoveCard.setEventListeners();
    popupRemoveCard.open();
}

const getCard = function (cardData) {
    cardData.isDelitable = userInfo.getCurrentUserId() === cardData.ownerId;
    return new Card(cardData, '.element__template', handleCardClick, handleRemoveClick).createCard();
}

const sectionCards = new Section('.elements__holder');

const downnloadCardPromise = api.getCards()
    .then((data) => {
        const initialCards = [];
        data.forEach((item) => {
            initialCards.push({
                name: item.name,
                link: item.link,
                likes: item.likes,
                id: item._id,
                ownerId: item.owner._id
            });
        });
        return initialCards;
    })


const userInfo = new UserInfo({
    nameSelector: '.profile__title',
    descriptionSelector: '.profile__subtitle',
    avatarSelector: '.profile__image'
});

const userInfoPromise = api.getUserInfo()
    .then((data) => {
        userInfo.setAvatar(data.avatar);
        userInfo.setUserInfo({
            name: data.name,
            description: data.about,
            id: data._id
        });
    });

Promise.all([downnloadCardPromise, userInfoPromise])
    .then(([initialCards]) => {
        initialCards.forEach(cardData => {
            sectionCards.addItem(getCard(cardData), true);
        })
    })

const profilePopup = new PopupWithForm('.popup_add-profile', (event, inputValues) => {
    event.preventDefault();
    api.patchUserInfo({ name: inputValues.name, about: inputValues.description })
        .then(data => {
            userInfo.setUserInfo({
                name: data.name,
                description: data.about,
                id: data._id
            })
        });
    profilePopup.close();
    popupProfileValidator.toggleButtonState();
});

const newCardPopup = new PopupWithForm('.popup_add-card', (event, inputValues) => {
    event.preventDefault();
    api.postCard(inputValues)
        .then(data => {
            sectionCards.addItem(getCard({
                name: data.name,
                link: data.link,
                likes: data.likes,
                id: data._id,
                ownerId: data.owner._id
            }),
                false);
        })
    newCardPopup.close();
    popupAddCardValidator.toggleButtonState();
});

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
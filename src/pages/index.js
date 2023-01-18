import './index.css';
import {
    validationConfig,
    apiConfig
} from '../utils/config.js';
import {
    popupAddCardButtonOpen,
    popupProfileButtonOpen,
    popupChangeAvatarButtonOpen
} from '../utils/constants.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import Section from '../components/Section.js';
import Api from '../components/Api';
import PopupWithButton from '../components/PopupWithButton';

const api = new Api(apiConfig);
const popupProfileValidator = new FormValidator(validationConfig, document.forms.formProfile);
const popupAddCardValidator = new FormValidator(validationConfig, document.forms.formAddCard);
const popupChangeAvatarValidator = new FormValidator(validationConfig, document.forms.formChangeProfileAvatar);
const sectionCards = new Section('.elements__holder');

let userId = null;

const popupRemoveCard = new PopupWithButton('.popup_remove-card', (card) => {
    api.deleteCard(card.getId())
        .then(() => {
            card.removeCard();
            popupRemoveCard.close();
        })
        .catch(err => console.error(err));
});

popupRemoveCard.setEventListeners();

const handleRemoveClick = function (removedElement) {
    popupRemoveCard.setParameter(removedElement);
    popupRemoveCard.open();
}

const handleLikeClick = function (isLiked, card) {
    const promise = isLiked ? api.deleteLike(card.getId()) : api.putLike(card.getId());
    promise
        .then(data => {
            card.setNumberOfLikes(data.likes.length);
            card.searhIsCardLiked(data.likes, userId);
            card.toddleHeartElementState();
        })
        .catch(err => console.error(err));
}

const handleCardClick = function ({ src, caption }) {
    popupWithImage.open({ src, caption });
}

const getCard = function (data) {
    const cardData = {
        name: data.name,
        link: data.link,
        likes: data.likes,
        id: data._id,
        ownerId: data.owner._id
    };
    cardData.isDelitable = userId === cardData.ownerId;
    cardData.isLiked = false;
    cardData.likes.forEach((user) => {
        if (user._id === userId) {
            cardData.isLiked = true;
        }
    })
    return new Card(cardData, '.element__template', handleCardClick, handleRemoveClick, handleLikeClick).createCard();
}

const userInfo = new UserInfo({
    nameSelector: '.profile__title',
    descriptionSelector: '.profile__subtitle',
    avatarSelector: '.profile__image'
});

Promise.all([api.getCards(), api.getUserInfo()])
    .then(([cardsData, userData]) => {
        userInfo.setAvatar(userData.avatar);
        userInfo.setUserInfo(userData);
        userId = userInfo.getCurrentUserId();
        cardsData.forEach(data => sectionCards.addItem(getCard(data), true));
    })
    .catch(err => console.error(err));

const popupWithImage = new PopupWithImage('.popup_view-image');
popupWithImage.setEventListeners();

const profilePopup = new PopupWithForm('.popup_add-profile', (event, inputValues) => {
    event.preventDefault();
    profilePopup.showLoading();
    api.patchUserInfo({ name: inputValues.name, about: inputValues.description })
        .then(data => {
            userInfo.setUserInfo(data);
            userId = userInfo.getCurrentUserId();
            profilePopup.close();
            popupProfileValidator.toggleButtonState();
        })
        .catch(err => console.error(err))
        .finally(() => profilePopup.showLoadingIsFinished());
});

const newCardPopup = new PopupWithForm('.popup_add-card', (event, inputValues) => {
    event.preventDefault();
    newCardPopup.showLoading();
    api.postCard(inputValues)
        .then(data => {
            sectionCards.addItem(getCard(data), false);
            newCardPopup.close();
        })
        .catch(err => console.error(err))
        .finally(() => newCardPopup.showLoadingIsFinished());
});

const changeAvatarPopup = new PopupWithForm('.popup_change-profile-avatar', (event, inputValues) => {
    event.preventDefault();
    changeAvatarPopup.showLoading();
    api.patchUserInfoAvatar(inputValues)
        .then(data => {
            userInfo.setAvatar(data.avatar);
            changeAvatarPopup.close();
        })
        .catch(err => console.error(err))
        .finally(() => changeAvatarPopup.showLoadingIsFinished());
})

newCardPopup.setEventListeners();
profilePopup.setEventListeners();
changeAvatarPopup.setEventListeners();

popupProfileButtonOpen.addEventListener('click', function () {
    profilePopup.setInputValues(userInfo.getUserInfo());
    profilePopup.open();
    popupProfileValidator.toggleButtonState();
});
popupAddCardButtonOpen.addEventListener('click', function () {
    popupAddCardValidator.toggleButtonState();
    newCardPopup.open({});
})

popupChangeAvatarButtonOpen.addEventListener('click', function () {
    popupChangeAvatarValidator.toggleButtonState();
    changeAvatarPopup.open();
})

popupAddCardValidator.enableValidation();
popupProfileValidator.enableValidation();
popupChangeAvatarValidator.enableValidation();
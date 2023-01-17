import './index.css';
import {
    validationConfig,
    apiConfig
} from '../utils/config.js';
import {
    popupAddCardButtonOpen,
    popupProfileButtonOpen,
    popupChangeAvatarButtonOpen,
    avatar
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

const handleRemoveClick = function (removedElement) {

    const popupRemoveCard = new PopupWithButton('.popup_remove-card', (card) => {
        api.deleteCard(card.getId())
            .then(card.removeCard());
        popupRemoveCard.removeEventListener();
        popupRemoveCard.close();
    }, removedElement);

    popupRemoveCard.setEventListeners();
    popupRemoveCard.open();
}

const handleLikeClick = function (isLiked, card) {
    const promise = isLiked ? api.deleteLike(card.getId()) : api.putLike(card.getId());
    promise
        .then(data => {
            card._amountLikes = data.likes.length;
            let islikedInResponce = false;
            data.likes.forEach((user) => {
                if (user._id === userInfo.getCurrentUserId()) {
                    islikedInResponce = true;
                }
            });
            card._isLiked = islikedInResponce;
            card.toddleHeartElementState();
        })
}

const handleCardClick = function ({ src, caption }) {
    popupWithImage.setEventListeners();
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
    cardData.isDelitable = userInfo.getCurrentUserId() === cardData.ownerId;
    cardData.isLiked = false;
    cardData.likes.forEach((user) => {
        if (user._id === userInfo.getCurrentUserId()) {
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

const userInfoPromise = api.getUserInfo()
    .then((data) => {
        userInfo.setAvatar(data.avatar);
        userInfo.setUserInfo(data);
    });

Promise.all([api.getCards(), userInfoPromise])
    .then(([datas]) => { datas.forEach(data => sectionCards.addItem(getCard(data), true)) });

const popupWithImage = new PopupWithImage('.popup_view-image')

const profilePopup = new PopupWithForm('.popup_add-profile', (event, inputValues) => {
    event.preventDefault();
    profilePopup.showLoading();
    api.patchUserInfo({ name: inputValues.name, about: inputValues.description })
        .then(data => {
            userInfo.setUserInfo(data);
            profilePopup.close();
            profilePopup.showLoadingIsFinished();
            popupProfileValidator.toggleButtonState();
        });
});

const newCardPopup = new PopupWithForm('.popup_add-card', (event, inputValues) => {
    event.preventDefault();
    newCardPopup.showLoading();
    api.postCard(inputValues)
        .then(data => {
            sectionCards.addItem(getCard(data), false);
            newCardPopup.close();
            newCardPopup.showLoadingIsFinished();
        });
});

const changeAvatarPopup = new PopupWithForm('.popup_change-profile-avatar', (event, inputValues) => {
    event.preventDefault();
    changeAvatarPopup.showLoading();
    api.patchUserInfoAvatar(inputValues)
        .then(data => {
            avatar.src = data.avatar;
            changeAvatarPopup.close();
            changeAvatarPopup.showLoadingIsFinished();
        });
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
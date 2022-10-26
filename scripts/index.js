// popup profile
const popupElement = document.querySelector('.popup');
const popupButtonOpen = document.querySelector('.profile__edit-button');
const popupButtonClose = popupElement.querySelector('.popup__close-btn');
const popupTextFieldTitle = popupElement.querySelector('.popup__text_type_name');
const popupTextFieldSubtitle = popupElement.querySelector('.popup__text_type_caption');
const profileTextFieldTitle = document.querySelector('.profile__title');
const profileTextFieldSubitle = document.querySelector('.profile__subtitle');
const form = document.querySelector('.popup__container');

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


const openPopup = function () {
    popupElement.classList.add('popup_opened');
    popupTextFieldTitle.value = profileTextFieldTitle.textContent;
    popupTextFieldSubtitle.value = profileTextFieldSubitle.textContent;
}

const closePopup = function () {
    popupElement.classList.remove('popup_opened');
}

const formSubmitHandler = function (evt) {
    evt.preventDefault();
    profileTextFieldTitle.textContent = popupTextFieldTitle.value;
    profileTextFieldSubitle.textContent = popupTextFieldSubtitle.value;
    closePopup();
}

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
        console.log(element.name,element.link);
        const card = makeCards(element.link,element.name);
        renderCards(card,initialContainer);
    });

}

initialiseCards(initialCards, cardsContainer);

popupButtonOpen.addEventListener('click', openPopup);
popupButtonClose.addEventListener('click', closePopup);
form.addEventListener('submit', formSubmitHandler); 
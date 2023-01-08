export default class Card {
    constructor(cardData, cardsTemplateSelector, handleCardClick, handleRemoveClick) {
        this._cardName = cardData.name;
        this._cardImgURL = cardData.link;
        this._amountLikes = cardData.likes.length;
        this._id = cardData.id;
        this._ownerId = cardData.ownerId;
        this._isDelitable = cardData.isDelitable;
        this._cardsTemplate = document.querySelector(cardsTemplateSelector).content;
        this._handleCardClick = handleCardClick;
        this._handleRemoveClick = handleRemoveClick;
    }

    _addLikeListener = () => {
        const heartElement = this._card.querySelector('.element__heart');
        heartElement.addEventListener('click', function () {
            heartElement.classList.toggle('element__heart_clicked');
        });
    }

    removeCard = () => {
        this._card.remove();
        this._card = null;
    }

    _addRemoveListener = () => {
        const buttonDelete = this._card.querySelector('.element__delete');
        buttonDelete.addEventListener('click', () => {
            this._handleRemoveClick(this)
        });
    }

    _addViewListener = () => {
        this._image.addEventListener('click', () => {
            this._handleCardClick({ caption: this._cardName, src: this._cardImgURL });
        });
    }

    getId = () => {
        return this._id;
    }

    createCard = () => {
        this._card = this._cardsTemplate.cloneNode(true).children[0];
        this._image = this._card.querySelector('.element__image');
        this._image.src = this._cardImgURL;
        this._image.alt = this._cardName;
        this._card.querySelector('.element__title').textContent = this._cardName;
        this._card.querySelector('.element__heart_counter').textContent = this._amountLikes;
        this._deleteButton = this._card.querySelector('.element__delete');
        if (!this._isDelitable) {
            this._deleteButton.classList.add('element__delete_hidden');
            this._deleteButton.disable = true;
        }
        this._addLikeListener();
        this._addRemoveListener();
        this._addViewListener();
        return this._card;
    }
}
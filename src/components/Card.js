export default class Card {
    constructor(cardData, cardsTemplateSelector, handleCardClick, handleRemoveClick, handleLikeClick) {
        this._cardName = cardData.name;
        this._cardImgURL = cardData.link;
        this._numberOfLikes = cardData.likes.length;
        this._id = cardData.id;
        this._ownerId = cardData.ownerId;
        this._isDelitable = cardData.isDelitable;
        this._isLiked = cardData.isLiked;
        this._cardsTemplate = document.querySelector(cardsTemplateSelector).content;
        this._handleCardClick = handleCardClick;
        this._handleRemoveClick = handleRemoveClick;
        this._handleLikeClick = handleLikeClick;
    }

    _addLikeListener = () => {
        this.heartElement = this._card.querySelector('.element__heart');
        this.heartElement.addEventListener('click', () => {
            this._handleLikeClick(this._isLiked, this);
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

    _addDeliteButton = () => {
        this._deleteButton = this._card.querySelector('.element__delete');
        if (!this._isDelitable) {
            this._deleteButton.classList.add('element__delete_hidden');
            this._deleteButton.disable = true;
        }
    }

    setNumberOfLikes(num) {
        this._numberOfLikes = num;
    }

    searhIsCardLiked(likes, userId){
        let islikedInResponce = false;
        likes.forEach((user) => {
            if (user._id === userId) {
                islikedInResponce = true;
            }
        });
        this._isLiked = islikedInResponce;
    }

    toddleHeartElementState = () => {
        this._likesElement.textContent = this._numberOfLikes;
        if (this._isLiked) {
            this.heartElement.classList.add('element__heart_clicked');
        } else {
            this.heartElement.classList.remove('element__heart_clicked');
        }
    }

    createCard = () => {
        this._card = this._cardsTemplate.cloneNode(true).children[0];
        this._image = this._card.querySelector('.element__image');
        this._image.src = this._cardImgURL;
        this._image.alt = this._cardName;
        this._likesElement = this._card.querySelector('.element__heart_counter');
        this._card.querySelector('.element__title').textContent = this._cardName;
        this._addDeliteButton();
        this._addLikeListener();
        this._addRemoveListener();
        this._addViewListener();
        this.toddleHeartElementState();
        return this._card;
    }
}
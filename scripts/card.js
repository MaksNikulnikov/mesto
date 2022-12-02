export default class Card {
    constructor(cardData, cardsTemplate) {
        this._cardName = cardData.cardName;
        this._cardImgURL = cardData.cardImgURL;
        this._cardsTemplate = cardsTemplate;
    }

    _addLikeListener() {
        const heartElement = this._card.querySelector('.element__heart');
        heartElement.addEventListener('click', function () {
            heartElement.classList.toggle('element__heart_clicked');
        });
    }

    _addRemoveListener() {
        const buttonDelete = this._card.querySelector('.element__delete');
        buttonDelete.addEventListener('click', function () {
            buttonDelete.closest('.element').remove();
        });
    }

    _makeImageClicable(renderPopupViewImage) {
        const image = this._card.querySelector('.element__image');
        image.addEventListener('click', function (evt) {renderPopupViewImage(evt.target.closest('.element'));
        });
    }

    createCard(renderPopupViewImage) {
        this._card = this._cardsTemplate.cloneNode(true);       

        const cardImage = this._card.querySelector('.element__image');
        cardImage.src = this._cardImgURL;
        cardImage.alt = this._cardName;
        this._card.querySelector('.element__title').textContent = this._cardName;

        this._addLikeListener();
        this._addRemoveListener();
        this._makeImageClicable(renderPopupViewImage);
        return this._card;
    }
}
export default class Card {
    constructor(cardData, cardsTemplate, renderPopupViewImage) {
        this._cardName = cardData.cardName;
        this._cardImgURL = cardData.cardImgURL;
        this._cardsTemplate = cardsTemplate;
        this._renderPopupViewImage = renderPopupViewImage;
    }

    _addLikeListener = () => {
        const heartElement = this._card.querySelector('.element__heart');
        heartElement.addEventListener('click', function () {
        heartElement.classList.toggle('element__heart_clicked');
        });
    }

    _removeCard = () => {
        this._card.remove();
        this._card = null;
    }

    _addRemoveListener = () => {
        const buttonDelete = this._card.querySelector('.element__delete');            
        buttonDelete.addEventListener('click', this._removeCard);
    }

    _addViewListener = () => {
        const image = this._card.querySelector('.element__image');
        image.addEventListener('click', ()=>{
            this._renderPopupViewImage(this._cardName, this._cardImgURL);
        });
    }

    createCard = () => {
        this._card = this._cardsTemplate.cloneNode(true).children[0];      

        const cardImage = this._card.querySelector('.element__image');
        cardImage.src = this._cardImgURL;
        cardImage.alt = this._cardName;
        this._card.querySelector('.element__title').textContent = this._cardName;

        this._addLikeListener();
        this._addRemoveListener();
        this._addViewListener();
        return this._card;
    }
}
export default class Card {
    constructor(cardName, cardImgURL, cardsTemplate){
        this.cardName = cardName;
        this.cardImgURL = cardImgURL;
        this.cardsTemplate = cardsTemplate;
    }

    _addlikeListener(card) {
        const heartElement = card.querySelector('.element__heart');
        heartElement.addEventListener('click', function () {
            heartElement.classList.toggle('element__heart_clicked');
        });
    }
    
    _addRemoveListener(card) {
        const removeElement = card.querySelector('.element__delete');
        removeElement.addEventListener('click', function () {
            removeElement.closest('.element').remove();
        });
    }
    
    getInstance() {
        const card = this.cardsTemplate.cloneNode(true);
    
        const cardImage = card.querySelector('.element__image');
        cardImage.src = this.cardImgURL;
        cardImage.alt = this.cardName;
        card.querySelector('.element__title').textContent = this.cardName;
    
        this._addlikeListener(card);
        this._addRemoveListener(card);
        return card;
    }
}
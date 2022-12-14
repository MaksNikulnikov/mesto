export default class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._buttonClose = this._popup.querySelector('.popup__close-btn');
        this._emptySpace = this._popup.closest('.popup');
    }

    open() {
        document.addEventListener('keyup', this._handleEscClose);
        this._popup.classList.add('popup_opened');
    }

    close() {
        document.removeEventListener('keyup', this._handleEscClose);
        this._popup.classList.remove('popup_opened');
    }

    _handleEscClose = (evt) => {
        if (evt.key === 'Escape') {
            console.log('this escclose >>', this);
            this.close();
        }
    }

    setEventListeners() {
        this._buttonClose.addEventListener('click', this.close.bind(this));
        this._emptySpace.addEventListener('click', (evt) => {
            if (evt.target === evt.currentTarget) {
                this.close();
            }
        })
    }
}
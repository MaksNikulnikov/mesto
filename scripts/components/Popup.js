export default class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._buttonClose = this._popup.querySelector('.popup__close-btn');
        this._emptySpace = this._popup.closest('.popup');
    }

    open() {
        console.log('this open>>', this._handleEscClose);
        document.addEventListener('keyup', this._handleEscClose.bind(this));
        this._popup.classList.add('popup_opened');
    }

    close() {
        console.log('this close>>', this._handleEscClose);
        document.removeEventListener('keyup', this._handleEscClose);
        this._popup.classList.remove('popup_opened');
        console.log('close!!')
    }

    _handleEscClose(evt) {
        if (evt.key === 'Escape') {
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
import Popup from "./Popup.js";

export default class PopupWithButton extends Popup {
    constructor(popupSelector, handler, parameter) {
        super(popupSelector);
        this._handler = handler;
        this._parameter = parameter;
        this._button = this._popup.querySelector('.popup__submit-btn');
    }

    _handle = () => {
        this._handler(this._parameter);
    }

    setEventListeners() {
        this._button.addEventListener('click', this._handle);
        super.setEventListeners();
    }

    removeEventListener() {
        this._button.removeEventListener('click', this._handle);
    }
}
import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._imageElement = this._popup.querySelector('.popup__image');
        this._descriptionElement = this._popup.querySelector('.popup__figcaption');
    }

    open({ src, caption }) {
        this._imageElement.src = src;
        this._imageElement.alt = caption;
        this._descriptionElement.textContent = this._caption;
        super.open();
    }

}
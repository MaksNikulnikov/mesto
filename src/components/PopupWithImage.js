import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._imageElement = this._popup.querySelector('.popup__image');
        this._descriptionElement = this._popup.querySelector('.popup__figcaption');
    }

    open({ src, caption }) {
        this._src = src;
        this._caption = caption;
        this._imageElement.src = this._src;
        this._imageElement.alt = this._caption;
        this._descriptionElement.textContent = this._caption;
        super.open();
    }

}
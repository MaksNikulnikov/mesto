import Popup from "./Popup.js";

export default class PopupRemoveElement extends Popup {
    constructor(popupSelector, removeHandler) {
        super(popupSelector);
        this._remove = removeHandler;
        this._buttonRemove = this._popup.querySelector('.popup__submit-btn');
    }

    setEventListeners() {
        this._buttonRemove.addEventListener('click', () => {
            this._remove(this._removedElement);
        });
        super.setEventListeners();
    }

    setRemovedElement(removedElement) {
        this._removedElement = removedElement;
    }

    close() {
        this._removedElement = null;
        super.close();
    }
}
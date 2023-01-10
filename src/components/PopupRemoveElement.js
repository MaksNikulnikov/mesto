import Popup from "./Popup.js";

export default class PopupRemoveElement extends Popup {
    constructor(popupSelector, removeHandler) {
        super(popupSelector);
        this._remove = removeHandler;
        this._buttonRemove = this._popup.querySelector('.popup__submit-btn');
    }

    _removeElement = () => {
        this._remove(this._removedElement);
    }

    setEventListeners() {
        this._buttonRemove.addEventListener('click', this._removeElement);
        super.setEventListeners();
    }

    setRemovedElement(removedElement) {
        this._removedElement = removedElement;
    }

    close() {
        this._removedElement = null;
        this._buttonRemove.removeEventListener('click', this._removeElement)
        super.close();
    }
}
import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, handleFormSubmit) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._inputs = this._popup.querySelectorAll('.popup__text');
        this._form = this._popup.querySelector('.popup__form');
    }

    _getInputValues() {
        this._inputValues = {};
        this._inputs.forEach(element => {
            this._inputValues[element.name] = element.value;
        });
    }

    setEventListeners() {
        this._form.addEventListener('submit', (event) =>{
            this._handleFormSubmit(event);
        });
        super.setEventListeners();
    }

    close() {
        console.log('i was here!!')
        console.log('this Listener>>', this);
        this._form.reset();
        super.close();
    }
}
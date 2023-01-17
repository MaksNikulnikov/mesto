import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, handleFormSubmit) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._inputs = this._popup.querySelectorAll('.popup__text');
        this._form = this._popup.querySelector('.popup__form');
        this._submitButton = this._form.querySelector('.popup__submit-btn');
    }

    showLoading() {
        this._submitButton.textContent = 'Сохранение...';
     }

    showLoadingIsFinished() { 
        this._submitButton.textContent = 'Сохранить';
    }

    _getInputValues() {
        const inputValues = {};
        this._inputs.forEach(element => {
            inputValues[element.name] = element.value;
        });
        return inputValues;
    }

    setInputValues(inputValues) {
        this._inputs.forEach((element) => {
            element.value = inputValues[element.name];
        })
    }

    setEventListeners() {
        this._form.addEventListener('submit', (event) => {
            this._handleFormSubmit(event, this._getInputValues());
        });
        super.setEventListeners();
    }

    close() {
        this._form.reset();
        super.close();
    }

    open() {
        super.open();
    }
}
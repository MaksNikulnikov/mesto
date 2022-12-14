import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, handleFormSubmit) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._inputs = this._popup.querySelectorAll('.popup__text');
        this._form = this._popup.querySelector('.popup__form');
    }

    _getInputValues() {
        const inputValues = {};
        this._inputs.forEach(element => {
            inputValues[element.name] = element.value;
        });
        return inputValues;
    }

    setEventListeners() {
        this._form.addEventListener('submit', (event) =>{
            this._handleFormSubmit(event, this._getInputValues());
        });
        super.setEventListeners();
    }

    close() {
        this._form.reset();
        super.close();
    }

    open({name = '', description = ''}) {
        this._inputs[0].value = name;
        this._inputs[1].value = description;
        super.open();
    }

}
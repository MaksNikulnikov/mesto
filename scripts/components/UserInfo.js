export default class UserInfo{
    constructor({nameSelector, descriptionSelector}){

        this._nameElement = document.querySelector(nameSelector);
        this._descriptionElement = document.querySelector(descriptionSelector);
    }

    getUserInfo(){
        return { name: this._name, description: this._description}
    }

    _renderInfo(){
        this._nameElement.textContent = this._name;
        this._descriptionElement.textContent = this._description; 
    }

    setUserInfo({name, description}){
        this._name = name;
        this._description = description;
        this._renderInfo();
    }
}
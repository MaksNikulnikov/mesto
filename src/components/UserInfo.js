export default class UserInfo {
    constructor({ nameSelector, descriptionSelector, avatarSelector }) {

        this._nameElement = document.querySelector(nameSelector);
        this._descriptionElement = document.querySelector(descriptionSelector);
        this._avatarElement = document.querySelector(avatarSelector);

    }

    getUserInfo() {
        return { name: this._name, description: this._description }
    }

    _renderAvatar() {
        this._avatarElement.src = this._avatar;
    }

    _renderInfo() {
        this._nameElement.textContent = this._name;
        this._descriptionElement.textContent = this._description;
    }

    setUserInfo({ name, description }) {
        console.log(name, description);
        this._name = name;
        this._description = description;
        this._renderInfo();

    }

    setAvatar(avatar) {
        this._avatar = avatar;
        this._renderAvatar();

    }
}
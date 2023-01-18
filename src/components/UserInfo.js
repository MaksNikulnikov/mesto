export default class UserInfo {
    constructor({ nameSelector, descriptionSelector, avatarSelector, id }) {

        this._nameElement = document.querySelector(nameSelector);
        this._descriptionElement = document.querySelector(descriptionSelector);
        this._avatarElement = document.querySelector(avatarSelector);
        this._currentUserId = id;

    }

    getUserInfo() {
        return { name: this._name, description: this._description }
    }

    getCurrentUserId() {
        return this._currentUserId;
    }

    _renderAvatar() {
        this._avatarElement.src = this._avatar;
    }

    _renderInfo() {
        this._nameElement.textContent = this._name;
        this._descriptionElement.textContent = this._description;
    }

    setUserInfo({ name, about, _id}) {
        this._name = name;
        this._description = about;
        this._currentUserId = _id;
        this._renderInfo();
    }

    setAvatar(avatar) {
        this._avatar = avatar;
        this._renderAvatar();
    }
}
export default class Api {
    constructor(apiConfig) {
        this._token = apiConfig.token;
        this._groupId = apiConfig.groupId;
        this._serverName = apiConfig.serverName;
        this._mainRequest = `${this._serverName}/v1/${this._groupId}`,
            this._requests = {
                toUserInfo: `${this._mainRequest}/users/me`,
                toCards: `${this._mainRequest}/cards`,
                toUserInfoAvatar: `${this._mainRequest}/users/me/avatar`
            };
    }

    _handleResponce(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Error: ${res.status}`);
    }

    getUserInfo() {
        return fetch(this._requests.toUserInfo, {
            headers: {
                authorization: this._token
            }
        })
            .then(res => this._handleResponce(res))
            .catch(err => console.error(err));
    }

    getCards() {
        return fetch(this._requests.toCards, {
            headers: {
                authorization: this._token
            }
        })
            .then(res => this._handleResponce(res))
            .catch(err => console.error(err));
    }

    patchUserInfo({ name, about }) {
        return fetch(this._requests.toUserInfo, {
            method: 'PATCH',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                about: about
            })
        })
            .then(res => this._handleResponce(res))
            .catch(err => console.error(err));
    }

    patchUserInfoAvatar({ link }) {
        return fetch(this._requests.toUserInfoAvatar, {
            method: 'PATCH',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                avatar: link
            })
        })
            .then(res => this._handleResponce(res))
            .catch(err => console.error(err));
    }

    postCard({ name, link }) {
        return fetch(this._requests.toCards, {
            method: 'POST',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                link: link
            })
        })
            .then(res => this._handleResponce(res))
            .catch(err => console.error(err));
    }

    deleteCard(cardId) {
        return fetch(`${this._requests.toCards}/${cardId}`, {
            method: 'DELETE',
            headers: {
                authorization: this._token
            }
        })
            .then(res => this._handleResponce(res))
            .catch(err => console.error(err));
    }

    putLike(cardId) {
        return fetch(`${this._requests.toCards}/${cardId}/likes`, {
            method: 'PUT',
            headers: {
                authorization: this._token
            }
        })
            .then(res => this._handleResponce(res))
            .catch(err => console.error(err));
    }

    deleteLike(cardId) {
        return fetch(`${this._requests.toCards}/${cardId}/likes`, {
            method: 'DELETE',
            headers: {
                authorization: this._token
            }
        })
            .then(res => this._handleResponce(res))
            .catch(err => console.error(err));
    }
}
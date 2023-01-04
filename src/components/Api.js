export default class Api {
    constructor() {
        this._token = 'f4e3da40-9a8f-4342-ac62-1d7a154eaa67';
        this._groupId = 'cohort-57';
        this._serverName = 'https://nomoreparties.co';
        this._requests = {
            toUserInfo: `${this._serverName}/v1/${this._groupId}/users/me`,
            getInitialCards: `${this._serverName}/v1/${this._groupId}/cards`
        }
    }

    getUserInfo() {
        return fetch(this._requests.toUserInfo, {
            headers: {
                authorization: this._token
            }
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Error: ${res.status}`);
            })
            .catch(err => console.error(err));
    }

    getInitialCards() {
        return fetch(this._requests.getInitialCards, {
            headers: {
                authorization: this._token
            }
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Error: ${res.status}`);
            })
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
        .then(res=>{
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Error: ${res.status}`);
        })
        .catch(err => console.error(err));
    }
}
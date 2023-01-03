export default class Api {
    constructor() {
        this._token = 'f4e3da40-9a8f-4342-ac62-1d7a154eaa67';
        this._groupId = 'cohort-57';
        this._serverName = 'https://nomoreparties.co';
        this._requests = {
            getUserInfo: `${this._serverName}/v1/${this._groupId}/users/me`
        }
    }

    getUserInfo() {
        return fetch(this._requests.getUserInfo, {
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
}
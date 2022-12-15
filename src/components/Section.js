export default class Section {
    constructor({ items, renderer }, containerSelector) {
        this._items = items;
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }

    render() {
        this._items.forEach(item => {
            this._renderer(item);
        });
    }

    addItem(item, isAppend) {
        if (isAppend) {
            this._container.append(item);
        } else {
            this._container.prepend(item);
        }
    }
}
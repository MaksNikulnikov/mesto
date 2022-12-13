export default class Section {
    constructor({ items, renderer }, containerSelector) {
        this._items = items;
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }

    render() {
        this._items.forEach(element => {
            this._renderer(element);
            this.addItem(element);
        });
    }

    addItem(item) {
        this._container.appEnd(item);
    }
}
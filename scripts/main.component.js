export class MainComponent {
    constructor({element}) {
        this._element = element;
        this._render();
    }

    _render() {
        this._element.innerHTML = `

        `;
    }
}
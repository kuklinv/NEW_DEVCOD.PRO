import {BaseComponent} from "../common/components/base.component.js";

export class PagesContentComponent extends BaseComponent{
    constructor({element}){
        super({element});
        this._render();
    }
    _render() {
        this._element.innerHTML = `
        
        `;
    }
}
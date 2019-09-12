import {BaseComponent} from "../common/components/base.component.js";
import {HomeComponent} from "./pagesContent/home.component.js";

export class PagesContentComponent extends BaseComponent{
    constructor({element}){
        super({element});
        this._render();
        this._initHome();
    }

    show() {
        super.show();
    }

    _initHome() {
        this._home = new HomeComponent({
            element:this._element
        });
    }
    _render() {
        this._element.innerHTML = `
        
        `;
    }
}
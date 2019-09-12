
import {PagesContentComponent} from "../pagesContent.component";

export class PortfolioComponent extends PagesContentComponent{
    constructor({element}) {
        super({element});
        this._render();
    }
    _render() {
        this._element.innerHTML = `
        
        `;
    }
}

import {PagesContentComponent} from "../pagesContent.component";

export class SandboxComponent extends PagesContentComponent{
    constructor({element}) {
        super({element});
        this._render();
    }
    _render() {
        this._element.innerHTML = `
        
        `;
    }
}
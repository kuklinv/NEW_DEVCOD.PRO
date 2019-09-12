
// import {PagesContentComponent} from "../pagesContent.component.js";
import {BaseComponent} from "../../common/components/base.component.js";

export class HomeComponent extends BaseComponent{
    constructor({element}){
        super({element});
        this._render();
    }
    _render() {
        this._element.innerHTML = `
                <div class="divPanel page-content">

            <div class="row-fluid">

                <div class="span12" id="divMain">

                    <div class="span4 sidebar">

                        <div class="sidebox">
                            <h3 class="sidebox-title">DEVCOD.PRO</h3>
                            <p>Я Виталий Куклин, веб-разработчик. Это моя личная страничка = (все в одном) =>
                                визитная карточка, экспериментальная площадка, учебная песочница и портфолио</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
    }
}
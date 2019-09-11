import {NavigationComponent} from "./navigation.component/navigation.component.js";
import {HeaderComponent} from "./header.component/header.component.js";
import {FooterComponent} from "./footer.component/footer.component.js";

export class MainComponent {
    constructor({element}) {
        this._element = element;
        this._render();
        this._initNavigation();
        this._initHeader();
        this._initFooter();
    }

    _initNavigation() {
        this._navigation = new NavigationComponent({
            element: this._element.querySelector('.navigation')
        })
    }

    _initHeader() {
        this._header = new HeaderComponent({
            element: this._element.querySelector('.myHeader')
        })
    }

    _initFooter() {
        this._footer = new FooterComponent({
            element: this._element.querySelector('.myFooter')
        })
    }

    _render() {
        this._element.innerHTML = `
    <div id="decorative2" class="navigation"></div>

    <div id="decorative1" style="position:relative" class="myHeader"></div>

    <div id="contentOuterSeparator"></div>

    <div class="container-fluid mainPageContent">

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
    </div>


<div id="footerOuterSeparator"></div>

<div id="divFooter" class="myFooter"></div>
        `;
    }
}
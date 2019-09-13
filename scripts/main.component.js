import {NavigationComponent} from "./navigationComponent/navigation.component.js";
import {HeaderComponent} from "./headerComponent/header.component.js";
import {FooterComponent} from "./footerComponent/footer.component.js";
import {PagesContentComponent} from "./pagesComponent/pagesContent.component.js";

// import {HomeComponent} from "./pagesComponent/pagesContent/home.component.js";


export class MainComponent {
    constructor({element}) {
        this._element = element;
        this._render();
        this._initNavigation();
        this._initHeader();
        this._initFooter();
        // this._initHome();
        this._initPagesContent();
    }

    _initNavigation() {
        this._navigation = new NavigationComponent({
            element: this._element.querySelector('.navigation'),
            naviMenuSelect: (menuItem) => {
                this._pageContent.show(menuItem);
            }
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

    // _initHome(){
    //     this._home = new HomeComponent({
    //         element: this._element.querySelector('.pageContent')
    //     })
    // }

    _initPagesContent() {
        this._pageContent = new PagesContentComponent({
            element: this._element.querySelector('.pageContent')
        })
    }

    _render() {
        this._element.innerHTML = `
    <div id="decorative2" class="navigation"></div>

    <div id="decorative1" style="position:relative" class="myHeader"></div>

    <div id="contentOuterSeparator"></div>

    <div class="container-fluid pageContent"></div>

    <div id="footerOuterSeparator"></div>

    <div id="divFooter" class="myFooter"></div>
        `;
    }
}
import {NavigationComponent} from "./navigationComponent/navigation.component.js";
import {HeaderComponent} from "./headerComponent/header.component.js";
import {FooterComponent} from "./footerComponent/footer.component.js";
import {PagesContentComponent} from "./pagesComponent/pagesContent.component.js";

// let currentShowComponent;

export class MainComponent {
    constructor({element}) {
        this._element = element;
        // this._currentShowComponent;
        this._render();
        this._initNavigation();
        this._initHeader();
        this._initFooter();
        this._initPagesContent();

        // this._selectPageContent(this._navigation._selectedMenu);
    }

    _initNavigation() {
        this._navigation = new NavigationComponent({
            element: this._element.querySelector('.navigation'),
            navMenuSelect: (menuItem) => {
                // this._pageContent.show(menuItem);
                // this._currentShowComponent = menuItem;
                // console.log(currentShowComponent);
                // this._pageContent.showComponent = menuItem;
                // console.log(this._pageContent.showComponent)
                this._selectedMenu = menuItem;
                console.log(this._selectedMenu)
            }
        });
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

    _initPagesContent() {
        this._pageContent = new PagesContentComponent({
            element: this._element.querySelector('.pageContent')
            // showComponent: this._selectedMenu
        });
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

    // _selectPageContent(selectedMenu) {
    //     console.log(selectedMenu);
        // if (selectedMenu === 'skills') {
        //     this._pageContent._skills._render();
        // }
    // }
}

// console.log(MainComponent);
import {BaseComponent} from "../common/components/base.component.js";
import {HomeComponent} from "./pagesContent/home.component.js";
import {SkillsComponent} from "./pagesContent/skills.component.js";
import {SandboxComponent} from "./pagesContent/sandbox.component.js";
import {ProjectsComponent} from "./pagesContent/projects.component.js";
import {PortfolioComponent} from "./pagesContent/portfolio.component.js";
import {BlogComponent} from "./pagesContent/blog.component.js";

export class PagesContentComponent extends BaseComponent{
    constructor({element}){
        super({element});
        // this._render();
        // this._naviMenuSelect = naviMenuSelect;
        this._initBlog();
        this._initPortfolio();
        this._initProjects();
        this._initSandbox();
        this._initSkills();
        this._initHome();

    }

    show({element}) {
        this._element._render();
        super.show();
    }

    _initHome() {
        this._home = new HomeComponent({
            element:this._element
        });
    }
    _initSkills() {
        this.skills = new SkillsComponent({
            element: this._element
        })
    }
    _initSandbox() {
        this.skills = new SandboxComponent({
            element: this._element
        })
    }
    _initProjects() {
        this.skills = new ProjectsComponent({
            element: this._element
        })
    }
    _initPortfolio() {
        this.skills = new PortfolioComponent({
            element: this._element
        })
    }
    _initBlog() {
        this.skills = new BlogComponent({
            element: this._element
        })
    }

    // _render() {
    //     this._element.innerHTML = `
    //
    //     `;
    // }
}
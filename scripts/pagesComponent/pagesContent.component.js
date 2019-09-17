import {BaseComponent} from "../common/components/base.component.js";
import {HomeComponent} from "./pagesContent/home.component.js";
import {SkillsComponent} from "./pagesContent/skills.component.js";
import {SandboxComponent} from "./pagesContent/sandbox.component.js";
import {ProjectsComponent} from "./pagesContent/projects.component.js";
import {PortfolioComponent} from "./pagesContent/portfolio.component.js";
import {BlogComponent} from "./pagesContent/blog.component.js";

let PagesContent = {};

export class PagesContentComponent extends BaseComponent {
    constructor({element, showComponent}) {
        super({element});
        // this._render();
        // this._showComponent = showComponent;
        // console.log(this._showComponent);
        // console.log(showComponent);
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
            element: this._element
        });
    }

    _initSkills() {
        this._skills = new SkillsComponent({
            element: this._element
        })
    }

    _initSandbox() {
        this._sandbox = new SandboxComponent({
            element: this._element
        })
    }

    _initProjects() {
        this._projects = new ProjectsComponent({
            element: this._element
        })
    }

    _initPortfolio() {
        this._portfolio = new PortfolioComponent({
            element: this._element
        })
    }

    _initBlog() {
        this._blog = new BlogComponent({
            element: this._element
        })
    }

}
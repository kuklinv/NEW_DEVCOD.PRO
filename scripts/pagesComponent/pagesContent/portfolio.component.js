
// import {PagesContentComponent} from "../pagesContent.component";
import {BaseComponent} from "../../common/components/base.component.js";

// codersrank widgets
// import CodersrankSummary from "../../../node_modules/@codersrank/summary/cjs/codersrank-summary.js";
// import CodersrankSummary from "./@codersrank";
// window.customElements.define('codersrank-summary', CodersrankSummary);

export class PortfolioComponent extends BaseComponent{
    constructor({element}) {
        super({element});
        this._render();
    }
    // window.customElements.define('codersrank-summary', CodersrankSummary);
    _render() {
        this._element.innerHTML = `
                <div class="divPanel page-content">

            <div class="row-fluid">

                <div class="span12" id="divMain">

                    <div class="span4 sidebar">

                        <div class="sidebox">
                            <h3 class="sidebox-title">DEVCOD.PRO</h3>
                            <p>Portfolio page </p>
                            <div>
                            <codersrank-summary username="kuklinv"></codersrank-summary>
                            </div>
                            <div>
                            <codersrank-activity
                            username="kuklinv"
                            labels
                            legend
                            tooltip
                            ></codersrank-activity>
                            </div>
                            <div>
                            <codersrank-skills-chart
                             username="kuklinv"
                             labels
                             legend
                             tooltip
                             ></codersrank-skills-chart>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
    }
}

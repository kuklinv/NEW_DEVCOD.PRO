
import {BaseComponent} from "../../common/components/base.component.js";

export class SkillsComponent extends BaseComponent{
    constructor({element}) {
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
                            <p>Skills page </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
                        <div class="span4 sidebar">

                    <div class="sidebox">
                        <h3 class="sidebox-title">Sample Sidebar Content</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and <a href="#">typesetting industry</a>.</p>
                        <p> Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.</p>

                        <h4 class="sidebox-title">Sidebar Categories</h4>
                        <ul>
                            <li><a href="#">Quisque diam lorem sectetuer adipiscing</a></li>
                            <li><a href="#">Interdum vitae, adipiscing dapibus ac</a></li>
                            <li><a href="#">Scelerisque ipsum auctor vitae, pede</a></li>
                            <li><a href="#">Donec eget iaculis lacinia non erat</a></li>
                            <li><a href="#">Lacinia dictum elementum velit fermentum</a></li>
                            <li><a href="#">Donec in velit vel ipsum auctor pulvinar</a></li>
                        </ul>


                        <h4 class="sidebox-title">Our Skills</h4>

                        <h5>Web Design ( 40% )</h5>
                        <div class="progress progress-info">
                            <div class="bar" style="width: 20%"></div>
                        </div>

                        <h5>Wordpress ( 80% )</h5>
                        <div class="progress progress-success">
                            <div class="bar" style="width: 40%"></div>
                        </div>

                        <h5>Branding ( 100% )</h5>
                        <div class="progress progress-warning">
                            <div class="bar" style="width: 60%"></div>
                        </div>

                        <h5>SEO Optmization ( 60% )</h5>
                        <div class="progress progress-danger">
                            <div class="bar" style="width: 80%"></div>
                        </div>


                    </div>

                </div>
        `;
    }
}
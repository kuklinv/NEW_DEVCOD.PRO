export class NavigationComponent {
    constructor({element}) {
        this._element = element;
        this._render();
    }
    _render() {
        this._element.innerHTML = `
         <div class="container-fluid">
            <div class="divPanel topArea notop nobottom">
                <div class="row-fluid">
                    <div class="span12">
                        <div id="divLogo" class="pull-left">
                            <a href="index.html" id="divSiteTitle">DEVELOPER PAGE</a><br/>
                            <a href="index.html" id="divTagLine">Your Welcome </a>
                        </div>
                        <div id="divMenuRight" class="pull-right">
                            <div class="navbar">
                                <div class="nav-collapse">
                                    <ul class="nav nav-pills ddmenu">
                                        <li class="dropdown"><a href="index.html">Home</a></li>
                                        <li class="dropdown"><a href="#">my skills</a></li>
                                        <li class="dropdown"><a href="#">my sandbox</a></li>
                                        <li class="dropdown"><a href="#">projects</a></li>
                                        <li class="dropdown"><a href="#">portfolio</a></li>
                                        <li class="dropdown"><a href="#">my blog</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
    }
}
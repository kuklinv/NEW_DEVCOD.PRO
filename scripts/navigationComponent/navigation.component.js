export class NavigationComponent {
    constructor({element, naviMenuSelect}) {
        this._element = element;
        this._naviMenuSelect = naviMenuSelect;
        this._render();
        this._element.addEventListener('click', function (e) {
           let target = e.target;
           if (target.classList.contains('home')) {
               this._naviMenuSelect(target.className);
               console.log(target.className);
           } else if  (target.classList.contains('skills')){
               console.log(target.className);
           } else if  (target.classList.contains('sandbox')){
               console.log(target.className);
           } else if  (target.classList.contains('projects')){
               console.log(target.className);
           } else if  (target.classList.contains('portfolio')){
               console.log(target.className);
           } else if  (target.classList.contains('blog')){
               console.log(target.className);
           }
        });
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
                                        <li class="dropdown"><a class="home" href="#">Home</a></li>
                                        <li class="dropdown "><a class="skills" href="#">my skills</a></li>
                                        <li class="dropdown "><a class="sandbox" href="#">my sandbox</a></li>
                                        <li class="dropdown "><a class="projects" href="#">projects</a></li>
                                        <li class="dropdown "><a class="portfolio" href="#">portfolio</a></li>
                                        <li class="dropdown "><a class="blog" href="#">my blog</a></li>
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
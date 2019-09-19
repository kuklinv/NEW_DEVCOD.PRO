import {BaseComponent} from "../../common/components/base.component.js";

export class SkillsComponent extends BaseComponent {
    constructor({element}) {
        super({element});
        this._render();
    }

    _render() {
        this._element.innerHTML = `
<div class="span4 sidebar">
    <div class="sidebox">
        <h3 class="sidebox-title">My software bundle (MERN)</h3>
        <h5> Vanilla Javascript Algorithms And Data Structures + ES6( 50% )</h5>
        <div class="progress">
            <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width: 50%"
                 aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        <h5>React + Redux + Redux-saga + Redux-thunk( 10% )</h5>
        <div class="progress">
            <div class="progress-bar progress-bar-striped bg-info" role="progressbar" style="width: 10%"
                 aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        <h5>Node.js( 10% )</h5>
        <div class="progress">
            <div class="progress-bar progress-bar-striped bg-info" role="progressbar" style="width: 10%"
                 aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        <h5>Express ( 10% )</h5>
        <div class="progress">
            <div class="progress-bar progress-bar-striped bg-info" role="progressbar" style="width: 10%"
                 aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        <h5>MongoDB ( 10% )</h5>
        <div class="progress">
            <div class="progress-bar progress-bar-striped bg-info" role="progressbar" style="width: 10%"
                 aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        <h5>lodash + ramdajs + axios ( 10% )</h5>
        <div class="progress">
            <div class="progress-bar progress-bar-striped bg-info" role="progressbar" style="width: 10%"
                 aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        <h3 class="sidebox-title">My management bundle</h3>
        <h5>MBA / Sales / Strategy ( 95% )</h5>
        <div class="progress">
            <div class="progress-bar progress-bar-striped" role="progressbar" style="width: 95%" aria-valuenow="10"
                 aria-valuemin="0" aria-valuemax="100"></div>
        </div>
    </div>
</div>


<!--<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">-->
<!--    <ol class="carousel-indicators">-->
<!--        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>-->
<!--        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>-->
<!--        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>-->
<!--        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>-->
<!--        <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>-->
<!--    </ol>-->
<!--    <div class="carousel-inner">-->
<!--        <div class="carousel-item active">-->
<!--            <img class="d-block w-100 active" src="../../../images/carousel/jsru.jpg" alt="First slide">-->
<!--        </div>-->
<!--        <div class="carousel-item">-->
<!--            <img class="d-block w-100" src="../../../images/carousel/linux.pdf" alt="Second slide">-->
<!--        </div>-->
<!--        <div class="carousel-item">-->
<!--            <img class="d-block w-100" src="../../../images/carousel/git.pdf" alt="Third slide">-->
<!--        </div>-->
<!--        <div class="carousel-item">-->
<!--            <img class="d-block w-100" src="../../../images/carousel/gb.jpg" alt="Fourth slide">-->
<!--        </div>-->
<!--        <div class="carousel-item">-->
<!--            <img class="d-block w-100" src="../../../images/carousel/MBS.pdf" alt="Fifth slide">-->
<!--        </div>-->
<!--    </div>-->
<!--    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">-->
<!--        <span class="carousel-control-prev-icon" aria-hidden="true"></span>-->
<!--        <span class="sr-only">Previous</span>-->
<!--    </a>-->
<!--    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">-->
<!--        <span class="carousel-control-next-icon" aria-hidden="true"></span>-->
<!--        <span class="sr-only">Next</span>-->
<!--    </a>-->
<!--</div>-->
        `;
    }
}
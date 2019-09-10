export class MainComponent {
    constructor({element}) {
        this._element = element;
        this._render();
    }

    _render() {
        this._element.innerHTML = `
    <div id="decorative2">
        <div class="container-fluid">
            <!-- навигацию копируем отсюда и до строки 104-->
            <div class="divPanel topArea notop nobottom">
                <div class="row-fluid">
                    <div class="span12">
                        <!--edit LOGO here/ Блок навигационного меню. корректировка по всем страницам после изменений навигации!!!! копировать отсюда -->
                        <div id="divLogo" class="pull-left">
                            <a href="index.html" id="divSiteTitle">DEVELOPER PAGE</a><br />
                            <!--подумать про ссылки. куда идем от лого при нажатии, может никуда лучший вариант? -->
                            <a href="index.html" id="divTagLine">Your Welcome </a>
                        </div>
                        <!-- end of LOGO -->
                        <div id="divMenuRight" class="pull-right">
                            <div class="navbar">
                                <button type="button" class="btn btn-navbar-highlight btn-large btn-primary" data-toggle="collapse" data-target=".nav-collapse">
                            NAVIGATION <span class="icon-chevron-down icon-white"></span>
                        </button>
                                <div class="nav-collapse collapse">
                                    <ul class="nav nav-pills ddmenu">
                                        <li class="dropdown active"><a href="index.html">Hello</a></li>
                                        <li class="dropdown"><a href="skills.html">Skills</a></li>
                                        <li class="dropdown">
                                            <a href="project.html" class="dropdown-toggle">Prpjects<b class="caret"></b></a>
                                            <ul class="dropdown-menu">
                                                <li><a href="full.html">Full Page</a></li>
                                                <li><a href="2-column.html">Two Column</a></li>
                                                <li><a href="#############">Three Column</a></li>
                                            </ul>
                                        </li>
                                        <li class="dropdown"><a href="portfolio.html">Portfolio</a></li>
                                        <li class="dropdown"><a href="############">Blog & feedback</a></li>
                                        <li class="dropdown"><a href="############">Contact me</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <!-- копируем от верхней метки с LOGO и до этого места. на все страницы при изменении в навигации -->
        </div>
    </div>

    <div id="decorative1" style="position:relative">
        <div class="container-fluid">

            <div class="divPanel headerArea">
                <div class="row-fluid">
                    <div class="span12">

                        <div id="headerSeparator"></div>

                        <div id="divHeaderText" class="page-content">
                            <div id="divHeaderLine1">Vitaly Kuklin</div><br />
                            <div id="divHeaderLine2"> web developer</div><br />
                            <!--Кнопка для перехода. пока не нравиться
                            <div id="divHeaderLine3"><a class="btn btn-large btn-primary" href="about.html">Больше информации</a></div>
                          -->
                        </div>

                        <div id="headerSeparator2"></div>

                    </div>
                </div>

            </div>

        </div>
    </div>

    <div id="contentOuterSeparator"></div>

    <div class="container-fluid">

        <div class="divPanel page-content">

            <div class="row-fluid">

                <div class="span12" id="divMain">
                    <!--
                    <h1>Я Виталий Куклин</h1>
-->
                    <div class="lead">
                        <h3> Я Виталий Куклин, веб-разработчик из Новосибирска. В настоящее время работаю самостоятельно на фрилансе. Хочу и ищу больше проектов и повышаю свои навыки в качестве веб-разработчика (frontand & backand).
                        </h3>
                    </div>
                    <hr style="margin:45px 0 35px" />

                    <div class="lead">
                        <h2>Portfolio gallary в разработке</h2>
                        <h3>******************************************************************************************************************</h3>
                    </div>
                    <br />

                    <div class="list_carousel responsive">
                        <ul id="list_photos">
                            <li><img src="images/carmel.jpg" class="img-polaroid"> </li>
                            <li><img src="images/rula-sibai-pink-flowers.jpg" class="img-polaroid"> </li>
                            <li><img src="images/girl-flowers.jpg" class="img-polaroid"> </li>
                            <li><img src="images/night-city.jpg" class="img-polaroid"> </li>
                            <li><img src="images/irish-hands.jpg" class="img-polaroid"> </li>
                            <li><img src="images/Top_view.jpg" class="img-polaroid"> </li>
                            <li><img src="images/vectorbeastcom-grass-sun.jpg" class="img-polaroid"> </li>
                            <li><img src="images/sunset-hair.jpg" class="img-polaroid"> </li>
                            <li><img src="images/stones-hi-res.jpg" class="img-polaroid"> </li>
                            <li><img src="images/salzburg-x.jpg" class="img-polaroid"> </li>
                        </ul>
                    </div>

                    <hr style="margin:45px 0 35px" />

                    <div class="lead">
                        <h2>$$$$$$$$$ в разработке</h2>
                        <h3>Это может быть тем решением, которое вы ищете</h3>
                    </div>
                    <br />

                    <div class="row-fluid">
                        <div class="span8">

                            <h3>Вариант ###################</h3>

                            <p>
                                <img src="images/spring-is-coming.jpg" class="img-polaroid" style="margin:12px 0px;">
                            </p>

                            <p>Наполнение: Визитная карточка, landing, продуктовая галлерея, возможность заказов/магазин, клеинтская база, клиентская история анализ клиентской активности и поведения, автоматизация обратной связи по базе/обращениям, персонализация
                                контактов, корпоративный форум
                            </p>

                        </div>
                        <div class="span4 sidebar">

                            <div class="sidebox">
                                <h3 class="sidebox-title">СЕРЬЕЗНО?</h3>
                                <p>Этот ресурс может быть создан именно под вас. подогнан индивидуально как хороший костюм. он будет таким как вы его представляете и будет делать то что именно вы хотите. И не будет того что вы не хотите</p>
                            </div>

                            <br />

                            <div class="sidebox">
                                <h3 class="sidebox-title">Ваш e-mail</h3>
                                <p>
                                    <div class="input-append">
                                        <input class="span8" id="inpEmail" size="16" type="text"><button class="btn" type="button">Отправить</button>
                                    </div>
                                </p>
                            </div>

                        </div>
                    </div>

                </div>

            </div>

            <div id="footerInnerSeparator"></div>
        </div>

    </div>

    <div id="footerOuterSeparator"></div>

    <div id="divFooter" class="footerArea">

        <div class="container-fluid">

            <div class="divPanel">

                <div class="row-fluid">

                    <div class="span3" id="footerArea1">

                        <h3>DEVCOD.PRO</h3>

                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.</p>

                        <p>
                            <a href="#" title="Terms of Use">Terms of Use</a><br />
                            <a href="#" title="Privacy Policy">Privacy Policy</a><br />
                            <a href="#" title="FAQ">FAQ</a><br />
                            <a href="#" title="Sitemap">Sitemap</a>
                        </p>

                    </div>
                    <div class="span3" id="footerArea2">

                        <h3>Блог и отзывы</h3>
                        <p>
                            <a href="#" title="">Lorem Ipsum is simply dummy text</a><br />
                            <span style="text-transform:none;">2 hours ago</span>
                        </p>
                        <p>
                            <a href="#" title="">Duis mollis, est non commodo luctus</a><br />
                            <span style="text-transform:none;">5 hours ago</span>
                        </p>
                        <p>
                            <a href="#" title="">Maecenas sed diam eget risus varius</a><br />
                            <span style="text-transform:none;">19 hours ago</span>
                        </p>
                        <p>
                            <a href="#" title="">VIEW ALL POSTS</a>
                        </p>

                    </div>
                    <div class="span3" id="footerArea3">

                        <h3>Кратко о главном</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.
                        </p>

                    </div>
                    <div class="span3" id="footerArea4">

                        <h3>+7-913-900-4120 ONLINE</h3>

                        <ul id="contact-info">
                            <li>
                                <i class="general foundicon-phone icon"></i>
                                <span class="field">Phone:</span>
                                <br /> +7(913)-900-41-20
                            </li>
                            <li>
                                <i class="general foundicon-mail icon"></i>
                                <span class="field">Email:</span>
                                <br />
                                <a href="mailto:vitalykuklin@gmail.com" title="Email">vitalykuklin@gmail.com</a>
                            </li>
                            <li>
                                <i class="general foundicon-home icon" style="margin-bottom:50px"></i>
                                <span class="field">Address:</span>
                                <br /> 630005 Novosibirsk<br /> Russia
                            </li>
                        </ul>

                    </div>
                </div>

                <br /><br />
                <div class="row-fluid">
                    <div class="span12">
                        <p class="copyright">
                            Copyright © 2019 Vitaly Kuklin. All Rights Reserved.
                        </p>

                        <p class="social_bookmarks">
                            <a href="https://github.com/kuklinv"><i class="social foundicon-github"></i> GitHub</a>
                            <a href="https://www.facebook.com/vkuklin"><i class="social foundicon-facebook"></i> Facebook</a>
                            <a href="https://twitter.com/kuklinv"><i class="social foundicon-twitter"></i> Twitter</a>
                            <a href="https://www.linkedin.com/in/%D0%BA%D1%83%D0%BA%D0%BB%D0%B8%D0%BD-%D0%B2%D0%B8%D1%82%D0%B0%D0%BB%D0%B8%D0%B9-49435135/"><i class="social foundicon-linkedin"></i> LinkedIn</a>
                            <a href="https://www.pinterest.ru/kuklinv/"><i class="social foundicon-pinterest"></i> Pinterest</a>
                        </p>
                    </div>
                </div>
                <br />

            </div>

        </div>

    </div>
        `;
    }
}
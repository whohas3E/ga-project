const { BsFillBootstrapFill } = require("react-icons/bs");
const { FaReact } = require("react-icons/fa");

function About() {
    return (
        <div className="container-fluid">
            <div className="about_wrapper">
                <div className="row">
                    <div className="about_card">
                        <div className="about_card-content">
                            <h3 className="about_card-content_heading">
                                About Project
                            </h3>
                            <p className="about_card-content_text">
                                Thank you Akademi Ga provided 60-Hours
                                JavaScript course. Due to Malaysia MCO, most
                                people spent more time at home with watching TV.
                                I oftenly watch Netflix too. Hence, I decided to
                                build a movie application with The MovieDB API.
                                This movie application is my small project for
                                my learning JavaScript course. Movvie is my
                                first React's framework project. More features
                                will be added in the future.
                            </p>
                            <hr />

                            <div className="icons-col">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="icons-col_left">
                                            <p className="icons-col_heading">
                                                Tools I used:
                                            </p>
                                            <div className="row">
                                                <div className="col-6 col-md-6 col-lg-6">
                                                    <div class="icons-grid icons_item-1">
                                                        <FaReact className="icon-react" />
                                                        <p>React Framework</p>
                                                    </div>
                                                </div>
                                                <div className="col-6 col-md-6 col-lg-6">
                                                    <div class="icons-grid icons_item-2">
                                                        <BsFillBootstrapFill className="icon-bs" />
                                                        <p>Bootstrap Layout</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="icons-col_right">
                                            <p className="icons-col_heading">
                                                Thanks to:
                                            </p>

                                            <div className="row">
                                                <div className="col-6 col-md-6 col-lg-6">
                                                    <div class="icons-grid icons_item-3">
                                                        <div className="icon-tmdb"></div>
                                                        <p>TMDB API</p>
                                                    </div>
                                                </div>
                                                <div className="col-6 col-md-6 col-lg-6">
                                                    <div class="icons-grid icons_item-4">
                                                        <div className="icon-ga"></div>
                                                        <p>Akademi GA</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="about_container col-12 col-md-7 m-auto">
                <div className="about_col">
                    <div className="about_col-box">
                        <h4>About project</h4>
                        <p>
                            This is my first React Project for Akademi GA. Thank
                            you Jack Jeffress from Sydney. We having fun in his
                            JavaScript classes. He is a good instructor and love
                            to share his amazing life. I learnt Vanilla JS, API
                            / AJAX, SVG Animation, SUPABASE CHAT APP, Three.js,
                            REACT Framework and etc.. Hope to see him in future.
                            Glad to meet him.
                            <p>________________</p>
                            <p>Tools & language: </p>
                            <ul>
                                <li>React</li>
                                <li>TheMovieDB API</li>
                                <li>React Hook</li>
                                <li>React Params</li>
                            </ul>
                        </p>
                    </div>
                </div>
            </div> */}
        </div>
    );
}

module.exports = About;

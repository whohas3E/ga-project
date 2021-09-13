const { Link, useHistory } = require("react-router-dom");
const { FiChevronLeft } = require("react-icons/fi");

function Detail({
    poster_path,
    backdrop_path,
    name,
    original_name,
    title,
    original_title,
    overview,
    original_language,
    release_date,
    vote_average,
    genres,
    runtime,
}) {
    // movie image URL
    let posterPath = poster_path || backdrop_path;
    let size = "w342";
    let backSize = "original";
    let backdrop = `https://image.tmdb.org/t/p/${backSize}${backdrop_path}`;
    let imgURL = `https://image.tmdb.org/t/p/${size}${posterPath}`;
    const history = useHistory();

    // replacement of movie title
    let movieTitle = title || name || original_title || original_name;
    // map each genre id
    let genreName =
        genres &&
        genres.map(function (genre) {
            return genre.name;
        });
    // after map, join it with (,)
    let genre = genreName.join(", ");
    // Covert minutes to hh mm
    let runtimeHH = Math.floor(runtime / 60).toFixed(0);
    let runtimeMin = (runtime % 60).toFixed(0);
    let time = runtimeHH + " hr " + runtimeMin + " min ";
    // Convert number to demical
    let rate = vote_average;
    let rateToDemical = rate.toFixed(1);
    return (
        <div className="container-fluid  detail detail_container">
            <div className="row row-wrap">
                <div className="backdrop detail_backdrop">
                    <img src={`${backdrop}`} crossOrigin="true" />
                </div>
                <div className="detail_content">
                    <div className="detail_content-wrapper">
                        <div className="detail_content-top">
                            <div className="detail_content-top_link">
                                <Link
                                    onClick={function () {
                                        history.goBack();
                                    }}
                                >
                                    <FiChevronLeft />
                                    <span>Back</span>
                                </Link>
                            </div>
                            <div className="detail_title">
                                <h2 className="detail_title-heading">
                                    overview
                                </h2>
                                <hr />
                            </div>
                        </div>
                        <div className="detail_content-bottom">
                            <div className="detail_content-bottom_left">
                                <div className="detail_poster">
                                    <img
                                        className={`detail_poster-img border-rounded ${
                                            poster_path ? " " : "noImg"
                                        }`}
                                        src={`${imgURL}`}
                                        crossOrigin="true"
                                        alt={`${title} poster`}
                                    />
                                </div>
                            </div>
                            <div className="detail_content-bottom_right">
                                <div className="detail_right-inner ">
                                    <div className="detail_right-inner_top">
                                        <h1 className="detail_right-inner_heading">
                                            {movieTitle}
                                        </h1>

                                        <div className="detail_right-inner-tag">
                                            <div className="detail_language-tag">
                                                {original_language.toUpperCase()}
                                            </div>
                                            <div className="detail_runtime-tag">
                                                {time}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="detail_right-inner_center">
                                        <p>{overview}</p>
                                    </div>
                                    <div className="detail_right-inner_bottom">
                                        <p>
                                            <span className="text-uppercase">
                                                Release Date:
                                            </span>{" "}
                                            {release_date}
                                        </p>
                                        <p>
                                            <span className="text-uppercase">
                                                Rating:
                                            </span>{" "}
                                            {rateToDemical} / 10
                                        </p>
                                        <p>
                                            <span className="text-uppercase">
                                                Genre:{" "}
                                            </span>{" "}
                                            {genre}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

module.exports = Detail;

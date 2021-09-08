const { Link } = require("react-router-dom");
const { useState } = require("react");
const { FiStar } = "react-icons/fi";

function Trend({ trend }) {
    let imgURL = `https://image.tmdb.org/t/p/`;
    let name = trend.title || trend.name || trend.original_title;
    let releaseDate = trend.release_date || trend.first_air_date;
    const [isShown, setIsShown] = useState(false);

    let rate = trend.vote_average;
    let rateToDemical = rate.toFixed(1);
    return (
        <div className="trend_row">
            <div className="row">
                <div className="slider_wrapper">
                    <div className="slider_col">
                        <Link
                            to={`/movie/${trend.id}`}
                            className="slider-link"
                            onMouseEnter={() => setIsShown(true)}
                            onMouseLeave={() => setIsShown(false)}
                        >
                            <div className="poster_wrapper">
                                <img
                                    className="border-rounded"
                                    loading="lazy"
                                    crossOrigin="true"
                                    src={`${imgURL}w200${trend.poster_path}`}
                                />
                            </div>
                            <div className="rating_col">
                                <small className="rating">
                                    <span>{rateToDemical}</span>
                                </small>
                            </div>
                            {isShown && (
                                <div className="movie_info">
                                    <h5>{name}</h5>
                                    <div className="movie_info-row">
                                        <p>{releaseDate}</p>
                                    </div>
                                </div>
                            )}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

module.exports = Trend;

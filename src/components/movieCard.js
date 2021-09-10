const { Link } = require("react-router-dom");
const { BsStarFill } = require("react-icons/bs");

function MovieCard(props) {
    // movies array props
    const {
        title,
        poster_path,
        id,
        name,
        original_title,
        original_name,
        vote_average,
        release_date,
        first_air_date,
    } = props;

    // Image url
    let imgURL = `https://image.tmdb.org/t/p/w200${poster_path}`;

    // Get alternative data
    let movieName = title || name || original_title || original_name;
    let releaseDate = release_date || first_air_date;

    // Convert rating to 1 demical
    let rate = vote_average;
    let rateToDemical = rate.toFixed(1);

    return (
        <div className="movieCard">
            <div className="row movieCard_row">
                <div className="movieCard_col">
                    <Link to={`/movie/${id}`} className="movieCard_link">
                        <div className="movieCard_poster">
                            <img
                                className={`border-rounded ${
                                    poster_path ? " " : "noImg"
                                }`}
                                loading="lazy"
                                crossOrigin="true"
                                src={`${imgURL}`}
                            />
                        </div>
                        <div className="movieCard_rating">
                            <small className="movieCard_rating-box">
                                <BsStarFill class="icon-star" />
                                {rateToDemical}
                            </small>
                        </div>
                        {
                            <div className="movieCard_info">
                                <h6 className="movieCard_info-title">
                                    {movieName}
                                </h6>
                                <div className="movieCard_info-date">
                                    <p>{releaseDate}</p>
                                </div>
                            </div>
                        }
                    </Link>
                </div>
            </div>
        </div>
    );
}

module.exports = MovieCard;

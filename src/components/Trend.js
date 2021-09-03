const { Link } = require("react-router-dom");

function Trend({ trend }) {
    let imgURL = `https://image.tmdb.org/t/p/`;

    return (
        <div className="slider_wrapper">
            <div className="slider_col">
                <Link to="/movie/:id" className="slider-link" href="/">
                    <div className="poster_wrapper">
                        <img
                            className="border-rounded"
                            loading="lazy"
                            crossOrigin="true"
                            src={`${imgURL}w342${trend.poster_path}`}
                        />
                    </div>
                    <div className="rating_col">
                        <small className="rating">{trend.vote_average}</small>
                    </div>
                    <div className="movie_info">
                        <h5>{trend.title}</h5>
                        <div className="movie_info-row">
                            <p>{trend.release_date}</p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
}

module.exports = Trend;

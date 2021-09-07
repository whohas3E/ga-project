const { Link } = require("react-router-dom");
const Carousel = require("react-elastic-carousel");

function Trend({ trend }) {
    let imgURL = `https://image.tmdb.org/t/p/`;
    let name = trend.title || trend.name || trend.original_title;
    let releaseDate = trend.release_date || trend.first_air_date;

    return (
        <div className="slider_wrapper">
            <div className="slider_col">
                <Carousel>
                    <div>Item 1</div>
                </Carousel>
                console.log("hi");
                <Link to={`/movie/${trend.id}`} className="slider-link">
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
                        <h5>{name}</h5>
                        <div className="movie_info-row">
                            <p>{releaseDate}</p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
}

module.exports = Trend;

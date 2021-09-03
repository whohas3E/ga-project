const { Link } = require("react-router-dom");

function MovieResult({ title, poster_path }) {
    let imgURL = `https://image.tmdb.org/t/p/`;
    return (
        <div class="result_col">
            <Link to="/movie/:result" href="/">
                <div className="col-6 col-md-12 col-lg-12">
                    <div className="result_poster">
                        <img
                            className="result_poster-img border-rounded "
                            loading="lazy"
                            crossOrigin="true"
                            src={`${imgURL}w200${poster_path}`}
                            alt={`${title} poster`}
                        />
                    </div>
                    <div className="result_info">
                        <p>{title}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
}

module.exports = MovieResult;

const { Link } = require("react-router-dom");

function MovieResult({ title, poster_path, id, name }) {
    let imgURL = `https://image.tmdb.org/t/p/w200${poster_path}`;
    let emptyImg = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoCzq9xjEDLMt0eFPm5RP_-kTFYleKW3iheQ&usqp=CAU`
    if (poster_path !== null) {
        poster_path;
    } else {
        imgURL = emptyImg;
    }
    let movieName = title || name;
    return (
        <div className="result_col">
            <Link to={`/movie/${id}`}>
                <div className="col-6 col-md-12 col-lg-12">
                    <div className="result_poster">
                        <img
                            className="result_poster-img border-rounded "
                            loading="lazy"
                            crossOrigin="true"
                            src={`${imgURL}`}
                            alt={`${movieName} poster`}
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

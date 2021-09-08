function Detail({
    name,
    title,
    poster_path,
    backdrop_path,
    overview,
    release_date,
    vote_average,
    genres,
    runtime,
    tagline,
    original_language,
}) {
    let posterPath = poster_path || backdrop_path;
    let size = "w500";
    let backdrop = `https://image.tmdb.org/t/p/${size}${backdrop_path}`;
    let imgURL = `https://image.tmdb.org/t/p/${size}${posterPath}`;

    let emptyImg = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoCzq9xjEDLMt0eFPm5RP_-kTFYleKW3iheQ&usqp=CAU`;

    if (posterPath !== null) {
        posterPath;
    } else {
        imgURL = emptyImg;
    }
    let movieTitle = title || name;

    let genreName =
        genres &&
        genres.map(function (genre) {
            return genre.name;
        });

    let genre = genreName.join(", ");

    let runtimeHH = runtime / 60;

    let rate = vote_average;
    let rateToDemical = rate.toFixed(1);
    return (
        <div className="col-md-12 d-flex flex-column flex-md-row">
            <div className="col-sm-12 col-md-6">
                <div className="detail_poster">
                    <img
                        className="detail_poster-img border-rounded"
                        src={`${imgURL}`}
                        crossOrigin="true"
                        alt={`${title} poster`}
                    />
                </div>
            </div>
            <div className="col-sm-12 col-md-6">
                <div className="detail_text-col ">
                    <div className="detail_text-top">
                        <h1 className="text-uppercase font-weight-bold">
                            {movieTitle}
                        </h1>

                        <div className="detail_row">
                            <div className="detail_runtime">{runtimeHH}</div>
                            <div className="detail_language-tag">
                                {original_language}
                            </div>
                        </div>
                    </div>
                    <div className="detail_text-center text-justify">
                        <p>{overview}</p>
                    </div>
                    <div className="detail_text-bottom text-justify">
                        <p>
                            <span>Release Date:</span> {release_date}
                        </p>
                        <p>
                            <span>Rating:</span> {rateToDemical} / 10
                        </p>
                        <p>
                            <span>Genre: </span> {genre}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

module.exports = Detail;

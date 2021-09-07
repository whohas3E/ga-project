function Detail({
    name,
    title,
    poster_path,
    backdrop_path,
    overview,
    release_date,
    vote_average,
    genres,
    status,
}) {
    let posterPath = poster_path || backdrop_path ;

    let imgURL = `https://image.tmdb.org/t/p/w342${posterPath}`;

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
    
    return (
        <div className="detail_col">
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
                            <h2>{movieTitle}</h2>
                           
                            <p>Release Date: {release_date}</p>
                            <p>{vote_average}</p>
                            <p>Genre: {genre}</p>
                        </div>
                        <div className="detail_text-bottom text-justify">
                            <p>{overview}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

module.exports = Detail;

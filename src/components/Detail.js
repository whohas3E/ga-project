function Detail({
    name,
    title,
    poster_path,
    overview,
    release_date,
    vote_average,
    genre_ids,
    media_type,
}) {
    let imgURL = `https://image.tmdb.org/t/p/`;
   
    return (
        <div className="detail_col">
            <div className="col-md-12 d-flex flex-column flex-md-row">
                <div className="col-sm-12 col-md-6">
                    <div className="detail_poster">
                        <img
                            className="detail_poster-img border-rounded"
                            src={`${imgURL}w342${poster_path}`}
                            crossOrigin="true"
                            alt={`${title} poster`}
                        />
                    </div>
                </div>
                <div className="col-sm-12 col-md-6">
                    <div className="detail_text-col ">
                        <div className="detail_text-tag">
                            <label>{media_type}</label>
                        </div>
                        <div className="detail_text-top">
                            <h2>{title}</h2>
                            <ul>
                                <li>{genre_ids}</li>
                                <li>{release_date}</li>
                            </ul>

                            <small>{vote_average}/10</small>
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

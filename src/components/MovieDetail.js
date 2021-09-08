const Detail = require("./Detail");
const { Link, useParams } = require("react-router-dom");
const { useEffect, useState } = require("react");

function MovieDetail() {
    const { id } = useParams();
    const [detail, setDetail] = useState(null);
    useEffect(function () {
        if (id) {
            let apiKey = `?api_key=${process.env.TMDB_API_KEY}`;
            let url = `https://api.themoviedb.org/3/movie/${id}${apiKey}`;
            fetch(url, { method: "GET" })
                .then(function (res) {
                    return res.json();
                })
                .then(function (data) {
                    setDetail(data);
                    console.log(data);
                });
        }
    }, []);
    return (
        <div className="container-fluid">
            <div className="row row-wrap">
            <div className="detail_col">
            <div className="back-link">
                    <Link to="/">
                        <span>Back</span>
                    </Link>
                </div>
                <div className="heading">
                    <h2 className="movie_heading">Overviews</h2>
                </div>
                {detail && <Detail {...detail} />}
            </div>

            </div>
                
        </div>
    );
}

module.exports = MovieDetail;

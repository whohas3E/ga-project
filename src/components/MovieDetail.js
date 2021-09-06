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
            <div className="row">
                <div className="back-link">
                    <Link to="/">
                        <button>Back To Home</button>
                    </Link>
                </div>
            </div>
            <div className="row row-wrap">
                <div className="heading">
                    <h2 className="movie_heading">Movie Details</h2>
                </div>
            </div>

            <div className="row">{detail && <Detail {...detail} />}</div>
        </div>
    );
}

module.exports = MovieDetail;

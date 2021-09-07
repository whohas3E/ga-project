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
                <div className="col-12 bgImg">
                    <div className="back-link">
                        <Link to="/">
                            <button>Back To Home</button>
                        </Link>
                    </div>
                    <div className="heading">
                        <h2 className="movie_heading">Overviews</h2>
                    </div>
                    <div className="col-12 col-md-10 m-auto">
                        {detail && <Detail {...detail} />}
                    </div>
                </div>
            </div>

            <div className="row"></div>
        </div>
    );
}

module.exports = MovieDetail;

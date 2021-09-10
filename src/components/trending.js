const { useState, useEffect } = require("react");
const { getTrending } = require("../services/api");
const MovieCard = require("./movieCard");

function Trending() {
    const [trendings, setTrendings] = useState([]);

    useEffect(function () {
        getTrending().then(function (data) {
            setTrendings(data.results);
        });
    }, []);
    return (
        <div className="container-fluid trending_container">
            <div className="row row-wrap">
                <div className="slider_heading">
                    <h2 className="slider_heading-title">Trending Now</h2>
                </div>
            </div>

            <div className="row wrap justify-content-around">
                {trendings.map(function (trending) {
                    return <MovieCard key={trending.id} {...trending} />;
                })}
            </div>
        </div>
    );
}

module.exports = Trending;

const Trend = require("./Trend");
function Trending({trendings}) {
    return (
        <div className="container-fluid trending_container">
            <div className="row row-wrap">
                <div className="heading">
                    <h2 className="movie_heading">Trending Now</h2>
                </div>
            </div>
           
            <div className="row wrap justify-content-around">
                {trendings.map(function (trending) {
                    return <Trend key={trending.id} trend={trending} />;
                })}
            </div>
        </div>
    );
}

module.exports = Trending;

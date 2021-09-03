const Trend = require("./Trend");
function Trends({ trendings }) {
    return (
        <div className="container-fluid">
            <div className="row row-wrap">
                <div className="heading">
                    <h2 className="movie_heading">Trending Now</h2>
                </div>
            </div>
            <div className="trend_row">
                <div className="row row-nowrap">
                    {trendings.map(function (trending) {
                        return <Trend key={trending.id} trend={trending} />;
                    })}
                </div>
            </div>
        </div>
    );
}

module.exports = Trends;

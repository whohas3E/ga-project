const Detail = require("./Detail");
const { Link } = require("react-router-dom");

function MovieDetail({ details }) {
    return (
        <div className="container-fluid">
            <div className="row row-wrap">
                <div className="heading">
                    <h2 className="movie_heading">Movie Details</h2>
                </div>
                
            </div>
            <div className="row">
            <div className="back-link">
                    <Link to="/">______Back</Link>
                </div>
            </div>
            <div className="row">
                {details.map(function (detail) {
                    return <Detail {...detail} key={detail.id} />;
                })}
            </div>
        </div>
    );
}

module.exports = MovieDetail;

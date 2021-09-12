const Detail = require("./Detail");
const { useParams } = require("react-router-dom");
const { useEffect, useState } = require("react");
const { getMovieDetail } = require("../services/api");

function MovieDetail() {
    const { id } = useParams();
    const [detail, setDetail] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(function () {
        if (id) {
            setIsLoading(true);
            getMovieDetail(id).then(function (data) {
                console.log(data);
                if (data.id) {
                    setDetail(data);
                } else {
                    setDetail(null);
                }
                setIsLoading(false);
            });
        }
    }, []);
    return (
        <>
            {!isLoading &&
                (detail ? (
                    <Detail {...detail} />
                ) : (
                    <div className="detail_noResult">
                        <div className="noResult-icon"></div>
                        <div>
                            <span>Urghh....no movie details was found !</span>
                        </div>
                    </div>
                ))}
        </>
    );
}

module.exports = MovieDetail;

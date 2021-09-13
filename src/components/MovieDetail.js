const Detail = require("./Detail");
const { useParams } = require("react-router-dom");
const { useEffect, useState } = require("react");
const { getMovieDetail } = require("../services/api");

function MovieDetail() {
    // useParam - link movies id to get movie detail 
    const { id } = useParams();
    // get moviedetail data
    const [detail, setDetail] = useState(null);
    // loading movie when click for more movie information, so will hide the "no movie found" when reach the page
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

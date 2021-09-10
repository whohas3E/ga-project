const { useState, useEffect } = require("react");
const { getPlayingNow } = require("../services/api");
const MovieCard = require("./movieCard");
const Slider = require("react-slick").default;

function PlayingNow() {
    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        responsive: [
            {
                breakpoint: 1450,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 670,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    // useState
    const [playings, setPlayings] = useState([]);
    // getPlayingNow function from service/api return to here
    useEffect(function () {
        getPlayingNow().then(function (data) {
            setPlayings(data.results);
        });
    }, []);
    return (
        <div className="container-fluid playingNow slider_container">
            {/* movie slider title (seperator) */}
            <div className="slider_title playingNow_title">
                <h2 className="slider_title-heading playingNow_title-heading">
                    Playing Now
                </h2>
                <hr />
            </div>
            {/* movie display in slick slider */}
            <Slider {...settings}>
                {playings.map(function (playing) {
                    return <MovieCard key={playing.id} {...playing} />;
                })}
            </Slider>
        </div>
    );
}

module.exports = PlayingNow;

const { useState, useEffect } = require("react");
const { getPopular } = require("../services/api");
const MovieCard = require("./movieCard");
const Slider = require("react-slick").default;

function Popular() {
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
    const [populars, setPopulars] = useState([]);
    // getPopular function from service/api return to here
    useEffect(function () {
        getPopular().then(function (data) {
            setPopulars(data.results);
        });
    }, []);
    return (
        <div className="container-fluid popular slider_container">
            {/* movie slider title (seperator) */}
            <div className="slider_title popular_title">
                <h2 className="slider_title-heading popular_title-heading">
                    popular
                </h2>
                <hr />
            </div>
            {/* movie display in slick slider */}
            <Slider {...settings}>
                {populars.map(function (popular) {
                    return <MovieCard key={popular.id} {...popular} />;
                })}
            </Slider>
        </div>
    );
}

module.exports = Popular;

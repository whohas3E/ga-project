const Trend = require("./Trend");
const Slider = require("react-slick").default;

function Trends({ trendings }) {
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
    return (
        <div className="container-fluid trending_container">
            <div className="row row-wrap">
                <div className="heading">
                    <h2 className="movie_heading">Trending Now</h2>
                </div>
            </div>
            <Slider {...settings}>
                {trendings.map(function (trending) {
                    return <Trend key={trending.id} trend={trending} />;
                })}
            </Slider>
        </div>
    );
}

module.exports = Trends;

const { BrowserRouter, Switch, Route } = require("react-router-dom");
const { useState, useEffect } = require("react");
const Nav = require("./nav");
const Footer = require("./footer");
const About = require("./about");
const Trends = require("./Trends");
const MovieDetail = require("./MovieDetail");
const Search = require("./Search");
const Hero = require("./hero");
const Trending = require("./trending");

function App() {
    let apiKey = `?api_key=${process.env.TMDB_API_KEY}`;
    let url = `https://api.themoviedb.org/3/trending/all/day${apiKey}`;
    let collectionURL = `
    https://api.themoviedb.org/3/collection/10${apiKey}&language=en-US`;
    console.log(collectionURL);
    // get the trending
    const [trendings, setTrendings] = useState([]);
    useEffect(function () {
        fetch(url, { method: "GET" })
            .then(function (res) {
                return res.json();
            })
            .then(function (trendings) {
                setTrendings(trendings.results);
            });
    }, []);

    let logo = "MovieDB";
    let searchTitle = "Search Your Movie";

    return (
        <BrowserRouter>
            <Nav logo={logo} />
            <Switch>
                <Route exact={true} path="/">
                    <Hero />
                    <Search />
                    <Trends trendings={trendings} />
                </Route>
                <Route path="/search">
                    <div className="heading">
                        <h2 className="movie_heading text-center">
                            Search Your Movies
                        </h2>
                    </div>
                    <Search />
                </Route>
                <Route path="/movie/:id">
                    <MovieDetail details={trendings} />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/trending">
                    <Trending trendings={trendings} />
                </Route>
            </Switch>
            <Footer />
        </BrowserRouter>
    );
}

module.exports = App;

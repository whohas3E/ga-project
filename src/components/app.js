const { BrowserRouter, Switch, Route } = require("react-router-dom");
const { useState, useEffect } = require("react");
const Nav = require("./nav");
const Footer = require("./footer");
const About = require("./about");
const Trends = require("./Trends");
const MovieDetail = require("./MovieDetail");
const Search = require("./Search");

function App() {
    let apiKey = `?api_key=${process.env.TMDB_API_KEY}`;
    let url = `https://api.themoviedb.org/3/trending/all/day${apiKey}`;

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
                    <Search title={searchTitle} />
                    <Trends trendings={trendings} />
                </Route>
                <Route path="/movie/:id">
                    <MovieDetail details={trendings} />
                </Route>

                <Route path="/about">
                    <About />
                </Route>
            </Switch>
            <Footer/>
        </BrowserRouter>
    );
}

module.exports = App;

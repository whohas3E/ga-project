const { BrowserRouter, Switch, Route } = require("react-router-dom");
const Nav = require("./nav");
const Hero = require("./hero");
const About = require("./about");
const Footer = require("./footer");
const Upcomings = require("./upcoming");
const PlayingNow = require("./playingNow");
const Popular = require("./popular");
const Search = require("./Search");
const Trending = require("./trending");
const MovieDetail = require("./MovieDetail");

function App() {
    // logo title

    return (
        <BrowserRouter>
            <Nav />
            <Switch>
                <Route exact={true} path="/">
                    <Hero />
                    <Search />
                    <Upcomings />
                    
                    <Popular />
                    <PlayingNow />
                </Route>
                <Route path="/search">
                    <div className="search_title">
                        <h2 className="movie_heading text-center">
                            Search Your Movies
                        </h2>
                    </div>
                    <Search />
                </Route>
                <Route path="/movie/:id">
                    <MovieDetail />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/trending">
                    <Trending />
                </Route>
            </Switch>
            <Footer />
        </BrowserRouter>
    );
}

module.exports = App;

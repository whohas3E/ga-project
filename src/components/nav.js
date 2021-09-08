const { Link } = require("react-router-dom");

function Nav({ logo }) {
    return (
        <header>
            <nav>
                <div>
                    <Link to="/">
                        <h4>{logo}</h4>
                    </Link>
                </div>
                <div>
                    <Link to="/search">Search</Link>
                    <Link to="/trending">Trending</Link>
                    <Link to="/about">About</Link>
                </div>
            </nav>
        </header>
    );
}

module.exports = Nav;

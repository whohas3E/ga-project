const { Link } = require("react-router-dom");
function Nav({ logo }) {
    return (
        <header>
            <nav>
                <div>
                    <div>
                        <h4>{logo}</h4>
                    </div>
                </div>
                <div>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                </div>
            </nav>
        </header>
    );
}

module.exports = Nav;

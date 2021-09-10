const { Link } = require("react-router-dom");
const { RiMovie2Fill } = require("react-icons/ri");
const { FiSearch } = require("react-icons/fi");
const { FaRegUserCircle } = require("react-icons/fa");

function Nav() {
    return (
        <header>
            <nav>
                <div className="nav_left">
                    <Link to="/">
                        <h4 className="nav_left-logo">
                            M<RiMovie2Fill className="icon-movie" />
                            VVIE
                        </h4>
                    </Link>
                </div>
                <div className="nav_center">
                    <Link to="/">HOME</Link>
                    <Link to="/trending">TRENDING</Link>
                    <Link to="/about">ABOUT</Link>
                </div>
                <div className="nav_right">
                    <Link to="/search" className="nav_right-search">
                        <FiSearch className="icon-search" />
                        SEARCH
                    </Link>
                    <FaRegUserCircle className="icon-user" />
                </div>
            </nav>
        </header>
    );
}

module.exports = Nav;

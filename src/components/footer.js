const { RiMovie2Fill } = require("react-icons/ri");

function Footer() {
    return (
        <footer section="footer">
            <div className="footer_container text-center">
                <div className="footer_container-top">
                    <h5>
                        M<RiMovie2Fill className="icon-movie" />
                        VVIE
                    </h5>
                    <p>
                        This application uses the TMDb API but is not endorsed
                        or certified by TMDb.
                    </p>
                </div>
            </div>
        </footer>
    );
}

module.exports = Footer;

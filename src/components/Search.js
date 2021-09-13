const { useState } = require("react");
const { searchMovie } = require("../services/api");
const MovieCard = require("./movieCard");

function Search() {
    const [searchValue, setSearchValue] = useState([]);
    const [inputValue, setInputValue] = useState("");

    // set data errors is when the users empty the input, so the result wont be jumping/cause error
    function handleOnChange(e) {
        e.preventDefault(); // prevent page refresh
        setInputValue(e.target.value); // when user type in input, will target the words while user type
        searchMovie(e.target.value).then(function (searchValue) {
            if (!searchValue.errors) {
                setSearchValue(searchValue.results);
            } else {
                setSearchValue([]);
            }
        });
    }
    // when click submit/enter keyword, will not refresh page
    function handleOnSubmit(e) {
        e.preventDefault();
    }

    return (
        <div className="search search_container">
            <div className="search_input">
                <form onSubmit={handleOnSubmit}>
                    <input
                        type="text"
                        placeholder="Enter your keyword i.e: Jaws"
                        value={inputValue}
                        onChange={handleOnChange}
                    />
                </form>
            </div>
            <div className="search_result">
                <div className="row row-wrap justify-content-around">
                    {!!inputValue &&
                        (searchValue.length ? (
                            searchValue.map(function (result) {
                                return (
                                    <MovieCard key={result.id} {...result} />
                                );
                            })
                        ) : (
                            <div>
                                <div className="noResult-icon"></div>
                                <div>
                                    <span>Urghh....no movie was found !</span>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
}

module.exports = Search;

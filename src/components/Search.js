const { useState, useEffect } = require("react");
const SearchMovie = require("./SearchMovie");

function Search({ title }) {
    const [searchValue, setSearchValue] = useState([]);
    const [inputValue, setInputValue] = useState("");

    function handleOnChange(e) {
        e.preventDefault();
        setInputValue(e.target.value);
        let apiKey = `?api_key=${process.env.TMDB_API_KEY}`;
        let url = `https://api.themoviedb.org/3/search/movie${apiKey}&language=en-US&page=1&include_adult=false&query=${e.target.value}`;
        fetch(url, { method: "GET" }).then(function (res) {
            return res.json().then(function (searchValue) {
                if (!searchValue.errors) {
                    setSearchValue(searchValue.results);
                } else {
                    setSearchValue([]);
                }
            });
        });
    }
    function handleOnSubmit(e) {
        e.preventDefault();
    }

    return (
        <div className="container-fluid">

            <div className="result_input">
                <form onSubmit={handleOnSubmit}>
                    <input
                        type="text"
                        placeholder="Enter your keyword i.e: Jaws"
                        value={inputValue}
                        onChange={handleOnChange}
                    />
                </form>
            </div>
            <div className="result_container">
                <SearchMovie results={searchValue} />
            </div>
        </div>
    );
}

module.exports = Search;

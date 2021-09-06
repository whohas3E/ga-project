const MovieResult = require("./Movie_Result");
function SearchMovie({ results }) {
    return (
        <div className="row row-wrap justify-content-around">
            {results.map(function (result) {
                return <MovieResult key={result.id} {...result} />;
            })}
        </div>
    );
}

module.exports = SearchMovie;

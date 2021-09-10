// themoviedb URL + API KEY
let baseURL = `https://api.themoviedb.org/3/`;
let apiKey = `?api_key=${process.env.TMDB_API_KEY}`;

// Trending API fetch data
export function getTrending() {
    let trendURL = `${baseURL}trending/all/day${apiKey}&language=en-US&page=4`;

    return fetch(trendURL, { method: "GET" }).then(function (res) {
        return res.json();
    });
}

// Upcoming API fetch data
export function getUpcoming() {
    let upcomingURL = `${baseURL}movie/upcoming${apiKey}`;

    return fetch(upcomingURL, { method: "GET" }).then(function (res) {
        return res.json();
    });
}

// Popular API fetch data
export function getPopular() {
    let popularURL = `${baseURL}movie/popular${apiKey}&language=en-US&page=6`;
    return fetch(popularURL, { method: "GET" }).then(function (res) {
        return res.json();
    });
}

// Playing Now API fetch data
export function getPlayingNow() {
    let playingNowURL = `${baseURL}movie/now_playing${apiKey}&language=en-US&page=1`;
    return fetch(playingNowURL, { method: "GET" }).then(function (res) {
        return res.json();
    });
}


// Get movie detail page (id) fetch data
export function getMovieDetail(id) {
    let detailURL = `${baseURL}movie/${id}${apiKey}`;
    return fetch(detailURL, { method: "GET" }).then(function (res) {
        return res.json();
    });
}

// Movie search API with value
export function searchMovie(value) {
    let searchURL = `${baseURL}search/movie${apiKey}&language=en-US&page=1&include_adult=false&query=${value}`;
    return fetch(searchURL, { method: "GET" }).then(function (res) {
        return res.json();
    });
}

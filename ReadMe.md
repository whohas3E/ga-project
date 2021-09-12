## An overview of my idea

I will create a movie single application. I want to build a movie app is because I learnt from previous classes and I found out is very interesting. And, I love to watch Netflix. I would give it a try..(with a very simple movie concept first)

#### How I start my project

-   [x] Register an account from TMDB (https://www.themoviedb.org/settings/api) and get the API KEY
-   [ ] Collect all the possible API URL to use in the movie app. - [x] Trending (https://api.themoviedb.org/3/trending/all/day?api_key=<<api_key>>) - [x] Upcoming (https://api.themoviedb.org/3/movie/upcoming?api_key=<<api_key>>&language=en-US&page=1) - [x] Popular (https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1) - [x] Top Rated (https://api.themoviedb.org/3/movie/top_rated?api_key=<<api_key>>&language=en-US&page=1) - [x] Search (https://api.themoviedb.org/3/search/company?api_key=<<api_key>>&page=1) - [ ] Genres (https://api.themoviedb.org/3/genre/movie/list?api_key=<<api_key>>&language=en-US) - [ ] Review (https://api.themoviedb.org/3/review/{review_id}?api_key=<<api_key>>) - [ ] Account (https://api.themoviedb.org/3/account?api_key=<<api_key>>)
-   [ ] Image URL & Sizes. - [ ] Image URL (http://image.tmdb.org/t/p/w500/) \* Image sizes: w200/w342/w500/w700/ original

### Technical Hurdle

-   When I got the API return, I could'nt load the poster_path correctly. After consult with my instructor to solve it with 'crossOrifin="true"'. And yes, the problem was solved.
-   Many problem I actually faced in this project, etc using React JSX couldn't directly add conditional statement inside the return. only can inside a <div> or ternary is better.

-   When the project comes with many components files, I felt confuse and mess up. End up I find a solution with putting all the API URL in "service/api.js" and return the function to each "popular movies", "upcoming movies", "trending movies"...

### What I enjoyed in the project

I enjoyed getting all the API from TMDB. I could get all the information and display in the website and manage to build a simple movie application. Therefore, I master on using React and knowing more theory in React. After that, I will apply more database knowledge into the movie application, etc the user could login/register an account, the user could add the movie list or review the movie.

### used tools

-   React Components
-   React Icons
-   React Slick
-   React Router
-   React Hook
-   TMDB API
-   Bootstrap CSS

### To Add on next thing:

-   [ ] search result with TV show and Movie dropdown
-   [ ] Genre movies slick slider in the homepage and maybe genres tag for filtering search result
-   [ ] Add login/register account
-   [ ] To review section for movies/tv shows
-   [ ] have a trailer video for each movies/tv shows

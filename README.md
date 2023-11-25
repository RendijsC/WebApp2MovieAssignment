# WebApp2MovieAssignment

# Assignment 1 - ReactJS app.

Name: Rendijs Cielava

## Overview.
Created a movie web application using react and tmdb.

### Features.
 
Feature 1 :
Created new pages top rated, trending and now playing. 

Feature 2 :
Parameterised end points, added alternative languages, associated actors to the movie and similar movies each new parameterised endpoint had a associated api link.

Feature 3 : 
Linking created, able to click more info on actor card to show their movies.

Feature 4 :
Filter by rating where user is able to pick a minimum rating to be shown from 1 to 10.

Feature 5 :
Sorting by year if button pressed shows movies newest to oldest .

Feature 6 :
Pagination added to the bottom of the page.

Feature 7 :
New actor page with search actor function.


## API endpoints.

Top rated movies =/movie/top_rated

Trending movies =/trending/movie/day

Now playing = /movie/now_playing

Similar movies = /movie/${id}/similar

Alternative title = /movie/${id}/alternative_titles

Actor movies = /person/${id}/movie_credits

Movie actors = /movie/${id}/credits


## Routing.

Top Rated
/movies - displays all movies
/movies/topRated - displays only Top Rated movies from tmdb

Trending movies
/movies - displays all movies
/movies/trending - displays only trending movies from tmdb

Now Playing movies
/movies - displays all movies
/movies/nowPlaying - display only trending movies from tmdb

/actors - displays all actors
/actors/:id - displays a particular actor
/actors/:id/actorMovies - displays the actors movies

## Independent learning (If relevant).

pagination refernece https://dev.to/sadeedpv/a-beginners-guide-to-creating-pagination-in-reactjs-2a35#:~:text=,js%20application

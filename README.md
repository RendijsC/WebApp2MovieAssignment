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

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
# Assignment 2 - Web API.

Name: Rendijs Cielava

## Features.

+ In movie details it displays movie translations 
+ In movie details it gives a link to see movie trailer
+ In movie details it gives a link to watch providers
+ In movie details displays release dates for the movie
+ error diplay when trying to sign up if password does not meet requirments
## API Configuration

create an .env file in movie-api folder with the following: 
______________________
NODEENV=development
PORT=8080
HOST=
MONGO_DB=
TMDB_KEY=
SECRET=
______________________

## API Design

- localhost:8080/api/users | POST | Logs in user
- localhost:8080/api/users?action=register | POST | Sign up for user
- localhost:8080/api/movies/tmdb/discover | GET | Gets movies
- localhost:8080/api/movies/tmdb/movie/${id} | GET| Gets Movie
- localhost:8080/api/movies/tmdb/genre | GET | Gets genres
- localhost:8080/api/movies/tmdb/movie/${id}/images | GET | Gets movie images
- localhost:8080/api/movies/tmdb/movie/${id}/reviews | GET | Gets movie reviews
- localhost:8080/api/movies/tmdb/upcoming | GET | Gets upcoming movies
- localhost:8080/api/movies/tmdb/toprated | GET | Gets top rated movies
- localhost:8080/api/movies/tmdb/trending | GET | Gets trending movies
- localhost:8080/api/movies/tmdb/nowplaying | GET | Gets now playing movies
- localhost:8080/api/movies/tmdb/movie/${id}/credits | GET | Gets movie actors
- localhost:8080/api/movies/tmdb/movie/${id}/similar | GET | Gets similar movies
- localhost:8080/api/movies/tmdb/person/${actorId}/moviecredits | GET | Gets Actor Movies
- http://localhost:8080/api/movies/tmdb/person?query=${query} | GET | Gets the name of the actor searched
- http://localhost:8080/api/movies/tmdb/movie/${id}/alternativetitles | GET | Gets alternative titles
- localhost:8080/api/movies/tmdb/movie/${movieId}/getMoviesProviders | GET | Gets movie providers
- localhost:8080/api/movies/tmdb/movie/${id}/releaseDates | GET | Gets release dates of movies
- localhost:8080/api/movies/tmdb/movie/${id}/movieTrailers | GET | Gets movie trailers
- localhost:8080/api/movies/tmdb/movie/${id}/movieTranslations | GET | Gets movie translations
  

## Security and Authentication

User is authenticated using JWT Bearer Tokens which is required to preform validation of users. 

Authentication required to access these routes: 

+ /movies/favorites 
+ /movies/upcoming
+ /reviews/:id
+ /movies/:id
+ / = Home page
+ /* = Navigation
+ /reviews/form
+ /movies/topRated
+ /movies/trending
+ /movies/nowPlaying
+ /actors/:id/actorMovies
+ /movies/searchActors


## Integrating with React App

Describe how you integrated your React app with the API. List the views that use your Web API instead of the TMDB API. Describe any other updates to the React app from Assignment One.

First Function (External API): It fetches similar movies from TMDB API using the movie ID. It handles errors if the response is not OK and throws an error with the response message. This function is used when direct calls to the TMDB API are required.

Express Router (router.get): Defines a route in an Express.js server. When the route is hit, it uses the first function to get data from the TMDB API and sends it back as a JSON response. This route acts as a intermediary between the TMDB API and the React app.

Second Function (Internal API): This version fetchesfrom your internal API running on localhost. It includes an 'Authorization' header, this endpoint requires authentication. It is used within the React app to fetch similar movies through the your internal API, which in turn communicates with the TMDB API.

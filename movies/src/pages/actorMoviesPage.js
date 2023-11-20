import React from "react";
import { getActorMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'

const ActorMoviePage = () => {

    const { data, error, isLoading, isError } = useQuery('actorMovies', getActorMovies)
   
  
    if (isLoading) {
      return <Spinner />;
    }
  
    if (isError) {
      return <h1>{error.message}</h1>;
    }
    const movies = data.results;
  
    return (
      <PageTemplate
        title="Now Playing Movies"
        movies={movies}
        action={(movie) => {
          return <AddToFavoritesIcon movie={movie} />;
        }}
      />
    );
  };
  
export default ActorMoviePage;
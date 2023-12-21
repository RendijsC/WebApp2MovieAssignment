import React from "react";
import { getActorMovies } from "../api/frontend-tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'
import { useParams } from "react-router-dom";

const ActorMoviePage = () => {

  const { id } = useParams();

    const { data, error, isLoading, isError } = useQuery(
      ['actorMovies', { id: id }],
      () => getActorMovies(id)
    );
   
  
    if (isLoading) {
      return <Spinner />;
    }
  
    if (isError) {
      return <h1>{error.message}</h1>;
    }
    const movies = data.cast;
  
    return (
      <PageTemplate
        title="Actors Movies"
        movies={movies}
        action={(movie) => {
          return <AddToFavoritesIcon movie={movie} />;
        }}
      />
    );
  };
  
export default ActorMoviePage;
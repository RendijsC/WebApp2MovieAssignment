import React from "react";
import { useParams } from 'react-router-dom';
import MovieDetails from "../components/movieDetails/";
import PageTemplate from "../components/templateMoviePage";
import { getMovie } from '../api/frontend-tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'
import SimilarMovies from "../components/similarMovies";
import AlternativeTitles from "../components/alternativeTitles";
import MovieActors from "../components/actors";
import MoviesProviders from "../components/watchProviders";
import ReleaseDates from "../components/releaseDates";
import MovieTrailers from "../components/movieTrailers";
import MoviesTranslations from "../components/movieTranslations";



const MoviePage = (props) => {
  const { id } = useParams();
  const { data: movie, error, isLoading, isError } = useQuery(
    ["movie", { id: id }],
    getMovie
  );
  
  
  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      {movie ? (
        <>
          <PageTemplate movie={movie}>
          <AlternativeTitles movieId={id} />
          <MoviesTranslations movieId={id}/>
            <MovieDetails movie={movie} />
            <MovieTrailers movieId={id}/>
            <MoviesProviders movieId ={id}/>
            <MovieActors movieId={id} />
            <SimilarMovies movieId={id} />
            <ReleaseDates movieId={id}/>

          </PageTemplate>
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default MoviePage;
import React from 'react';
import { useQuery } from 'react-query';
import Spinner from '../spinner'; 
import { getMovieTrailers } from '../../api/frontend-tmdb-api';

const MovieTrailers = ({ movieId }) => {
    const { data, isLoading, isError, error } = useQuery(
      ['movieTrailers', movieId],
      () => getMovieTrailers(movieId)
    );

    if (isLoading) {
        return <Spinner />;
    }

    if (isError) {
        return <div>Error: {error.message}</div>;
    }

    const trailerLink = data.results.find(video => video.type === 'Trailer');

    return (
        <div>
            {trailerLink ? (
                <a href={`https://www.youtube.com/watch?v=${trailerLink.key}`} target="_blank" rel="noopener noreferrer">
                    <h1>Watch Trailer</h1>
                </a>
            ) : (
                <p>No Trailer Available.</p>
            )}
        </div>
    );
};

export default MovieTrailers;
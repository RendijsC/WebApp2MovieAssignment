
import React from 'react';
import { useQuery } from 'react-query';
import Spinner from '../spinner'; 
import { getMoviesProviders } from '../../api/frontend-tmdb-api';

const MoviesProviders = ({ movieId }) => {
    const { data, isLoading, isError, error } = useQuery(
      ['moviesProviders', movieId],
      () => getMoviesProviders(movieId)
    );

    if (isLoading) {
        return <Spinner />;
    }

    if (isError) {
        return <div>Error: {error.message}</div>;
    }

    const watchProviderLink = data.results && data.results.US && data.results.US.link;

    return (
        <div>
            {watchProviderLink ? (
                <a href={watchProviderLink} target="_blank" rel="noopener noreferrer">
                    <h1>Watch Movie Here</h1>
                </a>
            ) : (
                <p>No Providers Available.</p>
            )}
        </div>
    );
};

export default MoviesProviders;
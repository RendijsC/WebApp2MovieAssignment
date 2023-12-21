import React from 'react';
import { useQuery } from 'react-query';
import Spinner from '../spinner';
import { getMovieTranslations } from '../../api/frontend-tmdb-api'; // Ensure you have this function in your API file

const MoviesTranslations = ({ movieId }) => {
    const { data, isLoading, isError, error } = useQuery(
        ['movieTranslations', movieId],
        () => getMovieTranslations(movieId)
    );

    if (isLoading) {
        return <Spinner />;
    }

    if (isError) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            <h1>Movie Translations</h1>
            <ul>
                {data.translations.slice(0, 5).map((translation, index) => (
                    <li key={`${translation.iso_3166_1}-${index}`}>
                        {translation.english_name} ({translation.iso_639_1})
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MoviesTranslations;
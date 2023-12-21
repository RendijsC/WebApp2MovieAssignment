
import React from 'react';
import { useQuery } from 'react-query';
import Spinner from '../spinner';
import { getReleaseDates } from '../../api/frontend-tmdb-api';

const ReleaseDates = ({ movieId }) => {
    const { data, isLoading, isError, error } = useQuery(
      ['releaseDates', movieId],
      () => getReleaseDates(movieId)
    );

    if (isLoading) {
      return <Spinner />;
    }

    if (isError) {
      return <div>Error: {error.message}</div>;
    }

    return (
      <div>
        <h2>Release Dates</h2>
        <ul>
          {data.results
            .flatMap(country => 
              country.release_dates.map(release => (
                <li key={`${country.iso_3166_1}-${release.release_date}`}>
                  {country.iso_3166_1}: {new Date(release.release_date).toLocaleDateString()}
                </li>
              ))
            )}
        </ul>
      </div>
    );
};

export default ReleaseDates;

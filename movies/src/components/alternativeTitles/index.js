import React from 'react';
import { useQuery } from 'react-query';
import Spinner from '../spinner'; 
import { getAlternativeTitles } from '../../api/tmdb-api';

const AlternativeTitles = ({ movieId }) => {
    const { data, isLoading, isError, error } = useQuery(
      ['alternativeTitles', movieId],
      () => getAlternativeTitles(movieId)
    );
  
    if (isLoading) {
      return <Spinner />;
    }
  
    if (isError) {
      return <div>Error: {error.message}</div>;
    }
  
    return (
      <div>
        <h1>Alternative Titles</h1>
        <ul>
          {data.titles.slice(0, 5).map(title => (
            <li key={title.iso_3166_1}>{title.title} ({title.iso_3166_1})</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default AlternativeTitles;
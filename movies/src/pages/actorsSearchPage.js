
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Spinner from '../components/spinner';
import { searchActors, getActorMovies } from '../api/tmdb-api';
import PageTemplate from '../components/templateMovieListPage';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites';

const ActorSearchPage = () => {
  const [actorName, setActorName] = useState('');
  const [triggerSearch, setTriggerSearch] = useState(false);
  const [actorId, setActorId] = useState(null);

  const { isLoading: isLoadingActor, isError: isErrorActor } = useQuery(
    ['searchActors', actorName],
    () => searchActors(actorName),
    {
      enabled: triggerSearch,
      onSuccess: (data) => {
        if (data.results.length > 0) {
          setActorId(data.results[0].id);
        }
        setTriggerSearch(false);
      },
    }
  );

  const { data: movies, isLoading: isLoadingMovies } = useQuery(
    ['actorMovies', actorId],
    () => getActorMovies(actorId),
    { enabled: !!actorId }
  );

  const handleSearch = () => {
    setTriggerSearch(true);
  };

  if (isLoadingActor || isLoadingMovies) {
    return <Spinner />;
  }

  if (isErrorActor) {
    return <div>Error fetching actor</div>;
  }

  return (
    <div>
      <TextField
        label="Actor Name"
        value={actorName}
        onChange={(e) => setActorName(e.target.value)}
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleSearch}>
        Search
      </Button>

      {movies && (
        <PageTemplate
          title="Movies"
          movies={movies.cast}
          action={(movie) => <AddToFavoritesIcon movie={movie} />}
        />
      )}
    </div>
  );
};

export default ActorSearchPage;
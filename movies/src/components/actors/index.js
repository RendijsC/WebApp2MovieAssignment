
import React from 'react';
import { useQuery } from 'react-query';
import Spinner from '../spinner'; 
import { getMovieActors } from '../../api/tmdb-api';
import Grid from '@mui/material/Grid'; 
import Card from '@mui/material/Card'; 
import CardMedia from '@mui/material/CardMedia'; 
import CardContent from '@mui/material/CardContent'; 
import Typography from '@mui/material/Typography'; 
import { Link } from "react-router-dom";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";


const MovieActors = ({ movieId }) => {
    const { data: actors, isLoading, isError, error } = useQuery(
        ['actors', movieId],
        () => getMovieActors(movieId)
    );

    if (isLoading) {
        return <Spinner />;
    }

    if (isError) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
          <h2>Actors</h2>
          <Grid container spacing={2}>
            {actors && actors.slice(0, 8).map(actor => (
              <Grid item xs={12} sm={6} md={3} key={actor.id}>
                <Card>
                  <CardMedia
                    component="img"
                    height="400"
                    image={actor.profile_path} 
                    alt={actor.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      {actor.name}
                    </Typography>
                    <CardActions disableSpacing>
                      <Link to={`/actors/${actor.id}/actorMovies`}>
                        <Button variant="outlined" size="medium" color="primary">
                          More Info ...
                        </Button>
                      </Link>
                    </CardActions>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      );
};

export default MovieActors;
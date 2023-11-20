
import React from 'react';
import { useQuery } from 'react-query';
import Spinner from '../spinner'; // Assuming you have a Spinner component for loading state
import { getMovieActors } from '../../api/tmdb-api';
import Grid from '@mui/material/Grid'; // Import Grid from MUI for layout
import Card from '@mui/material/Card'; // Import Card from MUI for actor boxes
import CardMedia from '@mui/material/CardMedia'; // For images
import CardContent from '@mui/material/CardContent'; // For text content
import Typography from '@mui/material/Typography'; // For the actor names

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
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default MovieActors;
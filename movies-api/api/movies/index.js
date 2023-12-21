import movieModel from './movieModel';
import asyncHandler from 'express-async-handler';
import express from 'express';
import {getUpcomingMovies, getGenres, getMovies, getMovie,getMovieImages,getMovieReviews,getTopRatedMovies,getTrendingMovies,getNowPlayingMovies,getSimilarMovies,getAlternativeTitles,getActorMovies,getMovieActors,searchActors, getMoviesProviders, getReleaseDates, getMovieTrailers, getMovieTranslations} from '../tmdb-api';


const router = express.Router();

router.get('/:id', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    const movie = await movieModel.findByMovieDBId(id);
    if (movie) {
        res.status(200).json(movie);
    } else {
        res.status(404).json({message: 'The movie you requested could not be found.', status_code: 404});
    }
}));


router.get('/', asyncHandler(async (req, res) => {
    let { page = 1, limit = 10 } = req.query;
    [page, limit] = [+page, +limit]; 

   
    const [total_results, results] = await Promise.all([
        movieModel.estimatedDocumentCount(),
        movieModel.find().limit(limit).skip((page - 1) * limit)
    ]);
    const total_pages = Math.ceil(total_results / limit); 

   
    const returnObject = {
        page,
        total_pages,
        total_results,
        results
    };
    res.status(200).json(returnObject);
}));

router.get('/tmdb/upcoming', asyncHandler(async (req, res) => {
    const upcomingMovies = await getUpcomingMovies();
    res.status(200).json(upcomingMovies);
}));

router.get('/tmdb/genre', asyncHandler(async (req, res) => {
    const genres = await getGenres();
    res.status(200).json(genres);
}));

router.get('/tmdb/discover', asyncHandler(async (req, res) => {
    const movies = await getMovies();
    res.status(200).json(movies);
}));

router.get('/tmdb/movie/:id', asyncHandler(async (req, res) => {
    const movie = await getMovie({ queryKey: ['movie', { id: req.params.id }] });
    res.status(200).json(movie);
}));

router.get('/tmdb/movie/:id/images', asyncHandler(async (req, res) => {
    const images = await getMovieImages({ queryKey: ['images', { id: req.params.id }] });
    res.status(200).json(images);
}));

router.get('/tmdb/movie/:id/reviews', asyncHandler(async (req, res) => {
    const reviews = await getMovieReviews(req.params.id);
    res.status(200).json(reviews);
}));

router.get('/tmdb/toprated', asyncHandler(async (req, res) => {
    const topRatedMovies = await getTopRatedMovies();
    res.status(200).json(topRatedMovies);
}));

router.get('/tmdb/trending', asyncHandler(async (req, res) => {
    const trendingMovies = await getTrendingMovies();
    res.status(200).json(trendingMovies);
}));

router.get('/tmdb/nowplaying', asyncHandler(async (req, res) => {
    const nowPlayingMovies = await getNowPlayingMovies();
    res.status(200).json(nowPlayingMovies);
}));

router.get('/tmdb/movie/:id/similar', asyncHandler(async (req, res) => {
    const similarMovies = await getSimilarMovies(req.params.id);
    res.status(200).json(similarMovies);
}));

router.get('/tmdb/movie/:id/alternativetitles', asyncHandler(async (req, res) => {
    const alternativeTitles = await getAlternativeTitles(req.params.id);
    res.status(200).json(alternativeTitles);
}));

router.get('/tmdb/person/:id/moviecredits', asyncHandler(async (req, res) => {
    const actorMovies = await getActorMovies(req.params.id);
    res.status(200).json(actorMovies);
}));

router.get('/tmdb/movie/:id/credits', asyncHandler(async (req, res) => {
    const movieActors = await getMovieActors(req.params.id);
    res.status(200).json(movieActors);
}));

router.get('/tmdb/person', asyncHandler(async (req, res) => {
    const {query} = req.query;
    const actors = await searchActors(query);
    res.status(200).json(actors);
}));


router.get('/tmdb/movie/:movieId/getMoviesProviders', asyncHandler(async (req, res) => {
    const moviesProviders = await getMoviesProviders(req.params.movieId);
    res.status(200).json(moviesProviders);
}));

router.get('/tmdb/movie/:id/releaseDates', asyncHandler(async (req, res) => {
    const releaseDates = await getReleaseDates(req.params.id);
    res.status(200).json(releaseDates);
}));

router.get('/tmdb/movie/:id/movieTrailers', asyncHandler(async (req, res) => {
    const movieTrailers = await getMovieTrailers(req.params.id);
    res.status(200).json(movieTrailers);
}));

router.get('/tmdb/movie/:id/movieTranslations', asyncHandler(async (req, res) => {
    const movieTranslations = await getMovieTranslations(req.params.id);
    res.status(200).json(movieTranslations);
}));





export default router;
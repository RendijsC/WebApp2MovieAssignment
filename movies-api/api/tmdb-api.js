import fetch from 'node-fetch';

export const getUpcomingMovies = async () => {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.TMDB_KEY}&language=en-US&page=1`
        );

        if (!response.ok) {
            throw new Error(response.json().message);
        }

        return await response.json();
    } catch (error) {
        throw error;
    }
};

export const getGenres = async () => {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.TMDB_KEY}&language=en-US`
        );

        if (!response.ok) {
            throw new Error(response.json().message);
        }

        return await response.json();
    } catch (error) {
        throw error;
    }
};



export const getMovies = async () => {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1`);
        if (!response.ok) {
            throw new Error(response.json().message);
        }
        return await response.json();
    } catch (error) {
        throw error;
    }
};

export const getMovie = async (args) => {
    const [, idPart] = args.queryKey;
    const { id } = idPart;
    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.TMDB_KEY}`);
        if (!response.ok) {
            throw new Error(response.json().message);
        }
        return await response.json();
    } catch (error) {
        throw error;
    }
};


export const getMovieImages = async ({ queryKey }) => {
    const [, idPart] = queryKey;
    const { id } = idPart;
    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/images?api_key=${process.env.TMDB_KEY}`);
        if (!response.ok) {
            throw new Error(response.json().message);
        }
        return await response.json();
    } catch (error) {
        throw error;
    }
};


export const getMovieReviews = async (id) => {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.TMDB_KEY}`);
        if (!response.ok) {
            throw new Error(response.json().message);
        }
        const json = await response.json();
        return json.results;
    } catch (error) {
        throw error;
    }
};


export const getTopRatedMovies = async () => {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.TMDB_KEY}&language=en-US&page=1`);
        if (!response.ok) {
            throw new Error(response.json().message);
        }
        return await response.json();
    } catch (error) {
        throw error;
    }
};


export const getTrendingMovies = async () => {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.TMDB_KEY}`);
        if (!response.ok) {
            throw new Error(response.json().message);
        }
        return await response.json();
    } catch (error) {
        throw error;
    }
};


export const getNowPlayingMovies = async () => {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.TMDB_KEY}`);
        if (!response.ok) {
            throw new Error(response.json().message);
        }
        return await response.json();
    } catch (error) {
        throw error;
    }
};


export const getSimilarMovies = async (id) => {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.TMDB_KEY}`);
        if (!response.ok) {
            throw new Error(response.json().message);
        }
        return await response.json();
    } catch (error) {
        throw error;
    }
};


export const getAlternativeTitles = async (id) => {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/alternative_titles?api_key=${process.env.TMDB_KEY}`);
        if (!response.ok) {
            throw new Error('Failed to fetch alternative titles');
        }
        return await response.json();
    } catch (error) {
        throw error;
    }
};


export const getMoviesProviders = async (movieId) => {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/${movieId}/watch/providers?api_key=${process.env.TMDB_KEY}`
        );
        if (!response.ok) {
            throw new Error('Failed to fetch movie providers');
        }
        return await response.json();
    } catch (error) {
        throw error;
    }
};

export const getActorMovies = async (id) => {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${process.env.TMDB_KEY}`
        );
        if (!response.ok) {
            throw new Error('Failed to fetch actor movie credits');
        }
        return await response.json();
    } catch (error) {
        throw error;
    }
};


export const getMovieActors = async (id) => {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.TMDB_KEY}`);
        if (!response.ok) {
            throw new Error('Faile to fetch movie actors');
        }
        return await response.json();
    } catch (error) {
        throw error;
    }
};


export const searchActors = async (query) => {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/search/person?api_key=${process.env.TMDB_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
        );
        if (!response.ok) {
            throw new Error('Failed to search actors');
        }
        return await response.json();
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
        throw error;
    }
};


  export const getReleaseDates = async (id) => {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/${id}/release_dates?api_key=${process.env.TMDB_KEY}`
        );
        if (!response.ok) {
            throw new Error('Failed to fetch release dates');
        }
        return await response.json();
    } catch (error) {
        throw error;
    }
};


export const getMovieTrailers = async (id) => {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.TMDB_KEY}`
        );
        if (!response.ok) {
            throw new Error('Failed to fetch movie trailers');
        }
        return await response.json();
    } catch (error) {
        throw error;
    }
};

export const getMovieTranslations = async (id) => {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/${id}/translations?api_key=${process.env.TMDB_KEY}`
        );
        if (!response.ok) {
            throw new Error('Failed to fetch movie translations');
        }
        return await response.json();
    } catch (error) {
        throw error;
    }
};





  


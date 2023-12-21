// export const getMovies = () => {
//   return fetch(
//     `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1`
//   ).then((response) => {
//     if (!response.ok) {
//       throw new Error(response.json().message);
//     }
//     return response.json();
//   })
//   .catch((error) => {
//      throw error
//   });
// };
  
// export const getMovie = (args) => {
//   const [, idPart] = args.queryKey;
//   const { id } = idPart;
//   return fetch(
//     `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
//   ).then((response) => {
//     if (!response.ok) {
//       throw new Error(response.json().message);
//     }
//     return response.json();
//   })
//   .catch((error) => {
//     throw error
//  });
// };
  
//   export const getGenres = async () => {
//     return fetch(
//       "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
//         process.env.REACT_APP_TMDB_KEY +
//         "&language=en-US"
//     ).then( (response) => {
//       if (!response.ok) {
//         throw new Error(response.json().message);
//       }
//       return response.json();
//     })
//     .catch((error) => {
//       throw error
//    });
//   };

  
//   export const getMovieImages = ({ queryKey }) => {
//     const [, idPart] = queryKey;
//     const { id } = idPart;
//     return fetch(
//       `https://api.themoviedb.org/3/movie/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}`
//     ).then( (response) => {
//       if (!response.ok) {
//         throw new Error(response.json().message);
//       }
//       return response.json();
  
//     })
//     .catch((error) => {
//       throw error
//    });
//   };

//   export const getMovieReviews = (id) => {
//     return fetch(
//       `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.REACT_APP_TMDB_KEY}`
//     )
//       .then((res) => res.json())
//       .then((json) => {
        
//         return json.results;
//       });
//   };


//   export const getUpcomingMovies = () => {
//     return fetch(
//       `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
//     )
//       .then((res) => res.json())
//       .then((json) => ({ results: json.results }));
//   };

// //-------------------------------------

//   export const getTopRatedMovies = () => {
//     return fetch(
//       `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
//     ).then((response) => {
//       if (!response.ok) {
//         throw new Error(response.json().message);
//       }
//       return response.json();
//     })
//     .catch((error) => {
//       throw error;
//     });
//   };


//   export const getTrendingMovies = () => {
//     return fetch(
//       `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_TMDB_KEY}`
//     ).then((response) => {
//       if (!response.ok) {
//         throw new Error(response.json().message);
//       }
//       return response.json();
//     })
//     .catch((error) => {
//        throw error;
//     });
//   };

//   export const getNowPlayingMovies = () => {
//     return fetch(
//       `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_KEY}`
//     ).then((response) => {
//       if (!response.ok) {
//         throw new Error(response.json().message);
//       }
//       return response.json();
//     })
//     .catch((error) => {
//        throw error;
//     });
//   };

//   export const getSimilarMovies = (id) => {
//     return fetch(
//       `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.REACT_APP_TMDB_KEY}`
//     ).then((response) => {
//       if (!response.ok) {
//         throw new Error(response.json().message);
//       }
//       return response.json();
//     })
//     .catch((error) => {
//        throw error;
//     });
//   };

//   export const getAlternativeTitles = (id) => {
//     return fetch(
//       `https://api.themoviedb.org/3/movie/${id}/alternative_titles?api_key=${process.env.REACT_APP_TMDB_KEY}`
//     )
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('Failed to fetch alternative titles');
//       }
//       return response.json();
//     })
//     .catch(error => {
//       throw error;
//     });
//   };

//   export const getActorMovies = (id) => {
//     return fetch(
//       `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${process.env.REACT_APP_TMDB_KEY}`
//     )
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('Failed to fetch actor movie credits');
//       }
//       return response.json();
//     })
//     .then((data) => {
//       return data;
//     })
//     .catch((error) => {
//       throw error;
//     });
//   };

//   export const getMovieActors = (id) => {
//     return fetch(
//       `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_TMDB_KEY}`
//     ).then((response) => {
//       if (!response.ok) {
//         throw new Error('Faile to fetch movie actors');
//       }
//       return response.json();
//     })
//     .catch((error) => {
//       throw error;
//     });
//   };


//   export const searchActors = (query) => {
//     return fetch(
//       `https://api.themoviedb.org/3/search/person?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
//     )
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('Failed to fetch actors');
//       }
//       return response.json();
//     })
//     .catch(error => {
//       throw error;
//     });
//   };
  

  export const login = async (username, password) => {
    const response = await fetch('http://localhost:8080/api/users', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    });
    return response.json();
};

export const signup = async (username, password) => {
    const response = await fetch('http://localhost:8080/api/users?action=register', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    });
    return response.json();
};


export const getMovies = async () => {
  const response = await fetch(
    'http://localhost:8080/api/movies/tmdb/discover', {
    headers: {
      'Authorization': window.localStorage.getItem("token")
    },
    method: 'get'
  }
  )
  return response.json();
};

export const getMovie = async ({ queryKey }) => {
  const [, idPart] = queryKey;
  const  { id } = idPart;
  const response = await fetch(
    `http://localhost:8080/api/movies/tmdb/movie/${id}`, {
    headers: {
      'Authorization': window.localStorage.getItem('token')
    },
    method: 'get'
  }
  )
  return response.json();
};

export const getGenres = async () => {
  const response = await fetch(
    'http://localhost:8080/api/movies/tmdb/genre', {
    headers: {
      'Authorization': window.localStorage.getItem("token")
    },
    method: 'get'
  }
  )
  return response.json();
};

export const getMovieImages = async ({queryKey}) => {
  const [, idPart] = queryKey;
  const  { id } = idPart;
  const response = await fetch(
    `http://localhost:8080/api/movies/tmdb/movie/${id}/images`, {
    headers: {
      'Authorization': window.localStorage.getItem("token")
    },
    method: 'get'
  }
  )
  return response.json();
};

export const getMovieReviews = async (id) => {
  const response = await fetch(
    `http://localhost:8080/api/movies/tmdb/movie/${id}/reviews`, {
    headers: {
      'Authorization': window.localStorage.getItem("token")
    },
    method: 'get'
  }
  )
  return response.json();
};

export const getUpcomingMovies = async () => {
  const response = await fetch(
    'http://localhost:8080/api/movies/tmdb/upcoming', {
    headers: {
      'Authorization': window.localStorage.getItem("token")
    },
    method: 'get'
  }
  )
  return response.json();
};

export const getTopRatedMovies = async () => {
  const response = await fetch(
    'http://localhost:8080/api/movies/tmdb/toprated', {
    headers: {
      'Authorization': window.localStorage.getItem("token")
    },
    method: 'get'
  }
  )
  return response.json();
};

export const getTrendingMovies = async () => {
  const response = await fetch(
    'http://localhost:8080/api/movies/tmdb/trending', {
    headers: {
      'Authorization': window.localStorage.getItem("token")
    },
    method: 'get'
  }
  )
  return response.json();
};


export const getNowPlayingMovies = async (page) => {
  const response = await fetch(
    'http://localhost:8080/api/movies/tmdb/nowplaying', {
    headers: {
      'Authorization': window.localStorage.getItem("token")
    },
    method: 'get'
  }
  )
  return response.json();
};



export const getMovieActors = async (id) => {
  const response = await fetch(
    `http://localhost:8080/api/movies/tmdb/movie/${id}/credits`, {
    headers: {
      'Authorization': window.localStorage.getItem("token")
    },
    method: 'get'
  }
  )
  return response.json();
};

export const getSimilarMovies = async (id) => {
  const response = await fetch(
    `http://localhost:8080/api/movies/tmdb/movie/${id}/similar`, {
    headers: {
      'Authorization': window.localStorage.getItem("token")
    },
    method: 'get'
  }
  )
  return response.json();
};

export const getActorMovies = async (actorId) => {
  const response = await fetch(
    `http://localhost:8080/api/movies/tmdb/person/${actorId}/moviecredits`, {
    headers: {
      'Authorization': window.localStorage.getItem("token")
    },
    method: 'get'
  }
  )
  return response.json();
};


export const searchActors = async (query) => {
  const response = await fetch(`http://localhost:8080/api/movies/tmdb/person?query=${query}`, {
      headers: {
          'Authorization': window.localStorage.getItem("token")
      },
      method: 'get',
  });
  return response.json();
};

    export const getAlternativeTitles = async (id) => {
      const response = await fetch (`http://localhost:8080/api/movies/tmdb/movie/${id}/alternativetitles`,{
        headers: {
          'Authorization': window.localStorage.getItem("token")
        },
        method: 'get',
      })
      return response.json();
    };


    export const getMoviesProviders = async (movieId) => {
      const response = await fetch (`http://localhost:8080/api/movies/tmdb/movie/${movieId}/getMoviesProviders`,{
        headers: {
          'Authorization': window.localStorage.getItem("token")
        },
        method: 'get',
      })
      return response.json();
    };


    export const getReleaseDates = async (id) => {
      const response = await fetch (`http://localhost:8080/api/movies/tmdb/movie/${id}/releaseDates`,{
        headers: {
          'Authorization': window.localStorage.getItem("token")
        },
        method: 'get',
      })
      return response.json();
    };



    export const getMovieTrailers = async (id) => {
      const response = await fetch (`http://localhost:8080/api/movies/tmdb/movie/${id}/movieTrailers`,{
        headers: {
          'Authorization': window.localStorage.getItem("token")
        },
        method: 'get',
      })
      return response.json();
    };


    export const getMovieTranslations = async (id) => {
      const response = await fetch (`http://localhost:8080/api/movies/tmdb/movie/${id}/movieTranslations`,{
        headers: {
          'Authorization': window.localStorage.getItem("token")
        },
        method: 'get',
      })
      return response.json();
    };


   

    


   

    

    
  













import React, { useState } from "react";
import Header from "../headerMovieList";
import FilterCard from "../filterMoviesCard";
import MovieList from "../movieList";
import Grid from "@mui/material/Grid";

import Pagination from '@mui/material/Pagination'; 



function MovieListPageTemplate({ movies, title, action }) {
  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const genreId = Number(genreFilter);
  const [ratingFilter, setRatingFilter] = useState("")
  const [sortOrder, setSortOrder] = useState("");

  
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 11;


console.log(movies);

  let displayedMovies = movies
    .filter((m) => {
      return m.title.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
    .filter((m) => {
      return genreId > 0 ? m.genre_ids.includes(genreId) : true;
    })

    .filter((m) => {
      return ratingFilter ? parseFloat(m.vote_average) >= parseFloat(ratingFilter) : true;
    })


    .sort((a, b) => sortOrder === "newest" ? (b.release_date > a.release_date ? 1 : -1) : 0);

  const indexOfLastMovie = currentPage * itemsPerPage;
  const indexOfFirstMovie = indexOfLastMovie - itemsPerPage;
  const currentMovies = displayedMovies.slice(indexOfFirstMovie, indexOfLastMovie);

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else if (type === "genre") setGenreFilter(value);
    else if (type === "rating") setRatingFilter(value);
    };

  const handleSortChange = (order) => {
    setSortOrder(order);
  };

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const pageCount = Math.ceil(displayedMovies.length / itemsPerPage);



  return (
    <Grid container sx={{ padding: '20px' }}>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      <Grid item container spacing={5}>
        <Grid key="find" item xs={12} sm={6} md={4} lg={3} xl={2}>
          <FilterCard
            onUserInput={handleChange}
            titleFilter={nameFilter}
            genreFilter={genreFilter}
            ratingFilter={ratingFilter}
            onSortChange={handleSortChange}
          />
        </Grid>
        <MovieList action={action} movies={currentMovies}></MovieList>
      </Grid>
      <Grid item xs={12}>
        <Pagination 
          count={pageCount} 
          page={currentPage} 
          onChange={handlePageChange} 
          color="primary"
        />
      </Grid>

    </Grid>
  );
}
export default MovieListPageTemplate;


import React     from 'react';
import MovieName from './MovieName';

const MovieContainer = props => {
  const renderMovieList = props.movies.filter(movie => props.movieList.includes(movie.url));

    return (
      <ol>
        {renderMovieList.map(movie => <MovieName movie={movie}/>)}
      </ol>
    )

};

export default MovieContainer;
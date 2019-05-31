import React from 'react';
import MovieDetails from './MovieDetails'
const MovieName = props => {
  return (
    <div>
    <li>{ props.movie.title }</li>
      <ul><MovieDetails movie={props} /></ul>
    </div>
  );};

export default MovieName;
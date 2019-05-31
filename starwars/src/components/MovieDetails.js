import React from 'react';

const MovieDetails = props => {
  return (
    <div>
      <li>{`Episode: ${props.movie.movie.episode_id}`}</li>
      <li>{`Release Date ${props.movie.movie.release_date}`}</li>
    </div>
  )
}

export default MovieDetails;
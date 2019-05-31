import React  from 'react';
import styled from 'styled-components';

const ListItem = styled.div`
  font-size: 1.6rem;
  margin: 1rem;
  color: #fbf7f5;
`;

const MovieDetails = props => {
  const { movie } = props.movie;
  return (
    <div>
      <ListItem>{ `Episode: ${ movie.episode_id }` }</ListItem>
      <ListItem>{ `Release Date ${ movie.release_date }` }</ListItem>
    </div>
  );
};

export default MovieDetails;
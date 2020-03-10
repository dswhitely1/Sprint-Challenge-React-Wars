import React        from 'react';
import styled       from 'styled-components';
import MovieDetails from './MovieDetails';

const ListItem = styled.li`
  font-size: 2rem;
  color: #ffd700; 
  line-spacing: 1.25; 
`;

const UnOrderList = styled.ul`
  list-style: circle inside;
`;
const MovieName = props => {
  const { movie } = props;
  return (
    <div>
      <ListItem>{ movie.title }</ListItem>
      <UnOrderList><MovieDetails movie={ props }/></UnOrderList>
    </div>
  );
};

export default MovieName;
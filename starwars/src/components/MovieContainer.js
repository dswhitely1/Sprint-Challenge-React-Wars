import React  from 'react';
import styled from 'styled-components';

import MovieName from './MovieName';

const OrderList = styled.ol`
  list-style-type: upper-roman;
  list-style-position: inside;  
`;

const MovieContainer = props => {
  const { movies, movieList } = props;
  const renderMovieList = movies.filter(movie => movieList.includes(movie.url));

  return (
    <OrderList>
      { renderMovieList.map(movie => <MovieName movie={ movie }/>) }
    </OrderList>
  );

};

export default MovieContainer;
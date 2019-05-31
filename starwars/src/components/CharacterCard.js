import React          from 'react';
import styled         from 'styled-components';
import MovieContainer from './MovieContainer';

const Card = styled.div`
  width: 25%;
  background-color: #222222;
  margin: 1%;
  border-radius: 1rem;
  height: auto;
  line-spacing: 1.25;
  display: flex;
  justify-content: space-between;
  flex-flow: column nowrap;
`;

const CardTitle = styled.h2`
  font-size: 2rem;
  color: #ffd700;
  margin: 1rem;
`;

const CardContent = styled.p`
  font-size: 1.6rem;
  color: #fbf7f5;
  margin: 1rem;
  margin-bottom: 1rem;
`;

const CharacterCard = props => {
  const { name, height, birth_year } = props.character;
  return (
    <Card className={ 'character-card' }>
      <CardTitle>
        { `Name: ${ name }` }
      </CardTitle>
      <CardContent>{ `Height: ${ height }` }</CardContent>
      <CardContent>{ `Birth Year ${ birth_year }` }</CardContent>
      <CardContent>{`Movies`}</CardContent>
      <MovieContainer movieList={props.character.films} movies={props.movies}/>
    </Card>
  );
};

export default CharacterCard;
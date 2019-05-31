import React         from 'react';
import styled        from 'styled-components';

import './StarWars.css';
import CharacterCard from './CharacterCard';

const Wrapper = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
`;

const CharacterContainer = props => {
  const { characters, movies, showMovies } = props;
  return (
    <Wrapper>
      { characters.map((character, i) => <CharacterCard character={ character } key={ i } movies={ movies } showMovies={showMovies}/>) }
    </Wrapper>
  );
};

export default CharacterContainer;
import React from 'react';
import {
  Container,
  Segment
} from 'semantic-ui-react';

import { useAxios } from '../hooks/useAxios';

const MainContent = ( {characters} ) => {
  const [data, errors, loading] = useAxios( 'https://swapi.co/api/films/' );
  if (loading || data === []) {
    return <h3>Loading</h3>;
  }
  return (
    <Container>
      <Segment.Group>
        {characters && characters.data && characters.data.results.map( character => {
          return (
            <>
              <Segment>
                              <h1>{character.name}</h1>
  <span>{`  Born in year: ${character.birth_year}, With ${character.hair_color !== 'n/a' || character.hair_color !== 'none' ? character.hair_color : `no`} hair and ${character.eye_color} eyes`}</span>
              </Segment>
              <Segment.Group>
                {character.films.map( film => {
                  const filmId = data && data.data && data.data.results.filter( url => url.url === film )[0];
                  return (
                    <Segment>{filmId && `${filmId.title}`}</Segment>
                  );
                } )}
              </Segment.Group>
            </>
          );
        } )}
      </Segment.Group>
    </Container>
  );
};

export default MainContent;
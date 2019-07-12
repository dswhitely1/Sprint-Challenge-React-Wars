import React from 'react';
import {
  Container,
  Segment, Button
} from 'semantic-ui-react';

import { useAxios } from '../hooks/useAxios';
import {kebabCase, romanNum} from '../utils/helpers';

const MainContent = ( {characters} ) => {
  const [data, errors, loading] = useAxios( 'https://swapi.co/api/films/' );
  if (loading || data === []) {
    return <h3>Loading</h3>;
  }
  console.log(data);
  return (
    <Container>
      <Segment.Group>
        {characters && characters.data && characters.data.results.map( character => {
          return (
            <>
              <Segment>
                <h1>{character.name}</h1>
                <span>{`  Born in year: ${character.birth_year}, With ${character.hair_color !== 'n/a' || character.hair_color !== 'none' ? character.hair_color : `no`} hair and ${character.eye_color} eyes.  More information, click the button to the right!  `}</span>
                <Button primary as="a" href={`https://www.starwars.com/databank/${kebabCase(character.name)}`}>More Information</Button>
              </Segment>
              <Segment.Group>
                {character.films.map( (film,i) => {
                  const filmId = data && data.data && data.data.results.filter( url => url.url === film )[0];
                  return (
                    <Segment key={i}>
                      <>
                      {filmId && `${filmId.title}   `}
                        {filmId && <Button color="yellow" as="a" href={`https://www.starwars.com/films/star-wars-episode-${romanNum(filmId.episode_id)}-${kebabCase(filmId.title)}`}>Click Here</Button>}
                      </>
                    </Segment>
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
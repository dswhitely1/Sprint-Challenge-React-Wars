import React from 'react';
import Loader from 'react-loader-spinner';
import {
  Button,
  Container,
  Segment, Header
} from 'semantic-ui-react';
import {ListingContainer} from '../styles/container';
import { useAxios } from '../hooks/useAxios';
import { LoaderContainer } from '../styles/container';
import {
  kebabCase,
  romanNum
} from '../utils/helpers';

const MainContent = ( {characters} ) => {
  const [data, errors, loading] = useAxios( 'https://swapi.co/api/films/' );
  if (loading || data === []) {
    return (
      <LoaderContainer>
        <Loader width={500} height={500} type='TailSpin' color="#EEDB00" />
      </LoaderContainer>);
  }
  console.log( data );
  return (
    <Container>
      <Segment.Group>
        {characters && characters.data && characters.data.results.map( character => {
          return (
            <>
              <Segment raised>
                <Header as='h1'>{character.name}</Header>
                <ListingContainer>
                <span>{`  Born in year: ${character.birth_year}, With ${character.hair_color !== 'n/a' || character.hair_color !== 'none' ? character.hair_color : `no`} hair and ${character.eye_color} eyes.  More information, click the button to the right!  `}</span>
                <Button primary
                        as="a"
                        href={`https://www.starwars.com/databank/${kebabCase( character.name )}`}>{`More Info on ${character.name}`}</Button>
                </ListingContainer>
              </Segment>
              <Segment.Group raised>
                {character.films.map( ( film, i ) => {
                  const filmId = data && data.data && data.data.results.filter( url => url.url === film )[0];
                  return (
                    <Segment key={i}>
                      <ListingContainer>
                        {filmId && `${filmId.title}   `}
                        {filmId && <Button color="yellow"
                                           as="a"
                                           href={`https://www.starwars.com/films/star-wars-episode-${romanNum( filmId.episode_id )}-${kebabCase( filmId.title )}`}>{`Episode ${romanNum(filmId.episode_id).toUpperCase()}`}</Button>}
                      </ListingContainer>
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
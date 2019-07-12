import React, {useEffect} from 'react';
import {Segment, Container} from 'semantic-ui-react';

import {useAxios} from '../hooks/useAxios';

const MainContent = ({characters}) => {
  const [data, errors, loading] = useAxios('https://swapi.co/api/films/');
    if (loading || data === []) {
      return <h3>Loading</h3>
    }
    return (
    <Container>
      <Segment.Group>
        {characters &&  characters.data && characters.data.results.map(character => {
          return (
            <>
              <Segment>
                <h1>{character.name}</h1>

              </Segment>
            <Segment.Group>
              {character.films.map(film => {
                const filmId = data && data.data && data.data.results.filter(url => url.url === film)[0];
                return (
                  <Segment>{filmId && `${filmId.title}`}</Segment>
                )
              })}
            </Segment.Group>
            </>
          )
        })}
      </Segment.Group>
    </Container>
    )
}

export default MainContent;
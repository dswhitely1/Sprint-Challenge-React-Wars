import React from 'react';
import {Menu, Container, Dropdown} from 'semantic-ui-react';

const Navigation = ({characters}) =>  {
  return (<Menu top inverted pointing size='large'>
    <Container>
      <Menu.Item as='a' active>Digital Solutions by Don</Menu.Item>
      <Menu.Item position='right'>
        <Dropdown item text='Characters'>
        <Dropdown.Menu>
          {characters && characters.data && characters.data.results.map(character=> <Dropdown.Item key={character.name}>{character.name}</Dropdown.Item>)}
        </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </Container>
  </Menu>)
}

export default Navigation
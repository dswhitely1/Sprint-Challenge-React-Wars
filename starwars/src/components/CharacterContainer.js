import React         from 'react';
import CharacterCard from './CharacterCard';

const CharacterContainer = props => ( props.characters.map(character => <CharacterCard character={ character }/>) );

export default CharacterContainer;
import React from 'react';

const CharacterCard = props => {
  const {name, height, birth_year} = props.character;
  return (
    <div>
      <h1>{name}</h1>
      <p>{height}</p>
      <p>{birth_year}</p>
    </div>
  );
};

export default CharacterCard;
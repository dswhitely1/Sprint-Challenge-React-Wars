import React  from 'react';
import styled from 'styled-components';

const Button = styled.div`
  margin: 1rem;
  font-size: 2rem;
  padding: 10px 20px;
  color: #222222;
  background-color: #ffd700;
  width: 13%;
  margin: 0 auto;
  border-radius: 1rem;
  cursor: pointer;
`;
const Pagination = props => {
  const { getCharacters, nextPage, prevPage } = props;
  return (
    <div>
      { prevPage !== null ? <Button className={ 'button' }
                                    onClick={ () => getCharacters(prevPage) }>Previous</Button> : null }
      { nextPage !== null ? <Button className={ 'button' }
                                    onClick={ () => getCharacters(nextPage) }>Next</Button> : null }
    </div>
  );
};

export default Pagination;
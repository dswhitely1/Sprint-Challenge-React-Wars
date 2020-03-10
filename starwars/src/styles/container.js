import styled from 'styled-components';
import image from '../sw-bg.jpg';
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: black;
`;

export const Background = styled.div`
  background-image: url(${image});
  background-position: center center;
  background-size: cover;
`

export const ListingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`




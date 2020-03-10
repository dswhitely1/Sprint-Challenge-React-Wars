import React, {useState, useEffect} from 'react';
import Loader from 'react-loader-spinner'

import Navigation from './display/navigation/Navigation';

import {LoaderContainer, Background} from './styles/container';
import {useAxios} from './hooks/useAxios';
import MainContent from './views/MainContent';

const App = () => {
  const [data, errors, loading] = useAxios('https://swapi.co/api/people/');
  const [isLoading, setIsLoading] = useState('true');
  console.log(data);

  useEffect(()=> {
    setIsLoading(loading);
  },[loading]);

  if (isLoading || data === []) {
    return (
      <LoaderContainer>
        <Loader width={500} height={500} type='TailSpin' color="#EEDB00" />
      </LoaderContainer>
    )
  }
  return (
    <Background>
    <Navigation characters={data}/>
    <MainContent characters={data}/>
    </Background>
  )
};

export default App;
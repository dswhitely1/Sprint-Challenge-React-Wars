import React, {useState, useEffect} from 'react';


import Navigation from './display/navigation/Navigation';

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
    return <h3>Loading</h3>
  }
  return (
    <>
    <Navigation characters={data}/>
    <MainContent characters={data}/>
    </>
  )
};

export default App;
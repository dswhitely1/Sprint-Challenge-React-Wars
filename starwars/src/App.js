import React, {useState, useEffect} from 'react';


import Navigation from './display/navigation/Navigation';

import {useAxios} from './hooks/useAxios';

const App = () => {
  const [data, errors, loading] = useAxios('https://swapi.co/api/people/');
  const [isLoading, setIsLoading] = useState('true');
  console.log(data);

  useEffect(()=> {
    setIsLoading(loading);
  },[loading]);

  return (
    <Navigation characters={data}/>
  )
};

export default App;
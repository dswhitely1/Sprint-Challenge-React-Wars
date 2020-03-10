import axios from 'axios';
import {
  useEffect,
  useState
} from 'react';

export const useAxios = url => {
  const [starWarsApiUrl, setStarWarsApiUrl]   = useState( url );
  const [starWarsData, setStarWarsData]       = useState( [] );
  const [starWarsLoading, setStarWarsLoading] = useState( 'false' );
  const [starWarsErrors, setStarWarsErrors]   = useState( null );

  useEffect( () => {
    setStarWarsLoading( true );
    axios.get( starWarsApiUrl )
         .then( data => {
           setStarWarsLoading( false );
           setStarWarsData( data );
         } )
         .catch( error => {
           setStarWarsLoading( false );
           setStarWarsErrors( error );
         } );
  }, [starWarsApiUrl] );

  return [starWarsData, starWarsErrors, starWarsLoading];
};

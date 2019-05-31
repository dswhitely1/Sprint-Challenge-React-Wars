import React, { Component } from 'react';
import './App.css';
import CharacterContainer   from './components/CharacterContainer';

class App extends Component {
  constructor () {
    super();
    this.state = {
      starwarsChars : [],
      starwarsMovies: [],
      toggleMovies  : false,
    };
  }

  componentDidMount () {
    this.getCharacters('https://swapi.co/api/people/');
    this.getMovies(`https://swapi.co/api/films/`);
  }

  onHandleToggle = () => this.setState({toggleMovies: !this.state.toggleMovies})

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  getMovies = URL => {
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsMovies: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render () {

    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <CharacterContainer characters={ this.state.starwarsChars } movies={ this.state.starwarsMovies }/>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import styled from 'styled-components';

import './App.css';
import CharacterContainer   from './components/CharacterContainer';

const Button = styled.div`
  font-size: 2rem;
  padding: 10px 20px;
  color: #222222;
  background-color: #ffd700;
  width: 13%;
  margin: 0 auto;
  border-radius: 1rem;
  cursor: pointer;
`


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
        <Button className={'button'} onClick={this.onHandleToggle}>
          Movies {this.state.toggleMovies ? `On` : `Off`}
        </Button>
        <CharacterContainer characters={ this.state.starwarsChars } movies={ this.state.starwarsMovies } showMovies={this.state.toggleMovies}/>
      </div>
    );
  }
}

export default App;

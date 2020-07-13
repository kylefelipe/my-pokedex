import React, { Component } from 'react';
import './App.css';
import Pokemon from './component/Pokemon';
import data from './data';
import Pokecard from './component/Pokecard';

class App extends Component {
  constructor(props) {
    super (props);
    this.state = {filter: "fire"};
    this.state = { pokeIndex: 0 };
  }

  setFilterValue = event => {
    this.setState({
      filter: event.target.value
    })
  }
  
  goToNext = event => {
    const pokeQt = data.length;
    this.setState((state, _) => ({
      pokeIndex: state.pokeIndex === pokeQt - 1? 0 : state.pokeIndex + 1
    }))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Kyle's Pokedex!
          </p>
          <p>
            1st Gen!
          </p>
        </header>
        <section className="pokecards-container">
          <Pokecard {...data[this.state.pokeIndex]}/>
        </section>
        <button 
          className="next-pokemon"
          key="next-pokemon"
          onClick={this.goToNext} >
          Next Pokemon
        </button>
        <button key="fire-button">Fire</button>
        <button key="psychic-button">Psychic</button>
      </div>
    );
  }
}

export default App;

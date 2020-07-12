import React from 'react';
import './App.css';
import Pokemon from './Pokemon';
import data from './data';
import Pokecard from './Pokecard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Kyle's Pokedex!
        </p>
        <p>
          1st Gen!
        </p>
        <Pokecard {...data[0]} />
        {data.map(pokemon => <Pokemon {...pokemon}/>)}
      </header>
    </div>
  );
}

export default App;

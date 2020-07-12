import React from 'react';
import './App.css';
import Pokemon from './component/Pokemon';
import data from './data';
import Pokecard from './component/Pokecard';

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
      </header>
      <section className="pokecards-container">
        {data.map(pokemon => <Pokecard {...pokemon}/>)}
      </section>
    </div>
  );
}

export default App;

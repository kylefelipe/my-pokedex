import React, { Component } from 'react';
import './App.css';
import data from './data';
import Pokecard from './component/Pokecard';


class MyFilterrButton extends Component {
  render() {
    return <button onClick={() => {
      this.props.handleClick(this.props.label)
    }
      }>{this.props.label}</button>
  }
}

class MyNextButton extends Component {
  render() {
    return <button onClick={() => {
      this.props.handleClick();
    }
      }>{this.props.label}</button>
  }
}

class App extends Component {
  constructor(props) {
    super (props);
    this.state = {
      filter: "Fire",  
      pokeIndex: 0
    };
    // this.state = { pokeIndex: 0 };
  }

  setFilterValue = (labelText) => {
    this.setState({
      filter: labelText
    })
  }
  
  goToNext = () => {
    const pokeQt = data.filter(({ type }) => type === this.state.filter).length;
    this.setState((state) => ({
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
          <Pokecard {...data
          .filter(({ type }) => type === this.state.filter)[this.state.pokeIndex]}/>
        </section>
        <MyNextButton 
          className="next-pokemon"
          key="next-pokemon"
          handleClick={ this.goToNext }
          label="Next Pokemon" />
        <MyFilterrButton
          handleClick={this.setFilterValue}
          key="fire-button" label='Fire'/>
        <MyFilterrButton
        handleClick={this.setFilterValue}
        key="psychic-button" label='Psychic'/>
      </div>
    );
  }
}

export default App;

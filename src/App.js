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
      }
      disabled={this.props.disabled()}>{this.props.label}</button>
  }
}

class App extends Component {
  constructor(props) {
    super (props);
    this.state = {
      filter: "All",
      pokeIndex: 0,
    };
  }

  setFilterValue = (labelText) => {
    this.setState({
      pokeQt: data.filter(({ type }) => this.state.filter === 'All' ? true : this.state.filter === type).length,
      filter: labelText,
      pokeIndex: 0,
    })
  }
  
  goToNext = () => {
    const pokeQt = data.filter(({ type }) => this.state.filter === 'All' ? true : this.state.filter === type).length;
    this.setState((state) => ({
      pokeIndex: state.pokeIndex === pokeQt - 1? 0 : state.pokeIndex + 1
    }))
    this.getTypes();
  }

  disableNext = () => {
    return data.filter(({ type }) => 
      this.state.filter === 'All' ? true : this.state.filter === type).length > 1 ? false : true
  }

  getTypes = () => {
    let pokeTypes = data.map(({ type }) => type);
    pokeTypes = ['All', ...new Set(pokeTypes)]
    return pokeTypes; 
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
          .filter(({ type }) => this.state.filter === 'All' ? true : this.state.filter === type)[this.state.pokeIndex]}/>
        </section>
        <section className='poke-filters'>
          <span>Filters</span>
          {this.getTypes().map((type, index) => <MyFilterrButton
              handleClick={this.setFilterValue}
              key={index}
              label={type} />
          )}
        </section>
        <MyNextButton 
          className="next-pokemon"
          key="next-pokemon"
          handleClick={ this.goToNext }
          disabled={ this.disableNext }
          label="Next Pokemon" />
      </div>
    );
  }
}

export default App;

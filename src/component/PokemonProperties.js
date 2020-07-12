import React from 'react';

class PokemonProperties extends React.Component {
  render() {
    return (
      <ul className="poke-properties">
        <li key="name">
          <em>Name: </em>
          <span>{this.props.name}</span>
        </li>
        <li key="type">
          <em>Type: </em>
          <span>{this.props.type}</span>
        </li>
        <li key="average-weigth">
          <em>{this
            .props
            .averageWeight
            .measurementUnit
            .toUpperCase()}: </em>
          <span>{this.props.averageWeight.value}</span>
        </li>
      </ul>
    )
  }
}

export default PokemonProperties;

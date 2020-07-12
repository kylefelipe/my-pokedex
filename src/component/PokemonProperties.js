import React from 'react';

class PokemonProperties extends React.Component {
  render() {
    return (
      <section className="poke-properties">
        <section className="poke-number">
          <em>N.º: </em>
          <span> {this.props.id}</span>
        </section>
        <section key="type">
          <em>Pokémon </em>
          <span>{this.props.type}</span>
        </section>
        <section key="average-weigth">
          <em>peso </em>
          <span>{this.props.averageWeight.value}</span>
          <span>{this
          .props
          .averageWeight
          .measurementUnit}</span>
        </section>
      </section>
    )
  }
}

export default PokemonProperties;

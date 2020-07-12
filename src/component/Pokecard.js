import React from 'react';
import ImagePokemon from './ImagePokemon';
import PokemonProperties from "./PokemonProperties";
import PokemonAttacks from "./PokemonAttacks"

class Card extends React.Component {
  render() {
    const { id, name, type, averageWeight, image, moreInfo } = this.props;
    const properties = {name, type, averageWeight, id};
    return (
      <div className="card" key={id}>
        <div className="card__body">
          <section className="main-info">
            <div className="poke-name">{this.props.name}</div>
          </section>
          <ImagePokemon source={this.props.image} name={this.props.name}/>
          <PokemonProperties {...properties} />
          <PokemonAttacks />
        </div>
      </div>
    )
  }
}


export default Card;
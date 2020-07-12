import React from 'react';
import ImagePokemon from './ImagePokemon';
import PokemonProperties from "./PokemonProperties";


class Card extends React.Component {
  render() {
    const { id, name, type, averageWeight, image, moreInfo } = this.props;
    const properties = {name, type, averageWeight, id};
    return (
      <div className="card" key={id}>
        <div className="poke-name">{this.props.name}</div>
        <ImagePokemon source={this.props.image} name={this.props.name}/>
        <PokemonProperties {...properties} />
        
      </div>
    )
  }
}

export default Card;
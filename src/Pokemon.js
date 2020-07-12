import React from 'react';
import ImagePokemon from './ImagePokemon';
import PokemonProperties from "./PokemonProperties";

class Pokemon extends React.Component {
  render() {
    const { id, name, type, averageWeight, image, moreInfo } = this.props;
    const properties = {name, type, averageWeight};
    
    return (
      <div className="poke-container" key={id}>
        <div className="pokemon">
          <PokemonProperties {...properties} />
          <ImagePokemon source={image} name={name} />
        </div>
        <a className='more-info' target="_blank" href={moreInfo}>More Info</a>
      </div>
    );
  }
}

export default Pokemon;
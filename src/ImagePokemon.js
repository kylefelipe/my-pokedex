import React from 'react';

class ImagemPokemon extends React.Component {
  render() {
    return <div className="pokecard-image">
      <img src={this.props.source} alt={`${this.props.name}'s Gif`}/>
    </div>
  }
}

export default ImagemPokemon;

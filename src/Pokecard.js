import React from 'react';
import ImagePokemon from './ImagePokemon';


class Card extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="poke-name">{this.props.name}</div>
        <ImagePokemon source={this.props.image} name={this.props.name}/>

      </div>
    )
  }
}

export default Card;
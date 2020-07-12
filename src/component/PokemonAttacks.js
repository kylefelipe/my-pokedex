import React from "react";


class PokemonAttacks extends React.Component {
  render() {
    return (
      <div className="poke-attacks">
        <div className="attack">
          <div className="energy"> Energy </div>
          <div className="attack-name"> Attack Name </div>
          <div className="damage"> Damage </div>
        </div>
      </div>
    )
  }
}

export default PokemonAttacks;
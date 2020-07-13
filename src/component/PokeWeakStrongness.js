import React from 'react';

class PokeWeakStrongness extends React.Component {
  render() {
    return (
      <section className="poke-weakstrong">
        <div className="weakness-container">
          <span>Weakness: </span>
          <span className="weakness"> Weak</span>
        </div>
        <span>"|"</span>
        <div className="strongness-container">
          <span>Strongness: </span>
          <span className="strongness"> strongness</span>
        </div>
      </section>
    )
  }
}

export default PokeWeakStrongness;
import React, { Component } from 'react'
import './Pokedex.css'
import Pokecard from './Pokecard'

class Pokedex extends Component {
  render() {
    let handResult
    if (this.props.isWinner) {
      handResult = <h1 className="Pokedex-winner">Winner!</h1>
    } else {
      handResult = <h1 className="Pokedex-loser">Loser!</h1>
    }
    if (this.props.isTie) handResult = <h1 className="Pokedex-tie">It's a tie!</h1>
    return (
      <div className="Pokedex">
        {handResult}
        <h4>Total Experience: {this.props.exp}</h4>
        <div className="Pokedex-cards">
          {this.props.pokemon.map(p => (
            <Pokecard id={p.id} name={p.name} type={p.type} exp={p.base_experience} key={p.id} />
          ))}
        </div>
      </div>
    )
  }
}

export default Pokedex

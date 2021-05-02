import React, { Component } from 'react';
import './PokemonItem.css';

class PokemonItem extends Component {
  render() {
    const { pokemon } = this.props.pokemon;

    return (
      <li className="PokemonItem">
        <h2>{pokemon.pokemon}</h2>
        <p className="type-1">{pokemon.type_1}</p>
        <p className="type-2">{pokemon.type_2}</p>

        <img
          src={pokemon.url_image}
          alt={pokemon.pokemon}
        />
      </li>
    );
  }
}

export default PokemonItem;
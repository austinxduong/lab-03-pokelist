import React, { Component } from 'react';
import './PokemonList.css';
import PokemonItem from './PokemonItem';

class PokemonList extends Component {
  render() {
    const pokemon = this.props.pokemon;

    return (
      <ul className="PokemonList">
        {pokemon.map(eachPokemon => {
          return <PokemonItem key={eachPokemon._id} pokemon={eachPokemon} />;
        })}
      </ul>
    );
  }
}

export default PokemonList;
import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import request from 'superagent';
import PokemonSearch from '../pokemon/PokemonSearch';
import PokemonList from '../pokemon/PokemonList';
import Paging from './Paging';

const POKEMON_API_URL = 'https://pokedex-alchemy.herokuapp.com/api/pokedex';



class App extends Component {

  state = {
    pokemon: [],
    search: '',
    page: 1

  }

  componentDidMount() {
    this.fetchPokemon();
  }

  async fetchPokemon() {
    const { search, page } = this.state;
    


    const response = await request
      .get(POKEMON_API_URL)
      .query({ pokemon: search })
      .query({ page: page });

    
    this.setState({
      pokemon: response.body.results,
    });
  }

  handleSearch = ({ search }) => {
    this.setState(
      { search: search, page: 1 },
      () => this.fetchPokemon()
    );
  }

  
  handlePrevPage = () => {
    this.setState(
      { page: Math.max(this.state.page - 1, 1) },
      () => this.fetchPokemon()
    );
  }


  handleNextPage = () => {
    this.setState(
      { page: Math.max(this.state.page + 1) },
      () => this.fetchPokemon()
    );
  }


  render() {

    const { pokemon, page } = this.state;


    return (
      <div className="App">

        <Header />

        <section className="search-options">
          <PokemonSearch onSearch={this.handleSearch} />

          <Paging
            page={page}
            onPrev={this.handlePrevPage}
            onNext={this.handleNextPage}
          />

        </section>
  
        <main>

          <PokemonList pokemon={pokemon} />


        </main>
      


      </div>
    );
  }

}

export default App;

import React from 'react';
import { NavLink } from 'react-router-dom';

import PokemonIndexItem from './pokemon_index_item';

class PokemonIndex extends React.Component {
  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    let loader = <div></div>;
    if (this.props.loading) {
      loader = (<div id="loading-pokeball-container">
        <div id="loading-pokeball"></div>
      </div>);
    }

    return (
      <ul className='index-ul'>
        {loader}
        <li><NavLink to='/newpokemon'>New Pokemon</NavLink></li>
        {this.props.pokemons.map(pokemon => (
          <PokemonIndexItem key={pokemon.id} pokemon={pokemon}/>
        ))}
      </ul>
    );
  }
}

export default PokemonIndex;

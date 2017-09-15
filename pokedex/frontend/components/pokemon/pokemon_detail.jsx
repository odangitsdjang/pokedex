import React from 'react';
import { NavLink, Route } from 'react-router-dom';

import ItemDetailContainer from '../items/item_detail_container';

class PokemonDetail extends React.Component {
  componentDidMount () {
    this.props.fetchPokemon(this.props.match.params.pokemon_id);
  }

  componentWillReceiveProps (newProps) {
    if (typeof this.props.pokemon === 'undefined' ||
        this.props.currentPokemonId === newProps.match.params.pokemon_id) {
      return;
    }
    // if (this.props.pokemons[newProps.match.params.pokemon_id - 1].attack) {
    //   // force update state.ui.pokeDisplay instead of fetching
    //   return this.props.updatePokeDisplay(newProps.match.params.pokemon_id);
    // }
    this.props.fetchPokemon(newProps.match.params.pokemon_id);
  }

  render () {
    const style = {
      width: '200px',
      height: '200px'
    };

    // if (!this.props.pokemons.map(pokemon=> pokemon.id)
    //         .includes(parseInt(this.props.match.params.pokemon_id))) {
    //   return this.props.history.push(`/`);
    // }

    if (this.props.pokemon) {
      const { pokemon, items } = this.props;
      return (
        <div className='detail'>
          {}
          <h1>{ pokemon.name }</h1>
          <img src={ pokemon.image_url } style={style}/>
          <h3>Attack: { pokemon.attack }</h3>
          <h3>Defense: { pokemon.defense }</h3>
          <h3>Move 1: {pokemon.moves[0]}</h3>
          <h3>Move 2: {pokemon.moves[1]}</h3>
          <h3>Items:</h3>
          <ul className='item-list'>
            {items.map(item =>
              <li key={item.id}>
                <NavLink to={`/pokemon/${pokemon.id}/item/${item.id}`}>
                  <img src={item.image_url}/><br/>
                  <div>
                    {item.name}<br/>
                  </div>
                </NavLink>
              </li>
            )}
          </ul>
          <Route path='/pokemon/:pokemon_id/item/:item_id'
                 component={ItemDetailContainer}/>
        </div>
      );
    } else {
      return <div>{}</div>;
    }
  }
}

export default PokemonDetail;

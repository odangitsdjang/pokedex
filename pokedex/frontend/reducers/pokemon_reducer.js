import {
  RECEIVE_POKEMONS,
  RECEIVE_POKEMON
} from '../actions/pokemon_actions';
import merge from 'lodash/merge';

const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = {};
  switch (action.type) {
    case RECEIVE_POKEMONS:
      return merge(action.pokemons, state);
    case RECEIVE_POKEMON:
      merge(newState, state);
      newState[action.pokemon.pokemon.id] = action.pokemon.pokemon;
      newState[action.pokemon.pokemon.id].item_ids =
        action.pokemon.items.map(item => item.id);
      return newState;
    default:
    return state;
  }
};

export default pokemonReducer;

import {
  RECEIVE_POKEMONS,
  RECEIVE_POKEMON
} from '../actions/pokemon_actions';
import _ from 'lodash';

const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = {};
  switch (action.type) {
    case RECEIVE_POKEMONS:
      return action.pokemons;
    case RECEIVE_POKEMON:
      _.merge(newState, state);
      newState[action.pokemon.pokemon.id] = action.pokemon.pokemon;
      newState[action.pokemon.pokemon.id].item_ids =
        action.pokemon.items.map(item => item.id);
      return newState;
    default:
    return state;
  }
};

export default pokemonReducer;

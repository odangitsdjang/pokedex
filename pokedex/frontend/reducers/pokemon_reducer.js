import {
  RECEIVE_POKEMON,
  RECEIVE_POKEMONS
} from '../actions/pokemon_actions';

const pokemonReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_POKEMONS:
      return action.pokemons;
    case RECEIVE_POKEMON:
      return action.pokemon;
    default:
    return state;
  }
};

export default pokemonReducer;

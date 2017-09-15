import {
  RECEIVE_POKEMONS,
  RECEIVE_POKEMON,
  START_LOADING_ALL_POKEMON,
  START_LOADING_SINGLE_POKEMON
} from '../actions/pokemon_actions';

const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case START_LOADING_ALL_POKEMON:
    case START_LOADING_SINGLE_POKEMON:
      return true;
    case RECEIVE_POKEMON:
    case RECEIVE_POKEMONS:
      return false;
    default:
      return false;
  }
};

export default loadingReducer;

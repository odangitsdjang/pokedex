import { RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/error_actions';
import {
  RECEIVE_POKEMONS,
  RECEIVE_POKEMON
} from '../actions/pokemon_actions';

const errorsReducer = (state=[], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ERRORS:
      return action.errors;
    default:
      return [];
  }
};

export default errorsReducer;

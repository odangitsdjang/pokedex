import { RECEIVE_POKEMON } from '../actions/pokemon_actions';
import { merge } from 'lodash';

const DEFAULT_STATE = {
  pokeDisplay: 0,
  errors: {},
  loading: {}
};

const uiReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case RECEIVE_POKEMON:
      return merge({}, state, {pokeDisplay: action.pokemon.pokemon.id});
    default:
      return state;
  }
};

export default uiReducer;

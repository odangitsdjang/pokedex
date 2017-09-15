import {
  RECEIVE_POKEMON
} from '../actions/pokemon_actions';

import merge from 'lodash/merge';

const DEFAULT_STATE = {
  pokeDisplay: 0
};

const uiReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case RECEIVE_POKEMON:
      return merge({}, state, {pokeDisplay: action.pokemon.pokemon.id});
    case 'UPDATE_POKEDISPLAY':
      return merge({}, state, { pokeDisplay: action.id});
    default:
      return state;
  }
};

export default uiReducer;

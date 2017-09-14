import { RECEIVE_POKEMON } from '../actions/pokemon_actions';

const itemsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_POKEMON:
      const newState = {};
      action.pokemon.items.forEach(item => {
        newState[item.id] = item;
      });
      return newState;
    default:
      return state;
  }
};

export default itemsReducer;

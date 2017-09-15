import { combineReducers } from 'redux';
import pokemonReducer from './pokemon_reducer';
import uiReducer from './ui_reducer';
import itemsReducer from './items_reducer';
import errorsReducer from './errors_reducer';
import loadingReducer from './loading_reducer';

const entityReducer = combineReducers({
  pokemon: pokemonReducer,
  items: itemsReducer,
});

export default combineReducers({
  entities: entityReducer,
  ui: uiReducer,
  errors: errorsReducer,
  loading: loadingReducer
});

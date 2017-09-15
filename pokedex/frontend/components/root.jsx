import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Route, NavLink } from 'react-router-dom';

import PokemonDetailContainer from './pokemon/pokemon_detail_container';
import PokemonFormContainer from './pokemon/pokemon_form_container';
import PokemonEditContainer from './pokemon/pokemon_edit_container';


import PokemonIndexContainer from './pokemon/pokemon_index_container';
const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <div>
        <div className='index'>
          <Route path='/' component={PokemonIndexContainer}/>
          <Route exact path='/pokemon/:pokemon_id' component={PokemonDetailContainer}/>
          <Route path='/pokemon/:pokemon_id/edit' component={PokemonEditContainer}/>

          <Route exact path='/newpokemon' component={PokemonFormContainer}/>
        </div>
      </div>
    </HashRouter>
  </Provider>
);

export default Root;

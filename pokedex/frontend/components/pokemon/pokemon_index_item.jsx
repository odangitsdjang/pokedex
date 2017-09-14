import React from 'react';
import { Link } from 'react-router-dom';

const style = {
  height: '50px',
  width: '50px'
};

const PokemonIndexItem = ({ pokemon }) => (
  <li>
    <Link to={`/pokemon/${pokemon.id}`}>
      {pokemon.name}<br/>
      <img src={pokemon.image_url} style={style}/>
    </Link>
  </li>
);

export default PokemonIndexItem;

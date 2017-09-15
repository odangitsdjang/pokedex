import { connect } from 'react-redux';
import { fetchPokemon } from '../../actions/pokemon_actions';
import PokemonDetail from './pokemon_detail';
import { selectAllPokemon, selectAllItems } from '../../reducers/selectors.js';

const mapStateToProps = (state, ownProps) => ({
  pokemon: state.entities.pokemon[state.ui.pokeDisplay],
  pokemons: selectAllPokemon(state),
  items: selectAllItems(state),
  loading: state.loading,
  currentPokemonId: ownProps.match.params.pokemon_id
});

const mapDispatchToProps = dispatch => ({
  fetchPokemon: (id) => dispatch(fetchPokemon(id)),
  updatePokeDisplay: (id) => dispatch({
    type: 'UPDATE_POKEDISPLAY',
    id
  })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetail);

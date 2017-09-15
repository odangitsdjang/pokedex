import { connect } from 'react-redux';
import { editPokemon } from '../../actions/pokemon_actions';
import PokemonEditForm from './pokemon_edit_form';

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors,
  currentPokemonId: ownProps.match.params.pokemon_id
});

const mapDispatchToProps = dispatch => ({
  editPokemon: (id, pokemon) => dispatch(editPokemon(id,pokemon))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonEditForm);

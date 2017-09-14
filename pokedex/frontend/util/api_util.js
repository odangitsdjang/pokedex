
export default class APIUtil {
  static fetchAllPokemon() {
    return $.ajax({
      url: "/api/pokemon"
    });
  }

  static fetchPokemon(id) {
    return $.ajax({
      url: `/api/pokemon/${id}`
    });
  }

}

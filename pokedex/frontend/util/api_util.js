
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

  static createPokemon(data) {
    return $.ajax({
      method: 'POST',
      url: '/api/pokemon',
      data
    });
  }
  static editPokemon(id, data) {
    return $.ajax({
      method: "PATCH",
      url: `/api/pokemon/${id}`,
      data
    });
  }
}

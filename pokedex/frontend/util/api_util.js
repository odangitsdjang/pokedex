
export default class APIUtil {
  static fetchAllPokemon() {
    return $.ajax({
      url: "/api/pokemon"
    });
  }

}

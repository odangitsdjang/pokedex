@pokemons.each do |pokemon|
  json.set! pokemon.id do
    json.extract! pokemon, :id, :name
    # looks one folder into asset but not any more than that
    if Rails.application.assets.find_asset("pokemon_snaps/#{pokemon.image_url}")
      json.image_url asset_path("pokemon_snaps/#{pokemon.image_url}")
    else
      json.image_url pokemon.image_url
    end
  end
end

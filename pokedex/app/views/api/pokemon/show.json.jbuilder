json.pokemon do
  json.extract! @pokemon, :id, :name, :attack, :defense
  json.image_url asset_path("pokemon_snaps/#{@pokemon.image_url}")
  json.extract! @pokemon, :moves, :poke_type
end

json.items do
  json.array! @pokemon.items do |item|
    json.extract! item, :id, :name, :pokemon_id, :price, :happiness
    json.image_url asset_path(item.image_url)
  end
end

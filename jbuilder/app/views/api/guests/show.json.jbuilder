json.partial! 'api/guests/guest', guest: @guest
json.gifts do
  # json.array! @guest.gifts do |gift|
  #   json.gift gift
  # end
  @guest.gifts.each do |gift|
    json.set! gift.id, gift
  end
end

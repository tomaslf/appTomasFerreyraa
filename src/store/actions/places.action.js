export const filtered_place = 'filtered_place'
export const selected_place = 'selected_place'

export const selectedPlace = id => ({
    type: selected_place,
    placeId: id,
})

export const filteredPlace = id => ({
    type: filtered_place,
    placeId: id,
})